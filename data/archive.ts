import { CaseStudy } from '../types';

/**
 * ARCHIVE
 * This file contains raw JSON data and legacy project case studies that have been removed
 * or consolidated from the main portfolio, preserved here for safekeeping.
 */

// 1. Original Antigravity Portfolio (Archived)
export const antigravityPortfolio: CaseStudy = {
    id: 'antigravity-portfolio',
    title: 'Antigravity [Portfolio]',
    category: 'Design Engineering · UI/UX',
    subtitle: 'Designing and engineering an AI-powered, high-performance portfolio.',
    thumbnail: '/images/portfolio-hero.png',
    heroImage: '/images/portfolio-hero.png',
    overview: 'This portfolio is a case study in itself. Built to score 100% on Lighthouse while maintaining a rich, interactive 3D experience, it features a custom AI agent trained on my professional history.',
    tags: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    role: 'Design Engineer',
    timeline: '4 Weeks (Design & Dev)',
    tools: ['Figma', 'React', 'Vite', 'Gemini AI'],
    impact: [
        { value: '100', label: 'Lighthouse Score' },
        { value: '1.2s', label: 'Load Time' },
        { value: 'Custom', label: 'AI Agent' }
    ],
    highlights: [
        "Architected a custom 3D scene using React Three Fiber, optimized for 60fps on mobile devices.",
        "Integrated a Gemini-powered AI chatbot trained specifically on my resume and case studies.",
        "Achieved perfect 100% Lighthouse scores across Performance, Accessibility, Best Practices, and SEO."
    ],
    content: [
      {
        number: 1, icon: '🎯', title: 'The Goal',
        blocks: [
          { type: 'h1', content: 'Escaping the Template Trap' },
          {
            type: 'bento_grid',
            items: [
              {
                span: 6,
                content: [
                  { type: 'p', content: 'Most design portfolios look identical. They use the same Squarespace templates or Framer layouts. I wanted to build something that fundamentally proved my capabilities not just as a designer, but as a design engineer.' },
                  { type: 'h3', content: 'The Requirements:' },
                  { type: 'list', items: ['Uncompromising performance (100% Lighthouse)', 'Immersive, non-standard interactions (WebGL/3D)', 'Demonstrate AI integration capabilities'] }
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
                  { type: 'p', content: 'I didn\\'t want a static "About" page. I built **Sparky**, a custom AI chatbot powered by Google Gemini. It\\'s trained on my resume and case studies, allowing recruiters to "interview" me even when I\\'m asleep.' }
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
};

// 2. Original standalone Sunny's Finance Case Study (Consolidated into ui-designs master)
export const sunnysFinance: CaseStudy = {
    id: 'sunnys-finance',
    title: 'Sunny\\'s Finance Dashboard',
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
            number: 1, icon: '🖼️', title: 'High-Fidelity Screens',
            blocks: [
                { type: 'image', src: '/images/sunnys-finance-dashboard-light.png', alt: 'Sunny\\'s Finance dashboard' },
                { type: 'image', src: '/images/sunnys-finance-profile-light.png', alt: 'Client profile page' },
                { type: 'image', src: '/images/sunnys-finance-overlay-light.png', alt: 'Expense detail overlay' }
            ]
        },
        {
            number: 2, icon: '✨', title: 'Reflection & Next Steps',
            blocks: [
                { type: 'h2', content: 'Reflection' },
                { type: 'p', content: 'This visual exploration taught me the importance of Miller\\'s Law in financial interfaces. By modularizing complex data into manageable cards, the cognitive load on advisors is significantly reduced, helping them find critical information instantly.' },
                { type: 'h2', content: 'Next Steps' },
                { type: 'p', content: 'Future iterations would include dark mode support, custom widget rearranging, and a responsive mobile layout for advisors on the go.' }
            ]
        }
    ]
};

// 3. Original standalone Cognitive Clarity Case Study (Consolidated into ui-designs master)
export const cognitiveClarity: CaseStudy = {
    id: 'cognitive-clarity',
    title: 'Cognitive Clarity (Zuo Insurance)',
    category: 'Product Design · UX Research · Concept / Client Engagement',
    subtitle: 'Redesigning insurance onboarding so data collection feels like a guided conversation instead of an interrogation.',
    thumbnail: '/images/cognitive-clarity-hero.jpg',
    heroImage: '/images/cognitive-clarity-hero.jpg',
    overview: 'Cognitive Clarity is a redesign of Zuo Insurance\\'s client onboarding flow, focused on reducing cognitive load and improving usability for both agents and customers so that insurance data collection feels like a guided conversation instead of an interrogation.',
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
            number: 1, icon: '🖼️', title: 'High-Fidelity Screens',
            blocks: [
                { type: 'image', src: '/images/cognitive-clarity-hero.jpg', alt: 'Cognitive Clarity hero section' },
                { type: 'image', src: '/images/cognitive-clarity-dashboard.jpg', alt: 'Dashboard interface' }
            ]
        },
        {
            number: 2, icon: '✨', title: 'Reflection & Next Steps',
            blocks: [
                { type: 'h2', content: 'Reflection' },
                { type: 'p', content: 'Designing for accessibility first forces a cleaner, more intuitive structural hierarchy. The stringent AAA contrast modes and large typography proved universally beneficial, proving that accessibility enhances usability for everyone.' },
                { type: 'h2', content: 'Next Steps' },
                { type: 'p', content: 'Conduct formal usability testing with visually and motor-impaired users to refine the custom focus states, and explore a voice-navigable interface layer.' }
            ]
        }
    ]
};
