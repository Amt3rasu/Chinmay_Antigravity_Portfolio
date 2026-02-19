import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import { IconHome, IconBriefcase, IconUser, IconMail } from '@tabler/icons-react';

const navItems = [
    { path: '/', icon: IconHome, label: 'Home' },
    { path: '/projects', icon: IconBriefcase, label: 'Work' },
    { path: '/about', icon: IconUser, label: 'About' },
    { path: '/contact', icon: IconMail, label: 'Contact' },
];

export const FloatingDock: React.FC = () => {
    const location = useLocation();
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setScrollY(currentScrollY);

            // Show dock when scrolled down at least 100px
            // Hide dock when near bottom (within 200px of footer)
            const shouldShow = currentScrollY > 100 &&
                (documentHeight - currentScrollY - windowHeight) > 200;

            setIsVisible(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    className="fixed bottom-8 left-1/2 z-50"
                    style={{ transform: 'translateX(-50%)' }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div className="flex items-center gap-1 px-2 py-2 bg-background/90 backdrop-blur-xl border border-border rounded-full shadow-2xl">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            const isHovered = hoveredIndex === index;

                            return (
                                <div
                                    key={item.path}
                                    className="relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Link to={item.path}>
                                        <motion.div
                                            className={`flex items-center justify-center rounded-full transition-colors duration-300 w-11 h-11 ${isActive
                                                ? 'bg-primary text-primary-foreground'
                                                : isHovered
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.div>
                                    </Link>

                                    {/* Tooltip label - absolute positioned so it doesn't shift layout */}
                                    <AnimatePresence>
                                        {(isHovered || isActive) && (
                                            <motion.div
                                                className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                                                initial={{ opacity: 0, y: 4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 4 }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                <span className="px-2 py-1 text-xs font-medium whitespace-nowrap rounded-md bg-foreground text-background shadow-lg">
                                                    {item.label}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};
