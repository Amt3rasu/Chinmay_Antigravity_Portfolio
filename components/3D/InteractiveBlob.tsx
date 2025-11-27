import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import { createNoise2D } from 'simplex-noise';
import { gsap } from 'gsap';

const heightmapFragmentShader = `
  #include <common>
  uniform vec2 mousePos;
  uniform float mouseSize;
  uniform float viscosityConstant;
  uniform float heightCompensation;
  void main()	{
    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;
    vec4 heightmapValue = texture2D( heightmap, uv );
    vec4 north = texture2D( heightmap, mod(uv + vec2( 0.0, cellSize.y ),1.) );
    vec4 south = texture2D( heightmap, mod(uv + vec2( 0.0, - cellSize.y ),1.) );
    vec4 east = texture2D( heightmap, mod(uv + vec2( cellSize.x, 0.0 ),1.) );
    vec4 west = texture2D( heightmap, mod(uv + vec2( - cellSize.x, 0.0 ),1.) );
    float newHeight = ( ( north.x + south.x + east.x + west.x ) * 0.5 - heightmapValue.y ) * viscosityConstant;
    float mousePhase = clamp( length( ( uv - vec2( 0.5 ) ) * BOUNDS - vec2( mousePos.x, - mousePos.y ) ) * PI / mouseSize, 0.0, PI );
    newHeight += ( cos( mousePhase ) + 1.0 ) * 0.28;
    heightmapValue.y = heightmapValue.x;
    heightmapValue.x = newHeight;
    gl_FragColor = heightmapValue;
  }
`;

const vertexShader = `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

  vec4 grad4(float j, vec4 ip){
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;
    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    return p;
  }

  float snoise(vec4 v){
    const vec2  C = vec2( 0.138196601125010504, 0.309016994374947451);
    vec4 i  = floor(v + dot(v, C.yyyy) );
    vec4 x0 = v -   i + dot(i, C.xxxx);
    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );
    vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
    vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
    vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
    vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;
    i = mod(i, 289.0);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
            i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
          + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
          + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
          + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
    + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
  }

  uniform sampler2D uHeightMap;
  #define PHONG
  varying vec3 vViewPosition;
  #ifndef FLAT_SHADED
  varying vec3 vNormal;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>

  uniform float uTime;
  uniform float uFrequency;
  uniform float uAmplitude;

  vec3 noise(vec3 pos) {
    float n = uAmplitude*snoise(vec4(pos*uFrequency,uTime));
    n = 1.+n;
    return (normalize(pos) * n)/3.;
  }

  vec3 orthogonal(vec3 v) {
    return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
    : vec3(0.0, -v.z, v.y));
  }

  vec3 distorted(vec3 p) {
    return p + noise(p);
  }

  void main() {
    vec2 cellSize = vec2( 1.0 / WIDTH, 1.0 / WIDTH );
    #include <uv_vertex>
    #include <color_vertex>
    vec3 distortedPosition = distorted(position);
    vec3 tangent1 = orthogonal(normal);
    vec3 tangent2 = normalize(cross(normal, tangent1));
    vec3 nearby1 = position + tangent1 * 0.01;
    vec3 nearby2 = position + tangent2 * 0.01;
    vec3 distorted1 = distorted(nearby1);
    vec3 distorted2 = distorted(nearby2);
    vec3 nNormal = normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
    vec3 wavesNormal = vec3(
          ( texture2D( uHeightMap, uv + vec2( - cellSize.x, 0 ) ).x - texture2D( uHeightMap, uv + vec2( cellSize.x, 0 ) ).x ) * WIDTH / BOUNDS,
          ( texture2D( uHeightMap, uv + vec2( 0, - cellSize.y ) ).x - texture2D( uHeightMap, uv + vec2( 0, cellSize.y ) ).x ) * WIDTH / BOUNDS,
          1.0 );
    vec3 objectNormal = nNormal + wavesNormal;
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>
    #ifndef FLAT_SHADED
    vNormal = normalize( transformedNormal );
    #endif
    float wavesPosition = 1.+texture2D( uHeightMap, uv ).x * 0.02;
    vec3 transformed = distortedPosition*wavesPosition;
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <displacementmap_vertex>
    #include <project_vertex>
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>
    vViewPosition = - mvPosition.xyz;
    #include <worldpos_vertex>
    #include <envmap_vertex>
    #include <shadowmap_vertex>
    #include <fog_vertex>
  }
`;

const fragmentShaderSnippet = `
  vec3 color = vec3(1.0);
  vec4 diffuseColor = vec4( diffuse, opacity );
`;

