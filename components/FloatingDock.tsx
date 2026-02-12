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
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div className="flex items-center gap-1 px-2 py-2 bg-background/90 backdrop-blur-xl border border-border rounded-full shadow-2xl">
                        <AnimatePresence>
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;
                                const isHovered = hoveredIndex === index;

                                return (
                                    <motion.div
                                        key={item.path}
                                        layout
                                        className="relative"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <Link to={item.path}>
                                            <motion.div
                                                className={`flex items-center gap-2 rounded-full transition-all duration-300 ${isActive
                                                    ? 'bg-primary text-primary-foreground px-4 py-3'
                                                    : isHovered
                                                        ? 'bg-primary/10 text-primary px-4 py-3'
                                                        : 'px-3 py-3 text-muted-foreground hover:text-foreground'
                                                    }`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Icon className="w-5 h-5" />

                                                <AnimatePresence>
                                                    {(isHovered || isActive) && (
                                                        <motion.span
                                                            initial={{ width: 0, opacity: 0 }}
                                                            animate={{ width: 'auto', opacity: 1 }}
                                                            exit={{ width: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="text-sm font-medium whitespace-nowrap overflow-hidden"
                                                        >
                                                            {item.label}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};
