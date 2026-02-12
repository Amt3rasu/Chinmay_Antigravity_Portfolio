import { Canvas, useFrame } from '@react-three/fiber'
import { MeshReflectorMaterial, BakeShadows, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, Noise } from '@react-three/postprocessing'
import { easing } from 'maath'
import { Instances, Computers } from './Computers'
import { Suspense } from 'react'

interface SceneProps {
    eventSource?: HTMLElement
    className?: string
}

export default function Scene({ eventSource, className }: SceneProps) {
    return (
        <Canvas
            className={className}
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
            eventSource={eventSource || undefined}
            eventPrefix="client"
        >
            <Suspense fallback={null}>
                {/* Lights */}
                <color attach="background" args={['#101010']} />
                <fog attach="fog" args={['#101010', 0, 25]} />
                <hemisphereLight intensity={0.4} groundColor={'black'} />
                <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

                {/* Main scene */}
                <group position={[-0, -1, 0]}>
                    <Instances>
                        <Computers scale={0.5} />
                    </Instances>

                    {/* Floor Reflection */}
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 30]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={180}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#202020"
                            metalness={0.8}
                        />
                    </mesh>

                    <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
                </group>

                {/* Postprocessing */}
                <EffectComposer>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.1} intensity={3.5} />
                    <Noise opacity={0.0075} />
                    <DepthOfField target={[0, 0, 13] as any} focalLength={0.3} bokehScale={15} height={700} />
                </EffectComposer>

                <CameraRig />
                <BakeShadows />
            </Suspense>
        </Canvas>
    )
}

function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
    })
    return null
}
