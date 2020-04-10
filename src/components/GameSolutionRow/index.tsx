// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'

// components
import GameSolutionBox from '../../components/GameSolutionBox'

import { MappedAffinities } from '../../models'

type GameSolutionRowProp = {
    currentColumn: number
}

export default ({ currentColumn }: GameSolutionRowProp) => {
    return (
        <GameSolutionRow.Wrapper>
            {MappedAffinities.map((affinity, i) => {
                return (
                    <GameSolutionBox
                        isActive={i === currentColumn}
                        symbols={affinity.symbols}
                        affinity={affinity.type}
                        key={`box-${affinity.type}`}
                    />
                )
            })}
        </GameSolutionRow.Wrapper>
    )
}

const GameSolutionRow = {
    Wrapper: Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 495px;
  margin: 0 0 15px 0;
  padding-top: 15px;
  padding-left: 15px;
  background: ${(props) => props.theme.colors.dark['shade-3']};
  `,
}
