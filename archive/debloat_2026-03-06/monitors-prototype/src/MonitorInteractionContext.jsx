import { createContext, useContext, useState } from 'react'

// Context to manage hover/click state across the 3D scene and HTML overlay
const MonitorInteractionContext = createContext()

export function MonitorInteractionProvider({ children }) {
    const [hoveredMonitor, setHoveredMonitor] = useState(null)
    const [clickedMonitor, setClickedMonitor] = useState(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

    const handleMonitorHover = (monitor, screenPosition) => {
        setHoveredMonitor(monitor)
        if (screenPosition) {
            setTooltipPosition(screenPosition)
        }
    }

    const handleMonitorClick = (monitor) => {
        if (isTransitioning) return
        setClickedMonitor(monitor)
        setIsTransitioning(true)
    }

    const handleTransitionComplete = () => {
        // Navigate to the case study
        if (clickedMonitor?.url) {
            if (clickedMonitor.url.startsWith('http')) {
                window.open(clickedMonitor.url, '_blank')
            } else {
                window.location.href = clickedMonitor.url
            }
        }
        setIsTransitioning(false)
        setClickedMonitor(null)
    }

    return (
        <MonitorInteractionContext.Provider
            value={{
                hoveredMonitor,
                clickedMonitor,
                isTransitioning,
                tooltipPosition,
                handleMonitorHover,
                handleMonitorClick,
                handleTransitionComplete
            }}
        >
            {children}
        </MonitorInteractionContext.Provider>
    )
}

export function useMonitorInteraction() {
    return useContext(MonitorInteractionContext)
}
