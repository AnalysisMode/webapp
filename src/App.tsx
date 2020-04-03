import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './styled-components/theme'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p style={{ color: theme.colors.main }}>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default App
