import React from 'react';
import { useDesignMode } from '../context/DesignModeContext';
import { motion } from 'framer-motion';

export const DesignToggle: React.FC = () => {
    const { mode, toggleMode } = useDesignMode();

    return (
        <motion.button
            className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg hover:bg-accent transition-colors"
            onClick={toggleMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className={`w-3 h-3 rounded-full ${mode === 'modern' ? 'bg-indigo-500' : 'bg-gray-400'}`} />
            <span className="text-sm font-medium text-foreground">
                {mode === 'modern' ? 'Modern Mode' : 'Classic Mode'}
            </span>
        </motion.button>
    );
};