export const InteractiveBlob: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const WIDTH = isMobile ? 64 : 128;
        const BOUNDS = 512;

        const initialState = { uFrequency: 0.7, uAmplitude: 0.7, speedTime: 1 };
        const mouseDownState = { uFrequency: 2, uAmplitude: 0.8, speedTime: 1 };
        const effectController = { mouseSize: 20, viscosity: 0.98 };

        let speedTime = initialState.speedTime;
        let time = 0;
        const clock = new THREE.Clock();
        const mouse = new THREE.Vector2(1e3, 1e3);
        let mouseMoved = false;
        const raycaster = new THREE.Raycaster();

        let renderer: THREE.WebGLRenderer | null = null;
        let scene: THREE.Scene | null = null;
        let camera: THREE.PerspectiveCamera | null = null;
        let lightBottom: THREE.DirectionalLight | null = null;
        let blob: THREE.Mesh | null = null;
        let shadowBlob: THREE.Mesh | null = null;
        let gpuCompute: GPUComputationRenderer | null = null;
        let heightmapVariable: any = null;
        const simplex = createNoise2D();

        let animationFrameId: number;

        const init = () => {
            if (!container) return;

            try {
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(renderer.domElement);

                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
                camera.position.set(0, 0, isMobile ? 10 : 7);

                const lightTop = new THREE.DirectionalLight(0xffffff, 0.65);
                lightTop.position.set(0, 500, 200);
                scene.add(lightTop);

                lightBottom = new THREE.DirectionalLight(0xffffff, 0.1);
                lightBottom.position.set(0, -500, 400);
                scene.add(lightBottom);

                const ambientLight = new THREE.AmbientLight(0xdedbd2, 0.8); // Timberwolf ambient
                scene.add(ambientLight);

                addBlob();
                animationFrameId = requestAnimationFrame(renderLoop);
            } catch (e) {
                console.error("InteractiveBlob init error:", e);
            }
        };

        const addBlob = () => {
            if (!renderer || !scene) return;
            const sphereGeom = new THREE.SphereGeometry(1, WIDTH - 1, WIDTH - 1);
            const phongShader = THREE.ShaderLib.phong;
            phongShader.uniforms.diffuse.value = new THREE.Color(0x4a3a4a); // Dark Purple-Grey for white text blend
            phongShader.uniforms.shininess.value = 100;

            const uniforms = THREE.UniformsUtils.merge([
                phongShader.uniforms,
                {
                    uTime: { value: 0 },
                    uFrequency: { value: initialState.uFrequency },
                    uAmplitude: { value: initialState.uAmplitude },
                    uHeightMap: { value: null },
                },
            ]);

            const blobMaterial = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertexShader,
                fragmentShader: phongShader.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', fragmentShaderSnippet),
                lights: true,
                defines: { WIDTH: WIDTH.toFixed(1), BOUNDS: BOUNDS.toFixed(1) },
            });

            blob = new THREE.Mesh(sphereGeom, blobMaterial);
            blob.rotation.y = THREE.MathUtils.degToRad(-45);
            scene.add(blob);

            const shadowSphereGeom = new THREE.SphereGeometry(1.4, 16, 16);
            shadowBlob = new THREE.Mesh(shadowSphereGeom, new THREE.MeshBasicMaterial({ color: 0xffffff, visible: false }));
            shadowBlob.rotation.y = THREE.MathUtils.degToRad(-45);
            scene.add(shadowBlob);

            gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);
            const heightmapTexture = gpuCompute.createTexture();

            fillTexture(heightmapTexture);

            heightmapVariable = gpuCompute.addVariable('heightmap', heightmapFragmentShader, heightmapTexture);
            gpuCompute.setVariableDependencies(heightmapVariable, [heightmapVariable]);

            heightmapVariable.material.uniforms.mousePos = { value: new THREE.Vector2(1e4, 1e4) };
            heightmapVariable.material.uniforms.mouseSize = { value: effectController.mouseSize };
            heightmapVariable.material.uniforms.viscosityConstant = { value: effectController.viscosity };
            heightmapVariable.material.uniforms.heightCompensation = { value: 0 };
            heightmapVariable.material.defines.BOUNDS = BOUNDS.toFixed(1);

            const error = gpuCompute.init();
            if (error !== null) { console.error(error); }
        };

        const fillTexture = (texture: THREE.DataTexture) => {
            const data = texture.image.data;
            for (let i = 0; i < data.length; i += 4) {
                const noiseVal = simplex(
                    (i / 4) % WIDTH,
                    Math.floor((i / 4) / WIDTH)
                ) * 10;
                data[i] = noiseVal;
                data[i + 1] = noiseVal;
                data[i + 2] = 0;
                data[i + 3] = 1;
            }
        };

        const renderLoop = () => {
            try {
                if (!renderer || !scene || !camera || !blob || !gpuCompute || !heightmapVariable || !shadowBlob) return;
                const delta = clock.getDelta() * speedTime;
                time += delta;

                if (!isMobile) {
                    const heightmapUniforms = heightmapVariable.material.uniforms;
                    if (mouseMoved) {
                        raycaster.setFromCamera(mouse, camera);
                        const intersects = raycaster.intersectObject(shadowBlob);
                        if (intersects.length > 0) {
                            const intersect = intersects[0];
                            if (intersect.uv) {
                                const uv = intersect.uv;
                                uv.x = 2 * (uv.x - 0.5) * 256;
                                uv.y = 2 * (0.5 - uv.y) * 256;
                                heightmapUniforms.mousePos.value.set(uv.x, uv.y);
                            }
                        } else {
                            heightmapUniforms.mousePos.value.set(1e4, 1e4);
                        }
                        gpuCompute.compute();
                        (blob.material as THREE.ShaderMaterial).uniforms.uHeightMap.value = gpuCompute.getCurrentRenderTarget(heightmapVariable).texture;
                    }
                }
                (blob.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(renderLoop);
            } catch (error) {
                console.error("InteractiveBlob animation error:", error);
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                if (mountRef.current) mountRef.current.style.display = 'none'; // Hide the component on error
            }
        };

        const onMove = (e: { clientX: number, clientY: number }) => {
            let t = (e.clientX / window.innerWidth) * 2 - 1;
            let i = (-e.clientY / window.innerHeight) * 2 + 1;
            t = Math.max(Math.min(t, 1), -1);
            i = Math.max(Math.min(i, 1), -1);

            if (lightBottom) gsap.to(lightBottom.position, { duration: 0.75, x: 1e3 * t - 600, y: 1e3 * i - 100 });
            if (blob && shadowBlob) {
                gsap.to([blob.rotation, shadowBlob.rotation], { duration: 0.25, y: THREE.MathUtils.degToRad(25 * t - 45) / 2 });
                gsap.to([blob.position, shadowBlob.position], { duration: 1, x: t / 2, y: i / 2, z: -i });
            }
            mouse.x = t;
            mouse.y = i;
            mouseMoved = true;
        };

        const onMouseMove = (e: MouseEvent) => onMove(e);
        const onTouchMove = (e: TouchEvent) => onMove(e.touches[0]);

        const onMouseDown = () => {
            if (!blob || !heightmapVariable) return;
            gsap.to((blob.material as THREE.ShaderMaterial).uniforms.uAmplitude, { duration: 2, value: mouseDownState.uAmplitude, ease: "elastic.out(1, 0.3)" });
            gsap.to((blob.material as THREE.ShaderMaterial).uniforms.uFrequency, { duration: 0.5, value: mouseDownState.uFrequency });
            gsap.to({ val: speedTime }, { duration: 0.5, val: mouseDownState.speedTime, onUpdate: function () { speedTime = this.targets()[0].val; } });
            gsap.to(heightmapVariable.material.uniforms.viscosityConstant, { duration: 0.5, value: 0 });
        };
        const onMouseUp = () => {
            if (!blob || !heightmapVariable) return;
            gsap.to((blob.material as THREE.ShaderMaterial).uniforms.uAmplitude, { duration: 2, value: initialState.uAmplitude, ease: "elastic.out(1, 0.3)" });
            gsap.to((blob.material as THREE.ShaderMaterial).uniforms.uFrequency, { duration: 0.5, value: initialState.uFrequency });
            gsap.to({ val: speedTime }, { duration: 0.5, val: initialState.speedTime, onUpdate: function () { speedTime = this.targets()[0].val; } });
            gsap.to(heightmapVariable.material.uniforms.viscosityConstant, { duration: 0.5, value: effectController.viscosity });
        };

        const onWindowResize = () => {
            if (camera && renderer) {
                const newWidth = container.clientWidth;
                const newHeight = container.clientHeight;
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            }
        };

        init();
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('mousedown', onMouseDown, false);
        document.addEventListener('mouseup', onMouseUp, false);
        document.addEventListener('touchstart', onMouseDown, false);
        document.addEventListener('touchend', onMouseUp, false);
        document.addEventListener('touchmove', onTouchMove, false);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchstart', onMouseDown);
            document.removeEventListener('touchend', onMouseUp);
            document.removeEventListener('touchmove', onTouchMove);

            scene?.traverse(object => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            renderer?.dispose();
            if (renderer) container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />;
};
