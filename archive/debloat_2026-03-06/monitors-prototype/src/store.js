import { create } from 'zustand'

// Zustand store that works across the R3F Canvas boundary
export const useMonitorStore = create((set, get) => ({
    hoveredMonitor: null,
    clickedMonitor: null,
    isTransitioning: false,
    tooltipPosition: { x: 0, y: 0 },

    setHoveredMonitor: (monitor, position) => {
        set({
            hoveredMonitor: monitor,
            tooltipPosition: position || { x: 0, y: 0 }
        })
    },

    setClickedMonitor: (monitor) => {
        if (get().isTransitioning) return
        set({
            clickedMonitor: monitor,
            isTransitioning: true
        })
    },

    completeTransition: () => {
        const { clickedMonitor } = get()
        if (clickedMonitor?.url) {
            if (clickedMonitor.url.startsWith('http')) {
                window.open(clickedMonitor.url, '_blank')
            } else {
                // For Simulation: use hash routing
                window.location.hash = 'simulation/case-study'
                // Revert navigation in non-simulation context if needed:
                // window.location.assign(clickedMonitor.url)
            }
        }
        set({
            isTransitioning: false,
            clickedMonitor: null
        })
    }
}))
