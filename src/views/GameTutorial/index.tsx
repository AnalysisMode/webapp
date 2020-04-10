// libs
import React, { useState } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import GameTutorialTitle from '../../components/GameTutorialTitle'
import GameMatrix from '../../components/GameMatrix'
import GameSolutionRow from '../../components/GameSolutionRow'
import { Button } from '../../components/Button'

import virus from '../../assets/virus.png'

const data = ['◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉']

export default () => {
    const [currentStep, setCurrentStep] = useState(0)

    const StepOne = ({ currentStep, onSkipClick, onNextClick }: StepProps) => {
        if (currentStep !== 0) {
            return null
        }

        return (
            <StepOneStyled.Layout>
                <GameTutorialTitle
                    subtitle={'A few things to know before you continue'}
                    key={`tutorial-step-1-title`}
                />
                <GameMatrix gameData={data} currentColumn={0} key={`game-matrix`} />
                <GameSolutionRow currentColumn={0} key={`solution-row`} />
                <StepOneStyled.Description>
                    <StepOneStyled.StepTitle>{'Step 1'}</StepOneStyled.StepTitle>
                    <StepOneStyled.StepDescription>
                        {'Look for repeating symbols in columns, at least 2 or 3 boxes need to be '}
                        <StepOneStyled.BoldUnderlined>{'identical'}</StepOneStyled.BoldUnderlined>
                    </StepOneStyled.StepDescription>
                </StepOneStyled.Description>
                <ButtonsRow.Wrapper>
                    <Button
                        disabled={false}
                        key={'skip-button'}
                        onClick={onSkipClick}
                        variant={'secondary'}
                    >
                        skip
                    </Button>
                    <Button
                        disabled={false}
                        key={'next-button'}
                        onClick={onNextClick}
                        variant={'orange'}
                    >
                        next
                    </Button>
                </ButtonsRow.Wrapper>
            </StepOneStyled.Layout>
        )
    }

    const StepTwo = ({ currentStep, onSkipClick, onNextClick }: StepProps) => {
        if (currentStep !== 1) {
            return null
        }

        return (
            <StepTwoStyled.Layout>
                <GameTutorialTitle
                    subtitle={'A few things to know before you continue'}
                    key={`tutorial-step-1-title`}
                />
                <GameMatrix gameData={data} currentColumn={0} key={`game-matrix`} />
                <GameSolutionRow currentColumn={0} key={`solution-row`} />
                <StepTwoStyled.Description>
                    <StepTwoStyled.StepTitle>{'Step 2'}</StepTwoStyled.StepTitle>
                    <StepTwoStyled.StepDescription>
                        {'Look for repeating symbols, at least 2 or 3 boxes need to be '}
                        <StepTwoStyled.BoldUnderlined>{'identical'}</StepTwoStyled.BoldUnderlined>
                    </StepTwoStyled.StepDescription>
                </StepTwoStyled.Description>
                <ButtonsRow.Wrapper>
                    <Button
                        disabled={false}
                        key={'skip-button'}
                        onClick={onSkipClick}
                        variant={'secondary'}
                    >
                        skip
                    </Button>
                    <Button
                        disabled={false}
                        key={'next-button'}
                        onClick={onNextClick}
                        variant={'orange'}
                    >
                        next
                    </Button>
                </ButtonsRow.Wrapper>
            </StepTwoStyled.Layout>
        )
    }

    const onSkipClick = () => {
        localStorage.setItem('skipped-tutorial', 'true')
        navigate('/game')
    }

    const onNextClick = () => {
        setCurrentStep(currentStep + 1)
    }

    return (
        <GameTutorial.Layout>
            <StepOne
                currentStep={currentStep}
                onSkipClick={onSkipClick}
                onNextClick={onNextClick}
            />
            <StepTwo
                currentStep={currentStep}
                onSkipClick={onSkipClick}
                onNextClick={onNextClick}
            />
        </GameTutorial.Layout>
    )
}

const GameTutorial = {
    Layout: Styled.div`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      background: url(${virus}) ${(props) => props.theme.colors.dark['shade-1']};
      background-repeat: no-repeat;
      background-position: center center;
    `,
}

// step 1
type StepProps = {
    currentStep: number
    onSkipClick?: () => void
    onNextClick?: () => void
}

const ButtonsRow = {
    Wrapper: Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    width: 490px;
    justify-content: space-between;
    align-items: center;
    `,
}

const StepOneStyled = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `,
    Description: Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  align-items: center;
  text-align: center;
  `,
    StepTitle: Styled.span`
  display: flex;
  margin-top: 20px;
  font-size: ${(props) => props.theme.font.size.medium};
  font-family: ${(props) => props.theme.font.family.title};
  `,
    StepDescription: Styled.span`
  font-size: ${(props) => props.theme.font.size.small};
  `,
    BoldUnderlined: Styled.b`
    text-decoration: underline;
  `,
}

// step 2
const StepTwoStyled = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `,
    Description: Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  align-items: center;
  text-align: center;
  `,
    StepTitle: Styled.span`
  display: flex;
  margin-top: 20px;
  font-size: ${(props) => props.theme.font.size.medium};
  font-family: ${(props) => props.theme.font.family.title};
  `,
    StepDescription: Styled.span`
  font-size: ${(props) => props.theme.font.size.small};
  `,
    BoldUnderlined: Styled.b`
    text-decoration: underline;
  `,
}
