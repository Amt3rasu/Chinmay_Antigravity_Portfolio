import React from 'react';
import { aboutMeData } from '../data/aboutMe';

export const CalBooking: React.FC = () => {
    return (
        <section className="w-full py-16 bg-transparent border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Get in touch
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pick a time that works for you, or message me on{' '}
                            <a
                                href={aboutMeData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                LinkedIn
                            </a>
                            {' '}or{' '}
                            <a
                                href={`mailto:${aboutMeData.email}`}
                                className="text-primary hover:underline"
                            >
                                Email
                            </a>
                            {' '}for a quick response.
                        </p>
                    </div>

                    {/* Cal.com Iframe Embed - Safe & Reliable */}
                    <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-xl h-[700px] w-full">
                        <iframe
                            src="https://cal.com/chinmay-bhaise-7np2mg/30min?theme=dark"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Book a meeting"
                            style={{ minHeight: '700px' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
