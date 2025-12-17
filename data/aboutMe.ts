
import { AboutData } from '../types';

export const aboutMeData: AboutData = {
  name: "Chinmay Bhaise",
  title: "Product & Service Designer",
  profileImage: "/images/profile-photo.jpg",
  summary: [
    "Highly motivated UX enthusiast with a background in travel content strategy and user research.",
    "I leverage my keen eye for detail and problem-solving skills to excel in sourcing media assets that align with user needs and brand identity."
  ],
  whatExcitesMe: [
    "Uncovering hidden user needs and translating them into intuitive and delightful travel experiences.",
    "Combining my passion for travel with the challenge of crafting human-centred interfaces that make exploration seamless.",
    "Being at the forefront of innovation, using design thinking to create travel products that redefine the user journey."
  ],
  experience: [
    {
      company: "C Design",
      role: "Freelance Designer, Product Leader",
      duration: "2022 ~ Present",
      logo: "/logos/c_design.png",
      points: [
        "Boosted completion rates and reduced errors via UX design.",
        "Created personas, journey maps, and inclusive prototypes.",
        "Ensured accessibility with rigorous usability and WCAG audits."
      ]
    },
    {
      company: "Headout",
      role: "Media Experience Designer",
      duration: "2022 ~ 2023",
      logo: "/logos/headout.png",
      points: [
        "Increased sales and efficiency with interactive seat maps.",
        "Improved content find-ability through optimized media migration.",
        "Led end-to-end design for high-conversion campaigns."
      ]
    },
    {
      company: "Bravvura Digital",
      role: "Visual Experience Designer",
      duration: "2021 ~ 2021",
      logo: "/logos/bravvura.png",
      points: [
        "Designed visually appealing, user-friendly web and mobile interfaces.",
        "Created wireframes and prototypes to convey design ideas.",
        "Improved designs by integrating user feedback and best practices."
      ]
    }
  ],
  education: [
    {
      institution: "Fanshawe College, Canada",
      degree: "User Experience Design",
      details: [
        "GPA: 4.14/4.2",
        "Presidential Excellence Award at the Graduation Exhibition"
      ]
    },
    {
      institution: "MIT World Peace University, Pune",
      degree: "Bachelor’s of Arts",
      details: [
        "UX Design Professional Course Completion",
        "Typography Master Class Completion",
        "Visual Design"
      ]
    }
  ],
  certifications: [
    "Google UX Design",
    "Systems Thinking for Product Designers",
    "Atlassian Agile Project Management Professional Certificate",
    "Generative AI by Microsoft",
    "Practical Accessibility for Designers",
    "Advanced User Experience Research",
    "Evil by Design: Persuasion in UX"
  ],
  skills: [
    {
      name: "UX Design",
      description: "From wireframes to user journeys I utilise various UX techniques to deliver world-class experience.",
      iconName: "IconLayout2"
    },
    {
      name: "Service Design",
      description: "I design end-to-end service experiences by integrating people, processes, and tools to enhance user satisfaction and operational efficiency.",
      iconName: "IconGitMerge"
    },
    {
      name: "Product Management",
      description: "I craft strategic roadmaps and align cross-functional teams to deliver impactful solutions that solve real customer problems.",
      iconName: "IconBriefcase"
    },
    {
      name: "Visual Design",
      description: "Proficient in creating visually compelling designs that align with brand identity and aesthetics.",
      iconName: "IconPalette"
    },
    {
      name: "Prototyping",
      description: "Adept at creating interactive prototypes using tools like Figma.",
      iconName: "IconDeviceMobile"
    },
    {
      name: "User Research",
      description: "Skilled in conducting user research to gather insights and validate design decisions.",
      iconName: "IconZoomQuestion"
    }
  ],
  tools: [
    { name: "Figma", category: "Design & Prototyping", iconUrl: "/icons/figma.png", coloredIconUrl: "/icons/figma_color.png", color: "original" },
    { name: "Framer", category: "Web Design & Implementation", iconUrl: "/icons/framer.png", color: "original" },
    { name: "Miro", category: "Brainstorming & Ideation", iconUrl: "/icons/miro.png", coloredIconUrl: "/icons/miro_color.png", color: "original" },
    { name: "Adobe Suite", category: "Photo/Graphic Editing", iconUrl: "/icons/adobe_suite.png", color: "original" },
    { name: "Jira", category: "Project Management", iconUrl: "/icons/jira.png", color: "original" },
    { name: "Slack", category: "Communication", iconUrl: "/icons/slack.png", color: "original" },
    { name: "Google Workspace", category: "Work Org", iconUrl: "/icons/google.png", color: "original" },
    { name: "Optimal Workshop", category: "User Testing", iconUrl: "/icons/optimal_workshop.png", color: "#FFC20E" },
    { name: "Perplexity", category: "AI", iconUrl: "/icons/perplexity.png", color: "#22b8cf" },
    { name: "ChatGPT", category: "AI", iconUrl: "/icons/icon_9.png", color: "#10a37f" },
    {
      name: "Notion",
      category: "Productivity",
      iconUrl: "/icons/notion.png",
      color: "#000000"
    }
  ],
  awards: [
    {
      title: "Published Article: AI & Accessibility",
      organization: "Canadian Design Network",
      date: "2025",
      description: "Authored an article exploring the future of AI in public systems and its impact on accessibility.",
      link: "https://canadiandesignnetwork.com/newsletter-article/ai-accessibility-and-the-future-of-public-systems/"
    },
    {
      title: "1st Place - Skills for Success Hackathon",
      organization: "CiCan / Fanshawe College",
      date: "2025",
      description: "Led the winning team in designing an innovative user experience solution for student success.",
      link: "https://www.fanshawec.ca/about-fanshawe/news/user-experience-design-students-hack-their-way-first-place"
    }
  ],
  references: [
    {
      quote: "At Headout, Chinmay leveraged problem-solving and analytical thinking to optimize media workflows. He sourced and transformed high-quality assets, adhering to rigorous brand standards. His contributions streamlined user experiences and elevated the brand's visual storytelling, aligning media strategy with user engagement and business goals.",
      author: "Himanshu Bagga",
      title: "Vice President - Supply Operations"
    },
    {
      quote: "As a Fanshawe College UX program professor, I enjoyed teaching Chinmay Bhaise. Throughout the course, he consistently demonstrated a deep curiosity, actively participated in class discussions, and showed an exceptional commitment to learning... It was truly inspiring to witness his dedication and growth. I am confident Chinmay will continue to excel in the UX field.",
      author: "Damilola Yakub",
      title: "Fanshawe Professor"
    }
  ],
  email: "bhaisechinmay15@gmail.com",
  linkedin: "https://www.linkedin.com/in/chinmay-bhaise/",
  github: "https://github.com/Amt3rasu",
  twitter: "https://twitter.com/chinmaybhaise"
};

