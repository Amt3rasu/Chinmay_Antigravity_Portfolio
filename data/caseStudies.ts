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
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F', title: 'Interactive Prototype' },
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
                    { type: 'image', src: 'https://placehold.co/800x600/2a2a2a/ffffff?text=Old+Sequence+Builder', alt: 'The existing Sequence Builder — a dense wall of form fields with a hidden AI toggle', caption: 'The old builder: every configuration option on one screen. AI toggle buried at the bottom.' }
                ]
            },
            {
                number: 2, icon: '🔍', title: 'Discovery',
                blocks: [
                    { type: 'h2', content: 'Research Approach' },
                    { type: 'p', content: 'With no user access and a 4-day window, I needed fast, high-signal research. I chose two methods: a **competitive teardown** of 3 direct competitors and **persona-driven journey mapping** based on the PM\'s qualitative notes.' },
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
                    }
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
                    { type: 'p', content: 'I chose Option C because it was the only approach that respected all three personas without forcing a single workflow. The risk of choice paralysis was mitigated by limiting entry points to exactly 4, each with a clear icon, label, and one-line description.' }
                ]
            },
            {
                number: 5, icon: '🎯', title: 'Solution',
                blocks: [
                    { type: 'h2', content: 'The Final Design' },
                    { type: 'p', content: 'The redesign makes one fundamental shift: it reframes the Sequence Builder from a **form** into a **guided journey** with the AI as a creative partner.' },
                    { type: 'h3', content: '4 Entry Points' },
                    { type: 'p', content: 'The first screen is no longer a blank canvas. It\'s a structured choice: 🤖 AI-Assisted, 📋 Templates, 📎 Duplicate, ✏️ Manual — each respecting a persona\'s starting point.' },
                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=Entry+Points+UI', alt: 'Clean UI showing 4 distinct entry point cards' },
                    { type: 'h3', content: 'The AI Conversation' },
                    { type: 'p', content: 'Instead of a form asking "How many steps?", the AI asks strategic questions one by one, building a brief before generating.' },
                    { type: 'image', src: 'https://placehold.co/800x500/333/fff?text=AI+Chat+Interface', alt: 'Conversational AI building a sequence step by step' },
                    { type: 'h3', content: 'The Trust Moment: Visual Timeline Preview' },
                    { type: 'p', content: 'Users see exactly what will be sent before committing. This eliminated the #1 fear: "What will this send?"' },
                    { type: 'image', src: 'https://placehold.co/1200x500/222/fff?text=Visual+Timeline+Preview', alt: 'Visual Timeline Preview showing sequence pacing' }
                ]
            },
            {
                number: 6, icon: '📊', title: 'Validation',
                blocks: [
                    { type: 'h2', content: 'Impact Metrics' },
                    { type: 'aside', icon: '⏱️', title: '30m → ~5m', content: 'Projected creation time reduction.' },
                    { type: 'aside', icon: '🤖', title: 'AI Engagement', content: 'Significant increase in AI feature discoverability.' },
                    { type: 'aside', icon: '📦', title: 'Efficiency', content: '32 Deliverables shipped in 4 working days.' }
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
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F', title: 'Leaf DEX Interactive Prototype' },
        content: [
            {
                number: 1, icon: '⭐', title: 'The Arena',
                blocks: [
                    { type: 'h3', content: 'The Problem With Trading UIs' },
                    { type: 'p', content: 'Decentralized exchange platforms sit at one of the most demanding intersections in product design: extreme information density, real-time data, and high-stakes decisions — all at once.' },
                    { type: 'p', content: 'Most existing platforms fall into two camps: **dense but cold** (Hyperliquid, dYdX) or **clean but shallow** (Uniswap). Experienced traders tolerate the first. New users bounce off both.' },
                    { type: 'aside', icon: '🎯', title: 'The Gap', content: 'Professional density. Consumer accessibility. Nobody\'s done both.\n\nThe opportunity was clear: design a DEX that gives professional traders the density and speed they need while using a visual language that feels premium, modern, and approachable — without sacrificing a single data point.' }
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
                    { type: 'p', content: 'These gaps became my design brief.' }
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
                    { type: 'p', content: 'The moment I assembled the organisms from the molecules — and the molecules from the atoms — the system clicked. Changing one token cascaded perfectly through 117 components.' }
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
                    { type: 'aside', icon: '🔄', title: 'Design for state, not just screens', content: 'Every component exists in at least 5 states: default, hover, focus, active, disabled. Trading UIs fail when edge states are underdeveloped.' }
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
                    { type: 'h3', content: 'Mobile Trading Page (375px)' },
                    { type: 'p', content: '**Scenario:** A trader checks their position and places a market sell on the go.' },
                    { type: 'p', content: 'On mobile, the three-column layout becomes a tabbed interface:\n[CHART] [BOOK] [TRADE]' },
                    { type: 'p', content: 'The Order Form lives inside a **bottom sheet** — it slides up with a swipe gesture and occupies the lower 70% of screen. This preserves the chart view while keeping the trade action immediately accessible.' },
                    { type: 'p', content: 'Every touch target meets 44px minimum. Glass intensity drops from 10px blur to 3px (glass/light) to remain crisp on smaller, lower-powered screens.' }
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
                    { type: 'h2', content: 'Glassmorphism' },
                    {
                        type: 'list', items: [
                            '**glass/heavy**: 10px blur, white/10% bg (Orderbook, Chart, Form panels)',
                            '**glass/light**: 3px blur, white/8% bg (Stat cards, tooltips, mobile)'
                        ]
                    },
                    { type: 'p', content: 'Every glass element includes an inner highlight (rgba 255,255,255,0.30) and drop shadow (rgba 0,0,0,0.45) to reinforce the floating, premium feel.' },
                    { type: 'h2', content: 'Gradients: Intentional, Not Decorative' },
                    {
                        type: 'list', items: [
                            '**Buy buttons**: Caribbean Green 500 → 700',
                            '**Sell buttons**: Red 500 → 700',
                            '**Depth bars**: Green/Red fading right → transparent'
                        ]
                    },
                    { type: 'p', content: 'Multi-stop gradients were used for emotional design: directing attention to primary actions instantly, reducing cognitive load during high-stakes moments.' }
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
                    { type: 'aside', icon: '📹', title: 'Complete Handoff Package', content: '16-minute video walkthrough, 6-page design token documentation, component usage guidelines, responsive rules, animation specifications, and CSS variable exports.' }
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
                    }
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
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F', title: 'Interactive Prototype' },
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
                    { type: 'h2', content: 'The Multi-Surface Ecosystem' },
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
                    { type: 'aside', icon: '♿', title: 'AAA Compliance', content: 'High-contrast mode passed all WCAG 2.1 AAA contrast requirements.' },
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
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F', title: 'Interactive Prototype' },
        content: [
            {
                number: 1, icon: '📋', title: 'The Brief',
                blocks: [
                    { type: 'h2', content: 'The Broken B2B Supply Chain' },
                    { type: 'p', content: 'While enterprise distribution runs on SAP, local independent commerce still runs on chaos. Shop owners juggle dozens of distributors via phone calls, fragmented WhatsApp threads, and paper invoices.' },
                    { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_b1335180f66c4d87a6f7f795a262104d~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_04_33.png', alt: 'Service Blueprint' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/connectdist-interviews.png', alt: 'User interviews' },
                            { src: '/images/connectdist-smart-inventory-mobile.jpg', alt: 'Smart inventory mobile' }
                        ]
                    }
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
        prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F', title: 'Interactive Prototype' },
        content: [
            {
                number: 1, icon: '📋', title: 'The Framework',
                blocks: [
                    { type: 'h2', content: 'Background Information' },
                    { type: 'p', content: 'During a high-stakes 48-hour civic tech hackathon, I led the modernization of the student portal for CICan (Colleges and Institutes Canada). The goal was to salvage a legacy labyrinth without an enterprise budget.' },
                    { type: 'h2', content: 'The Problem' },
                    { type: 'p', content: 'The portal was a digital filing cabinet for jargon. Students missed critical deadlines because forms were buried under layers of institutional hierarchy. The portal reflected Conway\'s Law — structure mirrored the HR chart, not student needs.' },
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
                    { type: 'aside', icon: '✅', title: 'Key Insight', content: 'Students think in verbs, the institution built in nouns.' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cican-navigator-research.png', alt: 'Research findings' },
                            { src: '/images/cican-navigator-aha.png', alt: 'IA audit findings' }
                        ]
                    }
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
                    { type: 'p', content: 'The first 12 hours were a high-intensity "messy middle" — performing heuristic audits on whiteboards, mapping institutional mental model vs. student task flow.' },
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
                    { type: 'p', content: 'Personalized dashboard curating next steps based on student state. Culled global navigation from 30+ links to 5 pillars.' },
                    { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'New Dashboard' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/cican-navigator-demographics.png', alt: 'Demographics' },
                            { src: '/images/cican-navigator-accessibility.png', alt: 'Accessible UI' }
                        ]
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
        thumbnail: '/images/sunnys-finance-hero.jpg',
        heroImage: '/images/sunnys-finance-hero.jpg',
        overview: 'A curated gallery of visual design work — from data-heavy dashboards to accessible onboarding flows.',
        tags: ['UI Design', 'Visual Design'],
        content: [
            {
                number: 1, icon: '📈', title: 'Sunny\'s Finance',
                blocks: [
                    { type: 'h2', content: 'Sunny\'s Finance' },
                    { type: 'p', content: 'A reimagined financial dashboard to help wealth advisors simplify their workload, surface critical client data at a glance, and reduce cognitive overload through modular card-based layouts.' },
                    { type: 'image', src: '/images/sunnys-finance-dashboard-light.png', alt: 'Sunny\'s Finance Dashboard — Light Mode' },
                    {
                        type: 'image_row', images: [
                            { src: '/images/sunnys-finance-profile-light.png', alt: 'Client profile page' },
                            { src: '/images/sunnys-finance-overlay-light.png', alt: 'Expense detail overlay' }
                        ]
                    },
                    { type: 'image', src: '/images/sunnys-finance-dashboard-dark.png', alt: 'Sunny\'s Finance Dashboard — Dark Mode' },
                    { type: 'divider' }
                ]
            },
            {
                number: 2, icon: '♿', title: 'Cognitive Clarity',
                blocks: [
                    { type: 'h2', content: 'Cognitive Clarity' },
                    { type: 'p', content: 'An exploration into WCAG 2.1 AAA compliance — designing a calm, accessible insurance onboarding flow for users with cognitive impairments. Every interaction respects limited working memory and minimizes decision fatigue.' },
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

    /* ============================
       AWARDS & MENTIONS
       ============================ */
    {
        id: 'cdn-article',
        title: 'Featured in CDN News',
        category: 'Press',
        subtitle: 'Published article about AI-assisted design workflows.',
        thumbnail: '/images/ai-accessibility-article.png',
        heroImage: '/images/ai-accessibility-article.png',
        overview: 'Featured in CDN News for contributions to accessible design and AI-assisted workflows in the Canadian tech ecosystem.',
        tags: ['Press', 'AI', 'Accessibility'],
        externalUrl: 'https://www.cdnnews.com',
        content: []
    },
    {
        id: 'hackathon-win',
        title: 'Hackathon Win — CICan Civic Tech',
        category: 'Award',
        subtitle: 'First place in the CICan civic tech hackathon.',
        thumbnail: '/images/hackathon-team.png',
        heroImage: '/images/hackathon-team.png',
        overview: 'Won first place in the CICan Civic Tech hackathon for the Navigator redesign — a 48-hour sprint reimagining student portal information architecture.',
        tags: ['Award', 'Hackathon', 'Civic Tech'],
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