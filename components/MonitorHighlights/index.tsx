import Scene from './Scene'
import { Tooltip } from './Tooltip'
import { ZoomTransition } from './ZoomTransition'

// Wrap everything as a single exported feature component
export function MonitorHighlights({ eventSource, className }: { eventSource?: HTMLElement, className?: string }) {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }} className={className}>
            <Scene eventSource={eventSource} />
            <Tooltip />
            <ZoomTransition />
        </div>
    )
}

export default MonitorHighlights
