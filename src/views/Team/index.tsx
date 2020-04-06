// libs
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'

// components
import ViewTitle from '../../components/ViewTitle'
import TeamMemberCard from '../../components/TeamMemberCard'

import team from '../../utils/team'

export default () => {
    return (
        <Team.Layout>
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
        </Team.Layout>
    )
}

const Team = {
    Layout: Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
  `,
    TeamWrapper: Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  `,
}
