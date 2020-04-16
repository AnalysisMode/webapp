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
    data: Array<GameSymbols[]>
    onSwapRows: (sIndex: number, dIndex: number) => void
}

export default ({ data, onSwapRows }: IProps) => {
    const onDragEnd = ({ source, destination }: DropResult) => {
        if (destination) {
            onSwapRows(source.index, destination.index)
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="matrix">
                {({ droppableProps, innerRef }) => (
                    <GameMatrix.Wrapper ref={innerRef} {...droppableProps}>
                        {data.map((data, index) => (
                            <Draggable draggableId={String(index)} index={index} key={index}>
                                {(provided: DraggableProvided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <GameMatrixRow data={data} key={index} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
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
      height: 620px;
      margin: 20px 0;
    `,
}
