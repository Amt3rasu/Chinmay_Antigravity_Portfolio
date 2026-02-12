import React, { useEffect, useRef, useState, useCallback } from 'react'
import SimulationApp from './SimulationApp'
import { Tooltip } from '../Tooltip'
import { ZoomTransition } from '../ZoomTransition'

/*
 * NON-DESTRUCTIVE SIMULATION
 * This file is a CLONE of the real HomePage.tsx from the portfolio.
 * The original Highlights section (carousel) is preserved below as a comment block.
 * The 3D Monitor scene replaces it for testing purposes.
 *
 * ORIGINAL HIGHLIGHTS SECTION (HIDDEN):
 * <section className="w-full py-16 bg-transparent backdrop-blur-sm snap-start flex-shrink-0">
 *   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 *     <Carousel items={caseStudies.filter(...).map(...)} />
 *   </div>
 * </section>
 */

export const HomePageMock = () => {
    const monitorSectionRef = useRef(null)
    const canvasWrapperRef = useRef(null)
    const [canvasWrapper, setCanvasWrapper] = useState(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Callback ref for the section (used for scroll calculations)
    const sectionRefCallback = useCallback((node) => {
        monitorSectionRef.current = node
    }, [])

    // Callback ref for the canvas wrapper (used as eventSource for R3F)
    const canvasRefCallback = useCallback((node) => {
        canvasWrapperRef.current = node
        setCanvasWrapper(node)
    }, [])

    // Override the prototype's dark full-screen styles to allow scrolling
    useEffect(() => {
        const root = document.getElementById('root')
        const saved = {
            html: document.documentElement.style.cssText,
            body: document.body.style.cssText,
            root: root?.style.cssText || '',
        }

        document.documentElement.style.height = 'auto'
        document.documentElement.style.overflow = 'auto'
        document.body.style.height = 'auto'
        document.body.style.overflow = 'auto'
        document.body.style.background = '#F4F4F2'
        if (root) {
            root.style.height = 'auto'
            root.style.overflow = 'visible'
        }

        return () => {
            document.documentElement.style.cssText = saved.html
            document.body.style.cssText = saved.body
            if (root) root.style.cssText = saved.root
        }
    }, [])

    // Scroll-driven mood transition — only starts when the monitor section
    // actually enters the viewport, keeping hero at full brightness
    const handleScroll = useCallback(() => {
        const monitorSection = monitorSectionRef.current
        if (!monitorSection) return

        const rect = monitorSection.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // How far the top of the section is from the bottom of the viewport.
        // Transition starts when the section top enters the bottom 30% of viewport.
        // transition zone = from viewport bottom to 30% from bottom
        const triggerLine = viewportHeight * 0.7 // transition finishes here
        const startLine = viewportHeight       // transition starts here

        if (rect.top >= startLine) {
            // Section hasn't reached viewport yet — fully light
            setScrollProgress(0)
        } else if (rect.top <= 0) {
            // Section top has reached or passed the viewport top — fully dark
            setScrollProgress(1)
        } else if (rect.top < startLine && rect.top > triggerLine) {
            // In the entry zone — interpolate 0→0.8
            const raw = 1 - (rect.top - triggerLine) / (startLine - triggerLine)
            const eased = raw * raw * (3 - 2 * raw) // smoothstep
            setScrollProgress(eased * 0.8)
        } else {
            // Between triggerLine and 0 — interpolate 0.8→1
            const raw = 1 - rect.top / triggerLine
            setScrollProgress(0.8 + raw * 0.2)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial calculation
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    // Interpolate colors based on scroll progress
    const bgColor = lerpColor('#F4F4F2', '#101010', scrollProgress)
    const textColor = lerpColor('#101010', '#F0F0F0', scrollProgress)
    const mutedColor = lerpColor('rgba(16,16,16,0.55)', 'rgba(240,240,240,0.5)', scrollProgress)

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            fontFamily: "'Inter', sans-serif",
            transition: 'background-color 0.05s linear',
            backgroundColor: bgColor,
        }}>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1: HERO (Simulated Blob Section)
               ═══════════════════════════════════════════════════════════════ */}
            <section style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                {/* Simulated blob glow */}
                <div style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, rgba(100,120,255,${0.15 * (1 - scrollProgress)}), transparent 70%)`,
                    filter: 'blur(80px)',
                    animation: 'pulse 4s ease-in-out infinite',
                }} />

                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', padding: '0 24px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '4px 14px',
                        borderRadius: '999px',
                        border: `1px solid rgba(76, 175, 80, 0.4)`,
                        background: 'rgba(76, 175, 80, 0.08)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: textColor,
                        marginBottom: '32px',
                        transition: 'color 0.3s',
                    }}>
                        <span style={{
                            width: '8px', height: '8px',
                            borderRadius: '50%',
                            background: '#4CAF50',
                            display: 'inline-block',
                        }} />
                        Open to work
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        color: textColor,
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        margin: 0,
                        transition: 'color 0.3s',
                    }}>
                        Empowering startups and businesses<br />
                        to grow with<br />
                        smart, scalable design.
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: mutedColor,
                        marginTop: '24px',
                        lineHeight: 1.7,
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        transition: 'color 0.3s',
                    }}>
                        From foundations to handoff, I streamline product and service journeys with design systems, workflow optimization, and a focus on user and business success.
                    </p>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.4,
                    color: textColor,
                    transition: 'color 0.3s',
                }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Scroll for more
                    </span>
                    <div style={{ width: '1px', height: '40px', background: textColor, opacity: 0.3, transition: 'background 0.3s' }} />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2: TRUSTED BY (Placeholder)
               ═══════════════════════════════════════════════════════════════ */}
            <section style={{
                padding: '60px 0',
                textAlign: 'center',
                borderTop: `1px solid ${scrollProgress > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                transition: 'border-color 0.5s',
            }}>
                <p style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: mutedColor,
                    margin: 0,
                    transition: 'color 0.3s',
                }}>
                    TRUSTED BY
                </p>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3: HIGHLIGHTS → 3D MONITORS (THE REPLACEMENT)

                This is where the carousel used to be. Now it's the full-screen
                immersive 3D monitor scene. The eventSource is scoped to this
                container so hover/click interactions work properly.
               ═══════════════════════════════════════════════════════════════ */}
            <section
                id="monitor-section"
                ref={sectionRefCallback}
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    background: '#101010',
                }}
            >
                {/* Gradient bleed: top edge (light → dark) */}
                <div style={{
                    position: 'absolute',
                    top: '-120px',
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: 'linear-gradient(to bottom, transparent, #101010)',
                    pointerEvents: 'none',
                    zIndex: 5,
                }} />

                {/* Floating title overlay */}
                <div style={{
                    position: 'absolute',
                    top: '48px',
                    left: '48px',
                    zIndex: 20,
                    pointerEvents: 'none',
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'white',
                        margin: '0 0 8px 0',
                    }}>Highlights</h2>
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.4)',
                        maxWidth: '340px',
                        lineHeight: 1.5,
                        margin: 0,
                    }}>Selected works and achievements from my product design journey.</p>
                </div>

                {/* "View All Work" button */}
                <div style={{ position: 'absolute', top: '48px', right: '48px', zIndex: 20 }}>
                    <button style={{
                        padding: '10px 24px',
                        borderRadius: '999px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'transparent',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black' }}
                        onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white' }}
                    >
                        View All Work →
                    </button>
                </div>

                {/* The 3D Monitor Scene — with scoped eventSource */}
                <div ref={canvasRefCallback} style={{ width: '100%', height: '100%' }}>
                    {canvasWrapper && <SimulationApp eventSource={canvasWrapper} />}
                </div>

                {/* Gradient bleed: bottom edge (dark → light) */}
                <div style={{
                    position: 'absolute',
                    bottom: '-120px',
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: 'linear-gradient(to top, transparent, #101010)',
                    pointerEvents: 'none',
                    zIndex: 5,
                }} />
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4+: REMAINING PORTFOLIO SECTIONS (Placeholders)
                These transition back to light theme as you scroll past monitors
               ═══════════════════════════════════════════════════════════════ */}
            {[
                { label: 'SERVICES', bg1: '#FAFAFA' },
                { label: 'MY TOOLKIT', bg1: '#F4F4F2' },
                { label: 'FAQ', bg1: '#FAFAFA' },
            ].map(({ label, bg1 }) => (
                <section key={label} style={{
                    padding: '100px 0',
                    textAlign: 'center',
                    background: bg1,
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                }}>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(0,0,0,0.2)',
                        margin: 0,
                    }}>{label}</p>
                </section>
            ))}

            <section style={{ padding: '100px 0', textAlign: 'center', background: '#101010' }}>
                <p style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.2)',
                    margin: 0,
                }}>CONTACT</p>
            </section>

            {/* Tooltip & Zoom Transition — rendered outside canvas but scoped to page */}
            <Tooltip />
            <ZoomTransition />

            {/* Inline keyframes */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.15); opacity: 1; }
                }
            `}</style>
        </div>
    )
}

// ─── Color interpolation helper ──────────────────────────────────────────────
function lerpColor(colorA, colorB, t) {
    const a = parseColor(colorA)
    const b = parseColor(colorB)
    if (!a || !b) return colorA

    const r = Math.round(a.r + (b.r - a.r) * t)
    const g = Math.round(a.g + (b.g - a.g) * t)
    const bl = Math.round(a.b + (b.b - a.b) * t)
    const alpha = a.a + (b.a - a.a) * t

    if (alpha < 1) {
        return `rgba(${r},${g},${bl},${alpha.toFixed(2)})`
    }
    return `rgb(${r},${g},${bl})`
}

function parseColor(str) {
    // Handle hex
    if (str.startsWith('#')) {
        const hex = str.slice(1)
        if (hex.length === 6) {
            return {
                r: parseInt(hex.slice(0, 2), 16),
                g: parseInt(hex.slice(2, 4), 16),
                b: parseInt(hex.slice(4, 6), 16),
                a: 1,
            }
        }
    }
    // Handle rgba(r,g,b,a)
    const rgbaMatch = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
    if (rgbaMatch) {
        return {
            r: parseInt(rgbaMatch[1]),
            g: parseInt(rgbaMatch[2]),
            b: parseInt(rgbaMatch[3]),
            a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1,
        }
    }
    return null
}
