// libs
import React from 'react'

// views
import Home from './views/Home'
import Leaderboard from './views/Leaderboard'
import HowItWorks from './views/HowItWorks'
import HowToHelp from './views/HowToHelp'

export default {
    '/': () => <Home />,
    '/leaderboard': () => <Leaderboard />,
    '/howitworks': () => <HowItWorks />,
    '/howtohelp': () => <HowToHelp />,
}
