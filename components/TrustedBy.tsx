import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../data/aboutMe';

export const TrustedBy: React.FC = () => {
    return (
        <section className="w-full py-12 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-10 px-6 md:px-12 rounded-2xl border border-border bg-card">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                            Trusted by innovative teams
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                        {aboutMeData.experience.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative flex items-center justify-center"
                            >
                                {/* Dark logos by default (invert if they are white), color on hover */}
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="h-8 md:h-10 w-auto object-contain filter invert opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                                <span className="sr-only">{exp.company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
