import React, { useState } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'
// components
import TutorialStep1 from './TutorialStep1'
import TutorialStep2 from './TutorialStep2'
import TutorialStep3 from './TutorialStep3'
// assets
import { theme } from '../../styled-components/theme'
import virus from '../../assets/virus.png'

export default () => {
    const [currentStep, setCurrentStep] = useState(0)

    const onSkipClick = () => {
        localStorage.setItem('skipped-tutorial', 'true')
        navigate('/game')
    }

    const onNextClick = () => {
        setCurrentStep(currentStep + 1)
    }

    const stepProps = { onSkipClick, onNextClick }

    return (
        <GameTutorial.Layout>
            {currentStep === 0 && <TutorialStep1 {...stepProps} />}
            {currentStep === 1 && <TutorialStep2 {...stepProps} />}
            {currentStep === 2 && <TutorialStep3 {...stepProps} />}
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

interface IMatrixRow {
    dimmed?: boolean
}

export const TutorialStyled = {
    Matrix: Styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 15px;
      background-color: ${theme.colors.tableLightRow};

    `,
    MatrixRow: Styled.div<IMatrixRow>`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      ${(props) =>
          props.dimmed && {
              opacity: 0.25,
          }}
    `,
}
