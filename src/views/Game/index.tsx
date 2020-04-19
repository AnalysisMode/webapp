import React, { useCallback } from 'react'
import Styled from 'styled-components'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzle, swapRows, selectBlock, resetSelected } from '../../redux/reducers/game'
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
import { Button } from '../../components/Button'

export default () => {
    const dispatch = useDispatch()
    const matrix = useSelector<IRootState, GameSymbols[][]>((state) => state.game.matrix)
    const sorter = useSelector<IRootState, number[]>((state) => state.game.sorter)
    const selected = useSelector<IRootState, boolean[][]>((state) => state.game.selected)

    const onDragRows = useCallback(
        (sIndex: number, dIndex: number) => {
            if (sIndex === dIndex) return
            dispatch(swapRows([sIndex, dIndex]))
        },
        [swapRows]
    )

    const onSelectBlock = useCallback(
        (rIndex: number, cIndex: number) => {
            dispatch(selectBlock([rIndex, cIndex]))
        },
        [selectBlock]
    )

    const unselectBlocks = useCallback(() => {
        dispatch(resetSelected())
    }, [resetSelected])

    const nextPuzzle = useCallback(() => dispatch(getPuzzle()), [dispatch, getPuzzle])

    return (
        <GameBeta.Layout>
            <ViewTitle
                title="Our AI learns from each puzzle solution and bring us closer to the vaccine formula."
                subtitle=""
            />
            <GameMatrix
                matrix={matrix}
                sorter={sorter}
                onDragRows={onDragRows}
                selected={selected}
                onSelectBlock={onSelectBlock}
                resetSeleted={unselectBlocks}
            />
            <Button onClick={nextPuzzle} variant="primary" disabled>
                next puzzle
            </Button>
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
