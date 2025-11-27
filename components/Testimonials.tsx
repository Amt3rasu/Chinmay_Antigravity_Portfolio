import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../data/aboutMe';
import { IconQuote } from '@tabler/icons-react';

export const Testimonials: React.FC = () => {
    // Duplicate references to create a seamless loop if there are few
    const testimonials = [...aboutMeData.references, ...aboutMeData.references, ...aboutMeData.references];

    return (
        <section className="w-full py-16 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Trusted by global startup founders
                </h2>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-gradient">
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Slow scroll
                    }}
                >
                    {testimonials.map((ref, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[500px] md:w-[700px] p-10 rounded-2xl bg-card border border-border relative"
                        >
                            <IconQuote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10 pt-12">
                                "{ref.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">
                                    {ref.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">{ref.author}</h4>
                                    <p className="text-sm text-muted-foreground">{ref.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
