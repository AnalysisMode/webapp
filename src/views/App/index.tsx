// libs
import React from 'react'
import { useRoutes } from 'hookrouter'
import Router from '../../router'
import Styled from 'styled-components'

// components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default () => {
    const router = useRoutes(Router)

    return (
        <App.Layout>
            <Navbar />
            <App.Body>{router}</App.Body>
            <Footer />
        </App.Layout>
    )
}

const App = {
    Layout: Styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.dark['shade-1']};
  `,
    Body: Styled.div`
    flex: 1;
  `,
}
