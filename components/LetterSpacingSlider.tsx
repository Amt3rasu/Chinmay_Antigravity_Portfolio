import React from 'react';
import { useDesignMode } from '../context/DesignModeContext';
import { motion } from 'framer-motion';

export const LetterSpacingSlider: React.FC = () => {
    const { mode, letterSpacing, setLetterSpacing } = useDesignMode();

    if (mode !== 'modern') return null;

    return (
        <motion.div
            className="fixed top-20 left-4 z-50 bg-background/90 backdrop-blur-md border border-border rounded-2xl p-4 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Letter Spacing</span>
                    <span className="text-sm font-bold text-primary">{letterSpacing}px</span>
                </div>

                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            onClick={() => setLetterSpacing(value)}
                            className={`
                                w-10 h-10 rounded-lg font-bold text-sm transition-all duration-200
                                ${letterSpacing === value
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                                    : 'bg-card hover:bg-accent text-muted-foreground hover:text-foreground border border-border'
                                }
                            `}
                        >
                            {value}
                        </button>
                    ))}
                </div>

                <div className="mt-2 text-xs text-muted-foreground text-center">
                    Click to test spacing
                </div>
            </div>
        </motion.div>
    );
};
