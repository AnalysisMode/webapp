// libs
import React from 'react'
import Styled from 'styled-components'
import { usePath } from 'hookrouter'

// components
import Brand from '../Brand'
import Nav from '../Nav'
import MobileNav from '../MobileNav'

export default () => {
    const isGameView = usePath().indexOf('/game') > -1

    return (
        <Navbar.Wrapper>
            <Navbar.Layout>
                <Navbar.Brand>
                    <Brand />
                </Navbar.Brand>
                <Navbar.Nav>
                    <Nav isGameView={isGameView} />
                </Navbar.Nav>
                <Navbar.NavMobile>
                    <MobileNav isGameView={isGameView} />
                </Navbar.NavMobile>
            </Navbar.Layout>
        </Navbar.Wrapper>
    )
}

const Navbar = {
    Wrapper: Styled.header`
      display: flex;
      height: 150px;
      margin: 0 200px;
      background: transparent;
      align-items: center;
    `,
    Layout: Styled.div`
      display: flex;
      flex-direction: row;
      height: 45px;
      justify-content: space-between;
      width: 100%;
    `,
    Brand: Styled.div`
      display: flex;
    `,
    Nav: Styled.div`
      display: flex;
      
      @media (max-width: 1200px) {
        display: none;
      }
    `,
    NavMobile: Styled.div`
      display: flex;
      
      @media (min-width: 1200px) {
        display: none;
      }
    `,
}
