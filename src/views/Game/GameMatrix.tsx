import React from 'react'
import Styled from 'styled-components'
// components
import {
    Draggable,
    Droppable,
    DragDropContext,
    DropResult,
    DraggableProvided,
} from 'react-beautiful-dnd'
import GameMatrixRow from './GameMatrixRow'
// types
import { GameSymbols } from './GameMatrixBlock'

interface IProps {
    matrix: Array<GameSymbols[]>
    sorter: number[]
    onDragRows: (sIndex: number, dIndex: number) => void
    selected: boolean[][]
    onSelectBlock: (rIndex: number, cIndex: number) => void
    resetSeleted: () => void
}

export default ({ matrix, sorter, onDragRows, selected, onSelectBlock, resetSeleted }: IProps) => {
    const onDragEnd = ({ source, destination }: DropResult) => {
        if (destination) {
            onDragRows(source.index, destination.index)
        }
    }

    const selectRowBlock = (rowIndex: number) => (cellIndex: number) => {
        onSelectBlock(rowIndex, cellIndex)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={resetSeleted}>
            <Droppable droppableId="matrix">
                {({ droppableProps, innerRef, placeholder }) => (
                    <GameMatrix.Wrapper ref={innerRef} {...droppableProps}>
                        {sorter.map((rowIndex, index) => (
                            <Draggable draggableId={String(index)} index={index} key={index}>
                                {(provided: DraggableProvided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <GameMatrixRow
                                            key={`matrix-row-${rowIndex}`}
                                            data={matrix[rowIndex]}
                                            selected={selected[rowIndex]}
                                            selectBlock={selectRowBlock(rowIndex)}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {placeholder}
                    </GameMatrix.Wrapper>
                )}
            </Droppable>
        </DragDropContext>
    )
}

const GameMatrix = {
    Wrapper: Styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 20px 0;
    `,
}
