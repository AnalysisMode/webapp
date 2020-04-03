// libs
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

// components
import App from './views/App'
import { theme } from './styled-components/theme'
import * as serviceWorker from './serviceWorker'

// style
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
