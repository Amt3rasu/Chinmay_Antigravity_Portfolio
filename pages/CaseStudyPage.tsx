import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import { ContentBlock, Chapter, ImpactStat, CaseStudy } from '../types';
import { SEO } from '../components/SEO';

/* ================================================================
   BLOCK CLASSIFICATION — determines which column a block belongs to
   ================================================================ */
const VISUAL_TYPES = new Set(['image', 'image_row', 'prototype']);
const isVisualBlock = (b: ContentBlock) => VISUAL_TYPES.has(b.type);

function splitBlocks(blocks: ContentBlock[]): { textBlocks: ContentBlock[]; visualBlocks: ContentBlock[] } {
    const textBlocks: ContentBlock[] = [];
    const visualBlocks: ContentBlock[] = [];

    for (const block of blocks) {
        if (block.type === 'image_row') {
            // Unstack image_row into individual images
            for (const img of block.images) {
                visualBlocks.push({ type: 'image', src: img.src, alt: img.alt, caption: img.caption });
            }
        } else if (isVisualBlock(block)) {
            visualBlocks.push(block);
        } else if (block.type === 'divider') {
            // skip dividers in split layout
        } else {
            textBlocks.push(block);
        }
    }
    return { textBlocks, visualBlocks };
}

/* ================================================================
   TEXT BLOCK RENDERER — for the sticky column
   ================================================================ */
const TextBlockRenderer: React.FC<{ block: ContentBlock; index: number }> = ({ block, index }) => {
    switch (block.type) {
        case 'h1':
            return <h1 key={index} className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-8 mb-4 tracking-tight">{block.content}</h1>;
        case 'h2':
            return <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-3">{block.content}</h2>;
        case 'h3':
            return <h3 key={index} className="text-xl font-bold text-foreground mt-6 mb-2">{block.content}</h3>;
        case 'p':
            return <p key={index} className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
        case 'list':
            return (
                <ul key={index} className="list-disc pl-5 my-4 space-y-2 text-base lg:text-lg text-muted-foreground">
                    {block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />)}
                </ul>
            );
        case 'aside':
            return (
                <aside key={index} className="my-6 p-6 bg-card rounded-2xl border-l-4 border-primary shadow-md">
                    <h3 className="text-lg font-bold flex items-center text-foreground mb-2"><span className="mr-2 text-xl">{block.icon}</span> {block.title}</h3>
                    <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed text-sm lg:text-base">{block.content}</div>
                </aside>
            );
        default: return null;
    }
};

/* ================================================================
   VISUAL BLOCK RENDERER — for the scrolling column
   ================================================================ */
const VisualBlockRenderer: React.FC<{ block: ContentBlock; index: number }> = ({ block, index }) => {
    switch (block.type) {
        case 'image':
            return (
                <div key={index} className="mb-6 relative z-[1]">
                    <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl"
                    />
                    {block.caption && <p className="mt-2 text-xs text-muted-foreground text-center italic">{block.caption}</p>}
                </div>
            );
        case 'prototype':
            return (
                <div key={index} className="mb-6 relative z-[1]">
                    <div className="aspect-[16/10] w-full bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                        <iframe className="w-full h-full" src={block.src} allowFullScreen />
                    </div>
                </div>
            );
        default: return null;
    }
};

/* ================================================================
   SPLIT SECTION — one chapter rendered as sticky-scroll 50/50
   ================================================================ */
const SplitSection: React.FC<{
    textContent: React.ReactNode;
    visualContent: React.ReactNode;
    imageOnLeft: boolean;
    chapterHeader?: React.ReactNode;
}> = ({ textContent, visualContent, imageOnLeft, chapterHeader }) => {
    const visualCol = (
        <div className="w-full md:w-1/2 relative z-[1]">
            {visualContent}
        </div>
    );

    const textCol = (
        <div className="w-full md:w-1/2">
            <div className="md:sticky md:top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto py-4 px-2 lg:px-8">
                {chapterHeader}
                {textContent}
            </div>
        </div>
    );

    return (
        <section className="flex flex-col md:flex-row gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 py-8 md:py-16">
            {imageOnLeft ? (
                <>{visualCol}{textCol}</>
            ) : (
                <>{textCol}{visualCol}</>
            )}
        </section>
    );
};

/* ================================================================
   CHAPTER HEADER (inline, compact for split layout)
   ================================================================ */
const InlineChapterHeader: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
    <div className="mb-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{chapter.icon}</span>
            <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">Chapter {chapter.number}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{chapter.title}</h2>
    </div>
);

