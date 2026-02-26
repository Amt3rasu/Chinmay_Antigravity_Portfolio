import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCloud } from './IconCloud';
import { aboutMeData } from '../data/aboutMe';

interface LoadingScreenProps {
    onComplete: () => void;
    isContentReady?: boolean;
}

const loadingPhrases = [
    "Assembling the cosmos...",
    "Calibrating gravity...",
    "Rendering pixels...",
    "Polishing interactions...",
    "Warming up the engines...",
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, isContentReady = false }) => {
    const [progress, setProgress] = useState(0);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isMinTimeMet, setIsMinTimeMet] = useState(false);
    const hasCompleted = useRef(false);

    // Extract icon URLs from toolkit
    const iconUrls = aboutMeData.tools
        .map(tool => tool.coloredIconUrl || tool.iconUrl)
        .filter(url => !!url) as string[];

    // Rotate loading phrases
    useEffect(() => {
        const phraseTimer = setInterval(() => {
            setPhraseIndex(prev => (prev + 1) % loadingPhrases.length);
        }, 2000);
        return () => clearInterval(phraseTimer);
    }, []);

    // Progress bar animation — reaches 100% over ~5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setIsMinTimeMet(true);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // 100 steps × 50ms = 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Complete when BOTH minimum time is met AND content is ready
    useEffect(() => {
        if (isMinTimeMet && isContentReady && !hasCompleted.current) {
            hasCompleted.current = true;
            // Small delay for a smooth feeling
            setTimeout(onComplete, 400);
        }
    }, [isMinTimeMet, isContentReady, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center justify-center">
                <IconCloud iconUrls={iconUrls} />
            </div>

            {/* Loading phrase */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 text-sm text-muted-foreground font-medium tracking-wide"
                >
                    {loadingPhrases[phraseIndex]}
                </motion.p>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-6 w-48 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};
