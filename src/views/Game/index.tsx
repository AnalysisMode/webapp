// libs
import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import { navigate } from 'hookrouter'

// components
import ViewLayout from '../../components/ViewLayout'
import GameMatrix from '../../components/GameMatrix'
import GameChallenge from '../../components/GameChallenge'
import GameSolutionRow from '../../components/GameSolutionRow'
import { Button } from '../../components/Button'

import virus from '../../assets/virus.png'
import badge from '../../assets/badge.png'
import { useStore } from 'react-redux'

const data = ['◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉', '◉']

export default () => {
    const skipped = localStorage.getItem('skipped-tutorial')

    useEffect(() => {
        if (!skipped || JSON.parse(skipped) === false) {
            navigate('/game-tutorial')
        }
    }, [skipped])

    const [currentColumn, setCurrentColumn] = useState(0)
    const store = useStore()

    useEffect(() => {
        // get symbols here on column change
        console.log(store.getState())
    }, [currentColumn])

    const onResetClick = () => {}

    const onNextClick = () => {
        setCurrentColumn(currentColumn + 1)
    }

    return (
        <Game.Layout>
            <Game.Container>
                <Game.StatusRow>
                    <Game.StatusBadgeWrapper>
                        <Game.BadgeLogo src={badge} />
                        <Game.BadgeWrapper>
                            <Game.BadgeName>{'World Changer'}</Game.BadgeName>
                            <Game.BadgeLabel>{'badge earned'}</Game.BadgeLabel>
                        </Game.BadgeWrapper>
                    </Game.StatusBadgeWrapper>
                    <Game.LevelWrapper>
                        <Game.Level>{'1'}</Game.Level>
                        <Game.LevelLabel>{'Level'}</Game.LevelLabel>
                    </Game.LevelWrapper>
                    <Game.StatusPlayerWrapper>
                        <Game.StatusPlayer>{'Green Demon (Ghana)'}</Game.StatusPlayer>
                        <Game.StatusPlayerLabel>{'Nickname (country)'}</Game.StatusPlayerLabel>
                    </Game.StatusPlayerWrapper>
                </Game.StatusRow>

                <Game.GameRow>
                    <Game.ChallengeWrapper>
                        <GameChallenge currentColumn={currentColumn} key={'game-challenge'} />
                    </Game.ChallengeWrapper>
                    <Game.GameWrapper>
                        <GameMatrix
                            currentColumn={currentColumn}
                            gameData={data}
                            key={`game-matrix`}
                        />
                        <GameSolutionRow currentColumn={currentColumn} key={`game-solution-row`} />
                        <Game.ButtonsRow>
                            <Button
                                disabled={false}
                                key={'skip-button'}
                                onClick={onResetClick}
                                variant={'link'}
                            >
                                skip
                            </Button>
                            <Button
                                disabled={false}
                                key={'next-button'}
                                onClick={onNextClick}
                                variant={'primary'}
                            >
                                save &amp; next
                            </Button>
                        </Game.ButtonsRow>
                    </Game.GameWrapper>
                </Game.GameRow>
            </Game.Container>
        </Game.Layout>
    )
}

const Game = {
    Layout: Styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    background: url(${virus}) ${(props) => props.theme.colors.dark['shade-1']};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    `,
    Container: Styled(ViewLayout)``,
    StatusRow: Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 900px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryGreen};
    `,
    StatusBadgeWrapper: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `,
    BadgeLogo: Styled.img`
    margin-right: 10px;
    `,
    BadgeWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `,
    BadgeName: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.small};
    font-family: ${(props) => props.theme.font.family.title};
    `,
    BadgeLabel: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.family.body};
    `,
    LevelWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `,
    Level: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.small};
    font-family: ${(props) => props.theme.font.family.title};
    `,
    LevelLabel: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.family.body};
    `,
    StatusPlayerWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    `,
    StatusPlayer: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.small};
    font-family: ${(props) => props.theme.font.family.title};
    `,
    StatusPlayerLabel: Styled.span`
    display: flex;
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.family.body};
    `,
    GameRow: Styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    `,
    ChallengeWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    `,
    GameWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    `,
    ButtonsRow: Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    `,
}
