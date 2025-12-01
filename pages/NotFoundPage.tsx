import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-end pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/404-bg.png")' }}
        >
            <SEO title="Page Not Found" description="Lost in the void." />

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />

            {/* Content Container */}
            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">

                {/* Comedic Message */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
                >
                    "Aye Yo Dev, we have a situation..."
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-md mx-auto leading-relaxed drop-shadow-md"
                >
                    This page seems to be lost in the void. It might have drifted away or never existed in this dimension.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-xl"
                    >
                        <IconHome className="w-5 h-5 mr-2" />
                        Return to Earth
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black/40 text-white font-medium text-lg hover:bg-black/60 transition-all hover:scale-105 border border-white/20 backdrop-blur-md"
                    >
                        <IconArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
