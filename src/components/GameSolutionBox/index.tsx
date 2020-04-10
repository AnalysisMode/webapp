// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'

import { AffinityType } from '../../models'
import { UPDATE_AFFINITY } from '../../reducers'
import { ReactComponent as ChevronUp } from '../../assets/chevron_up.svg'
import { ReactComponent as ChevronDown } from '../../assets/chevron_down.svg'
import { useDispatch } from 'react-redux'

type GameSolutionBoxProp = {
    symbols: string[]
    isActive: boolean
    affinity: AffinityType
    activeSymbol?: string
}

type WrapperProps = {
    isActive: boolean
}

export default ({ symbols, isActive, affinity, activeSymbol }: GameSolutionBoxProp) => {
    const dispatch = useDispatch()

    const defaultSymbol = activeSymbol || symbols[0]
    const [currentSymbol, setSymbol] = useState(defaultSymbol)

    const onClick = (direction: number = 1) => {
        if (!isActive) {
            return
        }

        let index = symbols.indexOf(currentSymbol)

        if (index === symbols.length - 1) {
            if (direction > 0) {
                index = 0
            } else {
                index--
            }
        } else if (index === 0) {
            if (direction > 0) {
                index++
            } else {
                index = symbols.length - 1
            }
        } else {
            if (direction > 0) {
                index++
            } else {
                index--
            }
        }

        setSymbol(symbols[index])
    }

    useEffect(() => {
        dispatch({ type: UPDATE_AFFINITY, payload: { type: affinity, value: currentSymbol } })
    })

    return (
        <GameMatrixBox.SymbolWrapper>
            <GameMatrixBox.ArrowUp onClick={() => onClick(1)} isActive={isActive}>
                <ChevronUp />
            </GameMatrixBox.ArrowUp>
            <GameMatrixBox.Wrapper isActive={isActive}>
                <GameMatrixBox.Symbol onClick={() => onClick()}>
                    {currentSymbol}
                </GameMatrixBox.Symbol>
            </GameMatrixBox.Wrapper>
            <GameMatrixBox.ArrowDown onClick={() => onClick(-1)} isActive={isActive}>
                <ChevronDown />
            </GameMatrixBox.ArrowDown>
        </GameMatrixBox.SymbolWrapper>
    )
}

const GameMatrixBox = {
    SymbolWrapper: Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: 15px;
margin-bottom: 15px;
`,
    ArrowUp: Styled.svg<WrapperProps>`
display: flex;
width: 15px;
height: 15px;
margin-bottom: 10px;
color: ${(props) =>
        props.isActive ? props.theme.colors.brown : props.theme.colors.light['shade-1']};
cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
-webkit-touch-callout: none;
-webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;
`,
    Wrapper: Styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 80px;
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
  font-weight: bold;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  `,
    ArrowDown: Styled.svg<WrapperProps>`
    margin-top: 10px;
    display: flex;
    width: 15px;
    height: 15px;
    color: ${(props) =>
        props.isActive ? props.theme.colors.brown : props.theme.colors.light['shade-1']};
    cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`,
}
