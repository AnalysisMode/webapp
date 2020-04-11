import React from 'react'
import Styled from 'styled-components'

// components
import ViewLayout from '../../components/ViewLayout'

import virus from '../../assets/virus.png'

export default () => {
    return (
        <ThankYou.Layout>
            <ThankYou.Container>
                {'Thank you for your participation in helping us finding a vaccine!'}
            </ThankYou.Container>
        </ThankYou.Layout>
    )
}

const ThankYou = {
    Layout: Styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${virus}) ${(props) => props.theme.colors.dark['shade-1']};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  `,
    Container: Styled(ViewLayout)``,
}
