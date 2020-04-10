// libs
import React from 'react'
import Styled from 'styled-components'

// components
import GameMatrixBox from '../../components/GameMatrixBox'

type GameMatrixProp = {
    gameData: string[]
    currentColumn: number
}

export default ({ gameData, currentColumn }: GameMatrixProp) => {
    const matrix = createMatrix({ gameData, currentColumn })

    return <GameMatrix.GameWrapper>{matrix}</GameMatrix.GameWrapper>
}

const createMatrix = ({ gameData, currentColumn }: GameMatrixProp) => {
    let matrix = []

    for (let i = 0; i < gameData.length; i++) {
        if (i % 5 === currentColumn) {
            matrix.push(<GameMatrixBox isActive={true} symbol={gameData[i]} key={`gmb-${i}`} />)
        } else {
            matrix.push(<GameMatrixBox isActive={false} symbol={gameData[i]} key={`gmb-${i}`} />)
        }
    }

    return matrix
}

const GameMatrix = {
    GameWrapper: Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 495px;
  padding-top: 15px;
  padding-left: 15px;
  background: ${(props) => props.theme.colors.dark['shade-3']};
  `,
}
