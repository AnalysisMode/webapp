import React, { useCallback } from 'react'
import Styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { swapRows, IMatrixPosition } from '../../redux/reducers/game'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import GameMatrix from './GameMatrix'
// assets
import { theme } from '../../styled-components/theme'
import virus from '../../assets/virus.png'
// types
import { IRootState } from '../../redux/rootReducer'
import { GameSymbols } from './GameMatrixBlock'

export default () => {
    const dispatch = useDispatch()
    const matrix = useSelector<IRootState, GameSymbols[][]>((state) => state.game.matrix)
    const selected = useSelector<IRootState, IMatrixPosition[]>((state) => state.game.selected)

    const onSwapRows = useCallback(
        (sIndex: number, dIndex: number) => {
            if (sIndex === dIndex) return
            dispatch(swapRows([sIndex, dIndex]))
        },
        [swapRows]
    )

    return (
        <GameBeta.Layout>
            <ViewTitle
                title="Our AI learns from each puzzle solution and bring us closer to the vaccine formula."
                subtitle=""
            />
            <GameMatrix data={matrix} onSwapRows={onSwapRows} />
        </GameBeta.Layout>
    )
}

export const GameBeta = {
    Layout: Styled(ViewLayout)`
      background-image: url(${virus});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    `,
    Matrix: Styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 15px;
      background-color: ${theme.colors.tableLightRow};

    `,
}
