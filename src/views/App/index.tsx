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
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.dark['shade-1']};
  `,
    Body: Styled.div`
    margin-top: 100px;
    flex: 1;
  `,
}
