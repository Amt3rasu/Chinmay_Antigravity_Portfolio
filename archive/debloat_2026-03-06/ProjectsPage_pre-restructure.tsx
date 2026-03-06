import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { ButtonArrow } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { Carousel, Card } from "../components/AppleCardsCarousel";

const ProjectCard: React.FC<{ project: CaseStudy; index: number }> = ({ project, index }) => {
    const isExternal = !!project.externalUrl;
    const linkUrl = isExternal ? project.externalUrl! : `/project/${project.id}`;
    const linkText = isExternal ? 'Read Article' : 'View Case Study';

    const cardContent = (
        <>
            <div className="relative overflow-hidden h-64">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8 relative gap-2 flex flex-col items-start justify-between h-[250px]">
                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full uppercase tracking-wider">{tag}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">{project.subtitle}</p>
                </div>
                <span className="inline-flex flex-shrink-0 items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    {linkText}
                    <ButtonArrow />
                </span>
            </div>
        </>
    );

    const cardClasses = "group block bg-card backdrop-blur-sm rounded-3xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {isExternal ? (
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                    {cardContent}
                </a>
            ) : (
                <Link to={linkUrl} className={cardClasses}>
                    {cardContent}
                </Link>
            )}
        </motion.div>
    );
};

export const ProjectsPage: React.FC = () => {
    // Top 5 Case Studies
    const caseStudiesData = caseStudies.filter(study =>
        ['flamey-ai', 'leaf-dex', 'access-transit', 'connect-dist', 'cican-navigator'].includes(study.id)
    );

    // Redesigns & Creative UI
    const redesignsData = caseStudies.filter(study =>
        ['ui-designs'].includes(study.id)
    );

    // Awards & Mentions
    const mentionsData = caseStudies.filter(study =>
        ['cdn-article', 'hackathon-win'].includes(study.id)
    );

    return (
        <div className="bg-transparent pt-32 pb-24 min-h-screen">
            <SEO title="My Work" description="Explore my portfolio of case studies, projects, and design work." />

            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">
                        Selected Work
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A curated collection of deep-dive case studies, creative experiments, and industry recognition.
                    </p>
                </motion.div>

                {/* Section 1: Deep Case Studies */}
                <div className="mb-32">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">01. IN DEPTH</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Case Studies</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {caseStudiesData.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Section 2: Redesigns & Creative UI (Carousel style from homepage) */}
            <div className="w-full bg-background border-y border-border py-24 mb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center mb-12">
                        <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">02. VISUAL EXPERIMENTS</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center">Redesigns & UI Options</h2>
                        <p className="mt-4 text-muted-foreground text-lg text-center max-w-2xl">
                            A collection of conceptual work, interface experiments, and passion projects focused heavily on visual execution.
                        </p>
                    </div>

                    <Carousel
                        items={redesignsData.map((study, index) => (
                            <Card
                                key={study.id}
                                index={index}
                                card={{
                                    src: study.thumbnail || '',
                                    title: study.title,
                                    category: study.category,
                                    id: study.id,
                                    externalUrl: study.externalUrl
                                }}
                            />
                        ))}
                    />
                </div>
            </div>

            {/* Section 3: Awards & Mentions */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">03. RECOGNITION</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Awards & Mentions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {mentionsData.map((study) => (
                        <a
                            key={study.id}
                            href={study.externalUrl || `/project/${study.id}`}
                            target={study.externalUrl ? "_blank" : undefined}
                            rel={study.externalUrl ? "noopener noreferrer" : undefined}
                            className="flex flex-col p-8 bg-card rounded-2xl hover:bg-muted/50 transition-colors border border-border hover:border-primary/40 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group duration-500"
                        >
                            <span className="text-sm font-bold text-primary tracking-[0.1em] uppercase mb-3">{study.category}</span>
                            <h4 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{study.title}</h4>
                            <p className="text-muted-foreground text-base leading-relaxed">{study.overview}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
