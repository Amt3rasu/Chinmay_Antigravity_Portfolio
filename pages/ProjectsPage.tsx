import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { SEO } from '../components/SEO';
import MonitorHighlights from '../components/MonitorHighlights';
import { ErrorBoundary } from '../components/ErrorBoundary';

/* ---------- Project Card ---------- */
const ProjectCard: React.FC<{ project: CaseStudy; index: number }> = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Link
            to={project.externalUrl || `/project/${project.id}`}
            className="group block bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500"
            {...(project.externalUrl ? { target: '_blank', rel: 'noopener noreferrer' } as any : {})}
        >
            <div className="relative overflow-hidden h-56">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">{project.subtitle}</p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform mt-2">
                    {project.externalUrl ? 'Read Article' : 'View Case Study'} →
                </span>
            </div>
        </Link>
    </motion.div>
);

/* ---------- Section Header ---------- */
const SectionHeader: React.FC<{ number: string; label: string; title: string; description?: string }> = ({ number, label, title, description }) => (
    <div className="flex flex-col items-center mb-16">
        <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">{number}. {label}</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-center">{title}</h2>
        {description && <p className="mt-4 text-muted-foreground text-lg text-center max-w-2xl">{description}</p>}
    </div>
);

/* ---------- Projects Page ---------- */
export const ProjectsPage: React.FC = () => {
    const uxProjects = caseStudies.filter(s => ['flamey-ai', 'leaf-dex', 'access-transit', 'connect-dist', 'cican-navigator'].includes(s.id));
    const uiProject = caseStudies.find(s => s.id === 'ui-designs');
    const awards = caseStudies.filter(s => ['cdn-article', 'hackathon-win'].includes(s.id));

    return (
        <div className="bg-transparent pb-24 min-h-screen">
            <SEO title="My Work" description="Explore my portfolio of UX case studies, UI design explorations, and industry recognition." />

            {/* Interactive 3D Case Studies Hero */}
            <ErrorBoundary>
                <section className="w-full h-screen relative bg-black overflow-hidden mb-24 max-h-[900px]">
                    <MonitorHighlights className="w-full h-full" />



                    {/* Scroll Indicator at the bottom of the section */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-60 z-10">
                        <span className="text-xs font-semibold tracking-widest text-white uppercase mb-2">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1"
                        >
                            <motion.div className="w-1 h-2 bg-white rounded-full mt-1" />
                        </motion.div>
                    </div>
                </section>
            </ErrorBoundary>

            {/* Page Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">Selected Work</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A curated collection of UX case studies, visual design explorations, and industry recognition.</p>
                </motion.div>

                {/* Section 1: UX Design */}
                <div className="mb-32">
                    <SectionHeader number="01" label="UX DESIGN" title="Case Studies" description="Deep-dive process stories showing research, strategy, and measurable outcomes." />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {uxProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 2: UI Design & Graphic Design */}
            <div className="w-full py-24 mb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader number="02" label="UI DESIGN" title="Visual Explorations" description="Interface experiments, conceptual redesigns, and high-fidelity visual work — primarily showcased through imagery." />

                    {uiProject && (
                        <Link to={`/project/${uiProject.id}`} className="group block max-w-5xl mx-auto">
                            <div className="relative overflow-hidden rounded-3xl border border-border hover:border-primary/40 transition-all duration-500">
                                <img src={uiProject.thumbnail} alt={uiProject.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-10">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">{uiProject.title}</h3>
                                    <p className="text-white/80 text-lg max-w-2xl">{uiProject.overview}</p>
                                    <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform mt-4">
                                        View Gallery →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>

            {/* Section 3: Awards & Recognition */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader number="03" label="RECOGNITION" title="Awards & Mentions" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {awards.map(study => (
                        <a
                            key={study.id}
                            href={study.externalUrl || `/project/${study.id}`}
                            target={study.externalUrl ? '_blank' : undefined}
                            rel={study.externalUrl ? 'noopener noreferrer' : undefined}
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
