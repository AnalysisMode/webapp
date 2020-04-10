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
    <TutorialStyled.MatrixRow dimmed>
        <TutorialMatrixBlock symbol="." active />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
        <TutorialMatrixBlock symbol="." />
    </TutorialStyled.MatrixRow>
)

const MatrixResultRow = () => (
    <TutorialStyled.MatrixRow style={{ marginTop: '10px' }}>
        <TutorialMatrixBlock symbol="?" arrows active />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
    </TutorialStyled.MatrixRow>
)

export default ({ onSkipClick, onNextClick }: StepProps) => {
    return (
        <TutorialStepTwo.Layout>
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

            <TutorialStepTwo.Description>
                <TutorialStepTwo.StepTitle>Step 2</TutorialStepTwo.StepTitle>
                <TutorialStepTwo.StepDescription>
                    Use the arrow or click to select repeating symbol. Leave
                    <TutorialStepTwo.Highlighted>{' ? '}</TutorialStepTwo.Highlighted>
                    if no symbol repeats
                </TutorialStepTwo.StepDescription>
            </TutorialStepTwo.Description>

            <TutorialStepTwo.ButtonsRow>
                <Button
                    disabled={false}
                    key="skip-button"
                    onClick={onSkipClick}
                    variant="secondary"
                >
                    skip
                </Button>
                <Button disabled={false} key="next-button" onClick={onNextClick} variant="orange">
                    next
                </Button>
            </TutorialStepTwo.ButtonsRow>
        </TutorialStepTwo.Layout>
    )
}

const TutorialStepTwo = {
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
    Highlighted: Styled.b`
      color: ${(props) => props.theme.colors.brown};
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
