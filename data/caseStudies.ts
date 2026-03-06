import { CaseStudy, Chapter, ContentBlock } from '../types';

export const caseStudies: CaseStudy[] = [
    /* ============================
       FLAGSHIP 1: FLAMEY AI
       ============================ */
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
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'Flamey\'s product team came to me with a clear signal: **the Sequence Builder had the highest drop-off rate in the platform.** Users would open it, stare at the form, and leave. The AI toggle — their flagship feature — had single-digit engagement.' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'The existing builder presented every configuration option on one screen. Users had no guidance, no preview of outcomes, and the AI feature was buried below the fold as a simple toggle. Three user personas (SDRs, AEs, Managers) had conflicting needs that one-size-fits-all couldn\'t serve.' },
                    { type: 'h2', content: 'The Opportunity' },
                    { type: 'p', content: 'Competitive analysis revealed every competitor fell into one of two traps: **AI-first (fast but scary)** or **Form-first (safe but slow)**. Nobody had cracked the middle: AI as a collaborative partner where the user stays in control.' },
                    { type: 'h2', content: 'Goals' },
                    {
                        type: 'list', items: [
                            '**Eliminate the blank page** — Give users guided entry points instead of an empty form.',
                            '**Make AI visible and trustworthy** — Move AI from a hidden toggle to a first-class creative partner.',
                            '**Respect expertise levels** — SDRs need speed, AEs need control, Managers need consistency.',
                            '**Ship in 4 days** — Working within the existing Chakra UI design system.'
                        ]
                    },
                    { type: 'image', src: 'https://placehold.co/800x600/2a2a2a/ffffff?text=Old+Sequence+Builder', alt: 'The existing Sequence Builder — a dense wall of form fields with a hidden AI toggle' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery',
                blocks: [
                    { type: 'h2', content: 'Competitive Teardown' },
                    { type: 'p', content: 'I spent Day 1 actually building sequences in Apollo.io, 11x.ai, and Attio — not just screenshots, but real campaigns measuring time-on-task and friction points.' },
                    { type: 'aside', icon: '🔵', title: 'Apollo.io', content: '22 minutes to create a sequence. Strong templates, but AI felt bolted-on.' },
                    { type: 'aside', icon: '🟣', title: '11x.ai', content: 'AI-first approach. Fast but users felt out of control. "It just does things."' },
                    { type: 'aside', icon: '🟢', title: 'Attio', content: 'Clean UI but shallow AI integration. Great design system, weak workflow.' },
                    { type: 'h2', content: 'Persona Mapping' },
                    { type: 'p', content: 'Using support tickets and PM notes, I mapped three distinct personas. This crystallized the design direction — one-size-fits-all was the root cause of failure.' },
                    { type: 'aside', icon: '⚡', title: 'SDR', content: '"Just help me launch." Goal: Speed & volume.' },
                    { type: 'aside', icon: '🧠', title: 'AE', content: '"I need control." Goal: Precision per account.' },
                    { type: 'aside', icon: '🛡️', title: 'Manager', content: '"Consistency is key." Goal: Scale & quality control.' }
                ]
            },
            {
                number: 3, icon: '🧭', title: 'The Pivot',
                blocks: [
                    { type: 'h2', content: 'Design Principles' },
                    { type: 'p', content: 'Before sketching a single screen, I distilled the research into 4 principles that became the decision-making framework for every UI choice.' },
                    { type: 'aside', icon: '🤖', title: 'AI as co-pilot, not autopilot', content: 'The AI asks before it acts. Users stay in control, but the blank page is eliminated.' },
                    { type: 'aside', icon: '👁️', title: 'Show before committing', content: 'Visual timeline preview eliminates the fear of "what will this send?"' },
                    { type: 'aside', icon: '🧠', title: 'Progressive disclosure', content: 'Only what\'s needed appears. Complex settings are accessible but never in the way.' },
                    { type: 'aside', icon: '⚡', title: 'Respect expertise', content: 'Entry points adapt to the user. One door for everyone was the root cause of failure.' },
                    { type: 'h2', content: 'Heuristic Findings' },
                    {
                        type: 'list', items: [
                            '**IA Overload**: All configuration steps presented simultaneously → cognitive overload.',
                            '**AI Invisible**: The toggle was below the fold with no explanation.',
                            '**Zero Trust**: No preview of what AI would generate → users afraid to commit.'
                        ]
                    }
                ]
            },
            {
                number: 4, icon: '🎨', title: 'The Process',
                blocks: [
                    { type: 'h2', content: 'Exploring Alternatives' },
                    { type: 'p', content: 'I explored three structural approaches on Day 2. Each had clear trade-offs.' },
                    { type: 'aside', icon: '🅰️', title: 'Option A: Step Wizard', content: 'Linear flow. Low cognitive load but forced linearity frustrates power users.' },
                    { type: 'aside', icon: '🅱️', title: 'Option B: AI-First Canvas', content: 'Full-screen chat with AI. Fastest creation but 11x.ai proved this scares users.' },
                    { type: 'aside', icon: '✅', title: 'Option C: Hub + Spokes (chosen)', content: 'Central hub with 4 entry points. AI is accessible but optional. Respects all 3 personas.' },
                    { type: 'p', content: 'I chose Hub + Spokes because it was the only approach respecting all three personas without forcing a single workflow.' }
                ]
            },
            {
                number: 5, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'The Final Design' },
                    { type: 'p', content: 'The redesign reframes the Sequence Builder from a **form** into a **guided journey** with the AI as a creative partner.' },
                    { type: 'h3', content: '4 Entry Points' },
                    { type: 'p', content: 'The first screen offers a structured choice: 🤖 AI-Assisted, 📋 Templates, 📎 Duplicate, ✏️ Manual. Each respects a persona\'s starting point.' },
                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=Entry+Points+UI', alt: 'Clean UI showing 4 distinct entry point cards' },
                    { type: 'h3', content: 'The AI Conversation' },
                    { type: 'p', content: 'Instead of a form asking "How many steps?", the AI asks strategic questions one by one, building a brief before generating.' },
                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=AI+Chat+Interface', alt: 'Conversational AI building a sequence step by step' },
                    { type: 'h3', content: 'Visual Timeline Preview' },
                    { type: 'p', content: 'The trust moment — users see exactly what will be sent before committing.' },
                    { type: 'image', src: 'https://placehold.co/1200x500/222/fff?text=Visual+Timeline+Preview', alt: 'Visual Timeline Preview showing sequence pacing' }
                ]
            },
            {
                number: 6, icon: '📊', title: 'Impact',
                blocks: [
                    { type: 'h2', content: 'Projected Metrics' },
                    { type: 'aside', icon: '⏱️', title: '30m → ~5m', content: 'Projected creation time reduction.' },
                    { type: 'aside', icon: '🤖', title: 'AI Engagement', content: 'Significant increase in AI feature discoverability.' },
                    { type: 'aside', icon: '📦', title: '32 Deliverables', content: 'Shipped in 4 working days.' }
                ]
            }
        ]
    },

    /* ============================
       FLAGSHIP 2: LEAF DEX
       ============================ */
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
                    { type: 'p', content: 'The system follows atomic design principles: Atoms → Molecules → Organisms. 117 components built from scratch with full token architecture.' },
                    { type: 'image', src: 'https://placehold.co/1200x500/111/00facc?text=Component+System+Visual', alt: 'Leaf DEX Component Library' }
                ]
            }
        ]
    },

    /* ============================
       FLAGSHIP 3: ACCESS TRANSIT
       ============================ */
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
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'Public transit is a lifeline, not a luxury — especially for people with mobility or cognitive disabilities. But the infrastructure that should serve them best often fails them hardest.' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'Existing transit apps assume full physical and cognitive ability. Kiosks have tiny buttons, apps have buried accessibility options, and real-time alerts don\'t account for broken elevators or stairway-only routes.' },
                    { type: 'h2', content: 'Goals' },
                    {
                        type: 'list', items: [
                            '**Proactive, not reactive**: Warn users about accessibility barriers before they leave home.',
                            '**Multi-surface design**: Mobile, kiosk, and web must share a unified experience.',
                            '**WCAG AAA**: Go beyond compliance to genuine usability under stress.'
                        ]
                    }
                ]
            },
            {
                number: 2, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'The Ecosystem' },
                    { type: 'p', content: 'Context follows the user from their living room to the station platform.' },
                    { type: 'h3', content: 'Mobile: The Trust Dashboard' },
                    { type: 'p', content: 'The mobile app fronts **real-time infrastructure status**, proactively warning users if the elevator on their saved route breaks down.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d7741e88a374498b924f59ab592fb439~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups%201x.png', alt: 'Mobile app mockup' },
                    { type: 'h3', content: 'Kiosks: High-Stress UI' },
                    { type: 'p', content: 'Station kiosks feature massive touch targets and brutalist simplicity. I reduced the standard 12-button transit menu down to **3 primary actions**.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_613aab198f9c48cf938fe84a19db3b76~mv2.png/v1/fill/w_461,h_448,fp_0.50_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025.png', alt: 'Kiosk UI' }
                ]
            },
            {
                number: 3, icon: '📊', title: 'Impact',
                blocks: [
                    { type: 'aside', icon: '⏱️', title: '68% Time Reduction', content: 'Task completion time for buying a ticket dropped from 47s to 15s.' },
                    { type: 'aside', icon: '✅', title: '95% Success Rate', content: 'First-time completion rate without errors increased dramatically.' },
                    { type: 'aside', icon: '♿', title: 'AAA Compliance', content: 'The high-contrast mode passed all WCAG 2.1 AAA contrast requirements.' },
                    { type: 'h2', content: 'Reflection' },
                    { type: 'p', content: 'This concept relied on an assumption that transit authorities have accurate real-time APIs for their elevators. If taking this to production, I would design a **crowd-sourced fallback** — allowing riders to instantly report broken infrastructure.' }
                ]
            }
        ]
    },

    /* ============================
       SUPPORTING: CONNECT DIST
       ============================ */
    {
        id: 'connect-dist',
        title: 'ConnectDist',
        category: 'Product Strategy · B2B Commerce',
        subtitle: 'Lead Product Manager & Designer — Discovery, Strategy, UX/UI',
        thumbnail: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png',
        heroImage: 'https://static.wixstatic.com/media/9a7729_c78319cf9cf743dda2836e075a9b6c04~mv2.jpg/v1/fill/w_1634,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Person%20Writing%20on%20Paper%202.jpg',
        overview: 'ConnectDist modernizes the fragmented B2B supply chain between local distributors and independent shops — digitizing inventory while preserving the human relationships that power local commerce.',
        tags: ['Product Management', 'B2B SaaS', 'UX Research'],
        role: 'PM & UX Designer',
        timeline: '7 Weeks',
        tools: ['Figma', 'Miro', 'Notion'],
        impact: [
            { value: '5-7 Hrs', label: 'Admin Time Saved/Wk' },
            { value: '90 Sec', label: 'Multi-Item Order Time' },
            { value: 'High', label: 'Validated WTP' }
        ],
        content: [
            {
                number: 1, icon: '📋', title: 'The Brief',
                blocks: [
                    { type: 'h2', content: 'The Broken B2B Supply Chain' },
                    { type: 'p', content: 'While enterprise distribution runs on SAP, local independent commerce still runs on chaos. Shop owners juggle dozens of distributors via phone calls, fragmented WhatsApp threads, and paper invoices.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_b1335180f66c4d87a6f7f795a262104d~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_04_33.png', alt: 'Service Blueprint' }
                ]
            },
            {
                number: 2, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'Relationship-First Commerce' },
                    { type: 'p', content: 'Research revealed that shop owners stick with slightly more expensive distributors because they **trust** them. A purely transactional app would commoditize these relationships and fail.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_6b0f2e72f38248de88f8e14564a79c74~mv2.png/v1/fill/w_922,h_852,fp_0.51_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups.png', alt: 'Relationship Hub UI' },
                    { type: 'aside', icon: '🗣️', title: 'User Quote', content: '"If I buy from a shiny new app and the milk spoils, who do I yell at? I buy from Tony because Tony fixes it."' }
                ]
            }
        ]
    },

    /* ============================
       SUPPORTING: CICAN NAVIGATOR
       ============================ */
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
        tools: ['Figma', 'Optimal Workshop', 'Miro'],
        impact: [
            { value: '75%', label: 'Drop in Task Time' },
            { value: '40%', label: 'Less Search' },
            { value: '60%', label: 'Fewer Tickets' }
        ],
        highlights: [
            "Rebuilt IA around student tasks instead of institutional departments.",
            "Ensured 100% WCAG 2.1 AA compliance.",
            "Reduced time-on-task by 75%."
        ],
        content: [
            {
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'During a 48-hour civic tech hackathon, I led the modernization of the student portal for CICan (Colleges and Institutes Canada).' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'Students missed critical deadlines because forms were buried under layers of institutional hierarchy. The portal reflected Conway\'s Law — structure mirrored the HR chart, not student needs.' },
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
                number: 2, icon: '🎨', title: 'The Process',
                blocks: [
                    { type: 'h2', content: 'Discovery & Framing' },
                    { type: 'p', content: 'The first 12 hours were spent in a high-intensity "messy middle" — heuristic audits on whiteboards, mapping institutional mental model vs. student task flow.' },
                    { type: 'image', src: '/images/cican-navigator-process-whiteboard.png', alt: 'Discovery Whiteboard' },
                    { type: 'aside', icon: '✅', title: 'Key Insight', content: 'Students think in verbs, the institution built in nouns.' },
                    { type: 'h2', content: 'Iterating Toward Clarity' },
                    { type: 'p', content: 'Moving from whiteboard to wireflow, I flattened the hierarchy into 3 task-oriented buckets: **Academics**, **Financing**, and **Campus Life**.' },
                    { type: 'image', src: '/images/cican-navigator-process-wireflow.png', alt: 'IA Wireflow' }
                ]
            },
            {
                number: 3, icon: '🎯', title: 'The Solution',
                blocks: [
                    { type: 'h2', content: 'The Task-Driven Navigator' },
                    { type: 'p', content: 'The final design replaces the generic intranet with a personalized, task-driven dashboard that curates next steps based on student state.' },
                    { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'New Dashboard' },
                    { type: 'image', src: '/images/cican-navigator-demographics.png', alt: 'Accessible UI' },
                    { type: 'aside', icon: '⏱️', title: '75% Reduction', content: 'Time-on-task for core actions plummeted.' },
                    { type: 'aside', icon: '☎️', title: '60% Fewer Tickets', content: 'Projected reduction in "Where do I find..." support questions.' },
                    { type: 'h2', content: 'Reflection' },
                    { type: 'p', content: 'This sprint cemented my belief that Information Architecture is the invisible backbone of a product\'s success. No amount of polish can save a product if the underlying structure doesn\'t map to how users actually think.' }
                ]
            }
        ]
    },

    /* ============================
       GALLERY: UI DESIGNS
       ============================ */
    {
        id: 'ui-designs',
        title: 'UI Designs / Redesigns',
        category: 'Creative Gallery',
        subtitle: 'A gallery of high-fidelity visual explorations.',
        thumbnail: '/images/sunnys-finance-hero.jpg',
        heroImage: '/images/sunnys-finance-hero.jpg',
        overview: 'A creative sandbox for tackling specific UI challenges, from data-heavy fintech dashboards to accessible insurance onboarding.',
        role: 'Lead Visual Designer',
        timeline: 'Ongoing',
        tools: ['Figma', 'Illustrator', 'After Effects'],
        tags: ['UI Design', 'Design Systems', 'Visual Exploration'],
        content: [
            {
                number: 1, icon: '📈', title: 'Sunny\'s Finance: Data Density',
                blocks: [
                    { type: 'h2', content: 'The Challenge: Miller\'s Law in Fintech' },
                    { type: 'p', content: 'For this fintech dashboard, the primary challenge was managing high data density without overwhelming the wealth advisor. I utilized Miller\'s Law to chunk information into modular cards.' },
                    { type: 'image', src: '/images/sunnys-finance-dashboard-light.png', alt: 'Fintech Dashboard' },
                    { type: 'p', content: 'Deep-dive into client profiles and expense tracking, focusing on clear typography hierarchies and desaturated color palettes.' },
                    { type: 'image', src: '/images/sunnys-finance-profile-light.png', alt: 'Client profile page' },
                    { type: 'image', src: '/images/sunnys-finance-overlay-light.png', alt: 'Expense detail overlay' }
                ]
            },
            {
                number: 2, icon: '♿', title: 'Cognitive Clarity: Inclusive Design',
                blocks: [
                    { type: 'h2', content: 'Designing for Accessibility' },
                    { type: 'p', content: 'Cognitive Clarity was a deep dive into WCAG 2.1 AAA compliance — exploring how tight contrast constraints and simplified navigation could create a "calm" insurance onboarding experience for users with cognitive impairments.' },
                    { type: 'image', src: '/images/cognitive-clarity-hero.jpg', alt: 'Cognitive Clarity hero' },
                    { type: 'image', src: '/images/cognitive-clarity-dashboard.jpg', alt: 'Dashboard interface' }
                ]
            },
            {
                number: 3, icon: '🧠', title: 'Reflections',
                blocks: [
                    { type: 'h2', content: 'Visual Sandbox vs. Production Reality' },
                    { type: 'p', content: 'Working on these isolated challenges allows me to experiment with "bleeding-edge" visual styles that might be too risky for a standard B2B SaaS product. The learnings — especially regarding accessibility and data visualization — constantly inform my more traditional product work.' }
                ]
            }
        ]
    }
];

/* ---------- AI Context Helper ---------- */
export const getPortfolioContext = (): string => {
    return caseStudies.map(cs => {
        let content = `Case Study: ${cs.title}\nSubtitle: ${cs.subtitle}\nOverview: ${cs.overview}\n`;
        if (cs.highlights) content += `Key Highlights: \n- ${cs.highlights.join('\n- ')}\n`;
        cs.content.forEach(chapter => {
            content += `\nChapter ${chapter.number}: ${chapter.title}\n`;
            const processBlock = (block: ContentBlock) => {
                switch (block.type) {
                    case 'h1': case 'h2': content += `\n## ${block.content}\n`; break;
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