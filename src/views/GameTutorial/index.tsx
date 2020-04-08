// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { navigate, useRedirect } from 'hookrouter'

// components
import GameTutorialTitle from '../../components/GameTutorialTitle'
import GameMatrix from '../../components/GameMatrix'
import GameSolutionRow from '../../components/GameSolutionRow'

import virus from '../../assets/virus.png'

const data = [
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
    '◉',
]

export default () => {
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <GameTutorial.Layout>
            <StepOne currentStep={currentStep} />
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

type StepProps = {
    currentStep: number
}

const StepOne = ({ currentStep }: StepProps) => {
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
        </StepOneStyled.Layout>
    )
}

const StepOneStyled = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `,
}
