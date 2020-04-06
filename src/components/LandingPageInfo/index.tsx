// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import ViewTitle from '../../components/ViewTitle'
import Haystack from '../../components/Haystack'
import { Button } from '../Button'

import virus from '../../assets/virus_light.png'

export default () => {
    return (
        <LandingPageInfo.Layout>
            <ViewTitle
                title={'how can this help scientists?'}
                subtitle={
                    'We are looking for a small sequence - 16 letters - called an epitope, among 500,000 letters. The formula we’re looking for is only a small part of the virus. When injected in our bodies as a vaccine, it causes an immune response without causing an illness.'
                }
                key={'view-title-home'}
            />
            <Haystack />
            <Description.Wrapper>
                <Description.GameDescription>
                    Every gameplay is giving hints of patterns to an AI. With
                    our help it gets better at predicting what’s the correct
                    epitope, leading to a vaccine formula. Without our
                    gameplays, it would take years for an AI to try all possible
                    combinations.
                </Description.GameDescription>
                <Description.VirusDescriptionWrapper>
                    <Description.VirusP>
                        Viruses are made of protein sequences, each protein
                        sequence is formed by 50-100 amino-acids. Each amino
                        acid is like an individual bead, strung together, they
                        form a protein just like in jewellery individual beads
                        form a necklace.
                    </Description.VirusP>
                    <Description.VirusP>
                        When a virus infects us, our immune system releases
                        defence cells. These cells scan organisms in our
                        bloodstream looking for a specific part called an
                        epitope. An epitope is like a "barcode" identifying if
                        the organism belongs to the body or if it is an
                        intruder.
                    </Description.VirusP>
                    <Description.VirusP>
                        To teach our bodies to recognise specific epitopes as
                        belonging to a virus, we need to find a formula for that
                        epitope, create it in the laboratory and then inject it
                        into our bodies as a vaccine. Our defence cells can then
                        scan this epitope’s “barcode”, recognise it is an
                        intruder and prepare the defence system for a fight in
                        case a real virus enters our bodies.
                    </Description.VirusP>
                </Description.VirusDescriptionWrapper>
            </Description.Wrapper>
            <Challenge.Wrapper>
                <Challenge.Left>
                    <Challenge.VirusImage src={virus} alt={'corona virus'} />
                </Challenge.Left>
                <Challenge.Right>
                    <Challenge.Subtitle>
                        <Challenge.Line>The challenge:</Challenge.Line>
                        <Challenge.Line>Coronavirus COVID-19</Challenge.Line>
                    </Challenge.Subtitle>
                    <Challenge.Description>
                        There are 500,000 aminoacids. Millions of possibilities.
                        We need millions of people to help.
                    </Challenge.Description>
                </Challenge.Right>
            </Challenge.Wrapper>
            <Button
                disabled={false}
                key={'nav-game-button'}
                onClick={() => navigate('/game')}
                variant={'primary'}
            >
                play the puzzle
            </Button>
        </LandingPageInfo.Layout>
    )
}

const LandingPageInfo = {
    Layout: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,
}

const Description = {
    Wrapper: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  width: 40%;
  `,
    GameDescription: Styled.span`
  display: flex;
  font-family: ${(props) => props.theme.font.family.title};
  font-size: ${(props) => props.theme.font.size.medium};
  `,
    VirusDescriptionWrapper: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  `,
    VirusP: Styled.p`
  display: flex;
  `,
}

const Challenge = {
    Wrapper: Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  width: 60%;
  margin-bottom: 30px;
  `,
    Left: Styled.div`
  display: flex;
  flex: 1;
  `,
    VirusImage: Styled.img`
  width: 267px;
  height: 267px;
  `,
    Right: Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  `,
    Subtitle: Styled.div`
  display: flex;
  flex-direction: column;
  `,
    Line: Styled.span`
  display: flex;
  font-family: ${(props) => props.theme.font.family.title};
  font-size: ${(props) => props.theme.font.size.medium};
  `,
    Description: Styled.p`
  display: flex;
  font-family: ${(props) => props.theme.font.family.body};
  `,
}