/* ================================================================
   OVERVIEW SECTION (Section 0) — Figma left, Overview+Stats right
   ================================================================ */
const OverviewSection: React.FC<{ project: CaseStudy }> = ({ project }) => {
    const figmaCol = (
        <div className="w-full md:w-[55%] relative z-[1]">
            {project.prototype ? (
                <div className="sticky top-8">
                    <div className="aspect-[16/10] w-full bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                        <iframe className="w-full h-full" src={project.prototype.src} allowFullScreen />
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground text-center">{project.prototype.title || 'Explore the Design File'}</p>
                </div>
            ) : (
                <div className="aspect-video w-full bg-muted/20 rounded-2xl flex items-center justify-center text-muted-foreground text-sm border border-border border-dashed">
                    Design file preview
                </div>
            )}
        </div>
    );

    const infoCol = (
        <div className="w-full md:w-[45%]">
            <div className="md:sticky md:top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto py-4 px-2 lg:px-4">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">{project.overview}</p>

                {/* Meta info */}
                <div className="flex flex-col gap-6 p-6 bg-card rounded-2xl border border-border mb-8">
                    {project.role && (
                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Role</h3>
                            <p className="text-foreground font-medium text-sm">{project.role}</p>
                        </div>
                    )}
                    {project.timeline && (
                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Timeline</h3>
                            <p className="text-foreground font-medium text-sm">{project.timeline}</p>
                        </div>
                    )}
                    {project.tools && project.tools.length > 0 && (
                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Tools</h3>
                            <p className="text-foreground font-medium text-sm">{project.tools.join(', ')}</p>
                        </div>
                    )}
                </div>

                {/* Impact stats */}
                {project.impact && (
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                        {project.impact.map((stat: ImpactStat, i) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                                <p className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-1">{stat.value}</p>
                                <p className="text-[10px] lg:text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <section className="flex flex-col md:flex-row gap-6 lg:gap-10 px-4 md:px-8 lg:px-12 py-8 md:py-16">
            {figmaCol}
            {infoCol}
        </section>
    );
};

/* ================================================================
   LEGACY CONTENT RENDERER — for gallery (ui-designs) only
   ================================================================ */
const ContentRenderer: React.FC<{ blocks: ContentBlock[]; compact?: boolean }> = ({ blocks, compact = false }) => {
    if (!blocks) return null;
    const renderBlock = (block: ContentBlock, index: number) => {
        switch (block.type) {
            case 'h1': return <h1 key={index} className={`px-8 md:px-14 lg:px-20 max-w-4xl text-3xl md:text-4xl font-serif font-bold text-foreground ${compact ? 'mt-0 mb-2' : 'mt-16 mb-6'} tracking-tight`}>{block.content}</h1>;
            case 'h2': return <h2 key={index} className={`px-8 md:px-14 lg:px-20 max-w-4xl text-2xl font-bold text-foreground ${compact ? 'mt-0 mb-4' : 'mt-14 mb-4'}`}>{block.content}</h2>;
            case 'h3': return <h3 key={index} className={`px-8 md:px-14 lg:px-20 max-w-4xl text-xl font-bold text-foreground ${compact ? 'mt-0 mb-3' : 'mt-10 mb-3'}`}>{block.content}</h3>;
            case 'p': return <p key={index} className={`px-8 md:px-14 lg:px-20 max-w-3xl text-lg text-muted-foreground ${compact ? 'mb-2' : 'mb-8'} leading-relaxed`} dangerouslySetInnerHTML={{ __html: block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
            case 'image': return (<div key={index} className="w-full px-3 md:px-6 lg:px-8 my-12 relative z-[1] flex justify-center"><img src={block.src} alt={block.alt} className={`max-w-full max-h-[85vh] object-contain rounded-2xl md:rounded-[2rem] shadow-2xl ${block.className || ''}`} />{block.caption && <p className="mt-4 text-sm text-muted-foreground text-center italic">{block.caption}</p>}</div>);
            case 'image_row': return (<div key={index} className="w-full my-12 relative z-[1]"><div className={`px-3 md:px-6 lg:px-8 flex flex-col md:flex-row gap-4 md:gap-6 items-stretch`}>{block.images.map((img, i) => (<div key={i} className="flex-1 min-w-0 flex flex-col"><div className="flex-1 flex items-center justify-center bg-muted/30 rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-xl max-h-[70vh]"><img src={img.src} alt={img.alt} className="max-w-full max-h-[70vh] object-contain" /></div>{img.caption && <p className="mt-3 text-sm text-muted-foreground text-center italic">{img.caption}</p>}</div>))}</div>{block.caption && <p className="mt-4 px-8 md:px-14 lg:px-20 text-sm text-muted-foreground text-center italic">{block.caption}</p>}</div>);
            case 'divider': return <hr key={index} className="mx-8 md:mx-14 lg:mx-20 my-20 border-border" />;
            case 'list': return (<ul key={index} className={`px-8 md:px-14 lg:px-20 max-w-3xl list-disc pl-5 ${compact ? 'my-2' : 'my-6'} space-y-3 text-lg text-muted-foreground`}>{block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />)}</ul>);
            case 'aside': return (<aside key={index} className={`mx-8 md:mx-14 lg:mx-20 max-w-3xl ${compact ? 'my-4' : 'my-10'} p-8 bg-card rounded-2xl border-l-4 border-primary shadow-lg`}><h3 className="text-xl font-bold flex items-center text-foreground mb-3"><span className="mr-3 text-2xl">{block.icon}</span> {block.title}</h3><div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{block.content}</div></aside>);
            case 'prototype': return (<div key={index} className="px-8 md:px-14 lg:px-20 my-16 relative z-[1]"><h2 className="text-2xl font-bold text-center mb-6 text-foreground">{block.title}</h2><div className="aspect-video w-full bg-card rounded-xl shadow-2xl overflow-hidden border border-border"><iframe className="w-full h-full" src={block.src} allowFullScreen /></div></div>);
            default: return null;
        }
    };
    return <>{blocks.map(renderBlock)}</>;
};

/* ================================================================
   CASE STUDY PAGE
   ================================================================ */
export const CaseStudyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = caseStudies.find(p => p.id === id);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!project) return <div className="text-center py-32 text-foreground text-xl">Project not found.</div>;

    const isGallery = project.id === 'ui-designs';
    const isUxCaseStudy = !isGallery && !project.externalUrl;

    return (
        <div className="bg-transparent min-h-screen">
            <SEO title={project.title} description={project.subtitle} image={project.thumbnail} type="article" caseStudy={project} />

            {/* Hero */}
            <div className="relative h-[85vh] w-full overflow-hidden z-[1]">
                <div className="absolute inset-0">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-14 lg:px-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group">
                            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
                        </Link>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-sm font-medium bg-white text-foreground border border-border rounded-full">{tag}</span>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-none mb-6 drop-shadow-lg">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">{project.subtitle}</p>
                    </motion.div>
                </div>
            </div>

            {/* ---- UX CASE STUDY: Sticky-Scroll Split Layout ---- */}
            {isUxCaseStudy && (
                <div className="w-full">
                    {/* Section 0: Overview — Figma left, info right */}
                    <OverviewSection project={project} />

                    {/* Chapters: alternating split layout */}
                    <article className="pb-32 w-full">
                        {project.content.map((chapter, chapterIdx) => {
                            const { textBlocks, visualBlocks } = splitBlocks(chapter.blocks);
                            // Alternate: even chapters → visuals on left, odd → visuals on right
                            const imageOnLeft = chapterIdx % 2 === 0;

                            return (
                                <SplitSection
                                    key={chapter.number}
                                    imageOnLeft={imageOnLeft}
                                    chapterHeader={<InlineChapterHeader chapter={chapter} />}
                                    textContent={
                                        <>
                                            {textBlocks.map((block, i) => (
                                                <TextBlockRenderer key={i} block={block} index={i} />
                                            ))}
                                        </>
                                    }
                                    visualContent={
                                        visualBlocks.length > 0 ? (
                                            <>
                                                {visualBlocks.map((block, i) => (
                                                    <VisualBlockRenderer key={i} block={block} index={i} />
                                                ))}
                                            </>
                                        ) : (
                                            <div className="w-full min-h-[200px] bg-muted/10 rounded-2xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">
                                                Visual placeholder
                                            </div>
                                        )
                                    }
                                />
                            );
                        })}
                    </article>
                </div>
            )}

            {/* ---- GALLERY: Legacy full-width layout (ui-designs) ---- */}
            {isGallery && (
                <div className="w-full">
                    <article className="pb-32 w-full">
                        {project.content.map(chapter => (
                            <section key={chapter.number} className="mb-16">
                                <ContentRenderer blocks={chapter.blocks} />
                            </section>
                        ))}
                    </article>
                </div>
            )}
        </div>
    );
};
