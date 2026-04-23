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
        thumbnail: '/images/flamey-ai/MacBook_01.jpg',
        heroImage: '/images/flamey-ai/MacBook_01.jpg',
        overview: 'Redesigning the Flamey AI Sequence Builder — transforming a complex, high-friction form into a guided, persona-driven experience.',
        role: 'Lead UX/UI Designer',
        timeline: '3 Days',
        tools: ['Figma', 'FigJam', 'Chakra UI'],
        tags: ['AI', 'SaaS', 'Product Design', 'B2B'],
        impact: [
            { value: '3 Days', label: 'Design Sprint' },
            { value: '3', label: 'User Personas Mapped' },
            { value: '7', label: 'Key Screens Delivered' },
        ],
        highlights: [
            "Mapped 3 distinct user personas to drive design decisions.",
            "Delivered 7 key screens across the full sequence creation flow.",
            "Replaced a single generic form with a guided, persona-driven experience."
        ],
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxZ7vT8TAJ8kk3XHyt6sL9S%2FFlamey-Design-Challange%3Fnode-id%3D164-59983%26t%3DKxwSYhEMjhjjGJLx-1', title: 'Explore the Figma File' },
        content: [
            {
                number: 1, icon: '📋', title: 'The Brief',
                blocks: [
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
                    },
                    { type: 'image', src: '/images/flamey-ai/Design_Critique.jpg', alt: 'The existing Sequence Builder — a dense wall of form fields with a hidden AI toggle', caption: 'The old builder: every configuration option on one screen. AI toggle buried at the bottom.' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery',
                blocks: [
                    { type: 'h2', content: 'Research Approach' },
                    { type: 'p', content: 'With no user access and a 4-day window, I needed fast, high-signal research. I chose two methods: a **competitive teardown** of 3 direct competitors and **persona-driven journey mapping** based on the PM\'s qualitative notes.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/flamey-ai/IMG_4586.jpg', alt: 'LOFI Sketch 1' },
                            { src: '/images/flamey-ai/IMG_4587.jpg', alt: 'LOFI Sketch 2' },
                            { src: '/images/flamey-ai/IMG_4588.jpg', alt: 'LOFI Sketch 3' }
                        ],
                        caption: 'High-speed LOFI ideation on whiteboard and paper to map out user flows.'
                    },
                    { type: 'h3', content: 'Competitive Teardown' },
                    { type: 'p', content: 'I spent Day 1 building sequences in Apollo.io, 11x.ai, and Attio. Not just screenshots — I actually created campaigns, measured how long each took, and documented every friction point.' },
                    { type: 'aside', icon: '🔵', title: 'Apollo.io', content: '**22 minutes** to create a sequence. Strong template library, but AI felt bolted-on. No conversational interface.' },
                    { type: 'aside', icon: '🟣', title: '11x.ai', content: '**AI-first** approach. Fast creation but users felt out of control. "It just does things" — no preview, no trust.' },
                    { type: 'aside', icon: '🟢', title: 'Attio', content: '**Clean UI** but shallow AI integration. The design system was excellent; the workflow logic was not.' },
                    { type: 'h3', content: 'Key Insight' },
                    { type: 'p', content: 'Every competitor fell into one of two traps: **AI-first (fast but scary)** or **Form-first (safe but slow)**. Nobody had cracked the middle: **AI as a collaborative partner where the user stays in control.**' },
                    { type: 'h2', content: 'Persona Mapping' },
                    { type: 'p', content: 'Using the PM\'s interview notes and support tickets, I mapped three distinct user personas. This was the moment the design direction crystallized — one-size-fits-all was the root cause of failure.' },
                    { type: 'aside', icon: '⚡', title: 'SDR Persona', content: '"Just help me launch."\nGoal: Speed & volume.\nMental model: "Tell me what works and let me go."' },
                    { type: 'aside', icon: '🧠', title: 'AE Persona', content: '"I need control."\nGoal: Precision per account.\nMental model: "Start me somewhere, but let me drive."' },
                    { type: 'aside', icon: '🛡️', title: 'Manager Persona', content: '"Consistency is key."\nGoal: Scale & quality control.\nMental model: "What worked last quarter should be reusable."' }
                ]
            },
            {
                number: 3, icon: '🧭', title: 'Framing',
                blocks: [
                    { type: 'h2', content: 'Synthesizing Research into Principles' },
                    { type: 'p', content: 'Before sketching a single screen, I distilled the research into 4 design principles. These became the decision-making framework for every UI choice that followed.' },
                    { type: 'aside', icon: '🤖', title: 'AI as co-pilot, not autopilot', content: 'The AI asks before it acts. Users stay in control, but the blank page is eliminated. This directly addresses 11x.ai\'s trust problem.' },
                    { type: 'aside', icon: '👁️', title: 'Show before committing', content: 'Visual timeline preview eliminates the fear of "what will this send?" — the #1 anxiety from support tickets.' },
                    { type: 'aside', icon: '🧠', title: 'Progressive disclosure', content: 'Only what\'s needed appears. Complex settings are accessible but never in the way. This solves the "wall of text" problem in the old builder.' },
                    { type: 'aside', icon: '⚡', title: 'Respect expertise levels', content: 'Entry points adapt to the user — SDRs need guidance, Managers need scale. One door for everyone was the root cause of failure.' },
                    { type: 'h3', content: 'The Design Audit' },
                    { type: 'p', content: 'I also conducted a heuristic evaluation of the existing builder. Three critical findings:' },
                    {
                        type: 'list', items: [
                            '**Information Architecture**: All configuration steps presented simultaneously → cognitive overload. Nielsen\'s "Recognition over Recall" violated.',
                            '**AI Discoverability**: The AI toggle was below the fold, with no explanation of what it did. Users didn\'t know it existed.',
                            '**Feedback & Trust**: No preview of what the AI would generate → users were afraid to commit. Zero progressive feedback.'
                        ]
                    },
                    { type: 'image', src: '/images/flamey-ai/IMG_4590.jpg', alt: 'Flamey AI exploration sketch 1' },
                    { type: 'image', src: '/images/flamey-ai/IMG_4589.jpg', alt: 'Flamey AI exploration sketch 2' }
                ]
            },
            {
                number: 4, icon: '🔀', title: 'Exploration',
                blocks: [
                    { type: 'h2', content: 'Alternatives Considered & Trade-offs' },
                    { type: 'p', content: 'I explored three structural approaches on Day 2. Each had clear trade-offs. The decision wasn\'t obvious — here\'s the reasoning.' },
                    { type: 'aside', icon: '🅰️', title: 'Option A: Step Wizard', content: 'Linear flow. Low cognitive load, easy to implement in Chakra UI. But forced linearity frustrates power users (AEs).' },
                    { type: 'aside', icon: '🅱️', title: 'Option B: AI-First Canvas', content: 'Full-screen chat with AI. Fastest creation but 11x.ai proved this scares users. No control = no trust.' },
                    { type: 'aside', icon: '✅', title: 'Option C: Hub + Spokes (Chosen)', content: 'Central hub with 4 entry points. AI integrated as one path, not the only path. Respects all 3 personas. Extensible.' },
                    { type: 'h3', content: 'Decision: Hub + Spokes' },
                    { type: 'p', content: 'I chose Option C because it was the only approach that respected all three personas without forcing a single workflow. The risk of choice paralysis was mitigated by limiting entry points to exactly 4, each with a clear icon, label, and one-line description.' },
                    { type: 'image', src: '/images/flamey-ai/Sequence_dashboard.jpg', alt: 'Sequence dashboard' },
                    { type: 'image', src: '/images/flamey-ai/Sequence_recipients.jpg', alt: 'Sequence recipients table' },
                    { type: 'image', src: '/images/flamey-ai/Sequence_settings.jpg', alt: 'Sequence settings panel' }
                ]
            },
            {
                number: 5, icon: '🎯', title: 'Solution',
                blocks: [
                    { type: 'h2', content: 'The Final Design' },
                    { type: 'p', content: 'The redesign makes one fundamental shift: it reframes the Sequence Builder from a **form** into a **guided journey** with the AI as a creative partner.' },
                    { type: 'h3', content: '4 Entry Points' },
                    { type: 'p', content: 'The first screen is no longer a blank canvas. It\'s a structured choice: 🤖 AI-Assisted, 📋 Templates, 📎 Duplicate, ✏️ Manual — each respecting a persona\'s starting point.' },
                    { type: 'image', src: '/images/flamey-ai/New_sequence_selection.jpg', alt: 'Clean UI showing 4 distinct entry point cards', caption: 'Entry points specifically designed for our three target personas.' },
                    { type: 'h3', content: 'The AI Conversation' },
                    { type: 'p', content: 'Instead of a form asking "How many steps?", the AI asks strategic questions one by one, building a brief before generating.' },
                    { type: 'image', src: '/images/flamey-ai/AI_questions_for_new_sequence.jpg', alt: 'Conversational AI building a sequence step by step' },
                    { type: 'image', src: '/images/flamey-ai/AI_structure_and_suggested_content.jpg', alt: 'AI generating sequence structure and content suggestions based on answers' },
                    { type: 'h3', content: 'The Trust Moment: Visual Timeline Preview' },
                    { type: 'p', content: 'Users see exactly what will be sent before committing. This eliminated the #1 fear: "What will this send?"' },
                    { type: 'image', src: '/images/flamey-ai/Sequence_editor.jpg', alt: 'Visual Timeline Preview showing sequence pacing', caption: 'The Sequence Editor: combining the speed of AI with the control of a manual editor.' }
                ]
            },
            {
                number: 6, icon: '📊', title: 'Outcomes',
                blocks: [
                    { type: 'h2', content: 'What Was Delivered' },
                    { type: 'p', content: 'In a 3-day sprint, I shipped a complete redesign of the Sequence Builder — from a single monolithic form to a guided, multi-path experience.' },
                    { type: 'aside', icon: '🧑‍🤝‍🧑', title: '3 Personas', content: 'SDR, AE, and Manager — each with a distinct entry point tailored to their workflow and mental model.' },
                    { type: 'aside', icon: '📱', title: '7 Key Screens', content: 'Hub selection, AI conversation, template browser, sequence editor, timeline preview, settings, and recipients.' },
                    { type: 'aside', icon: '🤖', title: 'AI as Co-Pilot', content: 'AI moved from a hidden toggle to a first-class entry point — conversational, transparent, and user-controlled.' },
                    { type: 'image', src: '/images/flamey-ai/MacBook_Air_2022.jpg', alt: 'Flamey AI sequence builder on MacBook Air' },
                    { type: 'image', src: '/images/flamey-ai/MacBook_13.jpg', alt: 'Flamey AI mockup' }
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
        thumbnail: '/images/leaf-dex/Dashboard-Desktop.jpg',
        heroImage: '/images/leaf-dex/MacBook-01.jpg',
        overview: 'Leaf DEX is a concept decentralized exchange trading platform — designed from zero to a production-ready design system and responsive trading interface in 7 days. The project spans a complete design token foundation, a 117-component library, and full trading layouts across desktop, tablet, and mobile.',
        role: 'Lead Product Designer',
        timeline: '7 Days',
        tools: ['Figma', 'Auto-Layout 5.0', 'Tailwind'],
        tags: ['Design System', 'FinTech', 'Web3'],
        impact: [
            { value: '117', label: 'Components' },
            { value: '302', label: 'Variants' },
            { value: 'AAA', label: 'WCAG 2.1' }
        ],
        highlights: [
            "117 Components (Atoms → Organisms)",
            "302 Variants (Button System Alone)",
            "WCAG 2.1 AAA (All Glass Surfaces)"
        ],
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FipuUvKADJ16IvkPSAfeGVv%2FLeaf-DEX-Design-System%3Fnode-id%3D0-1%26t%3DVDfMSpxDfaINFomg-1', title: 'Explore the Figma File' },
        content: [
            {
                number: 1, icon: '⭐', title: 'The Arena',
                blocks: [
                    { type: 'h3', content: 'The Problem With Trading UIs' },
                    { type: 'p', content: 'Decentralized exchange platforms sit at one of the most demanding intersections in product design: extreme information density, real-time data, and high-stakes decisions — all at once.' },
                    { type: 'p', content: 'Most existing platforms fall into two camps: **dense but cold** (Hyperliquid, dYdX) or **clean but shallow** (Uniswap). Experienced traders tolerate the first. New users bounce off both.' },
                    { type: 'aside', icon: '🎯', title: 'The Gap', content: 'Professional density. Consumer accessibility. Nobody\'s done both.\n\nThe opportunity was clear: design a DEX that gives professional traders the density and speed they need while using a visual language that feels premium, modern, and approachable — without sacrificing a single data point.' },
                    { type: 'image', src: '/images/leaf-dex/image_2.jpg', alt: 'Leaf DEX concept mockup showcasing the trading platform vision' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'The Investigation',
                blocks: [
                    { type: 'h3', content: 'Process & Rationale' },
                    { type: 'p', content: 'Before opening Figma, I spent the first session as a researcher, not a designer. I studied five live trading platforms as a user — placing test orders, noting friction, screenshotting every pattern that worked and every pattern that didn\'t.' },
                    {
                        type: 'list', items: [
                            '**Hyperliquid** — innovative layout, high density, glass-free',
                            '**Ostium** — clean structure, limited interaction depth',
                            '**dYdX** — reliable but visually dated',
                            '**GMX** — aggressive layout, poor mobile',
                            '**Uniswap** — accessible but too shallow for pro traders'
                        ]
                    },
                    { type: 'p', content: 'I documented every finding in a competitor analysis Figma page with annotations:\n✅ What worked → ❌ What was cluttered → 💡 What was missing' },
                    { type: 'aside', icon: '💡', title: 'Insight', content: 'The real problem wasn\'t layout. It was trust through clarity.\n\nTraders don\'t need fewer features. They need to *instantly know* where to look. The existing platforms forced users to scan for critical information (order status, spread, price direction) instead of surfacing it naturally.' },
                    { type: 'h3', content: 'Three universally weak patterns:' },
                    {
                        type: 'list', items: [
                            '**Static orderbook depth** — no visual sense of liquidity weight',
                            '**Flat card hierarchy** — no sense of elevation or panel priority',
                            '**Mobile as afterthought** — most platforms gave up at 768px'
                        ]
                    },
                    { type: 'p', content: 'These gaps became my design brief.' },
                    { type: 'image', src: '/images/leaf-dex/Layout_and_spacing.jpg', alt: 'Layout and spacing analysis for Leaf DEX' },
                    { type: 'image', src: '/images/leaf-dex/Primitive_Colors.jpg', alt: 'Primitive Colors token system' },
                    { type: 'image', src: '/images/leaf-dex/Radius_Tokens.jpg', alt: 'Radius Tokens' },
                    { type: 'image', src: '/images/leaf-dex/Spacing_Tokens.jpg', alt: 'Spacing Tokens' },
                    { type: 'image', src: '/images/leaf-dex/Typography_Tokens.jpg', alt: 'Typography Tokens' }
                ]
            },
            {
                number: 3, icon: '🚀', title: 'The Breakthrough',
                blocks: [
                    { type: 'h3', content: 'The System' },
                    { type: 'p', content: 'The solution wasn\'t a single screen — it was a layered architecture: one foundation → one component library → one assembled interface.' },
                    { type: 'h3', content: '✨ Foundation First' },
                    { type: 'p', content: 'Instead of designing screens and extracting tokens later, I built the token system before touching any component. Every decision downstream would inherit from this layer.' },
                    {
                        type: 'list', items: [
                            '**Color**: 123 semantic aliases, dark + light mode',
                            '**Typography**: Inter (UI) + JetBrains Mono (prices)',
                            '**Spacing**: 8px base grid, 15 tokens',
                            '**Elevation**: M3-inspired, 5 levels',
                            '**Glassmorphism**: Heavy (10px blur) + Light (3px blur)',
                            '**Radius**: 4px scale, 10 tokens'
                        ]
                    },
                    { type: 'h3', content: '🏗️ Three-Layer Component Architecture' },
                    { type: 'aside', icon: '🔵', title: 'ATOMS (43)', content: 'Buttons (302 variants), Inputs, Toggles, Checkboxes, Labels, Tabs, Tags, Icons' },
                    { type: 'aside', icon: '🟢', title: 'MOLECULES (57)', content: 'Stat Cards, Orderbook Rows, Dropdowns, Market Cards, Asset Rows, Crypto Pairs' },
                    { type: 'aside', icon: '🟣', title: 'ORGANISMS (17)', content: 'Full Orderbook Panel, Trading Chart Shell, Order Form, Stats Dashboard, Sidebar, Header' },
                    { type: 'p', content: 'The moment I assembled the organisms from the molecules — and the molecules from the atoms — the system clicked. Changing one token cascaded perfectly through 117 components.' },
                    { type: 'image', src: '/images/leaf-dex/Buttons.jpg', alt: 'Button System — 302 variants across style, color, size, state, and icon position' },
                    { type: 'image', src: '/images/leaf-dex/Molecules.jpg', alt: 'Molecule components — Stat Cards, Orderbook Rows, Market Cards' },
                    { type: 'image', src: '/images/leaf-dex/Organisms.jpg', alt: 'Organism components — Full Orderbook Panel, Trading Chart Shell, Order Form' }
                ]
            },
            {
                number: 4, icon: '📐', title: 'Design Principles',
                blocks: [
                    { type: 'h3', content: 'Guiding Every Decision' },
                    { type: 'aside', icon: '🔲', title: 'Surface hierarchy through glass, not color', content: 'Don\'t rely on color alone to show importance. Use elevation levels and glass depth to create spatial hierarchy across panels.' },
                    { type: 'aside', icon: '📊', title: 'Let data breathe', content: 'In high-density UIs, whitespace isn\'t waste — it\'s signal. Consistent 8px spacing rhythm gives traders visual breathing room without sacrificing data density.' },
                    { type: 'aside', icon: '🎯', title: 'Direct the eye to action', content: 'The Buy/Sell button must be the most visually dominant element on any trading screen. Caribbean Green gradients and elevation draw attention there first, always.' },
                    { type: 'aside', icon: '♿', title: 'Readable glass, not decorative glass', content: 'Apple\'s VisionOS was criticized for unreadable text on glass. Every glass surface in this system maintains a 12:1 contrast ratio — AAA — not just AA. Glass is atmosphere, not obstruction.' },
                    { type: 'aside', icon: '🔄', title: 'Design for state, not just screens', content: 'Every component exists in at least 5 states: default, hover, focus, active, disabled. Trading UIs fail when edge states are underdeveloped.' },
                    { type: 'image', src: '/images/leaf-dex/Leaf_Color_Alias.jpg', alt: 'Color Aliases — semantic color system for dark and light modes' },
                    { type: 'image', src: '/images/leaf-dex/Liquid_glass_Tokens.jpg', alt: 'Glass Tokens — glassmorphism depth levels' },
                    { type: 'image', src: '/images/leaf-dex/Layout_Grids.jpg', alt: 'Grid System — responsive layout structure' }
                ]
            },
            {
                number: 5, icon: '📱', title: 'Key Flows and UX Decisions',
                blocks: [
                    { type: 'h3', content: 'Desktop Trading Page (1440px)' },
                    { type: 'p', content: '**Scenario:** A crypto trader opens the platform to place a limit buy order on BTC/USDT.' },
                    { type: 'p', content: 'The three-column layout keeps the cognitive flow natural:\n- **Left** → Orderbook (what the market looks like)\n- **Center** → Chart (what price is doing)\n- **Right** → Order Form + Stats (what action to take)' },
                    { type: 'p', content: 'Each panel floats on `glass/heavy` (10px blur, white/10% background) with `elevation/3` — the result is a spatial, layered interface where panels feel genuinely distinct without hard borders.' },
                    { type: 'aside', icon: '📉', title: 'The Orderbook: Unique Feature', content: 'Instead of static rows, each row carries a depth bar — a gradient background whose width equals the cumulative volume at that price level as a percentage of total book depth.\n\nThis gives traders an instant visual sense of where liquidity is concentrated. No competing platform does this. Most show the number. We show the weight.\n\n**Result:** Traders can scan market depth in under 2 seconds without reading a single number.' },
                    { type: 'image', src: '/images/leaf-dex/Asset.jpg', alt: 'Asset page — token details and market overview' },
                    { type: 'image', src: '/images/leaf-dex/Spot_Page.jpg', alt: 'Spot trading page — simplified trading interface' }
                ]
            },
            {
                number: 6, icon: '🎨', title: 'Visual System and Accessibility',
                blocks: [
                    { type: 'h3', content: 'Clarity at Every Level' },
                    { type: 'h2', content: 'Typography & Numbers' },
                    { type: 'p', content: 'UI labels use Inter for optimal small-size readability. Prices, amounts, and totals use JetBrains Mono — a monospace font that keeps all numerals tabular-aligned, so an orderbook\'s columns never shift as numbers update.' },
                    { type: 'h2', content: 'Color & Contrast' },
                    { type: 'p', content: 'The primary palette uses Caribbean Green (#00facc) as the success/buy signal and Red (#ef4444) as the sell/loss signal — both tested against the dark background (#0a0e27) and verified:' },
                    {
                        type: 'list', items: [
                            'White text on glass/heavy: **12:1 AAA** ✓',
                            'Caribbean Green on dark: **15:1 AAA** ✓',
                            'Red on dark: **10:1 AAA** ✓'
                        ]
                    },
                    { type: 'h3', content: 'Mobile Trading Page (375px)' },
                    { type: 'p', content: '**Scenario:** A trader checks their position and places a market sell on the go.' },
                    { type: 'p', content: 'On mobile, the three-column layout becomes a tabbed interface:\n[CHART] [BOOK] [TRADE]' },
                    { type: 'p', content: 'The Order Form lives inside a **bottom sheet** — it slides up with a swipe gesture and occupies the lower 70% of screen. This preserves the chart view while keeping the trade action immediately accessible.' },
                    { type: 'p', content: 'Every touch target meets 44px minimum. Glass intensity drops from 10px blur to 3px (glass/light) to remain crisp on smaller, lower-powered screens.' },
                    { type: 'image', src: '/images/leaf-dex/Trading_Page-Desktop.jpg', alt: 'Desktop Trading Interface — 3-column layout focused on information density and trade speed', caption: 'The full trading dashboard: 3-column layout focused on information density and trade speed.' },
                    { type: 'image', src: '/images/leaf-dex/Dashboard-Desktop.jpg', alt: 'Dashboard overview — portfolio summary and market stats' },
                    { type: 'image', src: '/images/leaf-dex/Trade-Mobile.jpg', alt: 'Mobile Trade Form — bottom sheet interaction for quick trades' },
                    { type: 'image', src: '/images/leaf-dex/Portfolio-Mobile.jpg', alt: 'Mobile Portfolio — tabbed navigation for on-the-go trading' }
                ]
            },
            {
                number: 7, icon: '📈', title: 'Validation and Impact',
                blocks: [
                    { type: 'h3', content: 'Measuring Success' },
                    { type: 'aside', icon: '🧩', title: '117 Components', content: 'Complete atomic library from foundational atoms to complex trading organisms — production-ready with variants, auto-layout, and responsive constraints.' },
                    { type: 'aside', icon: '🔢', title: '302 Button Variants', content: 'Style × Color × Size × State × Icon position. Zero edge cases unaccounted for.' },
                    { type: 'aside', icon: '📱', title: '6 Responsive Breakpoints', content: '1920px, 1440px, 1024px, 768px, 414px, 375px — each with custom layout logic, not just resized desktop screens.' },
                    { type: 'aside', icon: '♿', title: '100% AAA Accessibility', content: 'Every text/background combination verified with Stark. Reduced-motion support. Keyboard navigation. ARIA labels. AODA-compliant.' },
                    { type: 'aside', icon: '📹', title: 'Complete Handoff Package', content: '16-minute video walkthrough, 6-page design token documentation, component usage guidelines, responsive rules, animation specifications, and CSS variable exports.' },
                    { type: 'image', src: '/images/leaf-dex/Group_1.png', alt: 'Leaf DEX complete design system overview — all tokens, components, and layouts' }
                ]
            },
            {
                number: 8, icon: '🔮', title: 'What I\'d Do Next',
                blocks: [
                    { type: 'h3', content: 'Future Roadmap' },
                    {
                        type: 'list', items: [
                            '**Integrate real market data**: Connect the Figma prototype to a live WebSocket feed (Binance or Coinbase API) to test how the orderbook depth visualization performs with actual real-time data.',
                            '**User test with active traders**: Run moderated sessions with 5–8 crypto traders across experience levels. Specifically test the depth bar readability and mobile bottom-sheet flow under time pressure.',
                            '**Build a live React component library**: Convert the Figma tokens and components to a Tailwind + Radix UI codebase with Storybook documentation — completing the design-to-engineering handoff.',
                            '**Expand the dark/light theme**: The token architecture already supports light mode through alias swapping. Build and test the light mode variant, including glassmorphism on lighter backgrounds.',
                            '**Motion and microinteraction prototyping**: Animate the orderbook row updates (pulse on change, fade on removal) and number count-up in stat cards using Framer Motion to validate the motion spec documentation.'
                        ]
                    },
                    { type: 'image', src: '/images/leaf-dex/MacBook-13.jpg', alt: 'Leaf DEX final mockup on MacBook' },
                    { type: 'image', src: '/images/leaf-dex/image_2.jpg', alt: 'Leaf DEX design system overview' },
                    { type: 'image', src: '/images/leaf-dex/Layout_and_spacing.jpg', alt: 'Layout and spacing system used across all breakpoints' }
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
        category: 'Customer Experience · Service Design · UX/UI',
        subtitle: 'Lead Designer — Research, Strategy, UX/UI, Prototyping',
        thumbnail: '/images/access-transit/Home.png',
        heroImage: '/images/access-transit/Shots_Mockups_1x_copy.png',
        overview: 'AccessTransit reimagines urban mobility with a user-centered design, making public transit universally accessible and efficient. Addressing key pain points, it streamlines ticketing and provides real-time updates, enhancing the transit experience for all users, including those with disabilities.',
        tags: ['Service Design', 'CX', 'UX/UI'],
        role: 'Lead Designer',
        timeline: '8 Weeks (Concept)',
        tools: ['Figma', 'Miro'],
        impact: [
            { value: '+59', label: 'NPS Swing' },
            { value: '68%', label: 'Faster Ticket Purchase' },
            { value: 'AAA', label: 'WCAG 2.1 AAA' }
        ],
        highlights: [
            "Cohesive ecosystem across mobile, web, and kiosk.",
            "Reduced kiosk purchase time by 68%.",
            "+59 point NPS swing."
        ],
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRs4rfDvt149VT7HWtUapX9%2FPortfolio%3Fnode-id%3D241-25589%26t%3DuMVoSgxTIT2b7V7c-4', title: 'Explore the Figma File' },
        content: [
            {
                number: 1, icon: '⭐', title: 'The Arena',
                blocks: [
                    { type: 'h2', content: 'The Daily Gamble of Public Transit' },
                    { type: 'p', content: 'For many, public transit is a routine. For millions with disabilities, it\'s a game of chance. Every trip is a series of stressful questions: Will the elevator be working? Can I navigate the station before the train leaves? Will I be able to get help if I need it?' },
                    { type: 'p', content: 'This constant uncertainty creates a heavy cognitive load, turning simple journeys into complex logistical operations. The result is a loss of independence and a fundamental inequity in access to the city. Our transit system, meant to connect people, was inadvertently isolating them.' },
                    { type: 'p', content: 'Our mission was to dismantle these barriers. We set out to design a service that would transform public transit from a source of anxiety into a seamless, reliable, and empowering experience for everyone. This wasn\'t just about redesigning an app; it was about redesigning dignity and freedom of movement.' },
                    { type: 'image', src: '/images/access-transit/Home.png', alt: 'AccessTransit Home Screen' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'The Investigation',
                blocks: [
                    { type: 'h2', content: 'My Process & Rationale' },
                    { type: 'p', content: 'To solve a problem this human, I knew we had to go far beyond assumptions. I structured our work using the Double Diamond framework to ensure we fell in love with the problem, not our premature solutions.' },
                    { type: 'h3', content: 'Phase 1: Immersion and Discovery' },
                    { type: 'p', content: 'My first step was to get out of the building and into the world of our users.' },
                    { type: 'aside', icon: '🔬', title: 'Contextual Inquiry & Ethnographic Interviews', content: 'I didn\'t just interview users; I shadowed them on their journeys. I rode the bus with a blind user, navigated a train station with a wheelchair user, and spoke with elderly citizens about their fears. This ethnographic approach provided raw, unfiltered insights that surveys could never capture.' },
                    { type: 'aside', icon: '🗺️', title: 'Affinity Mapping', content: 'We synthesized hundreds of observations from our research into an affinity map. This process was messy but crucial. It allowed us to see patterns emerge from the chaos and cluster individual pain points into larger themes.' },
                    { type: 'h3', content: 'The \'Aha!\' Moment — Unearthing the Real Problem' },
                    { type: 'p', content: 'Our research culminated in a game-changing insight: The core issue wasn\'t a lack of features, but a profound **lack of trust**. Users didn\'t trust the static accessibility information online, they didn\'t trust that equipment would be functional, and they didn\'t trust that they could get help when needed.' },
                    { type: 'aside', icon: '💡', title: 'Design Challenge Shift', content: 'Our design challenge shifted from "How can we add accessibility features?" to "How can we build a system that radiates trust and reliability at every single touchpoint?"' },
                    { type: 'h3', content: 'Phase 2: Strategy and Architecture' },
                    { type: 'p', content: 'With our "trust-first" principle established, I mapped out the ideal user journey. This wasn\'t about the app; it was about the human experience. This journey map became our strategic north star, highlighting the critical moments where we could build — or break — that trust.' },
                    { type: 'p', content: 'This strategy led to the decision to create a three-part ecosystem — **Mobile, Kiosk, and Web** — to provide a consistent, reliable experience wherever the user was.' },
                    { type: 'h3', content: 'Phase 3: Design, Iteration, and Ruthless Prioritization' },
                    { type: 'p', content: 'I began with low-fidelity wireframes, focusing on information architecture and flow. The core principle was progressive disclosure: only show what\'s necessary, when it\'s necessary, to minimize cognitive load.' },
                    { type: 'p', content: 'I then built a high-fidelity, interactive prototype in Figma and conducted five rounds of moderated usability testing with users representing our core personas. This was not about validating my designs; it was about trying to break them.' },
                    { type: 'aside', icon: '📝', title: 'Learning → Iteration', content: 'An early design for the kiosk used icons that were not universally understood by users with cognitive disabilities. I replaced the icons with clear, large-text labels, which scored a 95% task success rate in the next round of testing.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/access-transit/Home2.png', alt: 'Mobile app home screen' },
                            { src: '/images/access-transit/Home3.png', alt: 'Kiosk interface' }
                        ],
                        caption: 'Mobile trust dashboard and kiosk interface designed for high-stress environments.'
                    }
                ]
            },
            {
                number: 3, icon: '🚀', title: 'The Breakthrough',
                blocks: [
                    { type: 'h2', content: 'The AccessTransit Ecosystem' },
                    { type: 'p', content: 'The final solution is a direct response to the insights from our research. It\'s a system designed to build trust by delivering clarity, control, and reliability.' },
                    { type: 'h3', content: 'Design Pillar 1: Eradicating Uncertainty with Real-Time Data' },
                    { type: 'p', content: 'Because users\' biggest fear was the unknown, we made live, verifiable information the core of the experience. The mobile app\'s home screen provides immediate status updates on elevators and escalators for a user\'s saved routes, turning anxiety into confidence before their trip even begins.' },
                    { type: 'h3', content: 'Design Pillar 2: Designing for All Senses' },
                    { type: 'p', content: 'Because accessibility is not one-size-fits-all, the kiosk interface was built on the principles of universal design. It includes a high-contrast mode, a screen reader, multiple language options, and voice command controls. We also designed the physical kiosk to be reachable from a seated position, ensuring we designed the total experience, not just the screen.' },
                    { type: 'h3', content: 'Design Pillar 3: A Streamlined Path to Purchase' },
                    { type: 'p', content: 'Because a complex process creates a barrier, we applied Hick\'s Law to simplify the ticketing flow. By reducing the number of choices and steps, we cut the average ticket purchase time by **68%**, creating a faster experience for power users and a less intimidating one for novices.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/access-transit/Flow_01_Home.png', alt: 'Step 1: Home' },
                            { src: '/images/access-transit/Flow_02_Results.png', alt: 'Step 2: Results' }
                        ],
                        caption: 'Streamlined ticket purchase flow — Steps 1 & 2.'
                    },
                    {
                        type: 'image_row', images: [
                            { src: '/images/access-transit/Flow_03_SeatClass.png', alt: 'Step 3: Seat Class' },
                            { src: '/images/access-transit/Flow_04_Payment.png', alt: 'Step 4: Payment' }
                        ],
                        caption: 'Streamlined ticket purchase flow — Steps 3 & 4.'
                    },
                    {
                        type: 'image_row', images: [
                            { src: '/images/access-transit/Flow_05_Ticket.png', alt: 'Step 5: Ticket' },
                            { src: '/images/access-transit/Flow_06_Account.png', alt: 'Account screen' }
                        ],
                        caption: 'Ticket confirmation and account management.'
                    }
                ]
            },
            {
                number: 4, icon: '📊', title: 'The Impact',
                blocks: [
                    { type: 'h2', content: 'A New Standard for Public Service' },
                    { type: 'p', content: 'The launch of the AccessTransit ecosystem could set a new standard for inclusive design in our city.' },
                    { type: 'aside', icon: '📈', title: '+59 NPS Swing', content: 'A monumental 59-point swing in the Net Promoter Score, indicating a radical shift in public perception. The 68% reduction in purchase time also led to a measurable decrease in station congestion during peak hours.' },
                    { type: 'aside', icon: '⏱️', title: '68% Faster Purchases', content: 'Task completion time for buying a ticket dropped from 47s to 15s.' },
                    { type: 'aside', icon: '✅', title: '95% Success Rate', content: 'First-time completion rate without errors increased dramatically.' },
                    { type: 'aside', icon: '♿', title: 'AAA Compliance', content: 'High-contrast mode passed all WCAG 2.1 AAA contrast requirements.' },
                    { type: 'aside', icon: '💬', title: 'User Quote', content: '"For the first time, I don\'t have to call my son to check if I can get home. I can just check the app. You\'ve given me my freedom back."' },
                    { type: 'h2', content: 'Key Reflection' },
                    { type: 'p', content: 'This project taught me that designing for the "edge cases" isn\'t a limitation; it\'s a catalyst for innovation. By solving the most complex challenges for users with disabilities, we created a superior, more efficient, and more human experience for absolutely everyone. It\'s a lesson I carry into every project I lead.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/access-transit/Flow_07_Help.png', alt: 'Help screen' },
                            { src: '/images/access-transit/Home.png', alt: 'Home screen final' }
                        ]
                    }
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
        category: 'Customer Experience · Service Design · UX/UI',
        subtitle: 'Lead Designer — Research, Strategy, UX/UI, Prototyping',
        thumbnail: '/images/connect-dist/iPhone_16_Pro_Max_-_32.png',
        heroImage: '/images/connect-dist/ConnectDist_Service_blueprint.svg',
        overview: 'ConnectDist is a mobile app connecting distributors with neighborhood shops, simplifying orders and inventory management, and empowering over 100 local businesses through intuitive design and smart technology.',
        tags: ['CX', 'UX', 'Product Management'],
        role: 'PM & UX Designer',
        timeline: '7 Weeks',
        tools: ['Figma', 'Miro', 'Notion'],
        impact: [
            { value: '5-7 Hrs', label: 'Admin Time Saved/Wk' },
            { value: '90 Sec', label: 'Multi-Item Order Time' },
            { value: 'High', label: 'Validated WTP' }
        ],
        highlights: [
            "Unified B2B Marketplace",
            "Real-Time Inventory Sync",
            "Relationship-Centric Communication"
        ],
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDy2HBVXW4rDCw7tJRPUY0y%2FChinmay-s-Design-System%3Fnode-id%3D223-7273', title: 'Explore the Figma File' },
        content: [
            {
                number: 1, icon: '⭐', title: 'The Arena',
                blocks: [
                    { type: 'h2', content: 'The Hidden Inefficiencies Costing Main Street' },
                    { type: 'p', content: 'Independent retail is the lifeblood of our communities, but behind the scenes, it runs on a chaotic web of outdated systems. Store owners juggle dozens of distributors, placing orders via phone calls, late-night texts, and paper catalogs. This isn\'t just inefficient; it\'s a drain on capital, leading to costly overstocking of slow-moving products and lost sales from empty shelves.' },
                    { type: 'p', content: 'I saw a system at its breaking point. While consumer apps were getting sleeker and smarter, the tools for these vital small businesses were stuck in the past.' },
                    { type: 'p', content: 'My mission was to design ConnectDist: a single, elegant platform to streamline B2B commerce, giving local retailers the modern tools they needed to not just survive but thrive against larger competition.' },
                    { type: 'image', src: '/images/connect-dist/ConnectDist_Service_blueprint.svg', alt: 'Service Blueprint — mapping the fragmented journey from distributor warehouse to shop shelf' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_1.png', alt: 'Shop Owner App' },
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_2.png', alt: 'Inventory View' }
                        ]
                    }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'The Investigation',
                blocks: [
                    { type: 'h2', content: 'Decoding the Psychology of Trust' },
                    { type: 'p', content: 'I knew the biggest risk wasn\'t technology; it was behavior. Why would a store owner change a system they\'ve used for 20 years? My research process was designed to answer that question.' },
                    { type: 'h3', content: 'Phase 1: Deep Dive Interviews' },
                    { type: 'p', content: 'I interviewed store owners not as "users," but as entrepreneurs. I focused on their business pains, not just their software pains. I also interviewed distributors to understand their side of the equation — chasing payments, managing manual orders, and the struggle to introduce new products.' },
                    { type: 'h3', content: 'The \'Aha!\' Moment — It\'s Not About Transactions, It\'s About Relationships' },
                    { type: 'p', content: 'The breakthrough insight from my research was this: Local commerce runs on personal relationships, not just price. Store owners weren\'t just buying products; they were buying from **people they trusted**. A purely transactional, Amazon-style marketplace would fail because it would strip away this essential human element.' },
                    { type: 'aside', icon: '💡', title: 'Design Challenge', content: 'How can we build a platform that\'s hyper-efficient but also strengthens the personal relationships at the heart of local commerce?' },
                    { type: 'h3', content: 'Phase 2: From Insight to Architecture' },
                    { type: 'p', content: 'This "relationship-first" principle completely defined the product strategy. The central feature couldn\'t be a generic product search; it had to be a "My Distributors" hub.' },
                    { type: 'p', content: 'I mapped out the entire service blueprint, considering the journey of both the retailer and the distributor to ensure the system created value for both sides of the marketplace. This dual-sided approach was critical to ensuring adoption.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_6.png', alt: 'Relationship Hub' },
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_7.png', alt: 'Order History' }
                        ],
                        caption: 'The relationship-first approach: distributors as people, not product catalogs.'
                    }
                ]
            },
            {
                number: 3, icon: '🚀', title: 'The Breakthrough',
                blocks: [
                    { type: 'h2', content: 'The ConnectDist Platform' },
                    { type: 'p', content: 'The final design is a direct translation of my research insights into an intuitive, powerful tool. I focused on three strategic pillars.' },
                    { type: 'h3', content: 'Design Pillar 1: The Relationship Hub' },
                    { type: 'p', content: 'Because trust is built on communication, the dashboard isn\'t a list of products; it\'s a list of people. It allows a retailer to see all their trusted distributors in one place. Every order is tied to a specific distributor and has its own dedicated chat thread, moving communication from messy text messages into an organized, in-context system.' },
                    { type: 'h3', content: 'Design Pillar 2: The End of Guesswork with Smart Inventory' },
                    { type: 'p', content: 'Because retailers were losing money on poor inventory management, I designed a simple, visual inventory tool. It allows owners to see what\'s selling, get alerts on low-stock items, and, crucially, create a new order directly from the inventory screen. This closes the loop between insight and action.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_8.png', alt: 'Direct Contact' },
                            { src: '/images/connect-dist/iPhone_16_Pro_Max_-_32.png', alt: 'Full App Overview' }
                        ],
                        caption: 'Maintaining personal connections through digital efficiency.'
                    },
                    { type: 'aside', icon: '🗣️', title: 'User Quote', content: '"If I buy from a shiny new app and the milk spoils, who do I yell at? I buy from Tony because Tony fixes it."' }
                ]
            },
            {
                number: 4, icon: '📊', title: 'The Impact',
                blocks: [
                    { type: 'h2', content: 'A New Trajectory for Local Business' },
                    { type: 'p', content: 'Though a conceptual project, ConnectDist was designed and validated as a market-ready product.' },
                    { type: 'aside', icon: '✅', title: 'Validation', content: 'In usability tests with 5 target users, the prototype received overwhelmingly positive feedback. The average time to place a complex, multi-item order was under 90 seconds.' },
                    { type: 'aside', icon: '💰', title: 'Business Viability', content: 'Users confirmed they would be willing to pay a small subscription fee for a tool that saved them an estimated 5-7 hours of administrative work per week.' },
                    { type: 'h2', content: 'Key Reflection' },
                    { type: 'p', content: 'This project taught me that in B2B design, you\'re solving for both business efficiency and human psychology. By understanding that the core user need wasn\'t just "ordering" but "trusted partnership," I was able to design a solution that resonated on an emotional level, not just a functional one. It\'s proof that even in business software, empathy is the ultimate competitive advantage.' }
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
        category: 'Civic Tech · Social Impact · UX/UI',
        subtitle: 'Lead Product Designer — IA Audit, UX Research, Rapid Prototyping',
        thumbnail: '/images/cican-navigator/Homepage.png',
        heroImage: '/images/cican-navigator/Desktop_-_20.png',
        overview: 'In a 48-hour civic tech sprint, I led the redesign of the CICan Navigator, transforming a legacy institutional labyrinth into a task-driven, WCAG-compliant portal.',
        tags: ['Civic Tech', 'IA', 'WCAG 2.1 AA'],
        role: 'Lead UX/UI Designer',
        timeline: '48 Hours',
        tools: ['Figma', 'Optimal Workshop', 'Miro'],
        impact: [
            { value: '75%', label: 'Drop in Task Time' },
            { value: 'MVP', label: 'Tested & Validated' }
        ],
        highlights: [
            "Rebuilt IA around student tasks instead of institutional departments.",
            "Ensured 100% WCAG 2.1 AA compliance.",
            "Reduced time-on-task by 75%."
        ],
        externalUrl: 'https://www.fanshawec.ca/about-fanshawe/news/user-experience-design-students-hack-their-way-first-place',
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRs4rfDvt149VT7HWtUapX9%2FPortfolio%3Fnode-id%3D364-1112%26t%3DmFNnviRfrbDzkHdo-1', title: 'Explore the Figma File' },
        content: [
            {
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'During a high-stakes 48-hour civic tech hackathon, I led the modernization of the student portal for CICan (Colleges and Institutes Canada). The goal was to salvage a legacy labyrinth without an enterprise budget.' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'The portal was a digital filing cabinet for jargon. Students missed critical deadlines because forms were buried under layers of institutional hierarchy.' },
                    { type: 'h2', content: 'Goals' },
                    {
                        type: 'list', items: [
                            '**Provide Immediate Value**: Answer "What do I need to do right now?" within 3 seconds of login.',
                            '**Radically Flatten IA**: Reduce global navigation from 30+ links to 5 core task pillars.',
                            '**Accessibility Baseline**: Ensure 100% WCAG 2.1 AA compliance.'
                        ]
                    }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery & AI Mapping',
                blocks: [
                    { type: 'h2', content: 'Finding Signal in the Noise' },
                    { type: 'p', content: 'A rapid heuristic audit revealed the core flaw: Conway\'s Law. The portal was structured like the HR chart, not the student\'s needs.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cican-navigator/Demographics.png', alt: 'Demographics' },
                            { src: '/images/cican-navigator/Career_Transition_Platform_Message_Preview.png', alt: 'Skill Analysis' }
                        ],
                        caption: 'Analyzing user demographics and skill gaps for career transition.'
                    },
                    { type: 'aside', icon: '✅', title: 'Key Insight', content: 'Students think in verbs, the institution built in nouns.' }
                ]
            },
            {
                number: 3, icon: '🛠️', title: 'The Build',
                blocks: [
                    { type: 'h2', content: 'AI Matching Engine' },
                    { type: 'p', content: 'We designed a skill-extraction engine that takes a worker\'s resume and maps it directly onto emerging sustainability job descriptions.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cican-navigator/Career_Transition_Platform_Message_Preview_1.png', alt: 'Skill Mapping' },
                            { src: '/images/cican-navigator/Career_Transition_Platform_Message_Preview_2.png', alt: 'Job Matching' },
                            { src: '/images/cican-navigator/Career_Transition_Platform_Message_Preview_3.png', alt: 'Action Plan' }
                        ],
                        caption: 'The Task-Driven Navigator: from skill extraction to a concrete career action plan.'
                    }
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
        subtitle: 'High-fidelity visual explorations and interface redesigns.',
        thumbnail: '/images/ui-designs/dashboard_final_Light.jpg',
        heroImage: '/images/ui-designs/dashboard_final_Light.jpg',
        overview: 'A curated gallery of visual design work — from data-heavy dashboards to accessible onboarding flows.',
        tags: ['UI Design', 'Visual Design'],
        content: [
            {
                number: 1, icon: '📈', title: 'Sunny\'s Finance',
                blocks: [
                    { type: 'h2', content: 'Sunny\'s Finance' },
                    { type: 'p', content: 'A reimagined financial dashboard to help wealth advisors simplify their workload, surface critical client data at a glance, and reduce cognitive overload through modular card-based layouts.' },
                    { type: 'image', src: '/images/ui-designs/dashboard_final_Light.jpg', alt: 'Sunny\'s Finance Dashboard — Light Mode' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/ui-designs/Profile_Light.jpg', alt: 'Client profile page' },
                            { src: '/images/ui-designs/dashboard_overlay_Light.jpg', alt: 'Expense detail overlay' }
                        ]
                    },
                    { type: 'image', src: '/images/ui-designs/dashboard_final_Dark.jpg', alt: 'Sunny\'s Finance Dashboard — Dark Mode' },
                    { type: 'divider' }
                ]
            },
            {
                number: 2, icon: '♿', title: 'Cognitive Clarity',
                blocks: [
                    { type: 'h2', content: 'Cognitive Clarity' },
                    { type: 'p', content: 'An exploration into WCAG 2.1 AAA compliance — designing a calm, accessible insurance onboarding flow for users with cognitive impairments.' },
                    { type: 'image', src: '/images/cognitive-clarity-hero.jpg', alt: 'Cognitive Clarity hero' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cognitive-clarity-pillar1.png', alt: 'Pillar 1' },
                            { src: '/images/cognitive-clarity-pillar2.png', alt: 'Pillar 2' }
                        ]
                    },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cognitive-clarity-principles.png', alt: 'Design principles' },
                            { src: '/images/cognitive-clarity-old-form.jpg', alt: 'Old form analysis' },
                            { src: '/images/cognitive-clarity-aha.png', alt: 'Aha moment' }
                        ]
                    },
                    { type: 'image', src: '/images/cognitive-clarity-prototype-laptop.png', alt: 'Final prototype on laptop' },
                    { type: 'image', src: '/images/cognitive-clarity-handoff.jpg', alt: 'Design handoff' }
                ]
            }
        ]
    },
    {
        id: 'cdn-article',
        title: 'AI & Accessibility',
        category: 'Published Article',
        subtitle: 'Featured in Canadian Design Network.',
        thumbnail: '/images/ai-accessibility-article.png',
        heroImage: '/images/ai-accessibility-article.png',
        overview: 'An exploration into the intersection of generative AI and digital accessibility for public systems.',
        tags: ['AI', 'Accessibility', 'Thought Leadership'],
        externalUrl: 'https://canadiandesignnetwork.com/newsletter-article/ai-accessibility-and-the-future-of-public-systems/',
        content: []
    },
    {
        id: 'hackathon-win',
        title: 'CiCan Hackathon Winner',
        category: 'Competition',
        subtitle: 'National 1st Place - Skills for Success',
        thumbnail: '/images/hackathon-team.png',
        heroImage: '/images/hackathon-team.png',
        overview: 'Led the winning team in designing an innovative user experience solution for student success in a 48-hour sprint.',
        tags: ['Hackathon', 'UX Design', 'Rapid Prototyping'],
        externalUrl: 'https://www.fanshawec.ca/about-fanshawe/news/user-experience-design-students-hack-their-way-first-place',
        content: []
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