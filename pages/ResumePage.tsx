import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { IconDownload, IconArrowLeft, IconMail, IconBrandLinkedin, IconWorld, IconPhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const ResumePage: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24 print:p-0 print:bg-white print:text-black">
            <SEO title="Resume" description="Professional resume of Chinmay Bhaise - Product Designer | UX Research & Accessibility Specialist" />

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
                        <h1 className="text-4xl sm:text-5xl font-bold mb-2 font-dosis print:text-black">CHINMAY BHAISE</h1>
                        <p className="text-xl text-primary font-medium mb-4 print:text-gray-800">Product Designer | UX Research & Accessibility Specialist</p>
                        <p className="text-sm text-muted-foreground mb-4 print:text-gray-600">London, Ontario, Canada | Open to Remote/Hybrid/Relocation</p>

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground print:text-gray-600">
                            <a href="mailto:bhaisechinmay15@gmail.com" className="flex items-center hover:text-primary transition-colors print:text-black print:no-underline">
                                <IconMail className="w-4 h-4 mr-2 print:hidden" />
                                bhaisechinmay15@gmail.com
                            </a>
                            <span className="hidden sm:inline print:inline">│</span>
                            <span className="flex items-center">
                                <IconPhone className="w-4 h-4 mr-2 print:hidden" />
                                (226) 998-6743
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

                    {/* Professional Summary */}
                    <section className="mb-10 print:mb-6">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-4 uppercase tracking-wider print:text-black print:border-gray-300">Professional Summary</h2>
                        <p className="text-muted-foreground print:text-gray-700 mb-4 leading-relaxed">
                            Results-driven Product Designer and Service Designer with 3+ years of experience creating accessible, human-centered digital experiences that deliver measurable business impact. Proven track record of driving <span className="font-semibold text-foreground print:text-black">35% faster workflows</span>, <span className="font-semibold text-foreground print:text-black">22% higher completion rates</span>, and <span className="font-semibold text-foreground print:text-black">40% fewer data errors</span> across SaaS, fintech, civic tech, and B2B platforms.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-100">
                                <p className="font-semibold text-foreground print:text-black mb-2">Core Philosophy</p>
                                <p className="text-muted-foreground print:text-gray-700">Accessibility isn't a limitation—it's a lens that forces us to design better for everyone.</p>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-lg print:bg-gray-100">
                                <p className="font-semibold text-foreground print:text-black mb-2">Specialized Expertise</p>
                                <p className="text-muted-foreground print:text-gray-700">End-to-end product design, WCAG 2.1 AA/AAA compliance, design systems (3+ libraries, 50+ components)</p>
                            </div>
                        </div>
                    </section>

                    {/* Work Experience */}
                    <section className="mb-10 print:mb-6">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Work Experience</h2>

                        <div className="space-y-8 print:space-y-6">
                            {/* C Designs */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">C Designs (Freelance)</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Aug 2023 – Present</span>
                                </div>
                                <p className="text-lg font-medium mb-2 italic text-foreground/80 print:text-black">Product Designer | Remote</p>
                                <p className="text-sm text-muted-foreground mb-3 print:text-gray-600">Independent design consultancy specializing in accessible, research-driven UX for SaaS, civic tech, and B2B clients</p>

                                {/* Key Metrics */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">22% ↑ Completion Rates</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">35% Faster Workflows</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">40% ↓ Data Errors</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">50+ UI Components</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li><span className="font-semibold">Cognitive Clarity (Insurance SaaS):</span> Redesigned 50+ field form using cognitive load theory — 35% faster completion (12→7.8 min), 40% fewer errors, 22% higher completion rate.</li>
                                    <li><span className="font-semibold">AccessTransit (Civic Tech):</span> Designed WCAG 2.1 AAA transit platform — 68% faster task completion, 95% success rate, 59-point NPS increase. <span className="text-primary print:text-black font-medium">🏆 1st Place CICan National Hackathon</span></li>
                                    <li><span className="font-semibold">ConnectDist (B2B Platform):</span> Relationship-first distribution platform — 90-second order completion, 5-7 hours saved/week per shop owner.</li>
                                    <li><span className="font-semibold">CICan Navigator:</span> Task-based IA redesign — 75% faster tasks, 40% less search reliance. <span className="text-primary print:text-black font-medium">🏆 National Hackathon Winner</span></li>
                                    <li>Conducted 20+ user research initiatives (15+ interviews, 8 usability tests, 30+ contextual inquiry participants)</li>
                                    <li>Built 3 custom design systems with atomic design principles (50+ reusable components each)</li>
                                </ul>
                            </div>

                            {/* Headout */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">Headout</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Oct 2022 – Aug 2023</span>
                                </div>
                                <p className="text-lg font-medium mb-2 italic text-foreground/80 print:text-black">Media Experience Designer | Remote (India-based)</p>
                                <p className="text-sm text-muted-foreground mb-3 print:text-gray-600">Global travel and entertainment marketplace serving millions of users across 30+ cities worldwide</p>

                                {/* Key Metrics */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">12% ↑ F1 Ticket Sales</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">60% ↑ Workflow Efficiency</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">50% ↑ Content Findability</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li><span className="font-semibold">Formula 1 Vertical Launch:</span> Designed interactive seat map with 3D track views — 12% sales increase (1,500+ additional bookings), 60% agent workflow improvement.</li>
                                    <li><span className="font-semibold">Media Asset Management:</span> Self-initiated service design project — reduced SLA from 15 days to 2-3 days, increased capacity from 2-3 to 10+ products/day.</li>
                                    <li><span className="font-semibold">Pod One Leadership:</span> Led team of 7 designers managing $700K+ daily GBV portfolio (Royal Albert Hall, Broadway, Vatican Museum).</li>
                                    <li>Managed 15+ digital campaigns with 18% average conversion improvement</li>
                                    <li>Maintained 40+ design system components, collaborated in Agile sprints with 8-person engineering team</li>
                                </ul>
                            </div>

                            {/* Bravvura Digital */}
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-primary print:text-black">Bravvura Digital</h3>
                                    <span className="text-sm font-medium text-muted-foreground print:text-gray-600">Jun 2021 – Sep 2021</span>
                                </div>
                                <p className="text-lg font-medium mb-2 italic text-foreground/80 print:text-black">Visual Experience Designer (Contract) | Remote (India-based)</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">8+ Apps Designed</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">20% ↑ User Engagement</span>
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded print:bg-gray-200 print:text-black">25% ↓ Design Iterations</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground print:text-gray-700 text-sm sm:text-base">
                                    <li>Designed responsive UIs for 8+ web/mobile applications serving 100,000+ combined users</li>
                                    <li>Created 30+ wireframes and 15+ user flows across 5 client projects</li>
                                    <li>Conducted 10+ usability sessions to validate design decisions</li>
                                    <li>Delivered 20+ interactive UI prototypes with WCAG 2.1 AA compliance</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10 print:mb-6">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Education</h2>

                        <div className="space-y-6 print:space-y-4">
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                    <h3 className="text-lg font-bold text-foreground print:text-black">Fanshawe College | London, Ontario, Canada</h3>
                                    <span className="text-sm text-muted-foreground print:text-gray-600">Sept 2024 – April 2025</span>
                                </div>
                                <p className="text-primary font-medium print:text-gray-700">Post-Graduate Certificate: User Experience Design</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground print:text-gray-700">
                                    <li><span className="font-semibold">GPA: 4.14/4.2 (Dean's List)</span></li>
                                    <li>Presidential Excellence Award at Graduation Exhibition</li>
                                    <li>🏆 1st Place - CICan Skills for Success National Hackathon (2025)</li>
                                    <li>📝 Published: "AI & Accessibility" - Canadian Design Network</li>
                                    <li>Mentorship from Natasha, Director of Design, Federal Government of Canada</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                    <h3 className="text-lg font-bold text-foreground print:text-black">MIT World Peace University | Pune, India</h3>
                                    <span className="text-sm text-muted-foreground print:text-gray-600">Jun 2018 – Jun 2021</span>
                                </div>
                                <p className="text-muted-foreground print:text-gray-700">Bachelor of Arts: Visual Arts</p>
                                <p className="text-sm text-muted-foreground print:text-gray-600 mt-1">Foundation in Visual Design, Typography, Color Theory, UX Certification</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications & Skills */}
                    <section className="print:break-inside-avoid">
                        <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 mb-6 uppercase tracking-wider print:text-black print:border-gray-300">Certifications & Key Skills</h2>

                        <div className="space-y-4 text-sm sm:text-base text-muted-foreground print:text-gray-700">
                            <div>
                                <span className="font-bold text-foreground print:text-black">Certifications:</span> Google UX Design Professional Certificate, Systems Thinking for Product Designers (NNG), Atlassian Agile Project Management, Microsoft Generative AI, Practical Accessibility for Designers (Deque), Advanced UX Research (IDF)
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Technical Skills & Tools:</span>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li><span className="font-medium text-foreground/80 print:text-black">Design:</span> Figma (Expert, 3+ years), Adobe XD, Sketch, Framer, Adobe Creative Suite</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Design Systems:</span> Atomic Design, Component Libraries (50+ components), Design Tokens, Documentation</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Research & Testing:</span> Google Analytics, Mixpanel, Hotjar, Optimal Workshop, UserTesting.com</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Accessibility:</span> WCAG 2.1 AA/AAA, AODA, Screen Reader Testing (NVDA, JAWS, VoiceOver)</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Information Architecture:</span> User Flows, Sitemaps, Card Sorting, Service Blueprinting</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Development:</span> HTML/CSS, React principles, Git/GitHub, Browser DevTools</li>
                                    <li><span className="font-medium text-foreground/80 print:text-black">Project Management:</span> Jira, Confluence, Azure DevOps, Notion, Agile/Scrum</li>
                                </ul>
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Methodologies:</span> Design Thinking (Double Diamond) • Lean UX • Jobs-to-be-Done • User-Centered Design • Service Design • Design Sprints
                            </div>

                            <div>
                                <span className="font-bold text-foreground print:text-black">Soft Skills:</span> Cross-Functional Collaboration • Stakeholder Presentations • Workshop Facilitation • Mentoring • Design Advocacy • Systems Thinking
                            </div>

                            <div className="pt-4 border-t border-border/50 print:border-gray-300">
                                <span className="font-bold text-foreground print:text-black">Languages:</span> English (Fluent) • Hindi (Native) • Marathi (Native)
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

