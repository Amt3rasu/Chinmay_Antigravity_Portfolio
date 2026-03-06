import { useMonitorStore } from './store'
import { useEffect, useState } from 'react'
import './ZoomTransition.css'

export function ZoomTransition() {
    const clickedMonitor = useMonitorStore(state => state.clickedMonitor)
    const isTransitioning = useMonitorStore(state => state.isTransitioning)
    const completeTransition = useMonitorStore(state => state.completeTransition)
    const [phase, setPhase] = useState('idle') // idle, zooming, fading, complete

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
                completeTransition()
                // Reset after navigation
                setTimeout(() => setPhase('idle'), 100)
            }, 1000)

            return () => {
                clearTimeout(fadeTimer)
                clearTimeout(completeTimer)
            }
        }
    }, [isTransitioning, clickedMonitor, completeTransition])

    if (phase === 'idle') return null

    return (
        <>
            <div className={`zoom-overlay ${phase}`}>
                <div
                    className="motion-lines"
                    style={{ '--accent-color': clickedMonitor?.color || '#35c19f' }}
                />
            </div>
            {phase === 'fading' && (
                <div className="fade-overlay" />
            )}
        </>
    )
}
