// libs
import React from 'react'
import Styled from 'styled-components'

// components

export default () => {
    return <Footer.Wrapper></Footer.Wrapper>
}

const Footer = {
    Wrapper: Styled.footer`
      display: flex;
      width: 100%;
      height: 150px;
      margin: 0 auto;
      margin-top: 50px;
      max-width: ${({ theme }) => theme.layout.width}px;
      background: transparent;
      align-items: center;
      border-top: 2px solid ${(props) => props.theme.colors.primaryGreen};
    `,
}
