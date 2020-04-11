import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
// redux
import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/rootReducer'
// components
import App from './views/App'
import { theme } from './styled-components/theme'
import { GlobalStyle } from './styled-components/global-style'
import * as serviceWorker from './serviceWorker'
// style
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const store = configureStore({
    reducer: rootReducer,
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
            <GlobalStyle />
            <App />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
