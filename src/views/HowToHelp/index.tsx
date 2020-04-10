// libs
import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import { Button } from '../../components/Button'

// files
import howToHelp from '../../assets/howtohelp1.png'

export default () => {
    return (
        <ViewLayout>
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
                        Empower AnalysisMode to hire researchers, partner with laboratories, and
                        speed-up the vaccine discovery.
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
        </ViewLayout>
    )
}

const HowToHelp = {
    BoxWrapper: Styled.div`
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      justify-content: center;
      width: 100%;
      margin-bottom: 70px;
      flex-wrap: wrap;
    `,
    Box: Styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 350px;
      min-height: 310px;
      background: ${(props) => props.theme.colors.dark['shade-2']};
      margin: 0 20px;
      margin-bottom: 20px;
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
