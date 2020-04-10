// libs
import React, { useState } from 'react'
import Styled from 'styled-components'

// components
import OutsideClickHandler from 'react-outside-click-handler'
import NavLink from '../NavLink'

// icons
import { ReactComponent as MenuIcon } from './icons/menu.svg'
import { ReactComponent as CloseIcon } from './icons/close.svg'
import { theme } from '../../styled-components/theme'

type MobileNavProps = {
    isGameView: boolean
}

interface MenuProps {
    isOpen?: boolean
}

export default ({ isGameView }: MobileNavProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MobileNav.Wrapper>
            <MobileNav.MenuIcon onClick={() => setIsOpen(true)}>
                <MenuIcon
                    fill={theme.colors.lightGreen}
                    width="28px"
                    height="28px"
                />
            </MobileNav.MenuIcon>
            <OutsideClickHandler
                onOutsideClick={() => setIsOpen(false)}
                disabled={!isOpen}
            >
                <MobileNav.Menu
                    isOpen={isOpen}
                    onClick={() => setIsOpen(false)}
                >
                    <MobileNav.CloseIcon>
                        <CloseIcon
                            fill={theme.colors.lightGreen}
                            width="24px"
                            height="24px"
                        />
                    </MobileNav.CloseIcon>

                    <NavLink href="/team" title="the team" />
                    <NavLink href="/leaderboard" title="leaderboard" />
                    <NavLink href="/howitworks" title="how it works" />
                    <NavLink href="/howtohelp" title="how to help" />
                    <NavLink href="/game" title="play now" />
                </MobileNav.Menu>
            </OutsideClickHandler>
        </MobileNav.Wrapper>
    )
}

const MobileNav = {
    Wrapper: Styled.div`
      display: flex;
      justify-content: flex-end; 
      align-items: center;
    `,
    MenuIcon: Styled.div`
      padding: 10px;
      cursor: pointer;
    `,
    CloseIcon: Styled.div`
      position: absolute;
      right: 10px;
      top: 10px;
      padding: 10px;
      cursor: pointer;
    `,
    Menu: Styled.nav<MenuProps>`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: translateY(${(props) => (props.isOpen ? '0' : '-100%')});
      transition: transform ease-in-out .3s;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; 
      align-items: stretch;
      background-color: rgb(6, 40, 26);
      padding-top: 40px;
      padding-bottom: 20px;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);

      > * {
        margin: 0 !important;
      }

      a {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;    
        font-size: 20px;
        text-transform: uppercase;
      }
    `,
}
