import React, { FC } from 'react'
import styled, { css } from 'styled-components/macro'

interface Props {
    variant?: 'primary' | 'secondary' | 'link' | 'orange'
    disabled?: boolean
    onClick?: () => void
}

const StyledButton = styled.button<Props>`
    font-size: ${({ theme }) => theme.font.size.smaller};
    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.title};
    height: 50px;
    padding: 0 30px;
    text-transform: lowercase;
    cursor: pointer;
    transition: all 0.2s ease-out;
    border: none;
    border-radius: 10px;
    background-color: transparent;

    :hover {
        transition: all 0.2s ease-out;
    }

    &:not(:nth-last-child(1)) {
        margin-right: 20px;
      }

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
        `}

    /* primary button style */
    ${({ variant, theme }) =>
        variant === 'primary' &&
        css`
            background-color: ${theme.colors.main};
            color: ${theme.colors.light['shade-1']};

            &:hover {
                background-color: ${theme.colors.text};
            }
        `}
    
    /* secondary button style */
    ${({ variant, theme }) =>
        variant === 'secondary' &&
        css`
            color: ${theme.colors.main};
            border: 1px solid ${theme.colors.main};
        `}
    
    /* link style */
    ${({ variant, theme }) =>
        variant === 'link' &&
        css`
            color: ${theme.colors.main};

            :hover {
                text-decoration: underline;
            }
        `}

    ${({ variant, theme }) =>
        variant === 'orange' &&
        css`
            color: ${theme.colors.light['shade-1']};
            background-color: ${theme.colors.brown};
        `}

`

export const Button: FC<Props> = ({ variant = 'primary', disabled = false, onClick, children }) => {
    return (
        <StyledButton variant={variant} onClick={onClick ? onClick : undefined} disabled={disabled}>
            {children}
        </StyledButton>
    )
}
