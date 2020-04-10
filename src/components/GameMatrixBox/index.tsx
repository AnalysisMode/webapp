// libs
import React from 'react'
import Styled from 'styled-components'

type GameMatrixBoxProp = {
    symbol?: string
    isActive?: boolean
}

export default ({ symbol, isActive }: GameMatrixBoxProp) => {
    return (
        <GameMatrixBox.Wrapper isActive={isActive}>
            <GameMatrixBox.Symbol>{symbol}</GameMatrixBox.Symbol>
        </GameMatrixBox.Wrapper>
    )
}

const GameMatrixBox = {
    Wrapper: Styled.div<GameMatrixBoxProp>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 80px;
  margin-right: 15px;
  margin-bottom: 15px;
  background: ${(props) =>
      props.isActive ? props.theme.colors.brown : props.theme.colors.dark['shade-2']};
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
  font-size: ${(props) => props.theme.font.size.large};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  `,
}