export const getAboutMeContext = (): string => {
  let context = `About Me: My name is ${aboutMeData.name}. I am a ${aboutMeData.title}. `;
  context += `Summary: ${aboutMeData.summary.join(' ')}\n`;
  context += `What excites me: ${aboutMeData.whatExcitesMe.join(' ')}\n\n`;

  context += "Skills:\n";
  aboutMeData.skills.forEach(skill => {
    context += `- ${skill.name}: ${skill.description}\n`;
  });

  context += "\nProfessional Experience:\n";
  aboutMeData.experience.forEach(exp => {
    context += `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.points.join(', ')}\n`;
  });

  context += "\nEducation:\n";
  aboutMeData.education.forEach(edu => {
    context += `- ${edu.degree} from ${edu.institution}: ${edu.details.join(', ')}\n`;
  });

  context += "\nCertifications:\n";
  context += aboutMeData.certifications.join(', ') + '\n';

  context += "\nTools I use:\n";
  context += aboutMeData.tools.map(tool => tool.name).join(', ') + '\n';

  context += `\nContact Information:\n`;
  context += `Email: ${aboutMeData.email}\n`;
  context += `LinkedIn: ${aboutMeData.linkedin}\n`;
  context += `GitHub: ${aboutMeData.github}\n`;

  return context;
};
