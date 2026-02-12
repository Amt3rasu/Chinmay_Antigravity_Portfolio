import { useMonitorStore } from '../../store/monitorStore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZoomTransition.css'

export function ZoomTransition() {
    const clickedMonitor = useMonitorStore(state => state.clickedMonitor)
    const isTransitioning = useMonitorStore(state => state.isTransitioning)
    const completeTransition = useMonitorStore(state => state.completeTransition)
    const [phase, setPhase] = useState<'idle' | 'zooming' | 'fading' | 'complete'>('idle')

    const navigate = useNavigate()

    useEffect(() => {
        if (isTransitioning && clickedMonitor) {
            // Start zoom phase
            setPhase('zooming')

            // After zoom animation, fade to black
            const fadeTimer = setTimeout(() => {
                setPhase('fading')
            }, 600)

            // After fade, trigger navigation
            const completeTimer = setTimeout(() => {
                setPhase('complete')
                // Pass the navigate function to the store
                completeTransition((path) => navigate(path))

                // Reset after navigation
                setTimeout(() => setPhase('idle'), 100)
            }, 1000)

            return () => {
                clearTimeout(fadeTimer)
                clearTimeout(completeTimer)
            }
        }
    }, [isTransitioning, clickedMonitor, completeTransition, navigate])

    if (phase === 'idle') return null

    return (
        <>
            <div className={`zoom-overlay ${phase === 'zooming' ? 'zooming' : ''}`}>
                {/* cast custom property to any to satisfy TS for now, or use style object properly */}
                <div
                    className="motion-lines"
                    style={{ '--accent-color': clickedMonitor?.color || '#35c19f' } as React.CSSProperties}
                />
            </div>
            {phase === 'fading' && (
                <div className="fade-overlay" />
            )}
        </>
    )
}
