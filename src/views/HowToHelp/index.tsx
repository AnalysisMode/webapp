// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import ViewTitle from '../../components/ViewTitle'
import { Button } from '../../components/Button'

// files
import howToHelp from '../../assets/howtohelp1.png'

export default () => {
    return (
        <HowToHelp.Layout>
            <ViewTitle
                title={'how to help'}
                subtitle={'We would love you help move this project forward!'}
                key={'how-to-help-view-title'}
            />
            <HowToHelp.BoxWrapper>
                <HowToHelp.Box>
                    <HowToHelp.Title>Solve the puzzle</HowToHelp.Title>
                    <HowToHelp.Image src={howToHelp} />
                </HowToHelp.Box>
                <HowToHelp.Box>
                    <HowToHelp.Title>Share with friends</HowToHelp.Title>
                </HowToHelp.Box>
                <HowToHelp.Box>
                    <HowToHelp.Title>Become a sponsor</HowToHelp.Title>
                    <HowToHelp.SubTitle>
                        Empower AnalysisMode to hire researchers, partner with
                        laboratories, and speed-up the vaccine discovery.
                    </HowToHelp.SubTitle>
                </HowToHelp.Box>
            </HowToHelp.BoxWrapper>
            <Button
                disabled={false}
                key={'nav-game-button'}
                onClick={() => navigate('/game')}
                variant={'primary'}
            >
                play the puzzle
            </Button>
        </HowToHelp.Layout>
    )
}

const HowToHelp = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
  `,
    BoxWrapper: Styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 70px;
  `,
    Box: Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${(props) => props.theme.colors.dark['shade-2']};
  align-items: center;

  &:not(:nth-last-child(1)) {
    margin-right: 20px;
  }
  `,
    Title: Styled.h3`
  display: flex;
  font-family: ${(props) => props.theme.font.family.title};
  font-size: ${(props) => props.theme.font.size.medium};
  font-weight: normal;
  `,
    SubTitle: Styled.span`
  margin-bottom: 40px;
  padding: 0 20px;
  text-align: center;
  `,
    Image: Styled.img`
  margin-bottom: 40px;
  `,
}
