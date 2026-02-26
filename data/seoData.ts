import { aboutMeData } from "./aboutMe";

// A massive, comprehensive list of SEO keywords relevant to Product Design, UX/UI, and Frontend
export const GLOBAL_SEO_KEYWORDS = [
    "Product Designer", "UX Designer", "UI Designer", "User Experience Design",
    "User Interface Design", "Interaction Design", "Service Design", "Information Architecture",
    "Systems Thinking", "B2B SaaS Design", "Enterprise UX", "Figma", "Prototyping",
    "Wireframing", "User Research", "Usability Testing", "Design Systems", "Component Libraries",
    "React", "TypeScript", "Frontend Development", "Web Design", "Mobile App Design",
    "Dashboard Design", "Data Visualization", "Fintech Design", "Web3 Design", "Accessibility",
    "WCAG 2.1 AA", "Inclusive Design", "Civic Tech", "Product Management", "Agile",
    "Design Thinking", "Journey Mapping", "Service Blueprinting", "Jobs to be Done", "JTBD",
    "User Flows", "A/B Testing", "Conversion Rate Optimization", "CRO", "Design Tokens",
    "Tailwind CSS", "Framer Motion", "3D WebGL", "React Three Fiber", "Creative Direction",
    "Lead Designer", "Senior Product Designer", "Portfolio", "Case Studies"
].join(", ");

// Generates the Person schema (for the homepage)
export const getPersonSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": aboutMeData.name,
        "url": typeof window !== 'undefined' ? window.location.origin : "https://amt3rasu.github.io/Chinmay_Antigravity_Portfolio",
        "image": aboutMeData.profileImage,
        "jobTitle": aboutMeData.title,
        "description": "Product Designer who codes. Specializing in B2B SaaS, Design Systems, and complex enterprise UX.",
        "knowsAbout": GLOBAL_SEO_KEYWORDS.split(", "),
        "alumniOf": "University or College", // Generic if not specified
        "sameAs": [
            aboutMeData.linkedin,
            aboutMeData.github,
            aboutMeData.twitter
        ].filter(Boolean)
    };
};

// Generates the WebSite schema
export const getWebSiteSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${aboutMeData.name} - ${aboutMeData.title}`,
        "url": typeof window !== 'undefined' ? window.location.origin : "https://amt3rasu.github.io/Chinmay_Antigravity_Portfolio",
        "keywords": GLOBAL_SEO_KEYWORDS
    };
};

// Generates CreativeWork schema for individual case studies
export const getCaseStudySchema = (caseStudy: any) => {
    // Generate an extended list of keywords based on the project tags and category
    const projectKeywords = [
        ...caseStudy.tags,
        caseStudy.category,
        "Case Study",
        "UX Process",
        "Design Process",
        "UX Research",
        "UI Design",
        "Problem Solving",
        ...GLOBAL_SEO_KEYWORDS.split(", ")
    ].join(", ");

    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": caseStudy.title,
        "headline": caseStudy.subtitle,
        "abstract": caseStudy.overview,
        "image": caseStudy.heroImage || caseStudy.thumbnail,
        "author": {
            "@type": "Person",
            "name": aboutMeData.name
        },
        "keywords": projectKeywords,
        "about": caseStudy.category,
        "timeRequired": caseStudy.timeline,
        "text": JSON.stringify(caseStudy.content) // Injects the entire case study text as invisible metadata for crawlers
    };
};
