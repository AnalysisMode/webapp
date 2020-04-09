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
      align-items: center;
      height: 150px;
      width: 100%;
      max-width: ${({ theme }) => theme.layout.width}px;
      background: transparent;
      margin: 0 auto;
      padding: 0 20px;
    `,
    Layout: Styled.div`
      display: flex;
      flex: 1;
      flex-direction: row;
      height: 45px;
      justify-content: space-between;
    `,
    Brand: Styled.div`
      display: flex;
    `,
    Nav: Styled.div`
      display: flex;
      
      @media (max-width: 900px) {
        display: none;
      }
    `,
    NavMobile: Styled.div`
      display: flex;
      
      @media (min-width: 900px) {
        display: none;
      }
    `,
}
