import React from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { aboutMeData } from '../data/aboutMe';
import { Button, ButtonArrow } from '../components/ui/Button';
import { Carousel, Card } from "../components/AppleCardsCarousel";
import { SmoothScroll } from '../components/SmoothScroll';
import { InteractiveBlob } from '../components/3D/InteractiveBlob';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { TrustedBy } from '../components/TrustedBy';
import { Services } from '../components/Services';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CalBooking } from '../components/CalBooking';
import { ArrowDownIcon } from '../components/Icons';

const ScrollIndicator: React.FC = () => (
    <div className="scroll-indicator">
        <span>Scroll for more</span>
        <ArrowDownIcon className="w-6 h-6 text-foreground" />
    </div>
);

import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
    return (
        <SmoothScroll>
            <SEO />
            <div className="relative w-full min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-500 isolation-isolate">
                {/* Local Background for Blend Mode Support */}
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        backgroundColor: '#F4F4F2',
                        backgroundImage: 'linear-gradient(to top, #E3E4E9 0%, #F4F4F2 80%, #F4F4F2 100%)',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <ErrorBoundary fallback={<div className="absolute inset-0 -z-10 bg-background" />}>
                    <InteractiveBlob />
                </ErrorBoundary>
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none text-center text-foreground mix-blend-difference">
                    <div className="max-w-6xl mx-auto px-4 pointer-events-auto flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent text-[#F4F4F2] text-sm font-medium mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Open to work
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#F4F4F2]"
                        >
                            Empowering startups and businesses <br />
                            to grow with <br />
                            smart, scalable design.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.2 }}
                            className="mt-6 text-lg md:text-xl text-[#F4F4F2]/90 max-w-2xl"
                        >
                            From foundations to handoff, I streamline product and service journeys with design systems, workflow optimization, and a focus on user and business success.
                        </motion.p>
                    </div>
                </div>
                <ScrollIndicator />
            </div>

            <TrustedBy />

            <section className="w-full py-16 bg-transparent backdrop-blur-sm snap-start flex-shrink-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Highlights
                            </h2>
                            <p className="mt-2 text-muted-foreground">
                                Selected works and achievements.
                            </p>
                        </div>
                        <Button href="/projects" variant="primary" size="lg" className="group hidden md:inline-flex">
                            View All Work <ButtonArrow />
                        </Button>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="w-full relative">
                            <ErrorBoundary fallback={<div className="text-foreground text-center p-10">Carousel failed to load.</div>}>
                                <Carousel items={caseStudies
                                    .filter(p => ['cdn-article', 'hackathon-win', 'access-transit', 'cognitive-clarity', 'sunnys-finance'].includes(p.id))
                                    .sort((a, b) => {
                                        const order = ['cdn-article', 'hackathon-win', 'access-transit', 'cognitive-clarity', 'sunnys-finance'];
                                        return order.indexOf(a.id) - order.indexOf(b.id);
                                    })
                                    .map((project, index) => (
                                        <Card key={project.id} card={{
                                            src: project.thumbnail,
                                            title: project.title,
                                            category: project.category,
                                            id: project.id,
                                            externalUrl: project.externalUrl
                                        }} index={index} />
                                    ))} />
                            </ErrorBoundary>
                        </div>

                        {/* Mobile only button */}
                        <div className="mt-8 text-center md:hidden">
                            <Button href="/projects" variant="primary" size="lg" className="group">
                                View All Work <ButtonArrow />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Services />
            <WhyChooseMe />
            <Testimonials />

            {/* Toolkit Section */}
            <section className="w-full py-16 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">My Toolkit</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {aboutMeData.tools.map((tool) => (
                                <div key={tool.name} className="group flex flex-col items-center justify-center p-6 bg-transparent rounded-xl hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    {tool.iconUrl ? (
                                        <div className="relative w-12 h-12 mb-4">
                                            {/* Colored Icon (Bottom) */}
                                            {tool.color === 'original' ? (
                                                <img
                                                    src={tool.coloredIconUrl || tool.iconUrl}
                                                    alt={`${tool.name} logo`}
                                                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                />
                                            ) : (
                                                <div
                                                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{
                                                        maskImage: `url(${tool.iconUrl})`,
                                                        WebkitMaskImage: `url(${tool.iconUrl})`,
                                                        maskSize: 'contain',
                                                        WebkitMaskSize: 'contain',
                                                        maskRepeat: 'no-repeat',
                                                        WebkitMaskRepeat: 'no-repeat',
                                                        maskPosition: 'center',
                                                        WebkitMaskPosition: 'center',
                                                        backgroundColor: tool.color
                                                    }}
                                                />
                                            )}

                                            {/* Monochrome Icon (Top/Mask) - Fades out on hover */}
                                            <div
                                                className="absolute inset-0 w-full h-full bg-muted-foreground transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                                                style={{
                                                    maskImage: `url(${tool.iconUrl})`,
                                                    WebkitMaskImage: `url(${tool.iconUrl})`,
                                                    maskSize: 'contain',
                                                    WebkitMaskSize: 'contain',
                                                    maskRepeat: 'no-repeat',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskPosition: 'center',
                                                    WebkitMaskPosition: 'center'
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-muted rounded-full">
                                            <span className="text-xs text-muted-foreground">No Icon</span>
                                        </div>
                                    )}
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
            <CalBooking />
        </SmoothScroll>
    );
};
