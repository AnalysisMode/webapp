// libs
import React from 'react'
import Styled from 'styled-components'

type ViewTitleProps = {
    title: string
    subtitle: string
}

export default ({ title, subtitle }: ViewTitleProps) => {
    return (
        <ViewTitle.Wrapper>
            <ViewTitle.Title>{title}</ViewTitle.Title>
            <ViewTitle.Subtitle>{subtitle}</ViewTitle.Subtitle>
        </ViewTitle.Wrapper>
    )
}

const ViewTitle = {
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
    `,
    Subtitle: Styled.span`
    display: flex;
    `,
}
