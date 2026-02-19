import { caseStudies } from '../../data/caseStudies'
import { MonitorData } from '../../store/monitorStore'

// Order for the 9 monitors (left to right, top to bottom roughly)
// We need exactly 9 items to fill the grid.
const PROJECT_ORDER = [
    'cognitive-clarity',
    'connect-dist',
    'access-transit',
    'cican-navigator',
    'sunnys-finance',
    'antigravity-portfolio',
    'hackathon-win',
    'cdn-article',
    // 9th item: reuse portfolio or a placeholder for now
    'antigravity-portfolio'
]

export const getHighlightsData = (): MonitorData[] => {
    return PROJECT_ORDER.map((id, index) => {
        const study = caseStudies.find(s => s.id === id)

        // Fallback if ID not found (safe guard)
        if (!study) {
            return {
                id: `placeholder-${index}`,
                title: 'Coming Soon',
                subtitle: 'Work in Progress',
                summary: 'New project coming soon.',
                url: '#',
                color: '#ffffff',
                texture: '/textures/placeholder.jpg' // Assuming this exists or will be handled
            }
        }

        // Map CaseStudy to MonitorData
        return {
            id: study.id,
            title: study.title,
            subtitle: study.subtitle,
            summary: study.overview.substring(0, 120) + '...', // Truncate summary
            url: study.externalUrl || `/case-study/${study.id}`,
            // We need to assign colors manually or from tags if not present in data
            color: getColorForProject(study.id),
            // We will use the hero image as texture
            texture: study.heroImage || study.thumbnail
        }
    })
}

// Fixed colors to match the aesthetic (from prototype)
const getColorForProject = (id: string): string => {
    switch (id) {
        case 'cognitive-clarity': return '#35c19f'
        case 'connect-dist': return '#6366f1'
        case 'access-transit': return '#f59e0b'
        case 'cican-navigator': return '#ec4899'
        case 'sunnys-finance': return '#14b8a6'
        case 'antigravity-portfolio': return '#8b5cf6'
        case 'hackathon-win': return '#ef4444'
        case 'cdn-article': return '#22c55e'
        case 'design-system': return '#3b82f6'
        default: return '#ffffff'
    }
}
