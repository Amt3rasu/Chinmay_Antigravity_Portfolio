import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutMeData } from '../data/aboutMe';
import { BriefcaseIcon, GraduationCapIcon, QuoteIcon, LinkedInIcon } from '../components/Icons';
import { IconLayout2, IconBriefcase, IconPalette, IconDeviceMobile, IconZoomQuestion, IconGitMerge, IconTrophy, IconNews } from '@tabler/icons-react';

import { SEO } from '../components/SEO';

const iconMap: Record<string, React.ComponentType<any>> = {
    IconLayout2,
    IconGitMerge,
    IconBriefcase,
    IconPalette,
    IconDeviceMobile,
    IconZoomQuestion
};

export const AboutPage: React.FC = () => {
    return (
        <div className="bg-transparent pt-24 pb-16 sm:pt-32 sm:pb-24">
            <SEO title="About Me" description="Learn more about my background, experience, and design philosophy." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Profile Header - Modern */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative inline-block"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                            <img src={aboutMeData.profileImage} alt="Portrait of Chinmay Bhaise" className="relative w-48 h-48 rounded-full shadow-2xl object-cover object-top border-4 border-background" />
                        </motion.div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-5xl sm:text-7xl font-bold text-foreground tracking-tight"
                        >
                            {aboutMeData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-2xl text-primary font-medium"
                        >
                            {aboutMeData.title}
                        </motion.p>
                    </div>

                    {/* What excites me - Modern Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-24 p-8 md:p-12 bg-card rounded-3xl border border-border text-center max-w-3xl mx-auto shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-foreground mb-6">What excites me most</h2>
                        <ul className="space-y-3 text-lg text-muted-foreground">
                            {aboutMeData.whatExcitesMe.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link to="/resume" className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-lg">
                                View Resume
                            </Link>
                        </div>
                    </motion.div>

                    {/* Journey Section - Modern Split */}
                    <div className="mb-24 grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-card border border-border"
                        >
                            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <BriefcaseIcon className="w-6 h-6" />
                                </div>
                                Experience
                            </h3>
                            <div className="space-y-8">
                                {aboutMeData.experience.map((exp, i) => (
                                    <div key={i} className="relative pl-8 border-l-2 border-primary/20">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card" />
                                        <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                                        <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
                                            {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-card border border-border h-fit"
                        >
                            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <GraduationCapIcon className="w-6 h-6" />
                                </div>
                                Education
                            </h3>
                            <div className="space-y-8">
                                {aboutMeData.education.map((edu, i) => (
                                    <div key={i} className="relative pl-8 border-l-2 border-primary/20">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card" />
                                        <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                                        <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
                                            {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Bento Grid */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-bold text-foreground text-center mb-12">My Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {aboutMeData.skills.map((skill, i) => {
                                const Icon = iconMap[skill.iconName];
                                const isWide = i === 0 || i === 3 || i === 4;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`${isWide ? 'md:col-span-2' : 'md:col-span-1'} p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            {Icon && (
                                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{skill.name}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Toolkit Bento Grid */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-bold text-foreground text-center mb-12">My Toolkit</h2>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            {aboutMeData.tools.map((tool, i) => {
                                const isLarge = i < 2; // First 2 tools are large
                                return (
                                    <motion.div
                                        key={tool.name}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`${isLarge ? 'col-span-2 md:col-span-3 row-span-2' : 'col-span-1 md:col-span-2'} 
                                            p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col items-center justify-center text-center`}
                                    >
                                        {tool.iconUrl ? (
                                            <div className={`relative ${isLarge ? 'w-20 h-20' : 'w-12 h-12'} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                                {/* Colored Icon (Bottom) - Visible on Hover */}
                                                {tool.color === 'original' ? (
                                                    <img
                                                        src={tool.coloredIconUrl || tool.iconUrl}
                                                        alt={`${tool.name} logo`}
                                                        className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    />
                                                ) : (
                                                    <div
                                                        className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                                        style={{
                                                            backgroundColor: tool.color || 'white',
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
                                                )}
                                                {/* Monochrome Icon (Top) - Fades out on Hover */}
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
                                            <div className={`${isLarge ? 'w-20 h-20 text-2xl' : 'w-12 h-12 text-lg'} mb-4 flex items-center justify-center bg-muted rounded-xl font-bold text-muted-foreground`}>
                                                {tool.name.substring(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                        <span className={`${isLarge ? 'text-xl' : 'text-sm'} font-medium text-muted-foreground group-hover:text-foreground transition-colors`}>
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Awards Bento Grid */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-bold text-foreground text-center mb-12">Awards & Publications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {aboutMeData.awards.map((award, i) => (
                                <motion.a
                                    key={i}
                                    href={award.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                            {award.title.includes("Article") ? <IconNews className="w-8 h-8" /> : <IconTrophy className="w-8 h-8" />}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                            {award.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {award.title}
                                    </h3>
                                    <p className="text-primary font-medium mb-4">{award.organization}</p>
                                    <p className="text-muted-foreground leading-relaxed flex-grow">
                                        {award.description}
                                    </p>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials - Modern Grid */}
                    <div>
                        <h2 className="text-4xl font-bold text-foreground text-center mb-12">What Others Say</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {aboutMeData.references.map((ref, i) => (
                                <motion.figure
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-card rounded-3xl border border-border relative overflow-hidden"
                                >
                                    {/* Fixed Quote Icon Overlap: Moved to background with opacity and z-index */}
                                    <QuoteIcon className="absolute top-4 right-4 w-16 h-16 text-primary/5 z-0" />
                                    <blockquote className="relative z-10 text-lg text-muted-foreground mb-6 leading-relaxed">
                                        "{ref.quote}"
                                    </blockquote>
                                    <figcaption className="relative z-10 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                            {ref.author[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">{ref.author}</div>
                                            <div className="text-sm text-primary">{ref.title}</div>
                                        </div>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
