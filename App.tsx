import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DesignModeProvider } from './context/DesignModeContext';
import { DesignToggle } from './components/DesignToggle';
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

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const App: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <>
            {/* @ts-ignore */}
            <HelmetProvider context={{}}>
                <DesignModeProvider>
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
                        ) : (
                            <HashRouter key="app">
                                <ScrollToTop />
                                <div className="flex flex-col min-h-screen text-slate-200 relative isolation-isolate">
                                    <BackgroundDoodles />
                                    <Header />

                                    <main className="flex-grow">
                                        <Suspense fallback={null}>
                                            <Routes>
                                                <Route path="/" element={<HomePage />} />
                                                <Route path="/projects" element={<ProjectsPage />} />
                                                <Route path="/project/:id" element={<CaseStudyPage />} />
                                                <Route path="/about" element={<AboutPage />} />
                                                <Route path="/contact" element={<ContactPage />} />
                                            </Routes>
                                        </Suspense>
                                    </main>
                                    <Footer />
                                    <Chatbot />
                                    <NoiseTexture />
                                    <FloatingDock />
                                    <TailedCursor baseThickness={30} color="#7c3aed" />
                                </div>
                            </HashRouter>
                        )}
                    </AnimatePresence>
                </DesignModeProvider>
            </HelmetProvider>
        </>
    );
};

export default App;