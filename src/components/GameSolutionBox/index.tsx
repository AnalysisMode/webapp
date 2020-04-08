// libs
import React, { useState } from 'react'
import Styled from 'styled-components'

import { AffinityType } from '../../models'

type GameSolutionBoxProp = {
    symbols?: string[]
    isActive?: boolean
    affinity?: AffinityType
}

export default ({ symbols, isActive, affinity }: GameSolutionBoxProp) => {
    const [currentSymbol, setSymbol] = useState('?')

    return (
        <GameMatrixBox.Wrapper isActive={isActive}>
            <GameMatrixBox.Symbol>{currentSymbol}</GameMatrixBox.Symbol>
        </GameMatrixBox.Wrapper>
    )
}

const GameMatrixBox = {
    Wrapper: Styled.div<GameSolutionBoxProp>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 80px;
  margin-right: 15px;
  margin-bottom: 15px;
  background: ${(props) =>
      props.isActive
          ? props.theme.colors.brown
          : props.theme.colors.dark['shade-2']};
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
  font-weight: bold;
  `,
}
