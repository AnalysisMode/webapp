import React, { useState } from 'react'
import Styled, { css } from 'styled-components'

type InputProps = {
    value?: string
    placeholder: string
    type?: 'text' | 'password'
    width: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void | null
    onBlur?: () => void | null
}

type InputWidthProp = {
    width: number
    type?: 'text' | 'password'
}

type ActiveSpanProp = {
    active: boolean
}

export default ({ value, placeholder, type, width, onChange, onKeyDown, onBlur }: InputProps) => {
    const [active, setActive] = useState(false)

    const onElementBlur = () => {
        if (onBlur) {
            onBlur()
        }

        setActive(false)
    }

    return (
        <Input.Wrapper>
            <Input.InputElement
                value={value}
                type={type}
                onFocus={() => setActive(true)}
                onBlur={onElementBlur}
                placeholder={placeholder}
                width={width}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <Input.Span active={active}></Input.Span>
        </Input.Wrapper>
    )
}

const Input = {
    Wrapper: Styled.div`
        display: flex;
        flex-direction: column;
    `,
    InputElement: Styled.input<InputWidthProp>`
        position: relative;
        display: flex;
        height: 40px;
        width: ${(props) => props.width}px;
        border: none;
        outline: none;
        padding: 0 4px;
        color: ${(props) => props.theme.colors.main};
        transition: border 0.4s;

        &:focus {
            ::-webkit-input-placeholder { /* Edge */
                color: ${(props) => props.theme.colors.main};
            }
            
            :-ms-input-placeholder { /* Internet Explorer */
                color: ${(props) => props.theme.colors.main};
            }
        
            &::placeholder {
                color: ${(props) => props.theme.colors.main};
            }
        }

        ::-webkit-input-placeholder { /* Edge */
            color: ${(props) => props.theme.colors.lightGreen};
        }
        
        :-ms-input-placeholder { /* Internet Explorer */
            color: ${(props) => props.theme.colors.lightGreen};
        }

        &::placeholder {
            color: ${(props) => props.theme.colors.lightGreen};
        }

        ${(props) =>
            props.type === 'password' &&
            css`
                &:not(:placeholder-shown) {
                    font: small-caption;
                    font-size: 22px;
                }
            `}
    `,
    Span: Styled.span<ActiveSpanProp>`
        position: relative;
        width: 100%;
        height: 2px;
        transition: all 0.4s;

        &::after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 1px;
            background-color: ${(props) => props.theme.colors.main};
            transition: all 0.4s;
        }

        ${(props) =>
            props.active &&
            css`
                &::after {
                    height: 2px;
                }
            `}
    `,
}
