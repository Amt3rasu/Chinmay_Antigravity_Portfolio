import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCloud } from './IconCloud';
import { aboutMeData } from '../data/aboutMe';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    // Extract icon URLs from toolkit
    const iconUrls = aboutMeData.tools
        .map(tool => tool.coloredIconUrl || tool.iconUrl)
        .filter(url => !!url) as string[];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit after 100%
                    return 100;
                }
                return prev + 1; // Increment progress
            });
        }, 30); // Total time approx 3 seconds

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center justify-center">
                <IconCloud iconUrls={iconUrls} />
            </div>

            {/* Removed the separate loading text since it's now combined above */}
        </motion.div>
    );
};
