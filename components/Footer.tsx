import React from 'react';
import { Link } from 'react-router-dom';
import { aboutMeData } from '../data/aboutMe';
import { Button } from './ui/Button';
import { LinkedInIcon } from './Icons';

export const Footer: React.FC = () => (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Upper part – multi‑column links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {/* Newsletter - Spans 2 columns on large screens */}
                <div className="lg:col-span-2">
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors mb-4 block">
                        {aboutMeData.name}
                    </Link>
                    <p className="text-muted-foreground mb-4 max-w-sm">
                        Crafting digital experiences with passion and precision. Join my newsletter for design insights and updates.
                    </p>
                    <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-card border border-border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/50"
                            aria-label="Email address"
                        />
                        <Button variant="primary" size="sm" className="whitespace-nowrap">Subscribe</Button>
                    </form>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                        <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        <li><a href={aboutMeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                        <li><Link to="/meet-the-dev" className="text-muted-foreground/50 hover:text-primary transition-colors text-xs">Wanna meet dev?</Link></li>
                    </ul>
                </div>
                {/* Work */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase mb-4">Work</h3>
                    <ul className="space-y-2">
                        <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">My Work</Link></li>
                        <li><Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</Link></li>
                        <li><a href={aboutMeData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
                    </ul>
                </div>
                {/* Legal */}
                <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-border mb-8" />

            {/* Lower part – social icons and copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex space-x-4">
                    {/* GitHub */}
                    <a href={aboutMeData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.288-.01-1.05-.015-2.062-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.921.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .324.216.702.825.582C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href={aboutMeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {aboutMeData.name}. All rights reserved.</p>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Back to top
                    </button>
                </div>
            </div>
        </div>
    </footer>
);
