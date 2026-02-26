import React, { Suspense, lazy, useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackgroundDoodles } from './components/BackgroundDoodles';
import { Chatbot } from './components/Chatbot';
import { NoiseTexture } from './components/NoiseTexture';
import { FloatingDock } from './components/FloatingDock';
import { TailedCursor } from './components/TailedCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(module => ({ default: module.ProjectsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const ResumePage = lazy(() => import('./pages/ResumePage').then(module => ({ default: module.ResumePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isContentReady, setIsContentReady] = useState(false);

    const handleContentReady = useCallback(() => {
        setIsContentReady(true);
    }, []);

    return (
        <>
            {/* @ts-ignore */}
            <HelmetProvider context={{}}>
                {/* Loading screen overlay — sits on top while app loads behind it */}
                <AnimatePresence>
                    {isLoading && (
                        <LoadingScreen
                            key="loading"
                            onComplete={() => setIsLoading(false)}
                            isContentReady={isContentReady}
                        />
                    )}
                </AnimatePresence>

                {/* App always renders — loads in background behind the loading screen */}
                <HashRouter>
                    <ScrollToTop />
                    <div
                        className="flex flex-col min-h-screen text-slate-200 relative isolation-isolate"
                        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
                    >
                        <BackgroundDoodles />
                        <Header />

                        <main className="flex-grow">
                            <Suspense fallback={null}>
                                <Routes>
                                    <Route path="/" element={<HomePage onReady={handleContentReady} />} />
                                    <Route path="/projects" element={<ProjectsPage />} />
                                    <Route path="/project/:id" element={<CaseStudyPage />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/resume" element={<ResumePage />} />
                                    <Route path="/contact" element={<ContactPage />} />
                                    <Route path="*" element={<NotFoundPage />} />
                                </Routes>
                            </Suspense>
                        </main>
                        <Footer />
                        {/* <Chatbot /> */}
                        <NoiseTexture />
                        <FloatingDock />
                        <TailedCursor baseThickness={30} color="#7c3aed" />
                    </div>
                </HashRouter>
            </HelmetProvider>
        </>
    );
};

export default App;