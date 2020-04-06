// libs
import React from 'react'
import { A, usePath } from 'hookrouter'
import Styled from 'styled-components'

type NavLinkProps = {
    href: string
    title: string
}

export default ({ href, title }: NavLinkProps) => {
    const isActive = usePath().indexOf(href) > -1

    return (
        <NavLink.Wrapper>
            <NavLink.Link href={href} className={isActive ? 'active' : ''}>
                {title}
            </NavLink.Link>
        </NavLink.Wrapper>
    )
}

const NavLink = {
    Wrapper: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 20px;
    `,
    Link: Styled(A)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryGreen};
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.family.title};

    &:hover {
        color: ${(props) => props.theme.colors.lightGreen};
    }

    &.active {
      color: ${(props) => props.theme.colors.brown};
    }
    `,
}
