import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
    // Generate random stars for the background
    const stars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
            <SEO title="Page Not Found" description="Lost in the void." />

            {/* Starfield Background */}
            <div className="absolute inset-0 z-0">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                {/* Floating Astronaut */}
                <motion.div
                    initial={{ y: 0, rotate: 0 }}
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-8 relative inline-block"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <img
                        src="/astronaut-404.png"
                        alt="Lost Astronaut"
                        className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-2xl"
                    />
                </motion.div>

                {/* 404 Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-4 font-dosis bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50"
                >
                    404
                </motion.h1>

                {/* Comedic Message */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold mb-6 text-primary"
                >
                    "Aye Yo Dev, we have a situation..."
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
                >
                    This page seems to be lost in the void. It might have drifted away or never existed in this dimension.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        <IconHome className="w-5 h-5 mr-2" />
                        Return to Earth
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-all hover:scale-105 border border-white/10 backdrop-blur-md"
                    >
                        <IconArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
