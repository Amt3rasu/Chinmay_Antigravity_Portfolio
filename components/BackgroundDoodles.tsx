import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Doodle {
    id: number;
    src: string;
    x: number;
    y: number;
    rotation: number;
    scale: number;
}

const DOODLE_COUNT = 20;
const MAX_ACTIVE_DOODLES = 6; // Don't crowd the screen too much
const SPAWN_INTERVAL = 2500; // New doodle every 2.5s
const LIFETIME = 5000; // Stay for 5s

export const BackgroundDoodles: React.FC = () => {
    const [doodles, setDoodles] = useState<Doodle[]>([]);
    const doodleIdCounter = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDoodles(current => {
                // Clean up old doodles first (though AnimatePresence handles visual removal)
                // actually we rely on onExitComplete or just time-based removal.
                // Let's use a time-based removal in a separate effect or just let them naturally expire?
                // Better: Add one, and set a timeout to remove it.

                if (current.length >= MAX_ACTIVE_DOODLES) return current;

                const id = doodleIdCounter.current++;
                const src = `/doodles/doodle_${Math.floor(Math.random() * DOODLE_COUNT) + 1}.png`;

                // Random position with some padding to avoid edges
                const x = Math.random() * 80 + 10; // 10% to 90%
                const y = Math.random() * 80 + 10; // 10% to 90%

                // Simple collision check (very basic, just distance)
                const isTooClose = current.some(d => {
                    const dx = d.x - x;
                    const dy = d.y - y;
                    return Math.sqrt(dx * dx + dy * dy) < 15; // 15% threshold
                });

                if (isTooClose && current.length > 0) return current; // Skip this spawn if too crowded

                const newDoodle: Doodle = {
                    id,
                    src,
                    x,
                    y,
                    rotation: Math.random() * 30 - 15, // -15 to 15 deg
                    scale: Math.random() * 0.4 + 0.8, // 0.8 to 1.2
                };

                // Schedule removal
                setTimeout(() => {
                    setDoodles(prev => prev.filter(d => d.id !== id));
                }, LIFETIME);

                return [...current, newDoodle];
            });
        }, SPAWN_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {doodles.map(doodle => (
                    <motion.img
                        key={doodle.id}
                        src={doodle.src}
                        alt=""
                        initial={{ opacity: 0, scale: 0.5, rotate: doodle.rotation - 10 }}
                        animate={{
                            opacity: 0.15, // Low opacity for subtle background effect
                            scale: doodle.scale,
                            rotate: doodle.rotation
                        }}
                        exit={{ opacity: 0, scale: 0.5, rotate: doodle.rotation + 10 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            left: `${doodle.x}%`,
                            top: `${doodle.y}%`,
                            width: '300px', // Doubled size
                            maxWidth: '30vw', // Doubled size
                            mixBlendMode: 'multiply', // Blends well with light backgrounds
                            filter: 'sepia(0.2) contrast(1.1)', // Slight warmth to match theme
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};
