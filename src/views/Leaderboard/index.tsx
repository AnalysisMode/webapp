// libs
import React, { useState, useEffect, useRef } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { theme } from '../../styled-components/theme'

// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'

type LeaderboardEntry = {
    country: string
    count: number
}

export default () => {
    const [leaderboard, setLeaderboard] = useState([])
    const mountedRef = useRef(true)

    useEffect(() => {
        ;(async () => {
            axios.get('https://www.analysismode.com/sapiens/ranking/').then((result) => {
                if (!mountedRef.current) {
                    return null
                }

                setLeaderboard(result.data)
            })
        })()

        return () => {
            mountedRef.current = false
        }
    }, [])

    return (
        <ViewLayout>
            <ViewTitle
                title={'leaderboard'}
                subtitle={'Which countries are helping the most'}
                key={'leaderboard-view-title'}
            />
            <Leaderboard.Table>
                <Leaderboard.TableHeader>
                    <Leaderboard.HeaderColumn>country</Leaderboard.HeaderColumn>
                    <Leaderboard.HeaderColumn># of solutions</Leaderboard.HeaderColumn>
                </Leaderboard.TableHeader>
                {leaderboard.map((entry: LeaderboardEntry, i: number) => {
                    return (
                        <Leaderboard.TableRow
                            style={{
                                backgroundColor:
                                    (i + 1) % 2 === 1
                                        ? theme.colors.tableDarkRow
                                        : theme.colors.tableLightRow,
                            }}
                            key={`${entry.country}-data`}
                        >
                            <Leaderboard.TableColumn>{entry.country}</Leaderboard.TableColumn>
                            <Leaderboard.TableColumn>{entry.count}</Leaderboard.TableColumn>
                        </Leaderboard.TableRow>
                    )
                })}
            </Leaderboard.Table>
        </ViewLayout>
    )
}

const Leaderboard = {
    Table: Styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    `,
    TableHeader: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    width: 100%;
    height: 60px;
    background: ${(props) => props.theme.colors.primaryGreen};
    `,
    HeaderColumn: Styled.span`
    display: flex;
    font-weight: bold;
    `,
    TableRow: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    width: 100%;
    height: 50px;
    `,
    TableColumn: Styled.span`
    display: flex;
    font-weight: normal;
    `,
}
