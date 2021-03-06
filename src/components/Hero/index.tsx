// libs
import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import { Button } from '../../components/Button'

import virus from '../../assets/virus_light.png'

export default () => {
    return (
        <Hero.Layout>
            <Hero.Left>
                <Hero.Title>Help finding the Vaccine Formula for Corona Virus.</Hero.Title>
                <Hero.Description>
                    This game empowers people to find patterns and configurations that later will be
                    used to teach an artificial intelligence (AI) to predict vaccine formulas.
                </Hero.Description>
                <Hero.Buttons>
                    <Button
                        disabled={false}
                        key={'hero-game'}
                        onClick={() => navigate('/game')}
                        variant={'primary'}
                    >
                        play the puzzle
                    </Button>
                    <Button
                        disabled={false}
                        key={'hero-how-it-works'}
                        onClick={() => navigate('/howitworks')}
                        variant={'secondary'}
                    >
                        how it works
                    </Button>
                </Hero.Buttons>
            </Hero.Left>
        </Hero.Layout>
    )
}

const Hero = {
    Layout: Styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 510px;
      width: 100%;
      margin-bottom: 40px;
      background-image: url(${virus});
      background-repeat: no-repeat;
      background-size: 510px 510px;
      background-position: center right;
    `,
    Left: Styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      max-width: 700px;
    `,
    Title: Styled.div`
      display: flex;
      font-weight: bold;
      font-family: ${(props) => props.theme.font.family.title};
      font-size: ${(props) => props.theme.font.size.large};
      color: ${(props) => props.theme.colors.light['shade-1']};
    `,
    Description: Styled.div`
      display: flex;
      color: ${(props) => props.theme.colors.light['shade-1']};
    `,
    Buttons: Styled.div`
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    `,
}
