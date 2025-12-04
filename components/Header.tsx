import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesignMode } from '../context/DesignModeContext';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDockVisible, setIsDockVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const { mode } = useDesignMode();

    const navLinkClasses = ({ isActive }: { isActive: boolean }) => `text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`;
    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-accent'}`;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 50);

            // Determine if dock should be visible (same logic as FloatingDock)
            const shouldShowDock = mode === 'modern' &&
                currentScrollY > 100 &&
                (documentHeight - currentScrollY - windowHeight) > 200;

            setIsDockVisible(shouldShowDock);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [mode]);

    // Logic:
    // 1. Standard Header: Visible when dock is NOT visible.
    // 2. Name Dock: Visible when dock IS visible.
    // They swap places: Standard slides up, Name Dock slides down.

    return (
        <>
            {/* Standard Header (Slides Up/Down) */}
            <AnimatePresence>
                {!isDockVisible && (
                    <motion.header
                        key="standard-header"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`bg-transparent fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-background/80' : ''
                            }`}
                    >
                        <div className="w-full px-4 sm:px-6 lg:px-12">
                            <div className="flex items-center justify-between h-16">
                                <Link to="/" className="text-2xl font-bold text-foreground">
                                    Chinmay Bhaise
                                </Link>

                                <div className="hidden md:flex items-center space-x-8">
                                    <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
                                    <NavLink to="/projects" className={navLinkClasses}>My Work</NavLink>
                                    <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                                    <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
                                </div>

                                <div className="md:hidden">
                                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Toggle menu">
                                        <MenuIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="md:hidden bg-card">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClasses} end>Home</NavLink>
                                    <NavLink to="/projects" onClick={() => setIsOpen(false)} className={mobileNavLinkClasses}>My Work</NavLink>
                                    <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkClasses}>About</NavLink>
                                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkClasses}>Contact</NavLink>
                                </div>
                            </div>
                        )}
                    </motion.header>
                )}
            </AnimatePresence>

            {/* Floating Name Dock (Slides Down/Up) */}
            <AnimatePresence>
                {isDockVisible && (
                    <motion.div
                        key="name-dock"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 20, opacity: 1 }} // 20px from top
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
                    >
                        <div className="pointer-events-auto"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <Link to="/">
                                <motion.div
                                    className={`px-6 py-3 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-lg transition-all duration-300 ${isHovering ? 'bg-primary/10 border-primary/50 shadow-xl' : ''
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.span
                                        className={`text-xl font-bold transition-colors duration-300 ${isHovering ? 'text-primary' : 'text-foreground'
                                            }`}
                                    >
                                        Chinmay Bhaise
                                    </motion.span>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
