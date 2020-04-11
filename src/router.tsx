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
import ThankYou from './views/ThankYou'
import SignIn from './views/SignIn'

export default {
    '/': () => <Home />,
    '/leaderboard': () => <Leaderboard />,
    '/howitworks': () => <HowItWorks />,
    '/howtohelp': () => <HowToHelp />,
    '/game': () => <Game />,
    '/game-tutorial': () => <GameTutorial />,
    '/team': () => <Team />,
    '/thankyou': () => <ThankYou />,
    '/sign-in': () => <SignIn />,
}
