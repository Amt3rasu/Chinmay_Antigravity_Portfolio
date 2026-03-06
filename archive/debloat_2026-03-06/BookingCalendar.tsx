import React, { useEffect } from 'react';
import { aboutMeData } from '../data/aboutMe';

export const BookingCalendar: React.FC = () => {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="w-full py-16 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Schedule a Meeting
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pick a time that works for you, or message me for a quick response.
                        </p>
                    </div>

                    {/* Calendly Inline Widget */}
                    <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/bhaisechinmay15/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=6366f1"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>

                    {/* Alternative Contact Methods */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                            Prefer a different way to connect?
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`mailto:${aboutMeData.email}`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground transition-all duration-300"
                            >
                                Email Me
                            </a>
                            <a
                                href={aboutMeData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground transition-all duration-300"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
