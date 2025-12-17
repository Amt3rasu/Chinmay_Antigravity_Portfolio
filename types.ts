
export interface ImpactStat {
  value: string;
  label: string;
}

export type ContentBlock =
  | { type: 'h1'; content: string; }
  | { type: 'h2'; content: string; }
  | { type: 'p'; content: string; }
  | { type: 'list'; items: string[]; }
  | { type: 'image'; src: string; alt: string; caption?: string; className?: string; }
  | { type: 'aside'; icon: string; title: string; content: string; }
  | { type: 'prototype'; src: string; title: string; }
  | { type: 'split_layout'; left: ContentBlock[]; right: ContentBlock[]; reverseOnMobile?: boolean; }
  | { type: 'bento_grid'; items: BentoItem[]; };

export interface BentoItem {
  span: number; // 1-12
  content: ContentBlock[];
  className?: string; // Optional for custom styling like background color
}

export interface Chapter {
  number: number;
  icon: string;
  title: string;
  blocks: ContentBlock[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  impact?: ImpactStat[];
  highlights?: string[];
  category: string;
  externalUrl?: string;
  prototype?: { src: string; title: string; };
  content: Chapter[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

// --- About Me Page Types ---

export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  details: string[];
}

export interface Skill {
  name: string;
  description: string;
  iconName: string;
}

export interface Tool {
  name: string;
  category: string;
  iconUrl: string;
  coloredIconUrl?: string;
  color?: string;
}

export interface Reference {
  quote: string;
  author: string;
  title: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export interface AboutData {
  name: string;
  title: string;
  profileImage: string;
  summary: string[];
  whatExcitesMe: string[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  skills: Skill[];
  tools: Tool[];
  awards: Award[];
  references: Reference[];
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}
