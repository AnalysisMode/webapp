// libs
import React from 'react'
import { useRoutes } from 'hookrouter'
import Router from '../../router'
import Styled from 'styled-components'

export default () => {
    const router = useRoutes(Router)

    return (
        <App.Layout>
            {/* navbar here */}
            <App.Body>{router}</App.Body>
        </App.Layout>
    )
}

const App = {
    Layout: Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,
    Body: Styled.div`
    margin: 20px;
    flex: 1;
  `,
}
