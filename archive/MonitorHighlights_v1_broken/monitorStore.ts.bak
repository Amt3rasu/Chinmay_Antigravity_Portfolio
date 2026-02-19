import { create } from 'zustand'

export interface MonitorData {
    id: string
    title: string
    subtitle: string
    summary: string
    url: string
    color: string
    technologies?: string[]
    texture?: string
}

interface TooltipPosition {
    x: number
    y: number
}

interface MonitorState {
    hoveredMonitor: MonitorData | null
    clickedMonitor: MonitorData | null
    isTransitioning: boolean
    tooltipPosition: TooltipPosition
    setHoveredMonitor: (monitor: MonitorData | null, position?: TooltipPosition) => void
    setClickedMonitor: (monitor: MonitorData | null) => void
    completeTransition: (navigate: (path: string) => void) => void
}

export const useMonitorStore = create<MonitorState>((set, get) => ({
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

    completeTransition: (navigate) => {
        const { clickedMonitor } = get()
        if (clickedMonitor?.url) {
            if (clickedMonitor.url.startsWith('http')) {
                window.open(clickedMonitor.url, '_blank')
            } else {
                navigate(clickedMonitor.url)
            }
        }
        set({
            isTransitioning: false,
            clickedMonitor: null
        })
    }
}))
