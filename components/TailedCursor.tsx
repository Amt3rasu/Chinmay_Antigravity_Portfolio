import React, { useEffect, useRef } from 'react';
import { useDesignMode } from '../context/DesignModeContext';

interface Point {
    x: number;
    y: number;
    age: number;
}

interface TailedCursorProps {
    baseThickness?: number;
    color?: string;
    maxAge?: number;
}

export const TailedCursor: React.FC<TailedCursorProps> = ({
    baseThickness = 20,
    color = '#7c3aed', // Electric Indigo
    maxAge = 500
}) => {
    const { mode } = useDesignMode();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | undefined>(undefined);

    // Detect touch device - disable cursor effect on touch screens
    const isTouchDevice = typeof window !== 'undefined' && (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
    );

    useEffect(() => {
        // Skip effect for touch devices or non-modern mode
        if (mode !== 'modern' || isTouchDevice) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            // Add new point immediately on move for responsiveness
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: Date.now()
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const now = Date.now();
            const points = pointsRef.current;

            // Remove old points
            while (points.length > 0 && now - points[0].age > maxAge) {
                points.shift();
            }

            // Add current mouse position if it's moved significantly or just to keep the trail alive?
            // Actually, for a smooth trail, we just use the recorded points.
            // But if mouse stops, the trail should disappear (fade out).
            // The logic above removes points older than maxAge, so it will naturally disappear.

            if (points.length > 1) {
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';

                // Draw the tapered tail
                // We'll draw segments with varying width
                for (let i = 0; i < points.length - 1; i++) {
                    const p1 = points[i];
                    const p2 = points[i + 1];

                    const age1 = now - p1.age;
                    const age2 = now - p2.age;

                    // Calculate normalized life (0 = new, 1 = old)
                    // Actually we want 1 = new, 0 = old for thickness
                    const life1 = 1 - (age1 / maxAge);
                    const life2 = 1 - (age2 / maxAge);

                    if (life1 <= 0 || life2 <= 0) continue;

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    // Thickness based on life
                    const thickness = baseThickness * life1;

                    ctx.lineWidth = thickness;
                    ctx.strokeStyle = color;
                    // Optional: Fade out tail
                    // ctx.globalAlpha = life1; 

                    ctx.stroke();
                }
            }

            // Draw a head dot
            if (points.length > 0) {
                const head = points[points.length - 1];
                ctx.beginPath();
                ctx.arc(head.x, head.y, baseThickness / 2, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [mode, baseThickness, color, maxAge, isTouchDevice]);

    // Don't render on touch devices or non-modern mode
    if (mode !== 'modern' || isTouchDevice) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};
