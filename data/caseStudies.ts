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
                                                                                    { type: 'p', content: 'I chose Option C because it was the only approach that respected all three personas without forcing a single workflow. The risk of choice paralysis was mitigated by limiting entry points to exactly 4, each with a clear icon, label, and one-line description. This follows Hick\'s Law — the time to make a decision increases logarithmically with the number of choices, so 4 is the sweet spot.' }
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
                                                                                            '🤖 **AI-Assisted** — "Help me build from scratch" (SDR path)',
                                                                                            '📋 **Templates** — "Start from a proven structure" (Manager path)',
                                                                                            '📎 **Duplicate** — "Clone what worked" (Manager path)',
                                                                                            '✏️ **Manual** — "I know exactly what I want" (AE path)'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 7,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=Entry+Points+UI', alt: 'Clean UI showing 4 distinct entry point cards', caption: 'The Hub: 4 cards, each with an icon and one-line description.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 7,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=AI+Chat+Interface', alt: 'Conversational AI building a sequence step by step', caption: 'The AI Conversation: strategic questions before generation.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 5,
                                                                                content: [
                                                                                    { type: 'h3', content: 'The AI Conversation' },
                                                                                    { type: 'p', content: 'Instead of a form asking "How many steps?", the AI asks strategic questions one by one. This builds a brief before generating, making the AI feel like a **consultant, not a form filler**.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'The Trust Moment: Visual Timeline Preview' },
                                                                                    { type: 'image', src: 'https://placehold.co/1200x500/222/fff?text=Visual+Timeline+Preview', alt: 'Visual Timeline Preview showing sequence pacing', caption: 'Before launching, users see the full sequence pacing (Email → Wait → LinkedIn → Call). This eliminated the #1 support ticket.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Tab-Based Editing' },
                                                                                    { type: 'p', content: 'Editing organized into focused tabs: **Recipients** (Who), **Content** (What), **Settings** (How). Reduced visible complexity by ~60%.' },
                                                                                    { type: 'p', content: '**Trade-off accepted:** More clicks to access settings, but cognitive load reduction was worth it.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://placehold.co/800x500/222/fff?text=Tabbed+Editing+UI', alt: 'Clean tabbed editing interface' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 6, icon: '🎨', title: 'Visual System',
                                                                blocks: [
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h2', content: 'Working Within Constraints' },
                                                                                    { type: 'p', content: 'A key constraint was reusing Flamey\'s existing Chakra UI design system. I couldn\'t introduce new components — only recombine existing ones in smarter configurations.' },
                                                                                    { type: 'image', src: 'https://placehold.co/1200x400/333/fff?text=Design+System+Spec', alt: 'Design tokens and typography specification' },
                                                                                    { type: 'p', content: '**Typography**: Poppins for expressive headings, Inter for legible UI text.\n**Color**: Deep Brown foundation with Spark Orange for energy.\n**Accessibility**: All interactive elements meet WCAG 2.1 AA.' },
                                                                                    { type: 'p', content: '**Trade-off**: I wanted a dedicated "AI accent" color to differentiate AI content. The existing palette didn\'t support this, so I used subtle background shading instead — less distinctive but zero system debt.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 7, icon: '📊', title: 'Validation',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Tying Back to the Brief' },
                                                                    { type: 'p', content: 'The brief asked for three things: reduce drop-off, make AI feel natural, deliver in 4 days. Here\'s how each was addressed:' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '⏱️', title: '30m → ~5m', content: 'Projected creation time based on task analysis. 4 entry points eliminate "where do I start?" paralysis.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🤖', title: 'AI Engagement', content: 'Conversational AI + visual preview address both discoverability and trust barriers.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📦', title: '32 Deliverables', content: '18 high-fidelity screens + 14 annotated specs. Zero new components needed. Delivered in 4 days.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'What I\'d Do Differently' },
                                                                                    { type: 'p', content: 'With more time, I would validate the 4-entry-point model with real users via a 5-second test plus an A/B test comparing the AI conversation flow against a traditional form. **Unvalidated hypotheses are still hypotheses.**' },
                                                                                    { type: 'p', content: 'I\'d also explore a first-time onboarding overlay highlighting the AI path — currently, users discover it organically, which may reduce adoption for SDRs who need it most.' }
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
                            overview: 'Leaf DEX is a concept decentralized exchange — designed from zero to a production-ready design system in 7 days. The real challenge wasn\'t the UI; it was building a component architecture that could scale across a responsive trading platform while maintaining accessibility on glassmorphism surfaces.',
                                role: 'Lead Product Designer',
                                    timeline: '7 Days',
                                        tools: ['Figma', 'Auto-Layout 5.0', 'Tailwind'],
                                            tags: ['Design System', 'FinTech', 'Web3', 'B2B'],
                                                impact: [
                                                    { value: '117', label: 'Components Built' },
                                                    { value: '302', label: 'Button Variants' },
                                                    { value: 'AAA', label: 'Glass Contrast (12:1)' },
                                                ],
                                                    highlights: [
                                                        "Built a complete atomic design system: 43 atoms, 57 molecules, 17 organisms.",
                                                        "Achieved WCAG 2.1 AAA compliance on every glassmorphism surface (12:1 contrast).",
                                                        "Responsive trading interface from 1920px desktop to mobile bottom-sheets."
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
                                                                                    { type: 'p', content: 'I set out to design a concept DEX trading platform — not just a pretty dashboard, but a **complete design system** that could support a full trading product: charts, orderbooks, order forms, asset management, and responsive layouts.' },
                                                                                    { type: 'h3', content: 'Why This Project Matters' },
                                                                                    { type: 'p', content: 'Design systems are the most high-leverage artifact a product designer can create. Done well, they compress months of screen production into days. Done poorly, they become a cemetery of unused components. I wanted to demonstrate that I could build one that scales.' },
                                                                                    { type: 'h3', content: 'The Constraints' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**7-day timeline** — Solo designer, no team to delegate to.',
                                                                                            '**Extreme information density** — Trading UIs show 100+ data points on a single screen.',
                                                                                            '**Glassmorphism trend** — Aesthetically appealing but notorious for accessibility failures.',
                                                                                            '**Mobile parity** — Must work on 375px screens, not just desktop monitors.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 5,
                                                                                content: [
                                                                                    { type: 'prototype', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fplaceholder', title: 'Interactive Prototype' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 2, icon: '🔍', title: 'Discovery',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Competitive Research' },
                                                                    { type: 'p', content: 'I spent Day 1 as a trader, not a designer. I opened accounts on five live DEXs and placed test orders, timing myself and documenting every friction point.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🟡', title: 'Hyperliquid', content: '**Dense but cold.** Power users love the data density. New users see a spreadsheet and leave. No visual hierarchy.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🦄', title: 'Uniswap', content: '**Clean but shallow.** Great for simple swaps. Falls apart for complex trading. No orderbook, limited data.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📊', title: 'dYdX', content: '**Best balance.** Closest to what I wanted but still uses flat card hierarchy. Mobile is an afterthought.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'The Core Insight' },
                                                                                    { type: 'p', content: 'The real problem wasn\'t layout — it was **trust through clarity**. Traders don\'t need fewer features; they need to instantly know *where to look*. This means visual hierarchy isn\'t decoration — it\'s a safety feature. When thousands of dollars are at stake, misreading a number is catastrophic.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 3, icon: '🏗️', title: 'Architecture',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Design System Architecture' },
                                                                    { type: 'p', content: 'The solution wasn\'t a single screen — it was a layered architecture following atomic design principles. Every component was designed to be composable, themeable, and independently scalable.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Atoms (43)' },
                                                                                    { type: 'p', content: 'Buttons (302 variants covering every state × size × style combination), Inputs, Toggles, Checkboxes, Icons. Every atom uses design tokens — no hardcoded values.' },
                                                                                    { type: 'p', content: '**Why 302 button variants?** Trading UIs need: primary/secondary/ghost × buy/sell/neutral × small/medium/large × default/hover/active/disabled/loading. Multiply it out. Each state must be explicitly designed, not left to CSS inheritance.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Molecules (57)' },
                                                                                    { type: 'p', content: 'Stat Cards, Orderbook Rows, Asset Rows, Crypto Pairs. Each molecule is a composition of 2-3 atoms with specific spacing and interaction patterns.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Organisms (17)' },
                                                                                    { type: 'p', content: 'Full Orderbook Panel, Trading Chart Shell, Order Form. Organisms combine molecules into functional sections that can be independently deployed in different page layouts.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://placehold.co/1200x500/111/00facc?text=Component+System+Visual', alt: 'Leaf DEX Component Library showing atoms, molecules, and organisms', caption: 'The full component hierarchy: Atoms → Molecules → Organisms → Pages. Each layer only depends on the layer below it.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    { type: 'h3', content: 'Token Architecture' },
                                                                    { type: 'p', content: 'Design tokens are the foundation. I structured them in three tiers:' },
                                                                    {
                                                                        type: 'list', items: [
                                                                            '**Global tokens** — Raw values (colors, spacing, typography). Never referenced directly in components.',
                                                                            '**Alias tokens** — Semantic names (surface-primary, text-muted, spacing-md). Components reference these.',
                                                                            '**Component tokens** — Scoped overrides (button-padding, card-border-radius). Only exist when a component needs to deviate.'
                                                                        ]
                                                                    },
                                                                    { type: 'p', content: '**Trade-off**: This three-tier system is more complex to set up but means theme changes propagate instantly. Switching from dark to light would require editing ~20 alias tokens, not 117 components.' }
                                                                ]
                                                            },
                                                            {
                                                                number: 4, icon: '🔀', title: 'Key Decisions',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Decisions & Trade-offs' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Decision 1: Glassmorphism vs Flat' },
                                                                                    { type: 'p', content: 'I chose glassmorphism for panel backgrounds because it creates spatial depth — panels "float" at different elevations, giving traders an intuitive sense of which information is primary vs. contextual.' },
                                                                                    { type: 'p', content: '**The risk**: Glass effects reduce text contrast. Every DEX that uses glassmorphism fails WCAG AA on at least some surfaces.' },
                                                                                    { type: 'p', content: '**My solution**: Two glass tiers with mandated contrast floors. **Glass/Heavy** (10px blur, white/10%) for primary panels at 12:1+ contrast. **Glass/Light** (3px blur, white/8%) for secondary cards. No text on glass without a semi-opaque backing layer.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Decision 2: Desktop-First' },
                                                                                    { type: 'p', content: 'Trading is fundamentally a power-user desktop activity. 87% of trading volume happens on desktop. I designed desktop-first, then adapted to mobile — the opposite of most modern design advice.' },
                                                                                    { type: 'p', content: '**Trade-off accepted**: Mobile layouts required structural rethinking, not just responsive scaling. The order form becomes a **bottom sheet** that slides up to 70% height, preserving chart visibility. This took extra time but the result is genuinely usable, not a shrunken desktop.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Decision 3: Visual Depth Bar for Orderbooks' },
                                                                                    { type: 'p', content: 'Traditional orderbooks are rows of numbers. I added gradient depth bars to each row representing liquidity weight. Traders can scan market depth visually in under 2 seconds without reading individual numbers. This is the "trust through clarity" principle in action.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 5, icon: '🎯', title: 'Solution',
                                                                blocks: [
                                                                    { type: 'h2', content: 'The Final Interface' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Desktop Trading (1440px)' },
                                                                                    { type: 'image', src: 'https://placehold.co/1200x600/0a0e27/00facc?text=Desktop+Trading+UI', alt: 'Full Desktop Trading Interface', caption: 'Three-column layout: Orderbook | Chart | Trade. Panels float on Glass/Heavy layers. Buy (Caribbean Green) and Sell (Red) are the most dominant elements.' },
                                                                                    { type: 'p', content: 'The layout follows a natural cognitive flow: scan the orderbook for market context → read the chart for trend → execute a trade. Each column has a single responsibility.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Orderbook Depth Visualization' },
                                                                                    { type: 'p', content: 'Each row carries a gradient bar representing liquidity weight. The visual density of the bar communicates market depth faster than reading numbers. This reduces cognitive load in high-pressure moments.' },
                                                                                    { type: 'image', src: 'https://placehold.co/600x400/111/00facc?text=Depth+Bar+Detail', alt: 'Detail of Orderbook Depth Bar showing gradient fills' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Mobile Experience (375px)' },
                                                                                    { type: 'p', content: 'The Order Form lives in a **bottom sheet**, sliding up to occupy the lower 70% of the screen. This preserves the chart view while keeping trade actions thumb-accessible. Not a shrunken desktop — a genuinely rethought mobile experience.' },
                                                                                    { type: 'image', src: 'https://placehold.co/375x667/0a0e27/00facc?text=Mobile+UI', alt: 'Mobile Trading Interface with bottom sheet' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 6, icon: '🎨', title: 'Visual System',
                                                                blocks: [
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 8,
                                                                                content: [
                                                                                    { type: 'h2', content: 'Typography & Color' },
                                                                                    { type: 'p', content: '**Type**: Inter for UI text, JetBrains Mono for prices (tabular alignment ensures columns of numbers stay aligned).\n**Color**: Caribbean Green (#00facc) for Buy actions, Red (#ef4444) for Sell. These are hardcoded exceptions to the token system — trading colors must never change with themes.' },
                                                                                    { type: 'p', content: '**Design principle**: In trading, color carries meaning. Green = safe/profit, Red = danger/loss. These associations are universal and non-negotiable. I verified all combinations against both dark and (hypothetical) light backgrounds.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Glass Tiers' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Glass/Heavy**: 10px blur, white/10% — Panels',
                                                                                            '**Glass/Light**: 3px blur, white/8% — Cards',
                                                                                            '**All glass**: 12:1+ contrast ratio (AAA)'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 7, icon: '📊', title: 'Validation',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Measuring Against the Brief' },
                                                                    { type: 'p', content: 'The brief was simple: build a design system that proves I can handle complexity at scale. Here\'s the scorecard:' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🧩', title: '117 Components', content: 'Every component is production-ready with Auto Layout 5.0. No fixed-size elements — everything adapts to content.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '♿', title: 'AAA Accessible', content: '12:1+ contrast on every glass surface. Glassmorphism and accessibility aren\'t mutually exclusive — you just have to do the work.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📱', title: 'True Responsive', content: 'Desktop → tablet → mobile with structural changes, not just scaling. Bottom sheets, reordered layouts, thumb-zone optimization.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'What I\'d Do Differently' },
                                                                                    { type: 'p', content: 'The token architecture works well for a single-product system. If this were expanded to support multiple products (a DEX + a lending protocol + an NFT marketplace), I\'d add a **theme layer** above the alias tokens — allowing each product to override semantic colors while sharing structural tokens.' },
                                                                                    { type: 'p', content: 'I\'d also push harder on documentation. A design system without documentation is just a component library. The governance story — who can modify tokens, how new components get proposed, version control — is what makes it a *system*.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
},
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/portfolio-hero-ui.png', alt: 'Antigravity Hero Section' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '🌌', title: 'The Investigation',
        blocks: [
          { type: 'h1', content: 'Finding the "Antigravity" Theme' },
          { type: 'p', content: 'I wanted a theme that represented "limitless potential" and "breaking boundaries." Space was the perfect metaphor.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🎨', title: 'Visual Language', content: 'Deep space black, starlight white, and neon purple accents. Typography mixes clean Inter for readability with futuristic Dosis headers.' }
                ]
              },
              {
                span: 8,
                content: [
                  { type: 'image', src: '/images/portfolio-code.png', alt: 'Code snippet showing the theme configuration' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '⚡', title: 'The Breakthrough',
        blocks: [
          { type: 'h1', content: 'Building the Engine' },
          { type: 'p', content: 'I chose a modern tech stack designed for speed and scalability: React & Vite for performance, Tailwind CSS for styling, and Framer Motion for interactions.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'The AI Integration' },
                  { type: 'p', content: 'I didn\'t want a static "About" page. I built **Sparky**, a custom AI chatbot powered by Google Gemini. It\'s trained on my resume and case studies, allowing recruiters to "interview" me even when I\'m asleep.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/portfolio-sparky.png', alt: 'Sparky AI Chatbot Interface' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'image', src: '/images/portfolio-lighthouse.png', alt: 'Perfect 100% Lighthouse Scores' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '📈', title: 'The Impact',
        blocks: [
          { type: 'h1', content: 'A Living Product' },
          { type: 'p', content: 'The site loads in under 1.5 seconds, scores 100% on SEO/Accessibility, and provides a unique, memorable experience for every visitor.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'p', content: '**Reflection**: Building this portfolio reminded me that the best designs are the ones that are actually shipped. It forced me to make trade-offs between "cool" and "performant," ultimately making me a better designer.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cdn-article',
    title: 'AI & Accessibility',
    category: 'Published Article',
    subtitle: 'Featured in Canadian Design Network: The Future of Public Systems.',
    thumbnail: '/images/ai-accessibility-article.png',
    heroImage: '/images/ai-accessibility-article.png',
    overview: 'An in-depth exploration of how AI can revolutionize accessibility in public systems, published in the Canadian Design Network newsletter.',
    tags: ['AI', 'Accessibility', 'Thought Leadership'],
    externalUrl: 'https://canadiandesignnetwork.com/newsletter-article/ai-accessibility-and-the-future-of-public-systems/',
    content: []
  },
  {
    id: 'hackathon-win',
    title: 'Hackathon Winner',
    category: 'National 1st Place - CiCan',
    subtitle: 'Skills for Success: Fanshawe College team wins 1st place at national hackathon.',
    thumbnail: '/images/hackathon-team.png',
    heroImage: '/images/hackathon-team.png',
    overview: 'Our Fanshawe College team won 1st place at the national CiCan "Skills for Success" Hackathon, designing an innovative solution for student success.',
    tags: ['Hackathon', 'First Place', 'Innovation'],
    externalUrl: 'https://www.fanshawec.ca/about-fanshawe/news/user-experience-design-students-hack-their-way-first-place',
    content: []
  },
  {
    id: 'access-transit',
    title: 'AccessTransit [ZipTrains]',
    category: 'Customer Experience · Service Design · UX/UI Design',
    subtitle: 'Lead Designer — Research, Strategy, UX/UI, Prototyping',
    thumbnail: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
    heroImage: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
    overview: 'AccessTransit is a multi-channel concept service that helps riders with disabilities plan trips, check real-time accessibility, and buy tickets confidently across mobile, kiosk, and web.',
    tags: ['Accessibility', 'Service Design', 'Mobile App', 'Concept Project · 8 Weeks · Individual'],
    role: 'Full Stack Product Designer',
    timeline: '8 Weeks',
    tools: ['Figma', 'Miro', 'Adobe Suite'],
    impact: [
      { value: '+59 Point', label: 'NPS Swing' },
      { value: '68% Faster', label: 'Ticket Purchase' },
      { value: 'WCAG 2.1 AAA', label: 'Compliance' },
    ],
    highlights: [
      "Reduced ticket purchase time by 68% and achieved WCAG 2.1 AAA compliance.",
      "Improved Net Promoter Score (NPS) from -12 to +47 with a better user experience.",
      "Lowered long-term maintenance costs via standardized, sustainable design systems."
    ],
    content: [
      {
        number: 1, icon: '⭐', title: 'The Arena',
        blocks: [
          { type: 'prototype', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRs4rfDvt149VT7HWtUapX9%2FPortfolio%3Fpage-id%3D241%253A24891%26node-id%3D241-25590%26viewport%3D810%252C581%252C0.15%26t%3DbFesc6Pc2Eqlw6aW-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D241%253A25590', title: 'AccessTransit Interactive Prototype' },
          { type: 'h2', content: 'The Daily Gamble of Public Transit' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 8,
                content: [
                  { type: 'p', content: 'For many, public transit is a routine. For millions with disabilities, it\'s a game of chance. Every trip is a series of stressful questions: Will the elevator be working? Can I navigate the station before the train leaves?' },
                  { type: 'p', content: 'This constant uncertainty creates a heavy cognitive load, turning simple journeys into complex logistical operations. The result is a loss of independence and a fundamental inequity in access to the city.' }
                ]
              },
              {
                span: 4,
                className: 'flex flex-col justify-center',
                content: [
                  { type: 'aside', icon: '🎲', title: 'The Gamble', content: 'Every trip is a risk.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h3', content: 'Journey Map' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d228779898c04719909ad71aae0823d9~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_01.png', alt: 'User Journey Map', caption: 'Mapped the emotional highs and lows to identify exactly where confidence was lost.' }
                ]
              }
            ]
          },
          { type: 'p', content: 'Our mission was to dismantle these barriers. We set out to design a service that would transform public transit from a source of anxiety into a seamless, reliable, and empowering experience for everyone.' }
        ]
      },
      {
        number: 2, icon: '⭐', title: 'The Investigation',
        blocks: [
          { type: 'h2', content: 'Process & Rationale' },
          { type: 'p', content: 'To solve a human problem, we had to go beyond assumptions. I used the Double Diamond framework, combining 8 participant interviews with contextual inquiry—shadowing users on their actual journeys to get unfiltered insights.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Phase 1: Immersion' },
                  { type: 'p', content: 'I rode the bus with a blind user, navigated a station with a wheelchair user, and spoke with elderly citizens. This ethnographic approach revealed the hidden friction points in their daily travel.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_627263def6404714af0f63e5d03c8778~mv2.png/v1/fill/w_775,h_663,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025%20(1).png', alt: 'AccessTransit Concept Art' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'image', src: 'https://picsum.photos/seed/accesstransit1/1200/800', alt: 'Affinity Mapping Session' }
                ]
              },
              {
                span: 8,
                content: [
                  { type: 'h3', content: 'The \'Aha!\' Moment' },
                  { type: 'p', content: 'The core issue wasn\'t a lack of features, but a profound lack of trust. Users didn\'t trust static online info or equipment status. We realized we weren\'t just building an app; we needed to build a service that earned trust.' },
                  { type: 'aside', icon: '💡', title: 'Insight', content: 'The problem isn\'t features, it\'s trust.' }
                ]
              }
            ]
          },
          { type: 'h3', content: 'Phase 2: Strategy' },
          { type: 'p', content: 'With "trust-first" as our principle, I mapped the ideal journey. This wasn\'t about the app; it was about the human experience. The journey map became our north star for identifying trust-building moments.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 5,
                content: [
                  { type: 'h3', content: 'Happy Path' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_a1328b9a724843f180a900618add0e4b~mv2.png/v1/fill/w_488,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_13_41.png', alt: 'Design Iteration' }
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'h3', content: 'Phase 3: Design' },
                  { type: 'p', content: 'I started with low-fidelity wireframes focused on progressive disclosure—showing only what\'s necessary to minimize cognitive load.' },
                  {
                    type: 'list', items: [
                      '**Learning**: Early kiosk icons were not universally understood.',
                      '**Iteration**: Replaced icons with clear, large-text labels, boosting task success to 95%.'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '⭐', title: 'The Breakthrough',
        blocks: [
          { type: 'h2', content: 'The Ecosystem' },
          { type: 'p', content: 'The solution builds trust through clarity, control, and reliability across three pillars.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'h3', content: 'Pillar 1: Real-Time Data' },
                  { type: 'p', content: 'Addressing the fear of the unknown with live, verifiable info.' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d7741e88a374498b924f59ab592fb439~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups%201x.png', alt: 'Real-time Data Mockup' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_f306f28b91db46c6b2e3c4b28a130237~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockup%201x.png', alt: 'Simple Design Mockup' },
                  { type: 'aside', icon: '✨', title: 'Simplicity', content: 'Simplifying the complex.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'h3', content: 'Pillar 2: Universal Design' },
                  { type: 'p', content: 'High-contrast, screen reader, and voice controls included.' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_748ab77fad7a425587ee110551fe9a2d~mv2.png/v1/fill/w_461,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Woman%20Holding%20Smartphone%20Mockup.png', alt: 'Woman Holding Smartphone' }
                ]
              },
              {
                span: 8,
                content: [
                  { type: 'h3', content: 'Service Blueprint' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_edade27bf35c43d5916a957b6850573d~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_59.png', alt: 'Streamlined Purchase Flow', caption: 'Highlighted trust-critical touchpoints where outages and unclear responsibilities broke the journey.' }
                ]
              },
            ]
          },
          { type: 'h2', content: 'Station Kiosks: Ticketing Under Pressure' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_613aab198f9c48cf938fe84a19db3b76~mv2.png/v1/fill/w_461,h_448,fp_0.50_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025.png', alt: 'Accessible Kiosk Design' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Simplifying the Flow' },
                  { type: 'p', content: 'We simplified the menu to 3 primary actions with large text labels. A dedicated "Accessible mode" toggle enlarges type, increases contrast, and adds audio guidance.' },
                  { type: 'p', content: 'Result: Ticket purchase time dropped by 68% (47s to 15s), and task success reached 95%.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '📐', title: 'Design Principles',
        blocks: [
          { type: 'h2', content: 'Guiding Decisions' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '👁️', title: 'Make uncertainty visible', content: 'Surface real-time accessibility status early. Provide alternative routes when outages occur.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '♿', title: 'Design for diverse bodies', content: 'Support high contrast, large type, screen readers. Offer audio/voice support and consider physical reach.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🧠', title: 'Reduce cognitive load', content: 'Apply progressive disclosure. Preserve a clear “happy path” while supporting edge cases.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 5, icon: '📱', title: 'Key Flows and UX Decisions',
        blocks: [
          { type: 'h2', content: 'Mobile: Planning and Real-Time Trust' },
          { type: 'p', content: 'Scenario: A wheelchair user wants to check whether their usual route is accessible before leaving home.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Home as "Trust Dashboard"' },
                  { type: 'p', content: 'The home screen shows saved routes with elevator/escalator status and alerts. Riders know instantly if today\'s trip is viable.' },
                  { type: 'h3', content: 'Proactive Disruption Handling' },
                  { type: 'p', content: 'When infrastructure fails, the app sends a clear alert, suggests accessible alternatives, or offers a one-tap "Request assistance".' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d7741e88a374498b924f59ab592fb439~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups%201x.png', alt: 'Mobile App Real-time Data' }
                ]
              }
            ]
          },
          { type: 'h2', content: 'Station Kiosks: Ticketing Under Pressure' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_613aab198f9c48cf938fe84a19db3b76~mv2.png/v1/fill/w_461,h_448,fp_0.50_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025.png', alt: 'Accessible Kiosk Design' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Simplifying the Flow' },
                  { type: 'p', content: 'We simplified the menu to 3 primary actions with large text labels. A dedicated "Accessible mode" toggle enlarges type, increases contrast, and adds audio guidance.' },
                  { type: 'p', content: 'Result: Ticket purchase time dropped by 68% (47s to 15s), and task success reached 95%.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 6, icon: '🎨', title: 'Visual System and Accessibility',
        blocks: [
          { type: 'h2', content: 'Clarity and Consistency' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Typography & Hierarchy' },
                  { type: 'p', content: 'Clear typographic scale with predictable headings, tuned for readability.' },
                  { type: 'h2', content: 'Color & Contrast' },
                  { type: 'p', content: 'Palette meets WCAG 2.1 AA by default, with optional high-contrast mode targeting AAA.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_748ab77fad7a425587ee110551fe9a2d~mv2.png/v1/fill/w_461,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Woman%20Holding%20Smartphone%20Mockup.png', alt: 'Visual System Showcase' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 7, icon: '📈', title: 'Validation and Impact',
        blocks: [
          { type: 'h2', content: 'Measuring Success' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⏱️', title: '68% Faster', content: 'Reduction in ticket purchase time across tasks.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '✅', title: '95% Success', content: 'Task success on revised kiosk flow, up from frequent confusion.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🚀', title: '+59 NPS', content: 'Modeled swing in Net Promoter Score for the concept experience.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 8, icon: '🔮', title: 'What I\'d Do Next',
        blocks: [
          { type: 'h2', content: 'Future Roadmap' },
          {
            type: 'list', items: [
              'Partner with a transit agency and local disability advocacy groups to co-design flows.',
              'Integrate with real equipment feeds and staff systems for a live pilot.',
              'Expand motion and sound design for screen readers, haptics, and voice.',
              'Develop a formal design system and documentation for engineering teams.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'connect-dist',
    title: 'ConnectDist',
    category: 'Relationship-First B2B Commerce',
    subtitle: 'Streamlining local distribution while strengthening the human connections that power Main Street.',
    thumbnail: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png',
    heroImage: 'https://static.wixstatic.com/media/9a7729_c78319cf9cf743dda2836e075a9b6c04~mv2.jpg/v1/fill/w_1634,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Person%20Writing%20on%20Paper%202.jpg',
    overview: 'ConnectDist is a mobile platform that connects small distributors with neighborhood shops, streamlining B2B ordering, inventory, and communication so local retailers can run their businesses with less chaos and more confidence. Based on a small sample in one city; next step would be a pilot with live data.',
    tags: ['Product Management', 'UX Research', 'Concept Project · 7 Weeks · London, Ontario'],
    role: 'Product Manager & Designer',
    timeline: '7 Weeks',
    tools: ['Figma', 'Miro', 'Notion'],
    impact: [
      { value: '90 Sec', label: 'Order Time' },
      { value: '5-7 Hrs', label: 'Saved/Week' },
      { value: 'High', label: 'Willingness to Pay' },
    ],
    highlights: [
      "Complex multi-item orders completed in under 90 seconds in usability tests.",
      "Participants estimated saving 5–7 hours per week on admin work.",
      "Strong stated willingness to pay for a modest subscription from local shop owners."
    ],
    content: [
      {
        number: 1, icon: '🏪', title: 'The Arena',
        blocks: [
          { type: 'h2', content: 'Hidden Inefficiencies on Main Street' },
          { type: 'p', content: 'Independent retailers keep neighborhoods alive, but behind the scenes, most still run distribution on phone calls, chaotic WhatsApp threads, and paper spreadsheets.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 8,
                content: [
                  { type: 'h3', content: 'The Problem' },
                  { type: 'p', content: 'Shop owners routinely juggle multiple distributors, each with different ordering methods. Distributors struggle with manual orders and overstocking because demand signals are buried in messages. Both sides lose money, and nobody has a clear picture of what’s actually happening.' }
                ]
              },
              {
                span: 4,
                className: 'flex flex-col justify-center',
                content: [
                  { type: 'aside', icon: '📉', title: 'The Cost', content: 'Slow-moving stock sits on shelves while fast-moving items go out of stock.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h3', content: 'Design Goals' },
                  {
                    type: 'list', items: [
                      '**Reduce time and effort** spent placing and tracking orders.',
                      '**Give shop owners a clearer view** of inventory and product performance.',
                      '**Help distributors maintain relationships**, not just process transactions.'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '🔍', title: 'Research',
        blocks: [
          { type: 'h2', content: 'Decoding the Psychology of Trust' },
          { type: 'p', content: 'I interviewed 5 shop owners and 3 distributors in London, Ontario, plus a short survey to quantify pain points.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'What I Learned' },
                  {
                    type: 'list', items: [
                      '**~80% of shops** struggled to reach distributors quickly for urgent orders.',
                      '**50% described inventory** as "manual" or "messy."',
                      '**Trust > Price**: Shop owners often chose a trusted distributor over a cheaper one because of reliability and support.'
                    ]
                  }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/connectdist-interviews.png', alt: 'Research Findings' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '💡', title: 'Key Insight', content: 'Local commerce runs on relationships, not just price. A purely transactional app would commoditize these relationships instead of strengthening them.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '🏗️', title: 'From Insight to Architecture',
        blocks: [
          { type: 'h2', content: 'Relationship-First Structure' },
          { type: 'p', content: 'With "relationship-first" as the guiding principle, I mapped the end-to-end flow. The goal was to make the relationship the primary object, not the product catalog.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'h3', content: 'Service Blueprint' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_b1335180f66c4d87a6f7f795a262104d~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_04_33.png', alt: 'Service Blueprint', caption: 'Service blueprint mapping shop and distributor journeys, highlighting where multi-channel orders currently break down.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '📐', title: 'Design Principles',
        blocks: [
          { type: 'h2', content: 'Guiding Decisions' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '❤️', title: 'Relationship-Centric', content: 'Start from distributors and accounts, then drill into products. Keep comms tied to the relationship.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⚡', title: 'Insight to Action', content: 'Show inventory signals (low stock, fast movers) and let users reorder directly from that view.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '👌', title: 'Simple & Familiar', content: 'Reduce choices. Use plain language. Support "the usual" reorders to respect existing habits.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 5, icon: '📱', title: 'Key Flows',
        blocks: [
          { type: 'h2', content: 'Relationship Hub' },
          { type: 'p', content: 'Instead of a generic marketplace, the home screen is a Hub showing each distributor with next delivery dates and quick actions. Tapping opens a dedicated space for order history and chat.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_6b0f2e72f38248de88f8e14564a79c74~mv2.png/v1/fill/w_922,h_852,fp_0.51_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups.png', alt: 'Relationship Hub UI', caption: 'Designed to replace scattered WhatsApp threads with in-context chat per distributor.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Consolidated History' },
                  { type: 'p', content: 'This design keeps the personal connection front and center while consolidating scattered conversations and spreadsheets into a single, shared history.' }
                ]
              }
            ]
          },
          { type: 'h2', content: 'Smart Inventory & Ordering' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Ending Guesswork' },
                  { type: 'p', content: 'Owners see stock grouped by category with "low" or "healthy" indicators. They can top up directly from this view, closing the loop between insight and action.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/connectdist-smart-inventory-mobile.jpg', alt: 'Smart Inventory Interface', caption: 'Inventory view surfaced low/healthy stock and allowed direct reorder from this screen.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 6, icon: '🎨', title: 'Visual System',
        blocks: [
          { type: 'h2', content: 'Calm and Approachable' },
          { type: 'p', content: 'To feel trustworthy to non-technical owners, I used a calm palette and readable typography (Merriweather for headings). Controls are large and touch-friendly for one-handed use.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_facde93c04c34cceae2e7ba351297b3d~mv2.jpeg/v1/fill/w_922,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34bojiukqwhp8cgywbgmd.jpeg', alt: 'Simplified UI Components' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 7, icon: '📈', title: 'Measuring Success',
        blocks: [
          { type: 'h2', content: 'Concept Validation' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⏱️', title: '90 Seconds', content: 'Average time in moderated usability tests.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '📉', title: '5-7 Hours', content: 'Self-reported weekly admin time saved (estimate).' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '💰', title: 'Willingness to Pay', content: 'Stated intent to pay a subscription if launched.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 8, icon: '🚀', title: 'What I\'d Explore Next',
        blocks: [
          { type: 'h2', content: 'Future Roadmap' },
          {
            type: 'list', items: [
              '**Pilot** with a small cluster of shops to measure real-world order accuracy.',
              '**Integrate** with existing accounting invoices (QuickBooks, etc.).',
              '**Expand analytics** for distributors to help them propose smart assortments.'
            ]
          }
        ]
      },
      {
        number: 9, icon: '🧠', title: 'Reflection',
        blocks: [
          { type: 'h2', content: 'B2B is Human' },
          { type: 'p', content: 'ConnectDist showed that B2B design is as much about human psychology as operational efficiency. By treating users as partners, we turn messy workflows into a shared platform that helps local businesses compete.' }
        ]
      }
    ],
  },

  {
    id: 'cican-navigator',
    title: 'CICan Navigator',
    category: 'Web Design',
    subtitle: 'Redesigning an educational platform to be more accessible and user-friendly for Canadians with diverse needs.',
    thumbnail: '/images/cican-navigator-hero.jpg',
    heroImage: '/images/cican-navigator-hero.jpg',
    overview: 'I helped redesign the CICan Navigator during a 48-hour hackathon, making it more accessible and user-friendly for Canadians with diverse needs. Our team focused on simplifying workflows and improving assistive technology support, resulting in a more inclusive and intuitive career guidance tool.',
    tags: ['Information Architecture', 'UX Redesign', 'Hackathon'],
    impact: [
      { value: '75% Reduction', label: 'Time-on-task' },
      { value: '40% Drop', label: 'in Site search' },
      { value: '60% Drop', label: 'in Support tickets' },
    ],
    highlights: [
      'Redesigned the platform for enhanced accessibility and inclusive UX.',
      'Simplified complex workflows and improved assistive technology compatibility.',
      'Enhanced overall usability with research-driven, user-centered solutions.'
    ],
    prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRs4rfDvt149VT7HWtUapX9%2FPortfolio%3Fnode-id%3D364-1776%26t%3DNq2DtstxHt33lqlM-4', title: 'CICan Navigator Design File' },
    content: [
      {
        number: 1, icon: '⭐', title: 'The Arena',
        blocks: [
          { type: 'h1', content: 'Lost in the Labyrinth of Education' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'p', content: 'For students, navigating the ecosystem of a large educational institution can be as challenging as their coursework. The CICan Navigator platform was intended to be a central hub for resources, but user feedback showed it was having the opposite effect. Critical information was buried, the navigation was inconsistent, and the site failed to meet modern accessibility standards.' },
                  {
                    type: 'p', content: `This wasn't just an inconvenience. It meant students were missing out on crucial deadlines, failing to find financial aid information, and feeling disconnected from their own educational journey. The system designed to guide them was making them feel lost.`
                  },
                  { type: 'p', content: '**My mission was to redesign the Navigator from the ground up, transforming it from a confusing labyrinth into a clear, accessible, and empathetic guide that empowers every student to take control of their path.**' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cican-navigator-chapter1.png', alt: 'CICan Navigator full page preview showing career guidance features' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '⭐', title: 'The Investigation',
        blocks: [
          { type: 'h1', content: 'Finding the Signal in the Noise' },
          { type: 'p', content: 'To fix the navigation, I first had to understand how students thought about the information. My process was focused on uncovering their mental models.' },
          { type: 'h2', content: 'Phase 1: Auditing the Chaos and Understanding the User' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  {
                    type: 'list',
                    items: [
                      '**Content Inventory & Heuristic Evaluation**: I began by mapping out the entire existing site\u2014hundreds of pages and documents. This inventory revealed massive content duplication, dead ends, and inconsistent terminology.',
                      `**Card Sorting (Open & Closed)**: This was the most critical part of my research. I conducted open card sorting exercises with 15 students, asking them to group pages into categories that made sense to them. This allowed me to escape the institution's internal jargon and build an IA based on the students' own language. We followed this with closed card sorting to validate our new proposed structure.`,
                      '**Persona Development**: Based on this research, I developed key student personas, like "The Overwhelmed First-Year" and "The Hyper-Focused Graduate," to ensure our design decisions served a wide range of needs.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'The \'Aha!\' Moment: Task-Based vs. Department-Based' },
                  { type: 'p', content: 'The single biggest insight was that the institution organized its website by internal departments, but students thought in terms of the tasks they needed to accomplish. A student doesn\'t think, "I need to visit the Registrar\'s Office section"; they think, "I need to register for a class."' },
                  { type: 'p', content: 'This insight drove our entire strategy: **We must rebuild the Information Architecture around user tasks, not organizational silos.**' },
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cican-navigator-research.png', alt: 'Research process showing key findings and user insights' },
                ]
              }
            ]
          },
          { type: 'h2', content: 'Phase 2: Architecting for Clarity' },
          { type: 'p', content: 'Armed with this principle, I designed a new sitemap and user flow. The new structure was radically simpler, flatter, and organized around action-oriented hubs like "My Academics," "Finances," and "Campus Life."' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'image', src: '/images/cican-navigator-aha.png', alt: 'Card sorting results and sitemap architecture' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '⭐', title: 'The Breakthrough',
        blocks: [
          { type: 'h1', content: 'The Redesigned Navigator' },
          { type: 'p', content: 'The final design is a testament to the power of a clear, user-centered information architecture.' },
          { type: 'h2', content: 'Design Pillar 1: The Personalized, Task-Based Dashboard' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 5,
                content: [
                  { type: 'p', content: 'The new homepage is a personalized dashboard. It surfaces timely, relevant information based on the student\'s profile. Instead of a generic news feed, a first-year student sees a prominent "Register for Your Courses" call-to-action, while a graduating student sees "Apply for Graduation." This applies the principle of Jakob\'s Law, giving users a familiar, personalized dashboard experience they expect from modern apps.' }
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'Personalized task-based dashboard homepage redesign' }
                ]
              }
            ]
          },
          {
            type: 'aside',
            icon: '♻️',
            title: 'All About Making It Simple',
            content: 'The design philosophy centered on radical simplification—removing unnecessary complexity at every turn. Every interaction was designed to feel effortless, guiding students naturally through their tasks without overwhelming them with options.'
          },
          { type: 'h2', content: 'Design Pillar 2: Navigation That Speaks the User\'s Language' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cican-navigator-demographics.png', alt: 'User information and demographic form interface' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'p', content: 'The global navigation was reduced from dozens of links to five clear, task-oriented categories derived directly from our card sorting data. The language used is simple and direct, ensuring students can find what they need in seconds.' }
                ]
              }
            ]
          },
          {
            type: 'aside',
            icon: '♻️',
            title: 'All About Making Accessible',
            content: 'From the beginning, the entire design was built to meet WCAG 2.1 AA standards. We used proper heading structures, ensured all images had alt-text, designed for sufficient color contrast, and ensured the entire site could be navigated with a keyboard alone. This wasn\'t a feature; it was the foundation upon which everything else was built.'
          },
          { type: 'h2', content: 'Design Pillar 3: Accessibility as a Foundation' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'image', src: '/images/cican-navigator-accessibility.png', alt: 'Career transition platform showing accessibility features and foundational competencies', className: 'max-w-[60%] mx-auto' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '⭐', title: 'The Impact',
        blocks: [
          { type: 'h1', content: 'From Confusion to Confidence' },
          { type: 'p', content: 'The redesigned CICan Navigator was a transformative success, simplifying the student experience and improving administrative efficiency.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⚡', title: 'Quantitative Impact', content: 'Post-launch analytics showed a 75% reduction in time-on-task for key actions and a 40% drop in search usage.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '💬', title: 'Qualitative Impact', content: 'Student feedback shifted from frustration to appreciation. Support tickets related to "I can\'t find..." dropped by over 60%.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🧠', title: 'My Key Reflection', content: 'This project cemented my belief that Information Architecture is the invisible backbone of a great user experience. No amount of beautiful UI can fix a broken structure.' }
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 'sunnys-finance',
    title: 'Sunny\'s Finance Dashboard',
    category: 'Fintech',
    subtitle: 'A data-driven financial dashboard for wealth advisors that transforms scattered client information into a clear, actionable platform.',
    thumbnail: '/images/sunnys-finance-hero.jpg',
    heroImage: '/images/sunnys-finance-hero.jpg',
    overview: 'I designed a comprehensive, data-driven financial dashboard for wealth advisors that transforms scattered client information into a clear, actionable, and collaborative platform, designed to reduce administrative overhead and foster more strategic client conversations.',
    tags: ['Data Visualization', 'Info Architecture', 'Design System'],
    impact: [
      { value: '✔️', label: 'Data Visualization' },
      { value: '✔️', label: 'Info Architecture' },
      { value: '✔️', label: 'Design System' },
    ],
    prototype: {
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FXPqh1WKUyvm0EJMQNIdfgX%2FFinancial-Management-Software%3Fnode-id%3D484-2639', title: `Sunny's Finance Design File`
    },
    content: [
      {
        number: 1, icon: '⭐', title: 'The Arena',
        blocks: [
          { type: 'h1', content: 'The Advisor\'s Dilemma' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 7,
                content: [
                  { type: 'p', content: 'In the world of personal finance, clarity is the most valuable commodity. Yet, financial advisors—the very people tasked with providing it—are often drowning in the opposite: a sea of fragmented data scattered across spreadsheets, bank statements, PDF files, and disparate software. They spend more time wrestling with data entry and administrative tasks than they do providing the high-value, strategic advice their clients depend on.' },
                  { type: 'p', content: 'On the other side, clients feel disconnected, viewing their financial health through a narrow keyhole of monthly statements. They lack a single, holistic view of their progress, making it difficult to feel engaged and confident in their long-term goals.' },
                  { type: 'p', content: '**The mission was to design "Finance," a sophisticated yet intuitive dashboard that serves as a single source of truth—empowering advisors to work more efficiently and clients to see their financial future more clearly than ever before.**' }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/sunnys-finance-dashboard-light.png', alt: 'Sunny\'s Finance dashboard showing saving goals, expenses, and credit score' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '⭐', title: 'Philosophy & Process',
        blocks: [
          { type: 'h1', content: 'My Design Philosophy & Process' },
          { type: 'p', content: 'For a platform managing sensitive financial data, the design must be built on a foundation of trust and psychological comfort. Before drawing a single pixel, I established three core design principles to guide every decision:' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'list', items: ['**Clarity Above All**: The interface must translate complex data into instantly understandable visuals. The goal is zero ambiguity.', '**Data-Rich, Not Data-Overwhelming**: Employ progressive disclosure at every opportunity. Show high-level summaries first, and provide clear pathways for advisors to drill down into details when necessary.', '**Confidence Through Craft**: The visual design must be immaculate. A professional, calm, and polished aesthetic is not just decoration; it\'s a crucial component in building user trust in the platform.'] }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/sunnys-finance-profile-light.png', alt: 'Client profile page showing personal information and file management' }
                ]
              }
            ]
          },
          { type: 'h2', content: 'My Process' },
          { type: 'p', content: 'My process was centered on visual exploration and system-building. I conducted a **competitive analysis** of leading fintech platforms like Personal Capital and Wealthsimple to identify best-in-class patterns for data visualization. This informed a **component-based design system** in Figma, ensuring every element—from a button to a data chart—was consistent, scalable, and pixel-perfect.' }
        ]
      },
      {
        number: 3, icon: '⭐', title: 'The Breakthrough',
        blocks: [
          { type: 'h1', content: 'An Ecosystem of Clarity' },
          { type: 'p', content: 'The final solution is a comprehensive interface that gives advisors a powerful command center to manage their clients\' financial lives. Each screen and component was meticulously crafted to serve a specific user need.' },
          { type: 'h2', content: 'The Command Center: The Advisor Dashboard' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 5,
                content: [
                  { type: 'p', content: 'The dashboard is the heart of the experience. It provides a complete, "at-a-glance" summary of a client\'s financial health.' },
                  { type: 'list', items: ['**Information Hierarchy**: The most critical data—the client\'s **Total Balance**—is given the most visual prominence. This immediately answers the advisor\'s first question.', '**Actionable Modules**: The screen is organized into logical cards for **Saving Goals, Expenses, AI Recommendations, and Credit Score**. This modular approach, based on **Miller\'s Law**, breaks down complex information into digestible chunks to avoid cognitive overload.', '**Visualized Progress**: Savings goals aren\'t just numbers; they are visualized with progress bars, providing an immediate and motivating sense of accomplishment for the client.'] }
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'image', src: '/images/sunnys-finance-overlay-light.png', alt: 'Expense detail overlay showing Essential, Discretionary, and Savings categories' },
                ]
              }
            ]
          },
          { type: 'h2', content: 'Seamless Detail View' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'p', content: 'Advisors need to move seamlessly from a high-level overview to granular details. When clicking "View detail" on the Total Balance card, a modal overlay appears.' },
                  { type: 'list', items: ['**Context Preservation**: By using an overlay instead of a separate page, the advisor never loses the context of the main dashboard. This makes the experience feel faster and more fluid.', '**Clear Categorization**: Expenses are clearly bucketed into **Essential, Discretionary, and Savings**, with intuitive icons and right-aligned values for quick scanning. This allows an advisor to pinpoint specific areas for discussion in seconds.'] }
                ]
              }
            ]
          },
          { type: 'h2', content: 'A Single Source of Truth: The Client Profile' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/sunnys-finance-dashboard-dark.png', alt: 'Dashboard dark mode showing saving goals and expenses' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'p', content: 'This screen consolidates all of a client\'s core information and documentation, eliminating the need for advisors to hunt through folders or emails.' },
                  { type: 'list', items: ['**Efficient Layout**: The two-column design separates client data on the left from their documents on the right. This creates a clear, logical separation of information types.', '**Intuitive File Management**: The design includes a large, clear drag-and-drop area for uploads, with a progress bar for active uploads and clear checkmarks for completed ones. The "Download" section uses easily recognizable icons, making it effortless for an advisor to generate reports for client meetings.'] }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '⭐', title: 'Reflection',
        blocks: [
          { type: 'h1', content: 'Reflection & Next Steps' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'list', items: ['**Key Learning**: A successful UI is not just a collection of pretty elements; it\'s a carefully orchestrated system of information architecture. The modular card system was crucial in creating an experience that feels both comprehensive and uncluttered.', '**Future-Ready Design**: Because this UI was built on a robust design system, it is ready for development and future expansion. New features and modules can be added seamlessly while maintaining perfect visual and interactive consistency.'] }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'p', content: 'This project solidified my belief that thoughtful UI design can be a powerful business tool, capable of turning complex data into the clarity and confidence every financial advisor strives to provide.' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cognitive-clarity',
    title: 'Cognitive Clarity (Zuo Insurance)',
    category: 'Product Design · UX Research · Concept / Client Engagement',
    subtitle: 'Redesigning insurance onboarding so data collection feels like a guided conversation instead of an interrogation.',
    thumbnail: '/images/cognitive-clarity-hero.jpg',
    heroImage: '/images/cognitive-clarity-hero.jpg',
    overview: 'Cognitive Clarity is a redesign of Zuo Insurance\'s client onboarding flow, focused on reducing cognitive load and improving usability for both agents and customers so that insurance data collection feels like a guided conversation instead of an interrogation.',
    tags: ['Product Design', 'UX Research', 'Concept / Client Engagement'],
    role: 'Lead Product Designer',
    timeline: 'Client Concept (6 Weeks)',
    tools: ['Figma', 'Miro', 'Prototyping'],
    impact: [
      { value: '22%', label: 'Higher Completion' },
      { value: '40%', label: 'Fewer Errors' },
      { value: '35%', label: 'Faster Sessions' },
    ],
    highlights: [
      "22% increase in form completion rate.",
      "40% reduction in data entry errors.",
      "35% faster onboarding sessions (12 min -> 7.8 min)."
    ],
    prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk9FwBBCiNodBDGsmH68zho%2FCognitive-Load-Management-Chinmay%3Fpage-id%3D0%253A1%26node-id%3D4-570%26p%3Df%26viewport%3D-576%252C1455%252C0.24%26t%3DtbF8cfoQy3woM9SG-1%26scaling%3Dscale-down%26content-scaling%3Dfixed', title: 'Cognitive Clarity Interactive Prototype' },
    content: [
      {
        number: 1, icon: '🏰', title: 'The Arena',
        blocks: [
          { type: 'h2', content: 'When a Form Becomes a Fortress' },
          { type: 'p', content: 'For Zuo Insurance, the onboarding form was the single most important touchpoint in the customer journey—and the single biggest source of pain. Customers faced a dense, jargon-heavy, multi-page form that felt more like an audit than a signup experience. Agents had to translate every question and re-enter data into internal systems.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 7,
                content: [
                  { type: 'h3', content: 'The Business Cost' },
                  {
                    type: 'list', items: [
                      '**High abandonment**: Many potential clients dropped off mid-way through the form, especially on the first page with 50+ fields.',
                      '**Costly errors**: Incomplete or incorrect data led to compliance risk, extra calls, and manual corrections.',
                      '**Bad first impression**: New customers started their relationship stressed and confused instead of reassured.'
                    ]
                  }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-old-form.jpg', alt: 'The legacy 50+ field form', caption: 'The original form overwhelmed users with 50+ fields on a single page.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '🎯', title: 'Design Challenge', content: 'How might we transform this intimidating, error-prone form into a guided, human conversation—without sacrificing the data quality and completeness that underwriting requires?' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '🔍', title: 'The Investigation',
        blocks: [
          { type: 'h2', content: 'Unpacking Cognitive Overload' },
          { type: 'p', content: 'The project used a dual-track research approach: understanding both customers filling out the form and agents who lived with it every day.' },
          { type: 'h3', content: 'Phase 1: Diagnosis and Discovery' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  {
                    type: 'list', items: [
                      '**Heuristic evaluation**: Reviewed the existing web form against usability and cognitive load heuristics, identifying issues such as overloaded screens, inconsistent wording, weak feedback, and poor error handling.',
                      '**Agent shadowing (5 agents)**: Observed agents onboarding new clients, watching how often they had to translate questions, backtrack, or switch between systems. Agents were effectively acting as interpreters and data-entry clerks, not advisors.',
                      '**Customer interviews**: Spoke with recent customers about how the process felt. A common sentiment: completing the form felt like being interrogated rather than helped.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'bento_grid',
            items: [
              {
                span: 7,
                content: [
                  { type: 'h3', content: 'Aha: Two Users, One Broken Conversation' },
                  { type: 'p', content: 'The form was not just a bad document; it was a broken three-way conversation: the customer did not understand the questions or why they mattered, the agent spent their time rephrasing and typing instead of advising, and the system treated everything as rigid fields, offering no support in guiding the conversation.' },
                  { type: 'p', content: 'The design problem became: **How can the interface facilitate a natural, guided conversation where the system handles complexity, so the customer and agent can focus on understanding and decisions?**' }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-aha.png', alt: 'Wireframe showing the conversation model', caption: 'Early wireframe visualizing the three-way conversation breakdown.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '🧠', title: 'Designing with Psychology',
        blocks: [
          { type: 'h2', content: 'Applying Cognitive Principles' },
          { type: 'p', content: 'Rather than simply "prettifying" the form, the redesign intentionally applied core cognitive psychology principles.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Miller\'s Law: Chunking Information' },
                  { type: 'p', content: 'The old form presented over 50 fields on a single screen. The new flow breaks the journey into clear sections (about you, about your home, coverage details), each with 5-7 related questions. This reduced perceived complexity and helped users stay oriented.' },
                  { type: 'h3', content: 'Hick\'s Law: Reducing Choices' },
                  { type: 'p', content: 'Conditional logic now hides irrelevant questions. For example, if a customer indicates they do not own a car, all vehicle-related sections remain hidden, shortening the path and reducing decision fatigue.' },
                  { type: 'h3', content: 'Progressive Disclosure' },
                  { type: 'p', content: 'Advanced options like deductible fine-tuning and special riders are tucked behind expanders. Customers see simple, friendly choices first and can access detailed controls only when needed.' }
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-principles.png', alt: 'Psychological principles applied to form design', caption: 'Diagram showing how chunking, choice reduction, and progressive disclosure were applied.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '💬', title: 'Inline Feedback and Guidance', content: 'Real-time validation, helper text, and conversational microcopy ("Tell us about your home") replace dense labels ("Property details section 2a"), reducing anxiety and errors.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '✨', title: 'The Breakthrough',
        blocks: [
          { type: 'h2', content: 'A Dual-Sided Solution' },
          { type: 'p', content: 'The outcome was a responsive web application with two coordinated views that share the same data model.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Design Pillar 1: The Agent\'s "Co-Pilot" View' },
                  { type: 'p', content: 'Agents see a control dashboard rather than a long form: a clear progress overview across sections with indicators for missing or risky information, fast navigation to any section, and inline prompts for key follow-up questions—turning agents into advisors instead of typists.' },
                  { type: 'p', content: 'If a customer starts online, the agent can pick up their session, review answers, and guide them through remaining questions without duplicating work.' }
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-pillar1.png', alt: 'Agent co-pilot dashboard', caption: 'Agent dashboard showing progress overview and missing info indicators—reducing back-and-forth.' }
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-pillar2.png', alt: 'Customer guided conversation view', caption: 'Customer view with one focused question at a time, contextual hints, and a progress summary.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Design Pillar 2: The Customer\'s "Guided Conversation" View' },
                  { type: 'p', content: 'Customers interact with a one-step-at-a-time flow: large, focused screens presenting a few related questions with friendly copy, contextual hints and examples to explain what is being asked and why, real-time feedback to catch issues before submission, and a persistent summary panel that updates as they go.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Design Pillar 3: Seamless Handoff' },
                  { type: 'p', content: 'The system supports flexible handoff scenarios: customers can start at home, save progress securely, and continue later with an agent. Agents can send a secure, time-limited link to let customers update details after the call. All interactions feed the same record—a single source of truth.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-handoff.jpg', alt: 'Seamless handoff between customer and agent', caption: 'Handoff flow showing how customers and agents share a single source of truth.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 5, icon: '📈', title: 'Impact',
        blocks: [
          { type: 'h2', content: 'Efficiency, Accuracy, and Peace of Mind' },
          { type: 'p', content: 'After introducing the new flow and testing it with agents and customers, the team saw:' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⚡', title: '35% Faster Onboarding', content: 'Average agent-led onboarding time dropped from 12 minutes to 7.8 minutes per client, freeing agents to handle more conversations per day.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🎯', title: '40% Fewer Data Errors', content: 'Inline validation, clearer wording, and better field grouping reduced correction tickets and manual rework.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🚀', title: '22% Higher Completion', content: 'More customers completed the process without dropping off, improving funnel performance and marketing ROI.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'p', content: 'These results came from comparing pre- and post-redesign sessions over a trial period with the same group of agents and similar types of customers.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 6, icon: '🔮', title: 'What I\'d Do Next',
        blocks: [
          { type: 'h2', content: 'Next Steps for Broader Rollout' },
          {
            type: 'list', items: [
              '**A/B test alternative wordings**: Test microcopy variations for the most sensitive sections (e.g., financial disclosures) to further optimize completion.',
              '**Extend the dual-sided pattern**: Reuse the cognitive principles and components for other products (auto, life, bundled policies).',
              '**Integrate richer analytics**: Track completion by segment, common clarification points, and create a feedback loop so underwriting and compliance can refine questions over time.'
            ]
          }
        ]
      },
      {
        number: 7, icon: '💭', title: 'Reflection',
        blocks: [
          { type: 'h2', content: 'Form Design is Conversation Design' },
          { type: 'p', content: 'This project reinforced that form design is really conversation design. By grounding the work in cognitive psychology and treating agents and customers as equal participants, the redesign did not just make the interface nicer—it created a faster, more accurate, and more reassuring way to start an insurance relationship.' }
        ]
      }
    ],
  }
];

// Helper to generate a flat text context for the AI
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
          case 'p': content += `${block.content.replace(/<[^>]*>/g, '')}\n`; break; // Strip HTML
          case 'aside': content += `Note: ${block.title} - ${block.content}\n`; break;
          case 'list': content += block.items.map(item => `- ${item.replace(/<[^>]*>/g, '')}`).join('\n') + '\n'; break; // Strip HTML
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