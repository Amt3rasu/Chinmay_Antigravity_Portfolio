import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { ButtonArrow } from '../components/ui/Button';
import { SEO } from '../components/SEO';

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
            <div className="p-8 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">{project.subtitle}</p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
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
            animate={{ opacity: 1, y: 0 }}
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
    const [filter, setFilter] = useState('All');

    // Extract unique categories for filter
    const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

    const filteredProjects = filter === 'All'
        ? caseStudies
        : caseStudies.filter(cs => cs.category === filter);

    return (
        <div className="bg-transparent pt-32 pb-24 min-h-screen">
            <SEO title="My Work" description="Explore my portfolio of case studies, projects, and design work." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">
                        Selected Work
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects exploring the intersection of design, technology, and human experience.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            aria-pressed={filter === category}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
