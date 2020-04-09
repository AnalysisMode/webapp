// libs
import React from 'react'
import Styled from 'styled-components'
// components
import ViewLayout from '../../components/ViewLayout'
import ViewTitle from '../../components/ViewTitle'
import TeamMemberCard from '../../components/TeamMemberCard'

import team from '../../utils/team'

export default () => {
    return (
        <ViewLayout>
            <ViewTitle
                title={'the team'}
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
        </ViewLayout>
    )
}

const Team = {
    TeamWrapper: Styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `,
}
