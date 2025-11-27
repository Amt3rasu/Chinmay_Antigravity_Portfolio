import React, { useState } from 'react';
import { aboutMeData } from '../data/aboutMe';
import { Button } from '../components/ui/Button';
import { LinkedInIcon } from '../components/Icons';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('submitting');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setFormState('success');
                e.currentTarget.reset();
                setTimeout(() => setFormState('idle'), 3000);
            } else {
                console.error('Form submission error:', data);
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please email me directly at ' + aboutMeData.email);
            setFormState('idle');
        }
    };

    return (
        <div className="bg-transparent pt-24 pb-16 sm:pt-32 sm:pb-24 min-h-screen flex items-center">
            <SEO title="Contact" description="Get in touch with me for collaborations, opportunities, or just to say hi." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span>Open to New Projects</span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                            I'd love to build something great with you <span className="text-primary">say hi.</span>
                        </h2>

                        <div className="space-y-4 pt-8">
                            <div className="flex items-center space-x-4 text-muted-foreground">
                                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>{aboutMeData.email}</span>
                            </div>
                            <a
                                href={aboutMeData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                                    <LinkedInIcon className="w-5 h-5" />
                                </div>
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-card shadow-lg border border-border/50 rounded-2xl p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="Jane Smith"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone no.</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="+1 234 567 890"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                    placeholder="Let me know what you have in mind."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                disabled={formState !== 'idle'}
                            >
                                {formState === 'idle' && 'Submit'}
                                {formState === 'submitting' && 'Sending...'}
                                {formState === 'success' && 'Message Sent!'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
