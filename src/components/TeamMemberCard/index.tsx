// libs
import React from 'react'
import Styled from 'styled-components'

import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg'

type TeamMemberCardProps = {
    name: string
    expertise: string[]
    linkedinUrl: string
    imagePath: string
}

export default ({
    name,
    expertise,
    linkedinUrl,
    imagePath,
}: TeamMemberCardProps) => {
    return (
        <Team.Wrapper>
            <Team.Card>
                <Team.Image src={imagePath} />
                <Team.ExpertiseWrapper>
                    {expertise.map((e, i) => {
                        return (
                            <Team.Expertise key={`expertise-${i}`}>
                                {e}
                            </Team.Expertise>
                        )
                    })}
                </Team.ExpertiseWrapper>
                <Team.LastRow>
                    <Team.Name>{name}</Team.Name>
                    <Team.Linkedin href={linkedinUrl} target="_blank">
                        <LinkedinLogo />
                    </Team.Linkedin>
                </Team.LastRow>
            </Team.Card>
        </Team.Wrapper>
    )
}

const Team = {
    Wrapper: Styled.div`
  display: flex;
  flex-direction: row;
  width: 270px;
  padding: 0 15px;
  flex-wrap: wrap;

  // &:not(:nth-last-child(1)) {
  //   margin-right: 30px;
  // }
  `,
    Card: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
    Image: Styled.img`
  margin-top: 30px;
  margin-bottom: 10px;
  `,
    ExpertiseWrapper: Styled.div`
  display: flex;
  height: 90px;
  flex-direction: column;
  align-items: center;
  `,
    Expertise: Styled.span`
  display: flex;
  text-align: center;
  `,
    LastRow: Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `,
    Name: Styled.span`
  align-items: center;
    display: flex;
    font-family: ${(props) => props.theme.font.family.title};
    font-size: ${(props) => props.theme.font.size.medium};
    color: ${(props) => props.theme.colors.light['shade-1']};
    font-weight: normal;
    `,
    Linkedin: Styled.a`
  margin-left: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.light['shade-1']};

    &:link, &:visited, &:active {
      color: ${(props) => props.theme.colors.light['shade-1']};
      text-decoration: none;
    }
    `,
}
