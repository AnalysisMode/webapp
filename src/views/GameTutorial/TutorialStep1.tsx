// libs
import React from 'react'
import Styled from 'styled-components'
// components
import GameTutorialTitle from '../../components/GameTutorialTitle'
import TutorialMatrixBlock from '../../components/GameTutorial/TutorialMatrixBlock'
import { Button } from '../../components/Button'
import { TutorialStyled } from './index'

type StepProps = {
    onSkipClick?: () => void
    onNextClick?: () => void
}

const MatrixRow = () => (
    <TutorialStyled.MatrixRow>
        <TutorialMatrixBlock symbol="." active />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
    </TutorialStyled.MatrixRow>
)

const MatrixResultRow = () => (
    <TutorialStyled.MatrixRow style={{ marginTop: '10px' }}>
        <TutorialMatrixBlock symbol="?" active />
        <TutorialMatrixBlock symbol="?" />
        <TutorialMatrixBlock symbol="?" />
        <TutorialMatrixBlock symbol="?" />
        <TutorialMatrixBlock symbol="?" />
    </TutorialStyled.MatrixRow>
)

export default ({ onSkipClick, onNextClick }: StepProps) => {
    return (
        <TutorialStepOne.Layout>
            <GameTutorialTitle
                subtitle="A few things to know before you continue"
                key="tutorial-step-1-title"
            />

            <TutorialStyled.Matrix>
                <MatrixRow />
                <MatrixRow />
                <MatrixRow />
                <MatrixResultRow />
            </TutorialStyled.Matrix>

            <TutorialStepOne.Description>
                <TutorialStepOne.StepTitle>Step 1</TutorialStepOne.StepTitle>
                <TutorialStepOne.StepDescription>
                    Look for repeating symbols in columns, at least 2 or 3 boxes need to be
                    <TutorialStepOne.BoldUnderlined>{' identical'}</TutorialStepOne.BoldUnderlined>
                </TutorialStepOne.StepDescription>
            </TutorialStepOne.Description>

            <TutorialStepOne.ButtonsRow>
                <Button key="skip-button" onClick={onSkipClick} variant="secondary">
                    skip
                </Button>
                <Button key="next-button" onClick={onNextClick} variant="orange">
                    next
                </Button>
            </TutorialStepOne.ButtonsRow>
        </TutorialStepOne.Layout>
    )
}

const TutorialStepOne = {
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
      font-weight: bold;
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
    ButtonsRow: Styled.div`
      display: flex;
      flex-direction: row;
      margin-top: 50px;
      width: 490px;
      justify-content: space-between;
      align-items: center;
    `,
}
