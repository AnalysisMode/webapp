// libs
import React from 'react'
import Styled from 'styled-components'

type GameChallengeMatrixProp = {
    symbol?: string
    isActive?: boolean
}

export default ({ symbol, isActive }: GameChallengeMatrixProp) => {
    return (
        <GameChallengeMatrixBox.Wrapper isActive={isActive}>
            <GameChallengeMatrixBox.Symbol>{symbol}</GameChallengeMatrixBox.Symbol>
        </GameChallengeMatrixBox.Wrapper>
    )
}

const GameChallengeMatrixBox = {
    Wrapper: Styled.div<GameChallengeMatrixProp>`
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: ${(props) => (props.isActive ? props.theme.colors.brown : 'transparent')};
  border: 1px solid ${(props) => props.theme.colors.light['shade-1']};
  flex: 1 0 30%;
  `,
    Symbol: Styled.span`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.theme.font.size.medium};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  `,
}
