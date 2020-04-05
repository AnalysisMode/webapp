// libs
import React from 'react'
import { useRoutes } from 'hookrouter'
import Router from '../../router'
import Styled from 'styled-components'

// components
import Navbar from '../../components/Navbar'

export default () => {
    const router = useRoutes(Router)

    return (
        <App.Layout>
            <Navbar />
            <App.Body>{router}</App.Body>
        </App.Layout>
    )
}

const App = {
    Layout: Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 170px;
    background: ${(props) => props.theme.colors.dark['shade-1']};
  `,
    Body: Styled.div`
    flex: 1;
  `,
}
