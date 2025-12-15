import { CaseStudy, Chapter, ContentBlock } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'antigravity-portfolio',
    title: 'Antigravity Portfolio',
    category: 'Full-Stack Development',
    subtitle: 'A portfolio that breaks the fourth wall. A meta-case study about the design and development of this very website.',
    thumbnail: '/images/portfolio-hero-ui.png',
    heroImage: '/images/portfolio-hero-ui.png',
    overview: 'A meta-case study about the design and development of this very website. I built "Antigravity" to be more than just a gallery of images; it\'s a fully functional product that demonstrates my ability to bridge the gap between design and engineering. It features immersive 3D elements, a custom AI chatbot, and a pixel-perfect design system.',
    tags: ['React', 'Three.js', 'AI', 'Design Systems'],
    impact: [
      { value: '100%', label: 'Lighthouse Score' },
      { value: '24/7', label: 'AI Support' },
      { value: '< 1.5s', label: 'Load Time' },
    ],
    highlights: [
      "Achieved a perfect 100% Lighthouse score for Performance, Accessibility, and SEO.",
      "Integrated a custom AI chatbot (Sparky) trained on my resume to answer recruiter questions 24/7.",
      "Built a scalable, component-based architecture using React, TypeScript, and Tailwind CSS."
    ],
    content: [
      {
        number: 1, icon: '🚀', title: 'The Arena',
        blocks: [
          { type: 'h1', content: 'The Problem with "Just Images"' },
          { type: 'p', content: 'Most design portfolios are static galleries. They show *what* you designed, but not *how* you build. As a Product Designer who codes, I needed a platform that proved my technical literacy without saying a word.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'The Goal' },
                  { type: 'p', content: 'Create a portfolio that is, itself, a case study. It needed to be fast, accessible, and visually stunning, acting as the ultimate proof of work.' }
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
    category: 'Product Design · Information Architecture · Accessibility',
    subtitle: 'A 48-hour redesign of a national career and education platform, focused on untangling information architecture so students can find help without relying on search or support tickets.',
    thumbnail: '/images/cican-navigator-hero.jpg',
    heroImage: '/images/cican-navigator-hero.jpg',
    overview: 'CICan Navigator is a 48-hour redesign of a national career and education guidance platform, focused on untangling its information architecture so students can actually find the help they need—without relying on search or support tickets.',
    tags: ['Product Design', 'Information Architecture', 'Accessibility', '48-hour Hackathon'],
    role: 'Design/IA Lead',
    timeline: '48-hour Hackathon',
    tools: ['Figma', 'Card Sorting', 'Prototyping'],
    impact: [
      { value: '75%', label: 'Faster Tasks' },
      { value: '40%', label: 'Less Search' },
      { value: '60%', label: 'Fewer Issues' },
    ],
    highlights: [
      "~75% reduction in time-on-task for key tasks in prototype testing.",
      "~40% drop in search usage when using the new nav.",
      "~60% fewer \"I can\'t find...\" moments reported by testers."
    ],
    prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FRs4rfDvt149VT7HWtUapX9%2FPortfolio%3Fnode-id%3D364-1776%26t%3DNq2DtstxHt33lqlM-4', title: 'CICan Navigator Design File' },
    content: [
      {
        number: 1, icon: '🏛️', title: 'The Arena',
        blocks: [
          { type: 'h2', content: 'Lost in the Labyrinth of Education' },
          { type: 'p', content: 'The CICan Navigator was meant to be a central hub for Canadian learners—from high school students to mid-career adults—to explore programs, funding, and support. In reality, it had become a maze.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 7,
                content: [
                  { type: 'h3', content: 'From a Quick Audit' },
                  {
                    type: 'list', items: [
                      '**Critical content scattered**: Deadlines, funding, and support were spread across department-based sections.',
                      '**Deep, inconsistent navigation**: Similar items appeared under multiple labels with no clear hierarchy.',
                      '**Accessibility issues**: Heading order, contrast, and keyboard traps made the experience harder for users relying on assistive tech.'
                    ]
                  },
                  { type: 'p', content: 'The cost was real: students and guidance staff reported difficulty finding key information, leading to missed opportunities and unnecessary support load.' }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cican-navigator-chapter1.png', alt: 'The original CICan Navigator interface', caption: 'The original site structure reflected internal departments, not student mental models.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '🎯', title: 'Design Challenge', content: 'In 48 hours, how might we reshape the Navigator so that students can find what they need in a few confident clicks, regardless of their background, device, or ability?' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '🔍', title: 'The Investigation',
        blocks: [
          { type: 'h2', content: 'Finding the Signal in the Noise' },
          { type: 'p', content: 'To fix navigation, the first step was to understand how students think about information—not how the institution is structured.' },
          { type: 'h3', content: 'Phase 1: Auditing the Chaos' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  {
                    type: 'list', items: [
                      '**Content inventory & heuristic review**: Sampled and mapped the existing structure—key navigation menus, top-visited sections, and common support topics. This revealed duplicated links, dead ends, and heavy use of internal department naming.',
                      '**Quick stakeholder input**: Collected "top tasks" from the brief and mentors: find a program, understand admissions, find funding, and get support.'
                    ]
                  }
                ]
              }
            ]
          },
          { type: 'h3', content: 'Phase 2: Card Sorting and Mental Models' },
          { type: 'p', content: 'With limited time, we ran lightweight card sorting sessions with local student proxies and recent grads:' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  {
                    type: 'list', items: [
                      '**Open card sort (n~8)**: Participants grouped representative pages and tasks into categories that made sense to them, using their own language.',
                      '**Closed card sort (n~7)**: Using a draft set of categories derived from the open sort, we validated whether new participants would place items where we expected.'
                    ]
                  }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cican-navigator-research.png', alt: 'Card sorting session results', caption: 'Card sorting revealed students group content by task, not department.' }
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
                  { type: 'h3', content: 'Aha: Task-Based, Not Department-Based' },
                  { type: 'p', content: 'The institution\'s site was organized around internal units (Registrar, Student Services, International, etc.), but students consistently grouped content around tasks:' },
                  {
                    type: 'list', items: [
                      '"Register for classes"',
                      '"Check my program requirements"',
                      '"Pay for school / financial aid"',
                      '"Get help / talk to someone"'
                    ]
                  },
                  { type: 'p', content: 'No one said "I need to visit the Registrar section"; they said "I need to register" or "figure out funding." This insight drove the new IA: **organize the site around student tasks instead of organizational silos.**' }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cican-navigator-aha.png', alt: 'New sitemap architecture', caption: 'New task-based sitemap derived from student card sorting results.' }
                ]
              }
            ]
          },
          { type: 'h3', content: 'Phase 3: Architecting for Clarity' },
          { type: 'p', content: 'Based on sort results and top tasks, I drafted a new sitemap and primary navigation:' },
          {
            type: 'list', items: [
              '**Flatter structure** with 4-5 action-oriented hubs: "My Programs," "Admissions & Deadlines," "Money & Funding," "Support & Services."',
              '**Each hub grouped related tasks** and pages students naturally clustered together in the sorts.'
            ]
          }
        ]
      },
      {
        number: 3, icon: '✨', title: 'The Breakthrough',
        blocks: [
          { type: 'h2', content: 'The Redesigned Navigator' },
          { type: 'p', content: 'The final concept showcases how a task-based, accessible IA can change the feel of an entire platform.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 5,
                content: [
                  { type: 'h3', content: 'Design Pillar 1: Personalized, Task-Based Dashboard' },
                  { type: 'p', content: 'The home page becomes a personalized launchpad: shows key tasks based on where a user is in their journey (exploring programs, applying, enrolled, or graduating).' },
                  { type: 'p', content: 'For example, a new prospect sees "Explore programs" and "Check admission requirements," while an enrolled learner sees "Register for courses" and "Track progress." Uses clear calls-to-action instead of generic marketing content.' }
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'image', src: '/images/cican-navigator-homepage.png', alt: 'Personalized task-based dashboard', caption: 'Dashboard modules change based on where a learner is in their journey.' }
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
                  { type: 'image', src: '/images/cican-navigator-demographics.png', alt: 'New navigation structure', caption: 'New task-based global nav derived from student card sorting.' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h3', content: 'Design Pillar 2: Navigation That Speaks the User\'s Language' },
                  { type: 'p', content: 'The global navigation is reduced from a long list of department labels to five clear, student-language categories derived from card sort data:' },
                  {
                    type: 'list', items: [
                      '**Before**: "Registrar\'s Office," "Student Services," "Awards & Bursaries," "Advising & Counselling."',
                      '**After**: "Courses & Registration," "Paying for School," "Wellbeing & Support," etc.'
                    ]
                  },
                  { type: 'p', content: 'This shift from internal jargon to user language makes it obvious where to start, even for someone new to the system.' }
                ]
              }
            ]
          },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'h3', content: 'Design Pillar 3: Accessibility as Foundation' },
                  { type: 'p', content: 'Accessibility was baked into every decision:' },
                  {
                    type: 'list', items: [
                      'Clear heading hierarchy for screen readers, with skip links to main content.',
                      'Sufficient color contrast and focus states for navigation and buttons.',
                      'Fully keyboard-navigable menus and key flows.',
                      'Descriptive link text and alt text for key imagery.'
                    ]
                  },
                  { type: 'p', content: 'The goal was to ensure that a blind or low-vision student, or someone navigating by keyboard, could accomplish the same tasks without additional friction.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'image', src: '/images/cican-navigator-accessibility.png', alt: 'Accessibility features in the redesign', caption: 'Accessible design ensures all students can navigate equally—regardless of ability or device.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '📈', title: 'Impact',
        blocks: [
          { type: 'h2', content: 'From Confusion to Confidence' },
          { type: 'p', content: 'Within the hackathon, we validated the concept through time-boxed testing and judging feedback.' },
          { type: 'h3', content: 'Prototype Testing (Concept)' },
          { type: 'p', content: 'In short usability sessions with student proxies using an interactive prototype:' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⚡', title: '75% Faster Tasks', content: 'Time to complete key tasks (e.g., "find program requirements," "find how to apply for funding") dropped by roughly 75%, comparing old vs new flows.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🔍', title: '40% Less Search', content: 'Participants relied on search about 40% less often; they could navigate directly via the main menu and dashboard.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '✅', title: '60% Fewer Issues', content: 'Observed "I can\'t find..." moments and backtracking decreased by an estimated 60%, based on notes and error counts.' }
                ]
              }
            ]
          },
          { type: 'h3', content: 'Qualitative Feedback' },
          {
            type: 'list', items: [
              'Testers described the new IA as "straightforward" and "more like how I actually think about school stuff."',
              'Hackathon judges highlighted the focus on mental models and accessibility as a key strength of the solution.'
            ]
          },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '💭', title: 'Reflection', content: 'This project cemented that information architecture and language are often where the real UX leverage lies. By centering student tasks and mental models, and treating accessibility as non-negotiable, the Navigator started to feel less like a bureaucratic site and more like a guide.' }
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