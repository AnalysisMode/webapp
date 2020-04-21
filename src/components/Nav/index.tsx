// libs
import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import NavLink from '../NavLink'
import { Button } from '../Button'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/rootReducer'
import { IAuthUser } from '../../redux/reducers/auth'

type NavProps = {
    isGameView: boolean
}

export default ({ isGameView }: NavProps) => {
    const user = useSelector<IRootState, IAuthUser | null>((state) => state.auth.user)

    if (!isGameView) {
        return (
            <Nav.Wrapper>
                <NavLink href="/team" title="the team" />
                <NavLink href="/leaderboard" title="leaderboard" />
                <NavLink href="/howitworks" title="how it works" />
                <NavLink href="/howtohelp" title="how to help" />
                <Button onClick={() => navigate('/game')} variant="primary">
                    play now
                </Button>

                {user && (
                    <Button onClick={() => navigate('/profile')} variant="secondary">
                        profile
                    </Button>
                )}

                {!user && (
                    <Button onClick={() => navigate('/sign-in')} variant="secondary">
                        sign in
                    </Button>
                )}
            </Nav.Wrapper>
        )
    } else {
        return (
            <Nav.Wrapper>
                <Button
                    disabled={false}
                    key={'nav-home-button'}
                    onClick={() => navigate('/')}
                    variant={'orange'}
                >
                    home
                </Button>
            </Nav.Wrapper>
        )
    }
}

const Nav = {
    Wrapper: Styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    `,
}
