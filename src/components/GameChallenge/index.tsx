// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import axios from 'axios'

// components
import GameChallengeMatrixBox from '../GameChallengeMatrixBox'

type GameChallengeProp = {
    currentColumn: number
}

export default ({ currentColumn }: GameChallengeProp) => {
    const [sequences, setSequences] = useState<string[]>([])

    useEffect(() => {
        ;(async () => {
            // const resultSequences = await axios.get('/sequences')
            const resultSequences = {
                data: [
                    'G',
                    'S',
                    'F',
                    'C',
                    'T',
                    'Q',
                    'D',
                    'N',
                    'I',
                    'K',
                    'D',
                    'C',
                    'D',
                    'V',
                    'N',
                    'L',
                    'H',
                    'S',
                ],
            }

            if (resultSequences.data) {
                setSequences(resultSequences.data)
            }
        })()
    }, [])

    return (
        <GameChallenge.Layout>
            <GameChallenge.ChallengeTitle>{'Challenge'}</GameChallenge.ChallengeTitle>
            <GameChallenge.ChallengeDescription>
                {'Compare these 6 aminoacids to advance to the next level.'}
            </GameChallenge.ChallengeDescription>
            <GameChallenge.ChallengeMatrixWrapper>
                {sequences.map((sequence, i) => {
                    return (
                        <GameChallengeMatrixBox
                            isActive={i % 6 === currentColumn}
                            symbol={sequence}
                            key={`sequence-box-${i}`}
                        />
                    )
                })}
            </GameChallenge.ChallengeMatrixWrapper>
        </GameChallenge.Layout>
    )
}

const GameChallenge = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  `,
    ChallengeTitle: Styled.span`
  display: flex;
  font-size: ${(props) => props.theme.font.size.medium};
  font-family: ${(props) => props.theme.font.family.title};
  `,
    ChallengeDescription: Styled.span`
  margin-top: 10px;
  font-size: ${(props) => props.theme.font.size.small};
  `,
    ChallengeMatrixWrapper: Styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  `,
}
