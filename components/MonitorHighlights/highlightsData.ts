import { caseStudies } from '../../data/caseStudies'
import { MonitorData } from '../../store/monitorStore'

// Order for the 9 monitors (left to right, top to bottom roughly)
// We need exactly 9 items to fill the grid.
const PROJECT_ORDER = [
    'flamey-ai',
    'leaf-dex',
    'access-transit',
    'connect-dist',
    'cican-navigator',
    // Loop the strong projects to fill the 9 monitors seamlessly
    'flamey-ai',
    'leaf-dex',
    'connect-dist',
    'access-transit'
]

export const getHighlightsData = (): MonitorData[] => {
    return PROJECT_ORDER.map((id, index) => {
        const study = caseStudies.find(s => s.id === id)

        if (!study) {
            return {
                id: `placeholder-${index}`,
                title: 'Coming Soon',
                subtitle: 'Work in Progress',
                summary: 'New project coming soon.',
                url: '#',
                color: '#ffffff',
                texture: '/textures/placeholder.jpg'
            }
        }

        return {
            id: study.id,
            title: study.title,
            subtitle: study.subtitle,
            summary: study.overview.substring(0, 120) + '...',
            url: study.externalUrl || `/project/${study.id}`,
            color: getColorForProject(study.id),
            texture: study.heroImage || study.thumbnail
        }
    })
}

// Fixed colors to match the aesthetic
const getColorForProject = (id: string): string => {
    switch (id) {
        case 'flamey-ai': return '#eb5e28' // Spark Orange
        case 'leaf-dex': return '#00facc' // Caribbean Green
        case 'access-transit': return '#f59e0b'
        case 'connect-dist': return '#6366f1'
        case 'cican-navigator': return '#ec4899'
        default: return '#ffffff'
    }
}
