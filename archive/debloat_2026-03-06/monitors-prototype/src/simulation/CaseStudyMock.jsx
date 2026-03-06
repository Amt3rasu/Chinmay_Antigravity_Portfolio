import React from 'react'

export const CaseStudyMock = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
            {/* HERO SECTION */}
            <div className="relative h-[85vh] w-full overflow-hidden flex items-end pb-24 px-12">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

                <div className="relative z-10 max-w-5xl">
                    <button
                        onClick={() => window.location.hash = ''}
                        className="mb-8 opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
                    >
                        ← Back to Highlights
                    </button>
                    <div className="flex gap-2 mb-6">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full">AI</span>
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full">Accessibility</span>
                    </div>
                    <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">AI & Accessibility</h1>
                    <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
                        Featured in Canadian Design Network: The Future of Public Systems.
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-5xl mx-auto py-24 px-6">
                <div className="grid md:grid-cols-3 gap-20">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-8">Overview</h2>
                        <p className="text-xl text-white/50 leading-relaxed mb-10">
                            An in-depth exploration of how AI can revolutionize accessibility in public systems, published in the Canadian Design Network newsletter. This study covers the intersection of machine learning and inclusive design.
                        </p>

                        <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                            <p className="text-white/60 leading-relaxed">
                                Public systems are often built for the average user, leaving millions with disabilities behind. We investigated how generative models can bridge this gap in real-time.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Role</h3>
                            <p className="text-xl font-medium">Lead Designer</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Phase</h3>
                            <p className="text-xl font-medium">Research & Strategy</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Impact</h3>
                            <p className="text-3xl font-bold text-blue-400 font-mono">1.2M+</p>
                            <p className="text-sm text-white/40">Estimated Reach</p>
                        </div>
                    </div>
                </div>

                <div className="mt-40 border-t border-white/10 pt-10 text-center text-white/20 text-sm">
                    <p>[ Simulation Check: Case Study Transition Successful ]</p>
                </div>
            </div>
        </div>
    )
}
