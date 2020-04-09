// libs
import React from 'react'
import Styled from 'styled-components'

// components
import ViewLayout from '../../components/ViewLayout'
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
    Container: Styled(ViewLayout)``,
}
