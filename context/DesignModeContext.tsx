import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type DesignMode = 'classic' | 'modern';

interface DesignModeContextType {
    mode: DesignMode;
    toggleMode: () => void;
    letterSpacing: number;
    setLetterSpacing: (value: number) => void;
}

const DesignModeContext = createContext<DesignModeContextType | undefined>(undefined);

export const DesignModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<DesignMode>('modern');
    const [letterSpacing, setLetterSpacing] = useState<number>(2);

    const toggleMode = () => {
        // Mode is now permanently modern
        setMode('modern');
    };

    // Apply mode to body class for global styling
    useEffect(() => {
        document.body.classList.remove('mode-classic', 'mode-modern');
        document.body.classList.add(`mode-${mode}`);
        document.body.style.setProperty('--heading-letter-spacing', `${letterSpacing}px`);
    }, [mode, letterSpacing]);

    return (
        <DesignModeContext.Provider value={{ mode, toggleMode, letterSpacing, setLetterSpacing }}>
            {children}
        </DesignModeContext.Provider>
    );
};

export const useDesignMode = () => {
    const context = useContext(DesignModeContext);
    if (context === undefined) {
        throw new Error('useDesignMode must be used within a DesignModeProvider');
    }
    return context;
};
