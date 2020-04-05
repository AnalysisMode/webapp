// libs
import React from 'react'
import Styled from 'styled-components'

// components
import NavLink from '../NavLink'

export default () => {
    return (
        <Nav.Wrapper>
            <NavLink href="/leaderboard" title="leaderboard" />
            <NavLink href="/howitworks" title="how it works" />
            <NavLink href="/howtohelp" title="how to help" />
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
