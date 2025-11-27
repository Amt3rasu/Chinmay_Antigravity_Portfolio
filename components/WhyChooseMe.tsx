import React from 'react';
import { motion } from 'framer-motion';
import {
    IconUserCheck,
    IconRocket,
    IconDeviceLaptop,
    IconEyeCheck,
    IconClockBolt,
    IconChartBar
} from '@tabler/icons-react';

const benefits = [
    {
        icon: <IconUserCheck className="w-6 h-6" />,
        title: "Direct Collaboration",
        description: "Work directly with me—no middlemen, no miscommunication. Just pure, focused design partnership."
    },
    {
        icon: <IconRocket className="w-6 h-6" />,
        title: "Startup Ready",
        description: "I understand the pace of startups. I deliver scalable design systems that grow with your product."
    },
    {
        icon: <IconDeviceLaptop className="w-6 h-6" />,
        title: "SaaS & Product Expert",
        description: "Specialized in complex B2B and B2C interfaces. I turn complicated workflows into intuitive experiences."
    },
    {
        icon: <IconEyeCheck className="w-6 h-6" />,
        title: "Transparent Workflow",
        description: "Daily updates and visible progress. You'll always know exactly where your project stands."
    },
    {
        icon: <IconClockBolt className="w-6 h-6" />,
        title: "Timely Delivery",
        description: "Respect for deadlines is non-negotiable. I deliver high-quality work on schedule, every time."
    },
    {
        icon: <IconChartBar className="w-6 h-6" />,
        title: "Impact-Driven Design",
        description: "I don't just make things pretty. I design for conversion, retention, and measurable business success."
    }
];

export const WhyChooseMe: React.FC = () => {
    return (
        <section className="w-full py-16 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why choose me?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Partner with a designer who understands both user needs and business goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
