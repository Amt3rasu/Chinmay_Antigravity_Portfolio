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
    tags: ['Accessibility', 'Service Design', 'Mobile App'],
    impact: [
      { value: '68% Faster', label: 'Ticket Purchase' },
      { value: '95% Success', label: 'Kiosk Task' },
      { value: '+59 Point', label: 'NPS Swing' },
    ],
    highlights: [
      "Reduced ticket purchase time by 68% in usability tests.",
      "Achieved 95% task success on kiosk ticket flows after iteration.",
      "Modeled +59-point NPS swing based on pre/post perception survey."
    ],
    content: [
      {
        number: 1, icon: '🎯', title: 'Problem and Context',
        blocks: [
          { type: 'p', content: '**Context**: Concept project · 8 weeks · Individual' },
          { type: 'p', content: 'Inspired by major North American transit systems and public accessibility data. Designed to explore how a small digital team could improve trust in transit for riders with mobility, vision, and cognitive challenges.' },
          { type: 'h1', content: 'The Daily Gamble of Public Transit' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 8,
                content: [
                  { type: 'p', content: 'For most riders, public transit is a routine. For riders with disabilities, every trip is a chain of unknowns: Will the elevator be working? Can I reach the platform in time? If something breaks, will I get help or be stranded?' },
                  { type: 'p', content: 'Existing apps and websites offered static accessibility information and complex ticketing flows that often failed in real life. Riders described planning even short trips like a “logistics operation,” checking multiple sites and calling family to verify stations and equipment.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🎲', title: 'The Problem', content: 'How might we create a transit experience that riders with disabilities can trust at every step of their journey—before, during, and after a trip?' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h2', content: 'Design Goals' },
                  {
                    type: 'list', items: [
                      'Reduce uncertainty about station accessibility and disruptions.',
                      'Simplify ticket purchase for both new and experienced riders.',
                      'Support different abilities (vision, mobility, cognitive) across mobile, kiosk, and web.',
                      'Build a coherent service, not just a single app.'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '🔍', title: 'Research and Key Insight',
        blocks: [
          { type: 'h1', content: 'Uncovering the "Trust Gap"' },
          { type: 'p', content: 'To ground this concept, I combined qualitative research with light desk research, including 8 participants with varied needs, 3 contextual inquiry sessions, and 5 semi-structured interviews.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'What I Observed' },
                  {
                    type: 'list', items: [
                      '**Unreliable information**: Riders did not trust elevator/escalator status on websites.',
                      '**High cognitive load**: People juggled maps, PDFs, apps, and phone calls to plan one trip.',
                      '**Complex ticketing**: Kiosks presented many paths and unclear labels.',
                      '**Limited help**: Few options beyond asking strangers when things went wrong.'
                    ]
                  }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://picsum.photos/seed/accesstransit1/1200/800', alt: 'Affinity Mapping Session' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '💡', title: 'Key Insight', content: 'The core problem was not the absence of features; it was the absence of trust. Riders did not trust the data, the system, or the experience. We needed to design a service that earns trust.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '🗺️', title: 'Strategy and Architecture',
        blocks: [
          { type: 'h1', content: 'Mapping the Trust-Based Journey' },
          { type: 'p', content: 'With “trust-first” as the guiding principle, I mapped a full door-to-door journey and created a service blueprint showing frontstage, backstage, and breakpoints.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  { type: 'h2', content: 'User Journey Map' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_d228779898c04719909ad71aae0823d9~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_01.png', alt: 'User Journey Map' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h2', content: 'Service Blueprint' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_edade27bf35c43d5916a957b6850573d~mv2.png/v1/fill/w_817,h_397,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2020_08_59.png', alt: 'Service Blueprint' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h2', content: 'Service Concept' },
                  { type: 'p', content: 'To cover the "trust-critical" moments, I designed a three-part ecosystem: Mobile app (planning & help), Station kiosks (ticketing), and Web portal (advance planning). Each touchpoint shares the same data and principles.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 4, icon: '📐', title: 'Design Principles',
        blocks: [
          { type: 'h1', content: 'Guiding Decisions' },
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
          { type: 'h1', content: 'Mobile: Planning and Real-Time Trust' },
          { type: 'p', content: 'Scenario: A wheelchair user wants to check whether their usual route is accessible before leaving home.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Home as "Trust Dashboard"' },
                  { type: 'p', content: 'The home screen shows saved routes with elevator/escalator status and alerts. Riders know instantly if today\'s trip is viable.' },
                  { type: 'h2', content: 'Proactive Disruption Handling' },
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
          { type: 'h1', content: 'Station Kiosks: Ticketing Under Pressure' },
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
                  { type: 'h2', content: 'Simplifying the Flow' },
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
          { type: 'h1', content: 'Clarity and Consistency' },
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
          { type: 'h1', content: 'Measuring Success' },
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
          { type: 'h1', content: 'Future Roadmap' },
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
    category: 'B2B Product',
    subtitle: 'A mobile app connecting distributors with neighborhood shops, simplifying orders and inventory management.',
    thumbnail: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png',
    heroImage: 'https://static.wixstatic.com/media/9a7729_c78319cf9cf743dda2836e075a9b6c04~mv2.jpg/v1/fill/w_1634,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Person%20Writing%20on%20Paper%202.jpg',
    overview: 'ConnectDist is a mobile app connecting distributors with neighborhood shops, simplifying orders and inventory management, and empowering over 100 local businesses through intuitive design and smart technology.',
    tags: ['B2B Marketplace', 'Mobile App', 'UX Research'],
    impact: [
      { value: 'Unified', label: 'B2B Marketplace' },
      { value: 'Real-Time', label: 'Inventory Sync' },
      { value: 'Relationship', label: 'Centric Communication' },
    ],
    highlights: [
      'Identified critical ordering, communication, and delivery pain points.',
      'Validated key features like real-time tracking and streamlined ordering processes.',
      'Improved overall usability through iterative, user-driven design updates.'
    ],
    content: [
      {
        number: 1,
        icon: '⭐',
        title: 'The Arena',
        blocks: [
          { type: 'h1', content: 'The Hidden Inefficiencies Costing Main Street' },
          { type: 'p', content: 'Independent retail is the lifeblood of our communities, but behind the scenes, it runs on a chaotic web of outdated systems. Store owners juggle dozens of distributors, placing orders via phone calls, late-night texts, and paper catalogs. This isn\'t just inefficient; it\'s a drain on capital, leading to costly overstocking of slow-moving products and lost sales from empty shelves.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 8,
                content: [
                  { type: 'p', content: 'I saw a system at its breaking point. While consumer apps were getting sleeker and smarter, the tools for these vital small businesses were stuck in the past. My mission was to design ConnectDist: a single, elegant platform to streamline B2B commerce, giving local retailers the modern tools they needed to not just survive but thrive against larger competition.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_a2ad1234f455483689cb0f2d96312b46~mv2.png/v1/fill/w_1024,h_1224,fp_0.50_0.53,q_90,enc_auto/Copilot%20Aug%202%202025.png', alt: 'ConnectDist App Mockup' }
                ]
              }
            ]
          }
        ],
      },
      {
        number: 2,
        icon: '⭐',
        title: 'The Investigation',
        blocks: [
          { type: 'h1', content: 'Decoding the Psychology of Trust' },
          { type: 'p', content: 'I knew the biggest risk wasn\'t technology; it was behavior. Why would a store owner change a system they\'ve used for 20 years? My research process was designed to answer that question.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                className: '!bg-transparent !border-none !p-0 !shadow-none',
                content: [
                  { type: 'image', src: '/images/connectdist-interviews.png', alt: 'Research interviews with store owners and distributors', className: '!shadow-none' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Phase 1: Deep Dive Interviews' },
                  { type: 'p', content: 'I interviewed store owners not as "users," but as entrepreneurs. I focused on their business pains, not just their software pains. I also interviewed distributors to understand their side of the equation—chasing payments, managing manual orders, and the struggle to introduce new products.' }
                ]
              }
            ]
          },
          { type: 'h2', content: 'The \'Aha!\' Moment: It\'s Not About Transactions, It\'s About Relationships' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_eeb94d90ab8c4fe2ace83d2a7bc80996~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_05_34.png', alt: 'Smart inventory screen' }
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'p', content: 'The breakthrough insight from my research was this: Local commerce runs on personal relationships, not just price. Store owners weren\'t just buying products; they were buying from people they trusted. A purely transactional, Amazon-style marketplace would fail because it would strip away this essential human element.' },
                  { type: 'p', content: 'Therefore, the design challenge became: **How can we build a platform that\'s hyper-efficient but also strengthens the personal relationships at the heart of local commerce?**' },
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'h2', content: 'Phase 2: From Insight to Architecture' },
                  { type: 'p', content: 'This "relationship-first" principle completely defined the product strategy. The central feature couldn\'t be a generic product search; it had to be a "My Distributors" hub.' },
                  { type: 'p', content: 'I mapped out the entire service blueprint, considering the journey of both the retailer and the distributor to ensure the system created value for both sides of the marketplace. This dual-sided approach was critical to ensuring adoption.' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_b1335180f66c4d87a6f7f795a262104d~mv2.png/v1/fill/w_2218,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202025-08-02%20at%2021_04_33.png', alt: 'Service blueprint diagram' }
                ]
              }
            ]
          },
        ],
      },
      {
        number: 3,
        icon: '⭐',
        title: 'The Breakthrough',
        blocks: [
          { type: 'h1', content: 'The ConnectDist Platform' },
          { type: 'p', content: 'The final design is a direct translation of my research insights into an intuitive, powerful tool. I focused on three strategic pillars.' },
          { type: 'prototype', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDy2HBVXW4rDCw7tJRPUY0y%2FChinmay-s-Design-System%3Fpage-id%3D139%253A23008%26node-id%3D151-32084%26t%3D0pV6yQfm2bG0Co1i-1', title: 'ConnectDist Interactive Prototype' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 5,
                content: [
                  { type: 'h2', content: 'Design Pillar 1: The Relationship Hub' },
                  { type: 'p', content: 'Because trust is built on communication, the dashboard isn\'t a list of products; it\'s a list of people. It allows a retailer to see all their trusted distributors in one place. Every order is tied to a specific distributor and has its own dedicated chat thread, moving communication from messy text messages into an organized, in-context system.' },
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_6b0f2e72f38248de88f8e14564a79c74~mv2.png/v1/fill/w_922,h_852,fp_0.51_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Shots%20Mockups.png', alt: 'App screenshots in mockups' },
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'aside', icon: '♻️', title: 'All About Making It Simple', content: 'Simplicity was at the core of every design decision. By removing unnecessary complexity and focusing on the essential tasks, we created an interface that feels intuitive and effortless for users of all technical skill levels.' },
                  { type: 'image', src: 'https://static.wixstatic.com/media/9a7729_facde93c04c34cceae2e7ba351297b3d~mv2.jpeg/v1/fill/w_922,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34bojiukqwhp8cgywbgmd.jpeg', alt: 'Simplified interface design' },
                ]
              },
              {
                span: 7,
                content: [
                  { type: 'image', src: '/images/connectdist-smart-inventory-mobile.jpg', alt: 'Smart inventory mobile interface' },
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'h2', content: 'Design Pillar 2: The End of Guesswork with Smart Inventory' },
                  { type: 'p', content: 'Because retailers were losing money on poor inventory management, I designed a simple, visual inventory tool. It allows owners to see what\'s selling, get alerts on low-stock items, and, crucially, create a new order directly from the inventory screen. This closes the loop between insight and action.' },
                ]
              }
            ]
          },
        ],
      },
      {
        number: 4,
        icon: '⭐',
        title: 'The Impact',
        blocks: [
          { type: 'h1', content: 'A New Trajectory for Local Business' },
          { type: 'p', content: 'Though a conceptual project, ConnectDist was designed and validated as a market-ready product.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '✅', title: 'Validation', content: 'In usability tests with 5 target users, the prototype received overwhelmingly positive feedback. The average time to place a complex, multi-item order was under 90 seconds.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '💰', title: 'Business Viability', content: 'Users confirmed they would be willing to pay a small subscription fee for a tool that saved them an estimated 5-7 hours of administrative work per week.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🧠', title: 'My Key Reflection', content: 'This project taught me that in B2B design, you\'re solving for both business efficiency and human psychology. By understanding that the core user need wasn\'t just "ordering" but "trusted partnership," I was able to design a solution that resonated on an emotional level.' }
                ]
              }
            ]
          }
        ],
      }
    ],
  },
  {
    id: 'cognitive-clarity',
    title: 'Cognitive Clarity (Zuo Insurance)',
    category: 'UX Redesign',
    subtitle: 'Redesigning the data collection experience for an insurance agency, focusing on reducing cognitive load.',
    thumbnail: '/images/cognitive-clarity-hero.jpg',
    heroImage: '/images/cognitive-clarity-hero.jpg',
    overview: 'I redesigned the data collection experience for an insurance agency, focusing on reducing cognitive load and improving usability for both clients and agents. The project aimed to streamline the process, increase form completion rates, and enhance overall user engagement.',
    tags: ['UX Design', 'Cognitive Psychology', 'Form Design'],
    impact: [
      { value: '22% Increase', label: 'Form completion' },
      { value: '40% Decrease', label: 'in errors' },
      { value: '35% Reduced', label: 'Call Times' },
    ],
    highlights: [
      "Cut agent-assisted call times by 35% with faster form completion.",
      "Increased form completion rates by 22% through a complete user-centric redesign.",
      "Reduced data entry errors by 40% using real-time validation and e-signature integration."
    ],
    prototype: { src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk9FwBBCiNodBDGsmH68zho%2FCognitive-Load-Management-Chinmay%3Fpage-id%3D0%253A1%26node-id%3D4-570%26p%3Df%26viewport%3D-576%252C1455%252C0.24%26t%3DtbF8cfoQy3woM9SG-1%26scaling%3Dscale-down%26content-scaling%3Dfixed', title: 'Cognitive Clarity Interactive Prototype' },
    content: [
      {
        number: 1, icon: '⭐', title: 'The Arena',
        blocks: [
          { type: 'h1', content: 'When a Form Becomes a Fortress' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 7,
                content: [
                  { type: 'p', content: 'For Zuo Insurance, the client onboarding form was their single most important touchpoint—and their biggest liability. It was a dense, jargon-filled document that was frustrating for new clients and time-consuming for agents.' },
                  { type: 'list', items: ['High Abandonment: Potential clients would simply give up.', 'Costly Errors: Manual data entry errors led to compliance risks.', 'Poor First Impression: The frustrating process started relationships on a foundation of stress.'] }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-old-form.jpg', alt: 'Screenshot of the complex legacy form' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'p', content: 'My mission was to completely redesign this experience, applying principles of cognitive psychology to transform a complex, intimidating process into one that felt effortless, intuitive, and reassuring.' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 2, icon: '💡', title: 'The Investigation',
        blocks: [
          { type: 'h1', content: 'Unpacking Cognitive Overload' },
          { type: 'p', content: 'My process was rooted in a dual-track approach: understanding the journey of both the end-customer and the internal agent. A solution that only worked for one would ultimately fail.' },
          { type: 'h2', content: 'Phase 1: Diagnosis and Discovery' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 12,
                content: [
                  {
                    type: 'list',
                    items: [
                      '**Heuristic Evaluation**: I started by conducting a heuristic evaluation of the existing form, identifying dozens of violations related to cognitive load, error prevention, and consistency.',
                      '**Agent Shadowing**: I observed five agents as they onboarded new clients. I saw firsthand where they got stuck, the workarounds they created, and the common errors that occurred.',
                      '**Customer Interviews**: I spoke with recent customers about their experience. The key theme was overwhelm. "It felt like I was being interrogated," one user said.'
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
                  { type: 'h2', content: 'The \'Aha!\' Moment: Two Users, One Broken Conversation' },
                  { type: 'p', content: 'The key insight was that the form wasn\'t just a document; it was a broken conversation between three parties: the customer, the agent, and the system. The customer didn\'t understand the questions, and the agent spent all their time being a "translator" and data entry clerk instead of an advisor.' },
                  { type: 'p', content: 'Therefore, the design challenge was: **How can we design an interface that facilitates a natural, guided conversation, where the system does the heavy lifting?**' }
                ]
              },
              {
                span: 5,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-aha.png', alt: 'Wireframe of the new simplified interface' },
                ]
              }
            ]
          },
          { type: 'h2', content: 'Phase 2: Designing with Psychological Principles' },
          { type: 'p', content: 'I didn\'t just aim for a prettier UI; I used established psychological principles as my guide.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'list', items: ["**Miller's Law (The Magic Number 7)**: The old form had over 50 fields on one screen. I broke the process down into logical, bite-sized chunks of 5-7 related questions at a time.", "**Hick's Law (The Paradox of Choice)**: I used conditional logic to eliminate irrelevant questions. If a user says they don't own a car, they never see questions about their vehicle. This dramatically simplified the path for most users.", "**Progressive Disclosure**: Advanced or complex information was tucked away until needed, keeping the primary interface clean and focused."] }
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-principles.png', alt: 'Visualizing psychological principles in the new design' }
                ]
              }
            ]
          }
        ]
      },
      {
        number: 3, icon: '⭐', title: 'The Breakthrough',
        blocks: [
          { type: 'h1', content: 'A Dual-Sided Solution' },
          { type: 'p', content: 'The solution was a responsive web application with two distinct views, designed to work in harmony.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Design Pillar 1: The Agent\'s "Co-Pilot" View' },
                  { type: 'p', content: 'Because agents need control and efficiency, their interface is a powerful dashboard. It shows a progress overview, highlights missing information, and allows them to easily navigate between sections. It turns them from data clerks into true advisors who can guide the conversation.' },
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-pillar1.png', alt: 'Agent dashboard mockup showing progress overview' },
                ]
              },
              {
                span: 6,
                className: 'bg-[#1e293b]',
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-pillar2.png', alt: 'Customer view mockup showing guided conversation' },
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Design Pillar 2: The Customer\'s "Guided Conversation" View' },
                  { type: 'p', content: 'Because customers need clarity and reassurance, their view is presented one simple question at a time. The language is conversational (e.g., "Tell us about your home" instead of "Property Details Section 2a"). Real-time validation prevents errors before they happen, and a persistent summary view builds confidence.' },
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'h2', content: 'Design Pillar 3: The Seamless Handoff' },
                  { type: 'p', content: 'The system allows for a seamless handoff. A customer can start the form at home, save their progress, and finish it later with an agent in person without losing any data. This flexibility acknowledges the reality of the customer\'s busy life.' },
                ]
              },
              {
                span: 6,
                content: [
                  { type: 'image', src: '/images/cognitive-clarity-handoff.jpg', alt: 'Seamless handoff mockup' },
                ]
              }
            ]
          },
        ]
      },
      {
        number: 4, icon: '⭐', title: 'The Impact',
        blocks: [
          { type: 'h1', content: 'Efficiency, Accuracy, and Peace of Mind' },
          { type: 'p', content: 'The redesigned onboarding flow had an immediate and dramatic impact on the business.' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '⚡', title: '35% Faster Onboarding', content: 'The average time for an agent to complete a client onboarding dropped from 12 minutes to just 7.8 minutes.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '🎯', title: '40% Reduction in Errors', content: 'Real-time validation and a simplified UI slashed the rate of costly data entry errors.' }
                ]
              },
              {
                span: 4,
                content: [
                  { type: 'aside', icon: '📈', title: '22% Increase in Completion', content: 'The less intimidating process led to a significant jump in successful completions.' }
                ]
              },
              {
                span: 12,
                content: [
                  { type: 'p', content: '**My Key Reflection**: This project was a powerful lesson in the ROI of UX. By applying fundamental principles of cognitive psychology, we built a more efficient, accurate, and profitable business process. It proved that great design is not a cost center; it\'s a powerful driver of business success.' }
                ]
              }
            ]
          }
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