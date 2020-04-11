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
    <TutorialStyled.MatrixRow style={{ marginTop: '10px', marginBottom: '20px' }}>
        <TutorialMatrixBlock symbol="?" arrows active />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
        <TutorialMatrixBlock symbol="?" arrows />
    </TutorialStyled.MatrixRow>
)

export default ({ onSkipClick, onNextClick }: StepProps) => {
    return (
        <TutorialStepThree.Layout>
            <GameTutorialTitle
                subtitle="A few things to know before you continue"
                key="tutorial-step-1-title"
            />

            <TutorialStyled.Matrix>
                <MatrixRow />
                <MatrixRow />
                <MatrixRow />
                <MatrixResultRow />
                <Button key="skip-button" onClick={onSkipClick} variant="primary">
                    save & next
                </Button>
            </TutorialStyled.Matrix>

            <TutorialStepThree.Description>
                <TutorialStepThree.StepTitle>Step 3</TutorialStepThree.StepTitle>
                <TutorialStepThree.StepDescription>
                    Once you have selected the appropriate symbols for each of the columns, click on
                    save & next. <br />
                    <TutorialStepThree.Highlighted>
                        That’s it, you are ready!
                    </TutorialStepThree.Highlighted>
                </TutorialStepThree.StepDescription>
            </TutorialStepThree.Description>

            <TutorialStepThree.ButtonsRow>
                <Button key="skip-button" onClick={onSkipClick} variant="orange">
                    close tutorial
                </Button>
            </TutorialStepThree.ButtonsRow>
        </TutorialStepThree.Layout>
    )
}

const TutorialStepThree = {
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
      color: ${(props) => props.theme.colors.primaryGreen};
    `,
    ButtonsRow: Styled.div`
      display: flex;
      flex-direction: row;
      margin-top: 50px;
      width: 490px;
      justify-content: center;
      align-items: center;
    `,
}
