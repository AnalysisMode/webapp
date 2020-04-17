import React, { useState } from 'react'
import Styled from 'styled-components'
// icons
// https://react-icons.netlify.com/#/icons/io
import { ReactComponent as Flame } from './icons/flame.svg'
import { ReactComponent as Flash } from './icons/flash.svg'
import { ReactComponent as Water } from './icons/water.svg'
import { ReactComponent as Analytic } from './icons/analytic.svg'
import { ReactComponent as Cloud } from './icons/cloud.svg'
import { ReactComponent as Square } from './icons/square.svg'
import { ReactComponent as Circle } from './icons/circle.svg'
import { ReactComponent as Leaf } from './icons/leaf.svg'
import { ReactComponent as Flask } from './icons/flask.svg'

interface IProps {
    symbol: GameSymbols
    selected: boolean
    onClick: () => void
}

export enum GameSymbols {
    A = '+',
    B = '-',
    C = '=',
    D = 'W',
    E = 'M',
    F = 'â—¯',
    G = 'â–²',
    H = 'â–¼',
    I = 'â—‰',
}

const schema = {
    [GameSymbols.A]: { Icon: Flash, name: 'flash', color: '#FFE6B5', bg: ['#FFD179'] },
    [GameSymbols.B]: { Icon: Analytic, name: 'analytic', color: '#D3C0FB', bg: ['#8650f5'] },
    [GameSymbols.C]: { Icon: Water, name: 'water', color: '#C3EDFF', bg: ['#44B9EB'] },
    [GameSymbols.D]: { Icon: Flame, name: 'flame', color: '#B03F3A', bg: ['#F5E0DF', '#DF9F9D'] },
    [GameSymbols.E]: { Icon: Cloud, name: 'cloud', color: '#dc8d56', bg: ['#f7e4d7', '#eabb9a'] },
    [GameSymbols.F]: { Icon: Square, name: 'square', color: '#27C166', bg: ['#E8FFF1', '#B8FAD2'] },
    [GameSymbols.G]: { Icon: Circle, name: 'circle', color: '#5e273e', bg: ['#e6c2d1', '#cc85a3'] },
    [GameSymbols.H]: { Icon: Leaf, name: 'leaf', color: '#76956e', bg: ['#e7ede6', '#c2d0bf'] },
    [GameSymbols.I]: { Icon: Flask, name: 'flask', color: '#7293a2', bg: ['#e4eaed', '#bacad1'] },
}

export const BLOCK_SIZE = 70

export default ({ symbol, selected, onClick }: IProps) => {
    const { Icon, color, bg, name } = schema[symbol]
    return (
        <GameMatrixBlock.Wrapper
            bgColor={bg}
            className={name}
            selected={selected}
            onClick={onClick}
        >
            <Icon color={color} width={BLOCK_SIZE / 2} />
        </GameMatrixBlock.Wrapper>
    )
}

interface WrapperProps {
    bgColor: string | string[]
    selected: boolean
}

interface IconProps {
    color: string
}

const GameMatrixBlock = {
    Wrapper: Styled.div<WrapperProps>`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${BLOCK_SIZE}px;
      height: ${BLOCK_SIZE}px;
      border-radius: 10px;
      box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.25);
      margin-right: 7px;
      user-select: none;
      transition: transform .2s ease-in-out, opacity .2s ease-in-out;

      ${({ bgColor }) =>
          bgColor[1]
              ? `background: linear-gradient(${bgColor[0]}, ${bgColor[1]});`
              : `background: ${bgColor};`}

      ${(props) =>
          props.selected &&
          `
        transform: scale(0.75);
        opacity: 0.75;
      `}

      &:last-child {
        margin-right: 0;
      }
    `,
    Icon: Styled.div<IconProps>`
      font-size: 36px;
      font-weight: 700;
      color: ${(props) => props.color};
    `,
}
