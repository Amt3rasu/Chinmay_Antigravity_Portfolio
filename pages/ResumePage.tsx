import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { IconDownload, IconArrowLeft, IconMail, IconBrandLinkedin, IconWorld } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const ResumePage: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24 print:p-0 print:bg-white print:text-black">
            <SEO title="Resume" description="Professional resume of Chinmay Bhaise - Product & Service Designer" />

            {/* Navigation & Actions - Hidden in Print */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 print:hidden">
                <div className="flex justify-between items-center">
                    <Link to="/about" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <IconArrowLeft className="w-5 h-5 mr-2" />
                        Back to About
                    </Link>
                    <Button onClick={handlePrint} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <IconDownload className="w-5 h-5 mr-2" />
                        Download PDF
                    </Button>
                </div>
            </div>

            {/* Resume Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 print:px-0 print:max-w-none">
                <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8 sm:p-12 shadow-sm print:shadow-none print:border-none print:p-0 print:bg-white">

                    {/* Header */}
                    <header className="text-center border-b border-border/50 pb-8 mb-8 print:border-gray-300 print:pb-6 print:mb-6">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-dosis print:text-black">Chinmay Bhaise</h1>
                        <p className="text-xl text-muted-foreground mb-4 print:text-gray-600">Product & Service Designer • Canada</p>

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground print:text-gray-600">
                            <a href="mailto:bhaisechinmay15@gmail.com" className="flex items-center hover:text-primary transition-colors print:text-black print:no-underline">
                                <IconMail className="w-4 h-4 mr-2 print:hidden" />
                                bhaisechinmay15@gmail.com
                            </a>
                            <span className="hidden sm:inline print:inline">│</span>
                            <span className="flex items-center">
                                (226) – 998-6743
                            </span>
                            <span className="hidden sm:inline print:inline">│</span>
                            <a href="https://www.linkedin.com/in/chinmay-bhaise/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors print:text-black print:no-underline">
                                <IconBrandLinkedin className="w-4 h-4 mr-2 print:hidden" />
                                LinkedIn
                            </a>
                            <span className="hidden sm:inline print:inline">│</span>
                            <Link to="/" className="flex items-center hover:text-primary transition-colors print:text-black print:no-underline">
                                <IconWorld className="w-4 h-4 mr-2 print:hidden" />
                                Portfolio
                            </Link>
                        </div>
                    </header>

                    {/* Work Experience */}
                    <section className="mb-10 print:mb-8">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Work Experience</h2>

                        <div className="space-y-8 print:space-y-6">
                            {/* C Designs */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">C Designs</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Jun 2022 – Present</span>
                                </div>
                                <p className="text-lg font-medium mb-3 italic text-foreground/80 print:text-black">Product Designer</p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li>Catalyzed significant UX transformations, driving a 22% increase in completion rates, 35% faster workflows, and 40% fewer data errors across diverse digital products through strategic user-centered design.</li>
                                    <li>Championed user-centricity by leading extensive qualitative and quantitative user research (interviews, contextual inquiry, usability testing, analytics) to develop 10+ inclusive personas and intricate journey/empathy maps, deeply informing product strategy.</li>
                                    <li>Delivered fully accessible, high-fidelity interactive prototypes in Figma for mobile, web, and kiosk interfaces, pioneering custom design systems and reusable UI patterns for consistent, scalable execution and efficient developer handoffs.</li>
                                    <li>Guaranteed robust usability and accessibility via rigorous testing methodologies (A/B testing, unmoderated, heuristic, accessibility audits - WCAG 2.1 AA), driving continuous, data-informed design iterations.</li>
                                    <li>Collaborated closely with cross-functional teams (Product Management, Engineering, Marketing, Sales, Senior Stakeholders) to define requirements, balance delivery goals, and influence strategic direction through compelling design rationale.</li>
                                </ul>
                            </div>

                            {/* Headout */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">Headout, India</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Oct 2022 – Aug 2023</span>
                                </div>
                                <p className="text-lg font-medium mb-3 italic text-foreground/80 print:text-black">Media Experience Designer</p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li>Elevated Formula 1 ticket sales by 12% and workflow efficiency by 60% through user-centered design of interactive seat map interfaces, translating complex data into actionable experiences.</li>
                                    <li>Orchestrated a media asset migration and optimization project, applying user-centered design to ensure a seamless and intuitive experience for content managers, increasing content findability by 50%.</li>
                                    <li>Managed end-to-end design lifecycle for digital campaigns, including user research, high-fidelity mockups, and developer handoffs, driving improvements that enhanced conversion rates.</li>
                                    <li>Contributed to maintaining and evolving existing design systems and collaborated effectively within Agile sprints, aligning design efforts with development timelines.</li>
                                </ul>
                            </div>

                            {/* Bravvura Digital */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">Bravvura Digital, India</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Jun 2021 – Sep 2021</span>
                                </div>
                                <p className="text-lg font-medium mb-3 italic text-foreground/80 print:text-black">Visual Experience Designer</p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li>Designed user interfaces for web and mobile applications that were visually appealing and user-friendly, consistently with brand identity.</li>
                                    <li>Created wireframes and UI prototypes, effectively communicating interaction and design ideas.</li>
                                    <li>Contributed to improving design through incorporating user feedback and best practices.</li>
                                    <li>Demonstrated excellent visual design skills with sensitivity to user-system interaction.</li>
                                    <li>Applied knowledge of HTML, CSS, and front-end principles through collaborative work.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10 print:mb-8">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Education</h2>

                        <div className="space-y-6 print:space-y-4">
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                    <h3 className="text-lg font-bold text-foreground print:text-black">Fanshawe College, Canada</h3>
                                    <span className="text-sm text-muted-foreground print:text-gray-600">Sept 2024 – April 2025</span>
                                </div>
                                <p className="text-muted-foreground print:text-gray-700">User Experience Design</p>
                            </div>

                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                    <h3 className="text-lg font-bold text-foreground print:text-black">MIT WPU, India</h3>
                                    <span className="text-sm text-muted-foreground print:text-gray-600">Jun 2018 – Jun 2021</span>
                                </div>
                                <p className="text-muted-foreground print:text-gray-700">Bachelor’s of Arts [Visual Arts]</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications & Skills */}
                    <section className="print:break-inside-avoid">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Certifications and Key Skills</h2>

                        <div className="space-y-4 text-sm sm:text-base text-muted-foreground print:text-gray-700">
                            <div>
                                <span className="font-bold text-foreground print:text-black">Certifications:</span> Systems Thinking for Product Designers, Atlassian Agile Project Management Professional, Certificate Generative AI by Microsoft, Practical Accessibility for Designers, Advanced User Experience Research, Evil by Design: Persuasion in UX
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Technical Skills and Tools:</span>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li><span className="font-medium text-foreground/80 print:text-black">UX/UI Design:</span> Figma (Expert), Adobe XD, Sketch, InVision, Miro, FigJam</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Design Systems:</span> Component Libraries, Style Guides, Pattern Libraries, Documentation</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Visual Design:</span> Adobe Creative Suite (Photoshop, Illustrator), Typography, Color Theory, Illustrations</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Information Architecture:</span> User Flows, Sitemaps, Card Sorting, Service Blueprinting, Content Audits</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Prototyping:</span> Interactive Prototypes (Lo-fi/Hi-fi), Wireframes, Mockups, AI-enhanced prototyping tools (e.g., Figma AI, conceptual understanding of UX Pilot/Google Stitch)</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Accessibility:</span> WCAG 2.1 Guidelines, Inclusive Design</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Development:</span> Basic HTML, CSS, understanding of React principles for design handoff</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Project & Collaboration Tools:</span> Jira, Confluence, Azure DevOps, Notion, Slack</li>
                                </ul>
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Design Methodologies:</span> Design Thinking • Double Diamond • Lean UX • User-Centered Design • Agile Design Process • Iterative Design • Responsive Design • Cross-Device Design • Design Sprints
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Soft Skills:</span> Cross-Functional Collaboration • Stakeholder Communication • Design Presentations • Design Leadership • Problem Solving
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
