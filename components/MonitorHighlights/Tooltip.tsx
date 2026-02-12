import React, { useMemo } from 'react'
import { useMonitorStore } from '../../store/monitorStore'
import './Tooltip.css'

export function Tooltip() {
    const hoveredMonitor = useMonitorStore((state) => state.hoveredMonitor)
    const tooltipPosition = useMonitorStore((state) => state.tooltipPosition)

    // Clamp tooltip inside the monitor section so it never bleeds into the hero
    const clampedPosition = useMemo(() => {
        const section = document.getElementById('monitor-section')
        if (!section) {
            return { x: tooltipPosition.x, y: tooltipPosition.y - 140 }
        }

        const rect = section.getBoundingClientRect()

        // Tooltip dimensions (approximate — matches CSS width + padding)
        const tooltipW = 320
        const tooltipH = 180 // approximate rendered height
        const pad = 12       // breathing room from edges

        // The tooltip is centred horizontally (transform: translate(-50%, -100%))
        // so left = adjustedX - tooltipW/2, right = adjustedX + tooltipW/2
        let x = tooltipPosition.x
        let y = tooltipPosition.y - 140

        // Clamp X so tooltip stays within section horizontal bounds
        const halfW = tooltipW / 2
        if (x - halfW < rect.left + pad) x = rect.left + pad + halfW
        if (x + halfW > rect.right - pad) x = rect.right - pad - halfW

        // Clamp Y so tooltip (which extends upward via transform) stays within section
        // Top of tooltip = y - tooltipH  (because of translate(-50%, -100%))
        if (y - tooltipH < rect.top + pad) y = rect.top + pad + tooltipH
        // Bottom of tooltip = y
        if (y > rect.bottom - pad) y = rect.bottom - pad

        return { x, y }
    }, [tooltipPosition])

    if (!hoveredMonitor) {
        return null
    }

    const monitorColor = hoveredMonitor.color || '#ffffff'

    return (
        <div
            className="monitor-tooltip"
            style={{
                left: clampedPosition.x,
                top: clampedPosition.y,
                '--monitor-color': monitorColor,
                borderColor: `${monitorColor}40`,
                boxShadow: `0 0 30px ${monitorColor}30, 0 8px 32px rgba(0,0,0,0.4)`,
            } as React.CSSProperties}
        >
            <div className="tooltip-title" style={{ color: monitorColor }}>{hoveredMonitor.title}</div>
            <div className="tooltip-subtitle">{hoveredMonitor.subtitle}</div>
            <div className="tooltip-summary">{hoveredMonitor.summary}</div>
        </div>
    )
}
