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

import { GameSet } from '../../models'

import virus from '../../assets/virus.png'
import badge from '../../assets/badge.png'
import { useStore } from 'react-redux'

export default () => {
    const skipped = localStorage.getItem('skipped-tutorial')

    useEffect(() => {
        if (!skipped || JSON.parse(skipped) === false) {
            navigate('/game-tutorial')
        }
    }, [skipped])

    const store = useStore()
    const [currentColumn, setCurrentColumn] = useState(0)
    const [currentSequence, setCurrentSequence] = useState(0)
    const [gameSetFinished, setGameSetFinished] = useState(false)
    const [currentDataSet, setCurrentDataSet] = useState<GameSet>({
        sequences: [],
        matrix: [],
    })

    useEffect(() => {
        ;(async () => {
            // const resultData = await axios.get('/getdata')
            const resultData: GameSet = {
                sequences: ['ABC', 'ABC', 'ABC'],
                matrix: [
                    [
                        '▲▼',
                        'MW',
                        '◯◉',
                        '▲▲',
                        '▲▲',
                        '▲▼',
                        '◯◯',
                        'WW',
                        'MW',
                        '▼▲',
                        '▲▲',
                        '==',
                        '=+',
                        '▲▼',
                        'WM',
                    ],
                    [
                        '▲▼',
                        '-=',
                        'MM',
                        '◯◉',
                        'MW',
                        '▼▲',
                        'MW',
                        'MM',
                        '==',
                        '=+',
                        '==',
                        '◯◯',
                        'MM',
                        '▲▲',
                        '▲▼',
                    ],
                    [
                        '◉◯',
                        '◯◉',
                        '▲▼',
                        '▲▼',
                        '◯◉',
                        '==',
                        '▼▲',
                        '-=',
                        '=-',
                        'WW',
                        'WW',
                        '==',
                        '==',
                        'WW',
                        'WM',
                    ],
                ],
            }

            setCurrentDataSet(resultData)
        })()
    }, [])

    useEffect(() => {
        if (
            currentSequence === currentDataSet.sequences.length - 1 &&
            currentColumn ===
                currentDataSet.matrix[currentSequence].length / currentDataSet.sequences.length - 1
        ) {
            setGameSetFinished(true)
        } else {
            setGameSetFinished(false)
        }
    }, [currentColumn, currentSequence, currentDataSet.matrix, currentDataSet.sequences.length])

    const onResetClick = () => {}

    const onNextClick = () => {
        if (
            currentColumn <=
            currentDataSet.matrix[currentSequence].length / currentDataSet.sequences.length - 2
        ) {
            setCurrentColumn(currentColumn + 1)
        } else {
            setCurrentColumn(0)
            setCurrentSequence(currentSequence + 1)
        }
    }

    const onSubmitClick = () => {
        navigate('/thankyou')
        // console.log(store.getState())
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
                        <GameChallenge
                            currentSequence={currentSequence}
                            sequences={currentDataSet.sequences}
                            key={`game-challenge-${currentDataSet.sequences}`}
                        />
                    </Game.ChallengeWrapper>
                    <Game.GameWrapper>
                        <GameMatrix
                            currentColumn={currentColumn}
                            gameData={currentDataSet.matrix[currentSequence]}
                            key={`game-matrix-${currentSequence}`}
                        />
                        <GameSolutionRow
                            currentSequence={currentSequence}
                            currentColumn={currentColumn}
                            key={`game-solution-row`}
                        />
                        <Game.ButtonsRow>
                            {/* <Button
                                disabled={false}
                                key={'skip-button'}
                                onClick={onResetClick}
                                variant={'link'}
                            >
                                skip
                            </Button> */}
                            <Button
                                disabled={false}
                                key={'next-button'}
                                onClick={gameSetFinished ? onSubmitClick : onNextClick}
                                variant={'primary'}
                            >
                                {currentSequence === currentDataSet.sequences.length - 1 &&
                                currentColumn ===
                                    currentDataSet.matrix[currentSequence].length /
                                        currentDataSet.sequences.length -
                                        1
                                    ? 'submit the puzzle'
                                    : 'save & next'}
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
