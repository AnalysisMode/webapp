// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import { Button } from '../../components/Button'

import virus from '../../assets/virus_hero.png'

export default () => {
    return (
        <Home.Layout>
            <Home.Left>
                <Home.Title>
                    Help finding the Vaccine Formula for Corona Virus.
                </Home.Title>
                <Home.Description>
                    This game empowers people to find patterns and
                    configurations that later will be used to teach an
                    artificial intelligence (AI) to predict vaccine formulas.
                </Home.Description>
                <Home.Buttons>
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
                </Home.Buttons>
            </Home.Left>
            <Home.Right>
                <Home.Logo src={virus} />
            </Home.Right>
        </Home.Layout>
    )
}

const Home = {
    Layout: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `,
    Left: Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
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
    Right: Styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    `,
    Logo: Styled.img`
    width: 510px;
    height: 510px;
    `,
}
