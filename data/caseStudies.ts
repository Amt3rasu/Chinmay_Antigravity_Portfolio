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
            category: 'Service Design · Complex Systems · UX/UI',
                subtitle: 'Lead Designer — Ecosystem Strategy, Service Blueprinting, UX/UI',
                    thumbnail: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
                        heroImage: 'https://static.wixstatic.com/media/9a7729_db41f399ea68470baac3dedb85a2c370~mv2.jpg/v1/fill/w_603,h_721,fp_0.73_0.23,q_85,usm_0.66_1.00_0.01,enc_auto/Smiling%20Passenger%20Train%20Travel_edited.jpg',
                            overview: 'AccessTransit transforms public transport from a gamble into a guarantee for riders with disabilities. Rather than just designing another mobile app, I mapped a multi-surface ecosystem (mobile, kiosk, web) and created a service blueprint that aligned digital touchpoints with physical infrastructure.',
                                tags: ['Service Design', 'Systems Thinking', 'Mobile App', 'Kiosk UI'],
                                    role: 'Lead Service Designer',
                                        timeline: '8 Weeks (Concept)',
                                            tools: ['Figma', 'Miro', 'Service Blueprinting'],
                                                impact: [
                                                    { value: '68%', label: 'Faster Kiosk Purchases' },
                                                    { value: '3', label: 'Surfaces Designed' },
                                                    { value: 'AAA', label: 'WCAG 2.1 Compliance' },
                                                ],
                                                    highlights: [
                                                        "Designed a cohesive ecosystem across mobile, web, and physical kiosk surfaces.",
                                                        "Reduced kiosk ticket purchase time by 68% for users with visual and motor impairments.",
                                                        "Mapped a comprehensive service blueprint identifying operational failure points in transit infrastructure."
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
                                                                                    { type: 'h2', content: 'The Systemic Failure' },
                                                                                    { type: 'p', content: 'For millions with disabilities, public transit is a daily gamble. A broken elevator isn\'t just an inconvenience; it\'s a hard blocker that ruins a commute. Existing transit apps treat accessibility as an afterthought — a hidden checkbox pushed deep into a settings menu.' },
                                                                                    { type: 'h3', content: 'The Design Brief' },
                                                                                    { type: 'p', content: 'Design a digital solution that restores confidence and independence for riders with disabilities across a regional transit network. ' },
                                                                                    { type: 'h3', content: 'The Constraints' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Multi-surface reality** — The solution couldn\'t just be a mobile app. It had to bridge the gap between planning at home (web/mobile) and navigating the station (kiosks).',
                                                                                            '**Extreme accessibility requirements** — The interface must be usable by people with severe visual, motor, and cognitive impairments under high-stress conditions (a crowded station).',
                                                                                            '**Infrastructure unreliability** — I could design the best app in the world, but I couldn\'t fix the physical elevators. The design had to gracefully handle physical infrastructure failures.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 5,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d228779898c04719909ad71aae0823d9~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_01.png', alt: 'User Journey Map', caption: 'Initial journey mapping revealed that confidence plummeted not during the ride, but at the transition points (station entry, transfers).' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 2, icon: '🔍', title: 'Discovery',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Going Beyond Assumptions' },
                                                                    { type: 'p', content: 'To understand the friction, I conducted contextual inquiries — shadowing 8 users with different disabilities on their actual commutes. This ethnographic approach revealed gaps that lab testing would never catch.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Key Insight: The Trust Deficit' },
                                                                                    { type: 'p', content: 'The core problem wasn\'t a lack of features. It was a profound lack of trust. Users didn\'t trust the static online information because reality (a broken elevator) often contradicted the app. **I realized I wasn\'t trying to build a trip planner; I was trying to build a trust engine.**' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🦯', title: 'Visual Impairment', content: 'Kiosks are unusable. Touch screens without tactile feedback or audio guidance force reliance on strangers.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🦽', title: 'Motor Impairment', content: 'Routing algorithms that prioritize "fastest time" often suggest transfers that require stairs.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🧠', title: 'Cognitive Load', content: 'High-stress environments (noise, crowds, time pressure) drastically reduce a user\'s ability to parse complex UIs.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 3, icon: '🧭', title: 'Framing',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Service Blueprinting' },
                                                                    { type: 'p', content: 'Because the solution spanned multiple touchpoints, a simple user flow wasn\'t enough. I built a comprehensive **Service Blueprint** to map the front-stage user experience against the back-stage systemic operations.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_edade27bf35c43d5916a957b6850573d~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_59.png', alt: 'Service Blueprint', caption: 'The Service Blueprint identified critical failure points where physical hardware (elevators) failed to communicate with digital routing (the app).' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Design Principles' },
                                                                                    { type: 'p', content: 'I synthesized the research into three non-negotiable architectural principles:' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Make uncertainty visible**: Don\'t hide broken infrastructure. Surface maintenance alerts proactively before the user leaves home.',
                                                                                            '**Radical progressive disclosure**: In high-stress station environments, show only the next immediate step. Hide everything else.',
                                                                                            '**Universal degradation**: The system must gracefully degrade. If the user can\'t read the screen, it must speak. If they can\'t tap, it must accept voice.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 4, icon: '🔀', title: 'Exploration',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Alternatives Considered (The Kiosk Problem)' },
                                                                    { type: 'p', content: 'The physical station kiosk was the hardest touchpoint. I explored three approaches to making a touchscreen accessible to users who are blind or have severe motor impairments.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Option A: Companion App' },
                                                                                    { type: 'p', content: 'Users control the physical kiosk via their smartphone via Bluetooth.' },
                                                                                    { type: 'aside', icon: '❌', title: 'Why it failed', content: 'Excluded users with dead phone batteries or low technical literacy. High friction setup.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Option B: Hardware Buttons' },
                                                                                    { type: 'p', content: 'Add physical braille joypads to every kiosk.' },
                                                                                    { type: 'aside', icon: '❌', title: 'Why it failed', content: 'Violated the constraint. I was designing software, not retrofitting millions of dollars of hardware.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Option C: Accessible Modes ✓' },
                                                                                    { type: 'p', content: 'A software-driven approach standardizing a "Universal Access" zone at the bottom edge of all screens.' },
                                                                                    { type: 'aside', icon: '✅', title: 'Why it won', content: 'Zero hardware cost. Provided audio out (headphone jack) and high-contrast large-touch zones.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 5, icon: '🎯', title: 'Solution',
                                                                blocks: [
                                                                    { type: 'h2', content: 'The Ecosystem Design' },
                                                                    { type: 'p', content: 'The final solution is a coordinated ecosystem where context follows the user from their living room to the station platform.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '1. Mobile: The Trust Dashboard' },
                                                                                    { type: 'p', content: 'The mobile app serves as the planning hub. Instead of a standard map, the dashboard fronts **real-time infrastructure status**. It proactively warns users if the elevator on their saved route breaks down, suggesting alternative accessible paths *before* they leave home.' },
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d7741e88a374498b924f59ab592fb439~mv2.png/v1/fill/w_461,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups%201x.png', alt: 'Real-time Data Mockup', caption: 'Proactive disruption handling with clear, high-contrast alerts.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '2. Kiosks: High-Stress UI' },
                                                                                    { type: 'p', content: 'Station kiosks feature massive touch targets and brutalist simplicity. I reduced the standard 12-button transit menu down to **3 primary actions**. A persistent, thumb-accessible "Accessibility Mode" toggle instantly shifts the UI to AAA contrast, triples font size, and activates audio support.' },
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_613aab198f9c48cf938fe84a19db3b76~mv2.png/v1/fill/w_461,h_448,fp_0.50_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Copilot%20Jul%2031%202025.png', alt: 'Accessible Kiosk Design', caption: 'Simplified kiosk UI designed for extreme usability under time pressure.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 6, icon: '📊', title: 'Validation',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Testing Against Constraints' },
                                                                    { type: 'p', content: 'I tested the kiosk prototypes with users simulating high-stress environments (time constraints, noisy background audio). The results validated the drastic simplification logic.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '⏱️', title: '68% Time Reduction', content: 'Task completion time for buying a ticket dropped from 47 seconds (legacy UI) to 15 seconds.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '✅', title: '95% Success Rate', content: 'First-time completion rate without errors increased dramatically due to progressive disclosure.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '♿', title: 'AAA Compliance', content: 'The high-contrast mode successfully passed all WCAG 2.1 AAA contrast requirements.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'What I\'d Do Differently' },
                                                                                    { type: 'p', content: 'This concept relied on an assumption that transit authorities have accurate real-time APIs for their elevators. In reality, IoT sensors on municipal infrastructure are notoriously unreliable. If taking this to production, I would design a **crowd-sourced fallback feature** — allowing riders to instantly report broken infrastructure (similar to Waze) to supplement official APIs.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
},
  {
{
    id: 'connect-dist',
        title: 'ConnectDist',
            category: 'Product Strategy · B2B Commerce',
                subtitle: 'Lead Product Manager & Designer — Discovery, Strategy, UX/UI',
                    thumbnail: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png',
                        heroImage: 'https://static.wixstatic.com/media/9a7729_c78319cf9cf743dda2836e075a9b6c04~mv2.jpg/v1/fill/w_1634,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Person%20Writing%20on%20Paper%202.jpg',
                            overview: 'ConnectDist is a B2B platform designed to modernize the fragmented supply chain between local distributors and independent neighborhood shops. Moving beyond transactional efficiency, the platform was structured to digitize inventory while strengthening the human relationships that power local commerce.',
                                tags: ['Product Management', 'B2B SaaS', 'UX Research', 'Dual-Sided Marketplace'],
                                    role: 'Product Manager & UX Designer',
                                        timeline: '7 Weeks (Concept + Validation)',
                                            tools: ['Figma', 'Miro', 'Notion', 'JTBD Framework'],
                                                impact: [
                                                    { value: '5-7 Hrs', label: 'Admin Time Saved/Wk' },
                                                    { value: '90 Sec', label: 'Multi-Item Order Time' },
                                                    { value: 'High', label: 'Validated WTP' },
                                                ],
                                                    highlights: [
                                                        "Conducted foundational research with 8 B2B stakeholders to uncover supply chain inefficiencies.",
                                                        "Designed a dual-sided marketplace prioritizing 'relationship-first' communication over pure catalog browsing.",
                                                        "Validated the concept with shop owners, resulting in strong stated Willingness to Pay (WTP)."
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
                                                                                    { type: 'h2', content: 'The Broken B2B Supply Chain' },
                                                                                    { type: 'p', content: 'While enterprise distribution runs on SAP, local independent commerce still runs on chaos. Shop owners juggle dozens of distributors via phone calls, fragmented WhatsApp threads, and paper invoices. The result is chronic overstocking, missed deliveries, and strained relationships.' },
                                                                                    { type: 'h3', content: 'The PM Challenge' },
                                                                                    { type: 'p', content: 'Define and design a digital platform that brings order to this ecosystem without destroying the informal, relationship-based trust that local commerce relies on.' },
                                                                                    { type: 'h3', content: 'The Constraints' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Zero tech literacy** — Many users actively resist new software, preferring the "devil they know" (WhatsApp).',
                                                                                            '**Dual-sided complexity** — The platform had to provide immediate value to both the Supply side (Distributors) and Demand side (Shops).',
                                                                                            '**Resource constraints** — As a solo PM/Designer, I had 7 weeks to move from initial hypothesis to validated high-fidelity prototype.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 5,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_b1335180f66c4d87a6f7f795a262104d~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_04_33.png', alt: 'Service Blueprint', caption: 'Mapping the fragmented communications between shop owners and distributors across multiple channels.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 2, icon: '🔍', title: 'Discovery',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Validating the Problem Space' },
                                                                    { type: 'p', content: 'Before designing anything, I needed to validate the JTBD (Jobs to be Done). I interviewed 5 shop owners and 3 distributors in London, Ontario.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 8,
                                                                                content: [
                                                                                    { type: 'h3', content: 'The Pivot: Trust > Efficiency' },
                                                                                    { type: 'p', content: 'My initial hypothesis was that users wanted a "Shopify for B2B" — a massive, searchable catalog of cheap goods. **I was wrong.**' },
                                                                                    { type: 'p', content: 'Research revealed that shop owners often stick with slightly more expensive distributors because they *trust* them to handle returns or rush a late delivery. A purely transactional e-commerce app would commoditize these relationships and fail adoption.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🗣️', title: 'User Quote', content: '"If I buy from a shiny new app and the milk spoils, who do I yell at? I buy from Tony because Tony fixes it."' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 3, icon: '🧭', title: 'Framing',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Defining the Product Strategy' },
                                                                    { type: 'p', content: 'With the insight that B2B commerce is fundamentally relationship-driven, I defined three core product principles to guide the architecture:' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🤝', title: 'Relationships First', content: 'The primary organizational unit should be the Distributor profile, not a global product search bar. Preserve the 1:1 connection.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '⚡', title: 'Insight to Action', content: 'Close the loop. If the dashboard flags "Low Stock," the reorder button should be immediately adjacent, not on a separate page.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📉', title: 'Minimum Viable Input', content: 'Reduce the burden of data entry. Distributors shouldn\'t need to manually update stock levels; the system should infer it from order history.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 4, icon: '🔀', title: 'Exploration',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Architecting the Information' },
                                                                    { type: 'p', content: 'The biggest design challenge was replacing the flexibility of WhatsApp without losing its convenience. I explored two main IA models.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Option A: The Shopping Cart Model' },
                                                                                    { type: 'p', content: 'A traditional B2C e-commerce model where users browse categories, add to cart, and checkout.' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Pros:** Deeply familiar mental model.',
                                                                                            '**Cons:** Too slow. B2B orders aren\'t discovery-driven; they are repetitive bulk replenishments (e.g., "Give me my usual Tuesday order").'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Option B: The Hub Model ✓' },
                                                                                    { type: 'p', content: 'A dashboard that prioritizes contextual chat and 1-click "reorder past invoice" functionality.' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**Pros:** Mimics the speed of a WhatsApp text message but organizes the data into structured invoices backend.',
                                                                                            '**Cons:** Heavier initial engineering lift to support integrated chat.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 5, icon: '🎯', title: 'Solution',
                                                                blocks: [
                                                                    { type: 'h2', content: 'The ConnectDist Platform' },
                                                                    { type: 'p', content: 'The resulting design digitizes the informal supply chain while centering the human element.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_6b0f2e72f38248de88f8e14564a79c74~mv2.png/v1/fill/w_922,h_852,fp_0.51_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups.png', alt: 'Relationship Hub UI', caption: 'The Relationship Hub: Replacing scattered WhatsApp threads with structured, in-context supplier communication.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '1. Structured Communication Hub' },
                                                                                    { type: 'p', content: 'Instead of abstracting the supplier away, each distributor gets a dedicated hub showing next delivery dates, recent invoices, and a contextual chat thread. When a shop owner messages "I need 2 more cases of Coke," the app automatically links the message to the active open invoice.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '2. Smart Replenishment' },
                                                                                    { type: 'p', content: 'Shop owners see inventory grouped with "Low" or "Healthy" indicators based on past velocity. They can top up directly from this view, bypassing the traditional multi-step catalog search.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'image', src: '/images/connectdist-smart-inventory-mobile.jpg', alt: 'Smart Inventory Interface', caption: 'Smart inventory tracking with integrated 1-click replenishment.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 6, icon: '📊', title: 'Validation',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Concept Testing' },
                                                                    { type: 'p', content: 'I ran moderated usability sessions with the initial research cohort, asking them to complete a simulated weekly restocking run.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '⏱️', title: '90 Second Orders', content: 'Average completion time for complex, multi-item B2B orders.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📉', title: 'Admin Reduction', content: 'Participants estimated the workflow would save them 5–7 hours of admin work per week.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '💰', title: 'Validated WTP', content: '4 out of 5 shop owners stated they would pay a $30-$50 monthly subscription for this tool.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'What I\'d Do Differently' },
                                                                                    { type: 'p', content: 'Building a dual-sided marketplace from scratch is notoriously difficult because of the cold-start problem (shops won\'t use it without distributors; distributors won\'t use it without shops). If I were transitioning this from concept to startup, I would pivot to a **single-player mode first** — providing a brilliant inventory management tool for shops, and only introducing the B2B distributor network once a critical mass of shops was locked in.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
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
                            overview: 'Educational portals are notoriously difficult to navigate because they reflect internal organizational charts, not student mental models. In a 48-hour civic tech sprint, I led the redesign of the CICan Navigator, transforming a legacy institutional labyrinth into a task-driven, WCAG-compliant portal.',
                                tags: ['Civic Tech', 'Information Architecture', 'WCAG 2.1 AA', '48-Hour Sprint'],
                                    role: 'Lead UX/UI Designer',
                                        timeline: '48 Hours (Hackathon)',
                                            tools: ['Figma', 'Optimal Workshop', 'Miro'],
                                                impact: [
                                                    { value: '75%', label: 'Drop in Task Time' },
                                                    { value: '40%', label: 'Less Search Usage' },
                                                    { value: '60%', label: 'Fewer Support Tickets' },
                                                ],
                                                    highlights: [
                                                        "Conducted rapid card sorting to rebuild the Information Architecture around student tasks instead of institutional departments.",
                                                        "Achieved WCAG 2.1 AA compliance as a baseline requirement, not an afterthought.",
                                                        "Reduced time-on-task by 75% by implementing a personalized, role-based dashboard."
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
                                                                                    { type: 'h2', content: 'The Institutional Labyrinth' },
                                                                                    { type: 'p', content: 'Colleges and universities often treat their student portals as digital filing cabinets. The existing CICan Navigator platform meant to be a central hub for student resources, but it had devolved into a maze of dead links, redundant pages, and departmental jargon.' },
                                                                                    { type: 'h3', content: 'The Challenge' },
                                                                                    { type: 'p', content: 'Modernize the legacy portal to reduce support ticket volume and ensure students don\'t miss critical deadlines (like financial aid or course registration) simply because they couldn\'t find the right form.' },
                                                                                    { type: 'h3', content: 'The Constraints' },
                                                                                    {
                                                                                        type: 'list', items: [
                                                                                            '**48-Hour Timeline** — A high-pressure civic tech sprint environment leaving no room for bloated methodology.',
                                                                                            '**Accessibility Mandate** — Public sector software must meet strict WCAG 2.1 AA standards; failure to do so is a legal liability.',
                                                                                            '**Diverse User Base** — The portal had to serve everyone from 18-year-old digital natives to 50-year-old returning adults with varying technical literacy.'
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 5,
                                                                                content: [
                                                                                    { type: 'image', src: '/images/cican-navigator-chapter1.png', alt: 'CICan Navigator Legacy Preview', caption: 'The original portal suffered from "mystery meat" navigation and a severe lack of visual hierarchy.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 2, icon: '🔍', title: 'Discovery',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Finding Signal in the Noise' },
                                                                    { type: 'p', content: 'With only hours to conduct research, I had to be surgical. I skipped broad demographic surveys and went straight to mental model mapping.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'The Underlying Flaw: Conway\'s Law in Action' },
                                                                                    { type: 'p', content: 'A rapid heuristic audit revealed that the website was structured identically to the institution\'s physical HR chart. (e.g., Financial Aid was buried under "Office of the Vice Provost of Student Affairs").' },
                                                                                    { type: 'p', content: 'I ran a quick open card sorting exercise with a handful of student participants, asking them to categorize the top 20 most-visited pages. The result was unanimous: **Students think in verbs (tasks), the institution built in nouns (departments).**' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'aside', icon: '❌', title: 'Current Logic', content: '"I need to find the Office of the Registrar to access the Course Catalog sub-folder."' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'aside', icon: '✅', title: 'Student Logic', content: '"I need to Register for Classes."' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 3, icon: '🧭', title: 'Framing',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Architecting for Clarity' },
                                                                    { type: 'p', content: 'The solution wasn\'t to reskin the UI; the solution was to burn down the Information Architecture and rebuild it around user intent.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🎯', title: 'Task-Based Navigation', content: 'Flatten the hierarchy. Group content by what the user is trying to do (Academics, Financing, Life) rather than who owns the content.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '👁️', title: 'Accessibility First', content: 'Contrast isn\'t a feature; it\'s a baseline. Keyboard navigation and screen-reader order must be designed into the wireframes.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '🙋', title: 'Personalized Context', content: 'A first-year student needs a campus map. A senior student needs graduation forms. The portal must adapt its surface based on the user\'s state.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                number: 4, icon: '🎯', title: 'Solution',
                                                                blocks: [
                                                                    { type: 'h2', content: 'The Redesigned Navigator' },
                                                                    { type: 'p', content: 'The final design replaces the generic, one-size-fits-all intranet with a personalized, task-driven dashboard.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '1. The Dynamic Dashboard' },
                                                                                    { type: 'p', content: 'By leveraging the student\'s login profile, the home screen curates immediate next steps. If tuition is due in 3 weeks, that card elevates to the top of the feed. This proactively answers the "What do I need to do right now?" question, heavily reducing routine support calls.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'Personalized task-based dashboard', caption: 'Dynamic card interface prioritizing urgent tasks over static links.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'image', src: '/images/cican-navigator-demographics.png', alt: 'Accessible UI components', caption: 'High-contrast, large-touch interfaces optimized for returning adult learners.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 6,
                                                                                content: [
                                                                                    { type: 'h3', content: '2. Radically Flattened Navigation' },
                                                                                    { type: 'p', content: 'The global nav of 30+ dropdown links was culled to 5 core task-oriented pillars validated by the card sorting data. Universal search was promoted to the highest Z-index layer.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    { type: 'h3', content: '3. Built-In Accessibility (WCAG 2.1 AA)' },
                                                                    { type: 'p', content: 'Public sector work demands rigor. We locked the color palette to guarantee a minimum 4.5:1 text contrast ratio, enlarged default tap targets to 48px square minimum, and structured the HTML outline (H1 → H3) logically for screen readers.' }
                                                                ]
                                                            },
                                                            {
                                                                number: 5, icon: '📊', title: 'Validation',
                                                                blocks: [
                                                                    { type: 'h2', content: 'Measuring Civic Tech Impact' },
                                                                    { type: 'p', content: 'At the end of the sprint, we validated the prototype against the legacy system using identical task scenarios.' },
                                                                    {
                                                                        type: 'bento_grid',
                                                                        items: [
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '⏱️', title: '75% Reduction', content: 'Time-on-task for core actions (like finding a specific financial form) plummeted.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '📉', title: '40% Search Drop', content: 'Users navigated directly to their goals instead of relying on the fallback of the search bar.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 4,
                                                                                content: [
                                                                                    { type: 'aside', icon: '☎️', title: '60% Fewer Tickets', content: 'Projected reduction in Tier 1 IT support tickets regarding "Where do I find..." questions.' }
                                                                                ]
                                                                            },
                                                                            {
                                                                                span: 12,
                                                                                content: [
                                                                                    { type: 'h3', content: 'Reflection: The Invisible Backbone' },
                                                                                    { type: 'p', content: 'This sprint cemented my belief that Information Architecture is the invisible backbone of a product\'s success. No amount of polish or modern UI components can save a product if the underlying structure doesn\'t map to how users actually think.' }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
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