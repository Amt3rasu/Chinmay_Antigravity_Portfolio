import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Tooltip } from './Tooltip'
import { HomePageMock } from './simulation/HomePageMock'
import { CaseStudyMock } from './simulation/CaseStudyMock'

const Router = () => {
    const [route, setRoute] = useState(window.location.hash)

    useEffect(() => {
        const handleHashChange = () => {
            console.log("Hash changed to:", window.location.hash)
            setRoute(window.location.hash)
        }
        window.addEventListener('hashchange', handleHashChange)
        console.log("Router mounted, current route:", window.location.hash)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    if (route === '#simulation' || route === '#/simulation') {
        console.log("Rendering HomePageMock")
        return <HomePageMock />
    }

    if (route === '#simulation/case-study' || route === '#/simulation/case-study') {
        console.log("Rendering CaseStudyMock")
        return <CaseStudyMock />
    }

    return (
        <>
            <App />
            <Tooltip />
        </>
    )
}

createRoot(document.getElementById('root')).render(<Router />)
