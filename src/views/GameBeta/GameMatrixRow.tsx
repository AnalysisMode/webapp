import React from 'react'
import Styled from 'styled-components'
// components
import MatrixBlock from './GameMatrixBlock'
// types
import { GameSymbols } from './GameMatrixBlock'

interface IProps {
    data: GameSymbols[]
}

export default ({ data }: IProps) => {
    return (
        <GameMatrixRow.Wrapper>
            {data.map((symbol, index) => (
                <MatrixBlock symbol={symbol} key={index} />
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
