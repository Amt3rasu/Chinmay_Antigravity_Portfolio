import React, { useEffect, useRef } from 'react';

interface IconCloudProps {
    iconUrls: string[];
}

export const IconCloud: React.FC<IconCloudProps> = ({ iconUrls }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const icons: HTMLImageElement[] = [];
        const points: { x: number; y: number; z: number; img: HTMLImageElement }[] = [];

        // Configuration
        const radius = 150;
        const maxSpeed = 0.005;
        let rotationX = 0.002;
        let rotationY = 0.002;
        let isLoaded = false;
        let loadedCount = 0;

        // Load images
        iconUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === iconUrls.length) {
                    isLoaded = true;
                }
            };
            icons.push(img);
        });

        const initPoints = () => {
            const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

            for (let i = 0; i < icons.length; i++) {
                const y = 1 - (i / (icons.length - 1)) * 2; // y goes from 1 to -1
                const r = Math.sqrt(1 - y * y); // radius at y
                const theta = phi * i; // golden angle increment

                const x = Math.cos(theta) * r;
                const z = Math.sin(theta) * r;

                points.push({
                    x: x * radius,
                    y: y * radius,
                    z: z * radius,
                    img: icons[i]
                });
            }
        };

        // Initialize immediately
        initPoints();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Only rotate if fully loaded
            if (isLoaded) {
                // Rotate points
                points.forEach(p => {
                    // Rotate around Y axis
                    const x1 = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
                    const z1 = p.z * Math.cos(rotationY) + p.x * Math.sin(rotationY);
                    p.x = x1;
                    p.z = z1;

                    // Rotate around X axis
                    const y1 = p.y * Math.cos(rotationX) - p.z * Math.sin(rotationX);
                    const z2 = p.z * Math.cos(rotationX) + p.y * Math.sin(rotationX);
                    p.y = y1;
                    p.z = z2;
                });
            }

            // Sort by z-index (painters algorithm)
            points.sort((a, b) => a.z - b.z);

            // Draw points
            points.forEach(p => {
                // Perspective projection
                const scale = (radius * 2) / (radius * 2 - p.z);
                const alpha = (p.z + radius) / (2 * radius); // Opacity based on depth

                const size = 40 * scale;

                ctx.save();
                ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
                ctx.translate(centerX + p.x, centerY + p.y);

                // Draw image only if loaded (it might be drawn before isLoaded is true if some are fast)
                if (p.img.complete && p.img.naturalWidth > 0) {
                    try {
                        ctx.drawImage(p.img, -size / 2, -size / 2, size, size);
                    } catch (e) {
                        // Ignore drawing errors
                    }
                }

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation immediately
        animate();

        // Mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
            // Disable interaction if not loaded
            if (!isLoaded || !canvas) return;

            const rect = canvas.getBoundingClientRect();
            // Calculate mouse position relative to canvas center
            // We use window coordinates to allow interaction even when not hovering directly
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = e.clientX - centerX;
            const y = e.clientY - centerY;

            // Scale sensitivity
            rotationY = x * 0.0001;
            rotationX = -y * 0.0001;
        };

        // Touch interaction for mobile
        const handleTouchMove = (e: TouchEvent) => {
            if (!isLoaded || !canvas || e.touches.length === 0) return;

            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = touch.clientX - centerX;
            const y = touch.clientY - centerY;

            rotationY = x * 0.0002; // Slightly more sensitive for touch
            rotationX = -y * 0.0002;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [iconUrls]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="w-full max-w-[400px] aspect-square"
        />
    );
};
