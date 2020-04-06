// libs
import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import NavLink from '../NavLink'
import { Button } from '../Button'

export default () => {
    return (
        <Nav.Wrapper>
            <NavLink href="/team" title="the team" />
            <NavLink href="/leaderboard" title="leaderboard" />
            <NavLink href="/howitworks" title="how it works" />
            <NavLink href="/howtohelp" title="how to help" />
            <Button
                disabled={false}
                key={'nav-game-button'}
                onClick={() => navigate('/game')}
                variant={'primary'}
            >
                play now
            </Button>
        </Nav.Wrapper>
    )
}

const Nav = {
    Wrapper: Styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    `,
}
