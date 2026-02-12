import React from 'react';
import { motion } from 'framer-motion';
import { IconDeviceMobile, IconBrowser, IconBulb } from '@tabler/icons-react';


const services = [
    {
        title: "Product Design",
        description: "End-to-end design for complex applications. I turn messy problems into elegant, user-centric solutions.",
        icon: <IconDeviceMobile className="w-8 h-8" />,
        tags: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Mobile Apps", "SaaS Platforms"]
    },
    {
        title: "Web Design & Dev",
        description: "High-converting websites that look stunning and perform perfectly. Built for speed and SEO.",
        icon: <IconBrowser className="w-8 h-8" />,
        tags: ["Landing Pages", "Portfolios", "Framer / React", "SEO Optimization", "CMS Setup", "Responsive Layouts"]
    },
    {
        title: "Design Consulting",
        description: "Expert guidance for your design challenges. From strategy to execution, I help you make the right decisions.",
        icon: <IconBulb className="w-8 h-8" />,
        tags: ["Product Strategy", "UX Audits", "Design Systems", "Workshop Facilitation", "Team Mentoring"]
    }
];

export const Services: React.FC = () => {
    return (
        <section className="w-full py-16 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What I Offer
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive design solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
                    {/* Large Card - First Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-12 md:col-span-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                            {services[0].icon}
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-3">
                            {services[0].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {services[0].description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {services[0].tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Medium Card - Second Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="col-span-12 md:col-span-4 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                            {services[1].icon}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            {services[1].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {services[1].description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {services[1].tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Full Width Card - Third Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="col-span-12 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                            {services[2].icon}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                            {services[2].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {services[2].description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {services[2].tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
