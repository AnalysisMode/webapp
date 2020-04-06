// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import Hero from '../../components/Hero'
import LandingPageInfo from '../../components/LandingPageInfo'

import virus from '../../assets/virus.png'

export default () => {
    return (
        <Home.Layout>
            <Home.Container>
                <Hero />
                <LandingPageInfo />
            </Home.Container>
        </Home.Layout>
    )
}

const Home = {
    Layout: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${virus}) ${(props) => props.theme.colors.dark['shade-1']};
    background-repeat: no-repeat;
    background-position: 275% 75%;
    `,
    Container: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;
    `,
}
