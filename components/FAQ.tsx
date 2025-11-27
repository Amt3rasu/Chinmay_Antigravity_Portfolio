import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPlus, IconMinus } from '@tabler/icons-react';

const faqs = [
    {
        question: "Who do you work with?",
        answer: "I primarily work with early-stage startups and scaling businesses in the B2B SaaS and Tech space. If you're building a complex product that needs to be intuitive, we're a good fit."
    },
    {
        question: "Do you only work with B2B SaaS Startups?",
        answer: "That's my core expertise, but I also work with B2C products, fintech, edtech, and Web3 projects. Good design principles apply universally."
    },
    {
        question: "What are your engagement models?",
        answer: "I offer two main models: Project-based (fixed scope and price) for specific deliverables, and Retainer-based (monthly fee) for ongoing design support and iteration."
    },
    {
        question: "How fast can you deliver?",
        answer: "Timelines depend on scope, but a typical landing page takes 1-2 weeks, while a full web app MVP might take 4-8 weeks. I prioritize quality and realistic deadlines."
    },
    {
        question: "What are your charges?",
        answer: "I don't do bloated agency pricing. My rates are competitive and based on the value delivered. Contact me for a custom quote tailored to your project's needs."
    },
    {
        question: "How do you handle communication?",
        answer: "I believe in transparency. We'll have a dedicated Slack/Discord channel for quick chats, weekly syncs for progress updates, and Loom videos for async design walkthroughs."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-16 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Frequently asked questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-xl bg-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <span className="text-primary flex-shrink-0">
                                    {openIndex === index ? <IconMinus /> : <IconPlus />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
