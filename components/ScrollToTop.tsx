import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            if (pathname === '/') {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
                window.scrollTo(0, 0);
            }
        }
    }, [pathname]);

    useEffect(() => {
        const body = document.querySelector('body');
        let homeScroller: ((e: WheelEvent) => void) | null = null;
        if (pathname === '/') {
            const homeContainer = document.getElementById('home-container');
            if (homeContainer) {
                homeScroller = (e: WheelEvent) => {
                    homeContainer.scrollBy({ top: e.deltaY, behavior: 'smooth' });
                };
                window.addEventListener('wheel', homeScroller);
            }
        }
        return () => {
            if (homeScroller) {
                window.removeEventListener('wheel', homeScroller);
            }
        };
    }, [pathname]);

    return null;
};
