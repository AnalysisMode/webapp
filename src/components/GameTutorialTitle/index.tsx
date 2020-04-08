// libs
import React from 'react'
import Styled from 'styled-components'

type GameTutorialTitleProps = {
    subtitle: string
}

export default ({ subtitle }: GameTutorialTitleProps) => {
    return (
        <GameTutorialTitle.Wrapper>
            <GameTutorialTitle.Title>{'GAME TUTORIAL'}</GameTutorialTitle.Title>
            <GameTutorialTitle.Subtitle>{subtitle}</GameTutorialTitle.Subtitle>
        </GameTutorialTitle.Wrapper>
    )
}

const GameTutorialTitle = {
    Wrapper: Styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    text-align: center;
  `,
    Title: Styled.h2`
    display: flex;
    font-family: ${(props) => props.theme.font.family.title};
    font-size: ${(props) => props.theme.font.size.medium};
    color: ${(props) => props.theme.colors.primaryGreen};
    margin-bottom: 0;
    `,
    Subtitle: Styled.span`
    display: flex;
    color: ${(props) => props.theme.colors.primaryGreen};
    font-size: ${(props) => props.theme.font.size.medium};
    font-family: ${(props) => props.theme.font.family.title};
    `,
}
