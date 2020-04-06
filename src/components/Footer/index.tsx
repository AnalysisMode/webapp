// libs
import React from 'react'
import Styled from 'styled-components'

// components

export default () => {
    return <Footer.Wrapper></Footer.Wrapper>
}

const Footer = {
    Wrapper: Styled.footer`
    margin-top: 50px;
    display: flex;
    height: 150px;
    margin: 50px 200px 0 200px;
    background: transparent;
    align-items: center;
    border-top: 2px solid ${(props) => props.theme.colors.primaryGreen};
    border-width
    `,
}
