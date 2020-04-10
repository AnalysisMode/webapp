import React from 'react'
import Styled from 'styled-components'
// theme
import { theme } from '../../styled-components/theme'
// icons
import { ReactComponent as Circle } from './icons/circle.svg'
import { ReactComponent as Question } from './icons/question.svg'
import { ReactComponent as ChevronUp } from '../../assets/chevron_up.svg'
import { ReactComponent as ChevronDown } from '../../assets/chevron_down.svg'

interface IProps {
    symbol?: string
    active?: boolean
    arrows?: boolean
}

export default ({ symbol, active, arrows }: IProps) => {
    const iconProps = {
        width: 12,
        color: active ? theme.colors.brown : 'white',
    }

    return (
        <TutorialMatrixBox.Wrapper>
            {arrows && <ChevronUp {...iconProps} />}

            <TutorialMatrixBox.Block active={active}>
                {symbol === '.' && <Circle />}
                {symbol === '?' && <Question />}
            </TutorialMatrixBox.Block>

            {arrows && <ChevronDown {...iconProps} />}
        </TutorialMatrixBox.Wrapper>
    )
}

const TutorialMatrixBox = {
    Wrapper: Styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    Block: Styled.div<IProps>`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      margin: 7px;
      background: ${({ theme, active }) =>
          active ? theme.colors.brown : theme.colors.tableDarkRow};
  `,
}
