// libs
import React from 'react'
import Styled from 'styled-components'

type SubTitleProps = {
    title: string
    subtitle: string
    imagePath: string
}

export default ({ title, subtitle, imagePath }: SubTitleProps) => {
    return (
        <SubTitle.Wrapper>
            <SubTitle.Title>{title}</SubTitle.Title>
            <SubTitle.Subtitle>{subtitle}</SubTitle.Subtitle>
            <SubTitle.Image src={imagePath} />
        </SubTitle.Wrapper>
    )
}

const SubTitle = {
    Wrapper: Styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:nth-last-child(1)) {
      margin-right: 30px;
    }
  `,
    Title: Styled.h2`
    height: 80px;
    display: flex;
    font-family: ${(props) => props.theme.font.family.title};
    font-size: ${(props) => props.theme.font.size.medium};
    color: ${(props) => props.theme.colors.light['shade-1']};
    font-weight: normal;
    `,
    Subtitle: Styled.span`
    display: flex;
    `,
    Image: Styled.img`
    margin-top: 30px;
  `,
}
