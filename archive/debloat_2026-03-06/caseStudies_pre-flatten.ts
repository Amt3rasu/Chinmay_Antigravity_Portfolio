import { CaseStudy, Chapter, ContentBlock } from '../types';

export const caseStudies: CaseStudy[] = [
    {
        id: 'flamey-ai',
        title: 'Flamey AI [Sequence Builder]',
        subtitle: 'Lead Designer — Research, Strategy, UX/UI, Prototyping',
        category: 'Product Design · AI · SaaS',
        thumbnail: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=Flamey+Hero',
        heroImage: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=Flamey+Hero',
        overview: 'Flamey is an AI-powered outbound sales platform. The Sequence Builder — its core workflow — was hemorrhaging users. I had 4 days to redesign it from a lifeless form into a guided experience where AI felt like a creative partner, not a gimmick.',
        role: 'Lead Product Designer',
        timeline: '4 Days',
        tools: ['Figma', 'FigJam', 'Chakra UI'],
        tags: ['AI', 'SaaS', 'Product Design', 'B2B'],
        impact: [
            { value: '~5 min', label: 'Creation Time (was 30+ min)' },
            { value: '4', label: 'Entry Points (vs 1)' },
            { value: 'AA', label: 'WCAG 2.1 Compliance' },
        ],
        highlights: [
            "Reduced sequence creation time from 30+ minutes to under 5 minutes.",
            "Designed 4 persona-driven entry points replacing a single generic form.",
            "Created a visual timeline preview that eliminated user fear before launching campaigns."
        ],
        content: [
            {
                number: 1, icon: '📋', title: 'The Brief',
                blocks: [
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 7,
                                content: [
                                    { type: 'h2', content: 'The Brief & Constraints' },
                                    { type: 'p', content: 'Flamey\'s product team came to me with a clear signal: **the Sequence Builder had the highest drop-off rate in the platform.** Users would open it, stare at the form, and leave. The AI toggle — their flagship feature — had single-digit engagement.' },
                                    { type: 'h3', content: 'What I Was Asked' },
                                    { type: 'p', content: 'Redesign the Sequence Builder end-to-end. Make the AI feel like a genuine creative partner, not a hidden toggle. Deliver high-fidelity prototypes in **4 working days**.' },
                                    { type: 'h3', content: 'The Constraints' },
                                    {
                                        type: 'list', items: [
                                            '**4-day timeline** — No room for usability testing or iteration sprints.',
                                            '**Existing Chakra UI** — Must work within the current design system, no new components.',
                                            '**3 user personas** with conflicting needs — SDRs want speed, AEs want control, Managers want consistency.',
                                            '**No user access** — PM couldn\'t arrange interviews in time. I had to rely on competitive research and persona mapping.'
                                        ]
                                    }
                                ]
                            },
                            {
                                span: 5,
                                content: [
                                    { type: 'image', src: 'https://placehold.co/800x600/2a2a2a/ffffff?text=Old+Sequence+Builder', alt: 'The existing Sequence Builder — a dense wall of form fields with a hidden AI toggle', caption: 'The old builder: every configuration option on one screen. AI toggle buried at the bottom.' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery',
                blocks: [
                    { type: 'h2', content: 'Research Approach' },
                    { type: 'p', content: 'With no user access and a 4-day window, I needed fast, high-signal research. I chose two methods: a **competitive teardown** of 3 direct competitors and **persona-driven journey mapping** based on the PM\'s qualitative notes.' },
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 12,
                                content: [
                                    { type: 'h3', content: 'Competitive Teardown' },
                                    { type: 'p', content: 'I spent Day 1 building sequences in Apollo.io, 11x.ai, and Attio. Not just screenshots — I actually created campaigns, measured how long each took, and documented every friction point.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🔵', title: 'Apollo.io', content: '**22 minutes** to create a sequence. Strong template library, but AI felt bolted-on. No conversational interface.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🟣', title: '11x.ai', content: '**AI-first** approach. Fast creation but users felt out of control. "It just does things" — no preview, no trust.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🟢', title: 'Attio', content: '**Clean UI** but shallow AI integration. The design system was excellent; the workflow logic was not.' }
                                ]
                            },
                            {
                                span: 12,
                                content: [
                                    { type: 'h3', content: 'Key Insight' },
                                    { type: 'p', content: 'Every competitor fell into one of two traps: **AI-first (fast but scary)** or **Form-first (safe but slow)**. Nobody had cracked the middle: **AI as a collaborative partner where the user stays in control.**' }
                                ]
                            }
                        ]
                    },
                    { type: 'h2', content: 'Persona Mapping' },
                    { type: 'p', content: 'Using the PM\'s interview notes and support tickets, I mapped three distinct user personas. This was the moment the design direction crystallized — one-size-fits-all was the root cause of failure.' },
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '⚡', title: 'SDR Persona', content: '**"Just help me launch."**\nGoal: Speed & volume.\nMental model: "Tell me what works and let me go."' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🧠', title: 'AE Persona', content: '**"I need control."**\nGoal: Precision per account.\nMental model: "Start me somewhere, but let me drive."' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🛡️', title: 'Manager Persona', content: '**"Consistency is key."**\nGoal: Scale & quality control.\nMental model: "What worked last quarter should be reusable."' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                number: 3, icon: '🧭', title: 'Framing',
                blocks: [
                    { type: 'h2', content: 'Synthesizing Research into Principles' },
                    { type: 'p', content: 'Before sketching a single screen, I distilled the research into 4 design principles. These became the decision-making framework for every UI choice that followed.' },
                    {
                        type: 'split_layout',
                        left: [
                            { type: 'aside', icon: '🤖', title: 'AI as co-pilot, not autopilot', content: 'The AI asks before it acts. Users stay in control, but the blank page is eliminated. This directly addresses 11x.ai\'s trust problem.' },
                            { type: 'aside', icon: '👁️', title: 'Show before committing', content: 'Visual timeline preview eliminates the fear of "what will this send?" — the #1 anxiety from support tickets.' }
                        ],
                        right: [
                            { type: 'aside', icon: '🧠', title: 'Progressive disclosure', content: 'Only what\'s needed appears. Complex settings are accessible but never in the way. This solves the "wall of text" problem in the old builder.' },
                            { type: 'aside', icon: '⚡', title: 'Respect expertise levels', content: 'Entry points adapt to the user — SDRs need guidance, Managers need scale. One door for everyone was the root cause of failure.' }
                        ]
                    },
                    { type: 'h3', content: 'The Design Audit' },
                    { type: 'p', content: 'I also conducted a heuristic evaluation of the existing builder. Three critical findings:' },
                    {
                        type: 'list', items: [
                            '**Information Architecture**: All configuration steps presented simultaneously → cognitive overload. Nielsen\'s "Recognition over Recall" violated.',
                            '**AI Discoverability**: The AI toggle was below the fold, with no explanation of what it did. Users didn\'t know it existed.',
                            '**Feedback & Trust**: No preview of what the AI would generate → users were afraid to commit. Zero progressive feedback.'
                        ]
                    }
                ]
            },
            {
                number: 4, icon: '🔀', title: 'Exploration',
                blocks: [
                    { type: 'h2', content: 'Alternatives Considered & Trade-offs' },
                    { type: 'p', content: 'I explored three structural approaches on Day 2. Each had clear trade-offs. The decision wasn\'t obvious — here\'s the reasoning.' },
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 4,
                                content: [
                                    { type: 'h3', content: 'Option A: Step Wizard' },
                                    { type: 'p', content: 'Linear step-by-step flow (Step 1 → 2 → 3). Simple, familiar.' },
                                    { type: 'aside', icon: '✅', title: 'Pros', content: 'Low cognitive load. Easy to implement in Chakra UI.' },
                                    { type: 'aside', icon: '❌', title: 'Cons', content: 'Forced linearity frustrates power users (AEs). Doesn\'t let AI adapt to context.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'h3', content: 'Option B: AI-First Canvas' },
                                    { type: 'p', content: 'Full-screen chat with AI that generates sequences. User refines after.' },
                                    { type: 'aside', icon: '✅', title: 'Pros', content: 'Fastest creation. Maximizes AI utility.' },
                                    { type: 'aside', icon: '❌', title: 'Cons', content: '11x.ai proved this scares users. No control = no trust.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'h3', content: 'Option C: Hub + Spokes ✓' },
                                    { type: 'p', content: 'Central hub with 4 entry points. AI integrated as one path, not the only path.' },
                                    { type: 'aside', icon: '✅', title: 'Pros', content: 'Respects all 3 personas. AI is accessible but optional. Extensible.' },
                                    { type: 'aside', icon: '⚠️', title: 'Risk', content: 'More complex IA. Requires clear visual hierarchy to avoid choice paralysis.' }
                                ]
                            },
                            {
                                span: 12,
                                content: [
                                    { type: 'h3', content: 'Decision: Hub + Spokes' },
                                    { type: 'p', content: 'I chose Option C because it was the only approach that respected all three personas without forcing a single workflow. The risk of choice paralysis was mitigated by limiting entry points to exactly 4, each with a clear icon, label, and one-line description.' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                number: 5, icon: '🎯', title: 'Solution',
                blocks: [
                    { type: 'h2', content: 'The Final Design' },
                    { type: 'p', content: 'The redesign makes one fundamental shift: it reframes the Sequence Builder from a **form** into a **guided journey** with the AI as a creative partner.' },
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 5,
                                content: [
                                    { type: 'h3', content: '4 Entry Points' },
                                    { type: 'p', content: 'The first screen is no longer a blank canvas. It\'s a structured choice that respects each persona\'s starting point:' },
                                    {
                                        type: 'list', items: [
                                            '🤖 **AI-Assisted**',
                                            '📋 **Templates**',
                                            '📎 **Duplicate**',
                                            '✏️ **Manual**'
                                        ]
                                    }
                                ]
                            },
                            {
                                span: 7,
                                content: [
                                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=Entry+Points+UI', alt: 'Clean UI showing 4 distinct entry point cards' }
                                ]
                            },
                            {
                                span: 7,
                                content: [
                                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=AI+Chat+Interface', alt: 'Conversational AI building a sequence step by step' }
                                ]
                            },
                            {
                                span: 5,
                                content: [
                                    { type: 'h3', content: 'The AI Conversation' },
                                    { type: 'p', content: 'Instead of a form asking "How many steps?", the AI asks strategic questions one by one. This builds a brief before generating.' }
                                ]
                            },
                            {
                                span: 12,
                                content: [
                                    { type: 'h3', content: 'The Trust Moment: Visual Timeline Preview' },
                                    { type: 'image', src: 'https://placehold.co/1200x500/222/fff?text=Visual+Timeline+Preview', alt: 'Visual Timeline Preview showing sequence pacing' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                number: 6, icon: '📊', title: 'Validation',
                blocks: [
                    { type: 'h2', content: 'Impact Metrics' },
                    {
                        type: 'bento_grid',
                        items: [
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '⏱️', title: '30m → ~5m', content: 'Projected creation time reduction.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '🤖', title: 'AI Engagement', content: 'Significant increase in AI feature discoverability.' }
                                ]
                            },
                            {
                                span: 4,
                                content: [
                                    { type: 'aside', icon: '📦', title: 'Efficiency', content: '32 Deliverables in 4 days.' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'leaf-dex',
        title: 'Leaf DEX [Design System]',
        subtitle: 'Lead Designer — Research, Strategy, Component Architecture, UX/UI',
        category: 'Design System · FinTech · Web3',
        thumbnail: 'https://placehold.co/1200x800/00facc/0a0e27?text=Leaf+Hero',
        heroImage: 'https://placehold.co/1200x800/00facc/0a0e27?text=Leaf+Hero',
        overview: 'Leaf DEX is a concept decentralized exchange — designed from zero to a production-ready design system in 7 days.',
        role: 'Lead Product Designer',
        timeline: '7 Days',
        tools: ['Figma', 'Auto-Layout 5.0', 'Tailwind'],
        tags: ['Design System', 'FinTech', 'Web3'],
        impact: [
            { value: '117', label: 'Components' },
            { value: 'AAA', label: 'Accessibility' }
        ],
        highlights: [
            "Built a complete atomic design system in 7 days.",
            "Achieved WCAG 2.1 AAA compliance."
        ],
        content: [
            {
                number: 1, icon: '🏗️', title: 'Architecture',
                blocks: [
                    { type: 'h2', content: 'Atomic Design' },
                    { type: 'p', content: 'The system follows atomic design principles: Atoms → Molecules → Organisms.' },
                    { type: 'image', src: 'https://placehold.co/1200x500/111/00facc?text=Component+System+Visual', alt: 'Leaf DEX Component Library' }
                ]
            }
        ]
    },
    {
        id: 'access-transit',
        title: 'AccessTransit [ZipTrains]',
        category: 'Service Design · Complex Systems · UX/UI',
        subtitle: 'Lead Designer — Ecosystem Strategy, Service Blueprinting, UX/UI',
        thumbnail: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
        heroImage: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
        overview: 'AccessTransit transforms public transport from a gamble into a guarantee for riders with disabilities.',
        tags: ['Service Design', 'Systems Thinking', 'UX/UI'],
        role: 'Lead Service Designer',
        timeline: '8 Weeks (Concept)',
        tools: ['Figma', 'Miro'],
        impact: [
            { value: '68%', label: 'Kiosk Speed' },
            { value: 'AAA', label: 'Compliance' }
        ],
        highlights: [
            "Cohesive ecosystem across mobile, web, and kiosk.",
            "Reduced kiosk purchase time by 68%."
        ],
        content: [
            {
                number: 1, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'Multi-Surface Ecosystem' },
                    { type: 'p', content: 'Context follows the user from their living room to the platform.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d7741e88a374498b924f59ab592fb439~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups%201x.png', alt: 'Mobile app mockup' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_613aab198f9c48cf938fe84a19db3b76~mv2.png/v1/fill/w_461,h_448,fp_0.50_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025.png', alt: 'Kiosk UI' }
                ]
            }
        ]
    },
    {
        id: 'connect-dist',
        title: 'ConnectDist',
        category: 'Product Strategy · B2B Commerce',
        subtitle: 'Lead Product Manager & Designer',
        thumbnail: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png',
        heroImage: 'https://static.wixstatic.com/media/9a7729_c78319cf9cf743dda2836e075a9b6c04~mv2.jpg/v1/fill/w_1634,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Person%20Writing%20on%20Paper%202.jpg',
        overview: 'ConnectDist modernizes the fragmented B2B supply chain.',
        tags: ['Product Management', 'SaaS', 'UX Research'],
        role: 'PM & UX Designer',
        timeline: '7 Weeks',
        tools: ['Figma', 'Miro'],
        impact: [
            { value: '5-7 Hrs', label: 'Time Saved' },
            { value: '90 Sec', label: 'Order Speed' }
        ],
        content: [
            {
                number: 1, icon: '🎯', title: 'The Hub',
                blocks: [
                    { type: 'h2', content: 'Relationship-First Commerce' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_6b0f2e72f38248de88f8e14564a79c74~mv2.png/v1/fill/w_922,h_852,fp_0.51_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups.png', alt: 'Relationship Hub' }
                ]
            }
        ]
    },
    {
        id: 'cican-navigator',
        title: 'CICan Navigator',
        category: 'Civic Tech · Information Architecture',
        subtitle: 'Lead Product Designer — IA Audit, UX Research, Rapid Prototyping',
        thumbnail: '/images/cican-navigator-hero.jpg',
        heroImage: '/images/cican-navigator-hero.jpg',
        overview: 'In a 48-hour civic tech sprint, I led the redesign of the CICan Navigator, transforming a legacy institutional labyrinth into a task-driven, WCAG-compliant portal.',
        tags: ['Civic Tech', 'IA', 'WCAG 2.1 AA'],
        role: 'Lead UX/UI Designer',
        timeline: '48 Hours',
        tools: ['Figma', 'Miro'],
        impact: [
            { value: '75%', label: 'Drop in Task Time' },
            { value: '40%', label: 'Less Search' },
            { value: '60%', label: 'Fewer Tickets' }
        ],
        highlights: [
            "Rebuilt IA around student tasks.",
            "Ensured 100% WCAG 2.1 AA compliance.",
            "Reduced time-on-task by 75%."
        ],
        content: [
            {
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'During a high-stakes 48-hour civic tech hackathon, I modernize the student portal for CICan (Colleges and Institutes Canada). The goal was to salvage a legacy labyrinth without an Enterprise budget.' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'The portal was a digital filing cabinet for jargon. Students missed deadlines because forms were buried under layers of hierarchy.' },
                    { type: 'h2', content: 'The Opportunity' },
                    { type: 'p', content: 'Burn down the department-based IA and rebuild it around Student Verbs (Tasks).' },
                    { type: 'h2', content: 'Goals' },
                    {
                        type: 'list', items: [
                            '**Provide Immediate Value**: Answer "What do I need to do right now?" within 3 seconds of login.',
                            '**Radically Flatten IA**: Reduce global navigation from 30+ links to 5 core task pillars.',
                            '**Accessibility Baseline**: Ensure 100% WCAG 2.1 AA compliance.'
                        ]
                    },
                    { type: 'image', src: '/images/cican-navigator-chapter1.png', alt: 'Legacy Audit' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery',
                blocks: [
                    { type: 'h2', content: 'Finding Signal in the Noise' },
                    { type: 'p', content: 'A rapid heuristic audit revealed the core flaw: Conway\'s Law. The portal was structured like the HR chart, not the student\'s needs.' },
                    { type: 'aside', icon: '✅', title: 'Key Insight', content: 'Students think in verbs, the institution built in nouns.' }
                ]
            },
            {
                number: 3, icon: '🧭', title: 'The Pivot',
                blocks: [
                    { type: 'h2', content: 'Architecting for Intent' },
                    { type: 'p', content: 'I flattened the hierarchy into 3 task-oriented buckets: **Academics**, **Financing**, and **Campus Life**.' },
                    {
                        type: 'list', items: [
                            '**Task-Based Navigation**',
                            '**Accessibility First**',
                            '**Contextual Personalization**'
                        ]
                    }
                ]
            },
            {
                number: 4, icon: '🎨', title: 'The Process: Messy Middle',
                blocks: [
                    { type: 'h2', content: 'Discovery & Framing' },
                    { type: 'p', content: 'The first 12 hours were a high-intensity "messy middle"—performing heuristic audits on whiteboards.' },
                    { type: 'image', src: '/images/cican-navigator-process-whiteboard.png', alt: 'Discovery Whiteboard' },
                    { type: 'h2', content: 'Iterating Toward Clarity' },
                    { type: 'p', content: 'Moving from whiteboard to wireflow, prioritizing urgent tasks over static content.' },
                    { type: 'image', src: '/images/cican-navigator-process-wireflow.png', alt: 'Wireflow Logic' }
                ]
            },
            {
                number: 5, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'The Task-Driven Navigator' },
                    { type: 'p', content: 'Personalized dashboard curating next steps. Culled global nav from 30+ links to 5 pillars.' },
                    { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'New Dashboard' },
                    { type: 'image', src: '/images/cican-navigator-demographics.png', alt: 'Accessible UI' }
                ]
            }
        ]
    },
    {
        id: 'ui-designs',
        title: 'UI Designs / Redesigns',
        category: 'Creative Gallery',
        subtitle: 'A gallery of high-fidelity visual explorations.',
        thumbnail: '/images/sunnys-finance-hero.jpg',
        heroImage: '/images/sunnys-finance-hero.jpg',
        overview: 'A creative sandbox for tackling specific UI challenges, from data-heavy dashboards to accessible onboarding.',
        role: 'Lead Visual Designer',
        timeline: 'Ongoing',
        tools: ['Figma', 'Illustrator'],
        tags: ['UI Design', 'Design Systems'],
        content: [
            {
                number: 1, icon: '📈', title: 'Sunny\'s Finance: Data Density',
                blocks: [
                    { type: 'h2', content: 'The Challenge: Miller\'s Law' },
                    { type: 'p', content: 'Managing high data density by modularizing cards for quick scanning.' },
                    { type: 'image', src: '/images/sunnys-finance-dashboard-light.png', alt: 'Fintech Dashboard' }
                ]
            }
        ]
    }
];

export const getPortfolioContext = (): string => {
    return caseStudies.map(cs => {
        let content = `Case Study: ${cs.title}\nSubtitle: ${cs.subtitle}\nOverview: ${cs.overview}\n`;
        if (cs.highlights) {
            content += `Key Highlights: \n- ${cs.highlights.join('\n- ')}\n`;
        }

        cs.content.forEach(chapter => {
            content += `\nChapter ${chapter.number}: ${chapter.title}\n`;
            const processBlock = (block: ContentBlock) => {
                switch (block.type) {
                    case 'h1': content += `\n# ${block.content}\n`; break;
                    case 'h2': content += `\n## ${block.content}\n`; break;
                    case 'p': content += `${block.content.replace(/<[^>]*>/g, '')}\n`; break;
                    case 'aside': content += `Note: ${block.title} - ${block.content}\n`; break;
                    case 'list': content += block.items.map(item => `- ${item.replace(/<[^>]*>/g, '')}`).join('\n') + '\n'; break;
                    case 'split_layout':
                        block.left.forEach(processBlock);
                        block.right.forEach(processBlock);
                        break;
                    default: break;
                }
            };
            chapter.blocks.forEach(processBlock);
        });

        return content;
    }).join('\n\n---\n\n');
};