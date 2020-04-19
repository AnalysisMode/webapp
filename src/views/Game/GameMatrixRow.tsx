import React from 'react'
import Styled from 'styled-components'
// components
import MatrixBlock from './GameMatrixBlock'
// types
import { GameSymbols } from './GameMatrixBlock'

interface IProps {
    data: GameSymbols[]
    selected: boolean[]
    selectBlock: (cIndex: number) => void
}

export default ({ data, selected, selectBlock }: IProps) => {
    return (
        <GameMatrixRow.Wrapper>
            {data.map((symbol, index) => (
                <MatrixBlock
                    symbol={symbol}
                    key={index}
                    selected={selected[index]}
                    onClick={() => selectBlock(index)}
                />
            ))}
        </GameMatrixRow.Wrapper>
    )
}

const GameMatrixRow = {
    Wrapper: Styled.div<any>`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 7px;
    `,
}
