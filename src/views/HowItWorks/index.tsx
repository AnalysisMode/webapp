// libs
import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import SubTitle from '../../components/SubTitle'
import { Button } from '../../components/Button'

// files
import HowItWorks1 from '../../assets/howitworks1.png'
import HowItWorks2 from '../../assets/howitworks2.png'
import HowItWorks3 from '../../assets/howitworks3.png'

export default () => {
    return (
        <ViewLayout>
            <ViewTitle
                title={'how it works'}
                subtitle={'Learn how to contribute in 3 easy steps'}
                key={'how-it-works-view-title'}
            />
            <HowItWorks.SubTitleWrapper>
                <SubTitle
                    title={'1. Find the most repeating symbol'}
                    subtitle={`Click on the box '?' to choose the symbols repeating the most.`}
                    imagePath={HowItWorks1}
                    key={'howitworks-subtitle-1'}
                />
                <SubTitle
                    title={'2. Repeat for all columns and save'}
                    subtitle={`Once you complete selecting for all columns, click save & next.`}
                    imagePath={HowItWorks2}
                    key={'howitworks-subtitle-2'}
                />
                <SubTitle
                    title={'3. Submit your answer'}
                    subtitle={`After you save and next, please make sure to submit your answer.`}
                    imagePath={HowItWorks3}
                    key={'howitworks-subtitle-3'}
                />
            </HowItWorks.SubTitleWrapper>

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

const HowItWorks = {
    SubTitleWrapper: Styled.div`
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      margin-bottom: 70px;
      flex-wrap: wrap;
    `,
}
