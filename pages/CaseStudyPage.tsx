import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { ContentBlock, Chapter, ImpactStat } from '../types';
import { SEO } from '../components/SEO';

const ContentRenderer: React.FC<{ blocks: ContentBlock[], compact?: boolean }> = ({ blocks, compact = false }) => {
    if (!blocks) return null;

    const renderBlock = (block: ContentBlock, index: number) => {
        switch (block.type) {
            case 'h1': return <h1 key={index} className={`text-3xl md:text-4xl font-serif font-bold text-foreground ${compact ? 'mt-0 mb-2' : 'mt-12 mb-6'} tracking-tight`}>{block.content}</h1>;
            case 'h2': return <h2 key={index} className={`text-2xl font-bold text-foreground ${compact ? 'mt-0 mb-6' : 'mt-10 mb-4'}`}>{block.content}</h2>;
            case 'p': return <p key={index} className={`text-lg text-muted-foreground ${compact ? 'mb-2' : 'mb-6'} leading-relaxed`} dangerouslySetInnerHTML={{ __html: block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}></p>;
            case 'image': return (
                <figure key={index} className={`${compact ? 'my-4' : 'my-10'}`}>
                    <img src={block.src} alt={block.alt} className={`rounded-2xl shadow-lg w-full border border-border ${block.className || ''}`} />
                    {block.caption && <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">{block.caption}</figcaption>}
                </figure>
            );
            case 'list': return (
                <ul key={index} className={`list-disc pl-5 ${compact ? 'my-2' : 'my-6'} space-y-3 text-lg text-muted-foreground`}>
                    {block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}></li>)}
                </ul>
            );
            case 'aside': return (
                <aside key={index} className={`${compact ? 'my-4' : 'my-10'} p-8 bg-card rounded-2xl border-l-4 border-primary shadow-lg`}>
                    <h3 className="text-xl font-bold flex items-center text-foreground mb-3"><span className="mr-3 text-2xl">{block.icon}</span> {block.title}</h3>
                    <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{block.content}</div>
                </aside>
            );
            case 'prototype': return (
                <div key={index} className="my-16">
                    <h2 className="text-2xl font-bold text-center mb-6 text-foreground">{block.title}</h2>
                    <div className="aspect-video w-full bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                        <iframe className="w-full h-full" src={block.src} allowFullScreen></iframe>
                    </div>
                </div>
            );
            case 'split_layout': return (
                <div key={index} className={`my-12 grid md:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                    <div className={`${block.reverseOnMobile ? 'md:order-last' : ''}`}><ContentRenderer blocks={block.left} /></div>
                    <div className={`${block.reverseOnMobile ? 'md:order-first' : ''}`}><ContentRenderer blocks={block.right} /></div>
                </div>
            );
            case 'bento_grid': return (
                <div key={index} className="my-16 grid grid-cols-1 md:grid-cols-12 gap-6">
                    {block.items && block.items.map((item, i) => (
                        <div key={i} className={`col-span-1 md:col-span-${item.span} ${item.className || ''} bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-colors shadow-lg`}>
                            <ContentRenderer blocks={item.content} compact={true} />
                        </div>
                    ))}
                </div>
            );
            default: return null;
        }
    };
    return <>{blocks.map(renderBlock)}</>;
};

const ChapterHeader: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
    <div className="relative my-32">
        <div className="flex items-center gap-8">
            <div className="flex-1 border-t border-border"></div>
            <div className="px-8 text-center">
                <div className="text-6xl mb-4">{chapter.icon}</div>
                <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">Chapter {chapter.number}</h2>
                <p className="text-4xl font-serif font-bold text-foreground whitespace-nowrap">{chapter.title}</p>
            </div>
            <div className="flex-1 border-t border-border"></div>
        </div>
    </div>
);

export const CaseStudyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = caseStudies.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div className="text-center py-32 text-foreground text-xl">Project not found.</div>;

    return (
        <div className="bg-transparent min-h-screen">
            <SEO
                title={project.title}
                description={project.subtitle}
                image={project.thumbnail}
                type="article"
            />

            {/* Immersive Hero */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group">
                                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
                            </Link>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-white text-foreground border border-border rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none mb-6 drop-shadow-lg">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
                                {project.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="py-20">
                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
                            </div>
                            <div className="flex flex-col gap-8 p-8 bg-card rounded-2xl border border-border">
                                <div>
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Role</h3>
                                    <p className="text-foreground font-medium">Lead Product Designer</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Timeline</h3>
                                    <p className="text-foreground font-medium">4 Weeks</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Tools</h3>
                                    <p className="text-foreground font-medium">Figma, React, Tailwind</p>
                                </div>
                            </div>
                        </div>

                        {project.impact && (
                            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border">
                                {project.impact.map((stat: ImpactStat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">{stat.value}</p>
                                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {project.prototype && (
                            <div className="mt-24 mb-12">
                                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{project.prototype.title}</h2>
                                <div className="aspect-video w-full bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
                                    <iframe className="w-full h-full" src={project.prototype.src} allowFullScreen></iframe>
                                </div>
                            </div>
                        )}
                    </div>

                    <article className="pb-32">
                        {project.content.map(chapter => (
                            <section key={chapter.number}>
                                <ChapterHeader chapter={chapter} />
                                <ContentRenderer blocks={chapter.blocks} />
                            </section>
                        ))}
                    </article>
                </div>
            </div>
        </div>
    );
};
