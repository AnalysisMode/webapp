// libs
import React from 'react'
import Styled from 'styled-components'

// components
import Brand from '../Brand'
import Nav from '../Nav'

export default () => {
    return (
        <Navbar.Wrapper>
            <Navbar.Layout>
                <Navbar.Brand>
                    <Brand />
                </Navbar.Brand>
                <Navbar.Nav>
                    <Nav />
                </Navbar.Nav>
            </Navbar.Layout>
        </Navbar.Wrapper>
    )
}

const Navbar = {
    Wrapper: Styled.header`
    display: flex;
    height: 150px;
    width: 100%;
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
    `,
}
