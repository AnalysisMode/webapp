// libs
import React from 'react'
import Styled from 'styled-components'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import TeamMemberCard from '../../components/TeamMemberCard'

import team from '../../utils/team'
import advisors from '../../utils/advisors'

export default () => {
    return (
        <ViewLayout>
            <ViewTitle
                title={'The Team'}
                subtitle={'Those who seek your contribution'}
                key={'team-view-title'}
            />
            <Team.TeamWrapper>
                {team.map((member, i) => {
                    return (
                        <TeamMemberCard
                            name={member.name}
                            expertise={member.expertise}
                            imagePath={member.imagePath}
                            linkedinUrl={member.linkedinUrl}
                            key={`member-${member.name}`}
                        />
                    )
                })}
            </Team.TeamWrapper>

            <ViewTitle
                title={'Supporters & Advisors'}
                subtitle={'Those who are helping the project'}
                key={'advisors-view-title'}
            />
            <Team.TeamWrapper>
                {advisors.map((member, i) => {
                    return (
                        <TeamMemberCard
                            name={member.name}
                            expertise={member.expertise}
                            imagePath={member.imagePath}
                            linkedinUrl={member.linkedinUrl}
                            key={`member-${member.name}`}
                        />
                    )
                })}
            </Team.TeamWrapper>
        </ViewLayout>
    )
}

const Team = {
    TeamWrapper: Styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  `,
}
