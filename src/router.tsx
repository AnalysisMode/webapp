// libs
import React from 'react'

// views
import Home from './views/Home'
import Leaderboard from './views/Leaderboard'
import HowItWorks from './views/HowItWorks'
import HowToHelp from './views/HowToHelp'
import Game from './views/Game'
import GameTutorial from './views/GameTutorial'
import Team from './views/Team'

export default {
    '/': () => <Home />,
    '/leaderboard': () => <Leaderboard />,
    '/howitworks': () => <HowItWorks />,
    '/howtohelp': () => <HowToHelp />,
    '/game': () => <Game />,
    '/game-tutorial': () => <GameTutorial />,
    '/team': () => <Team />,
}
