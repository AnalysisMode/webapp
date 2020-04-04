import 'styled-components'
import { theme } from './theme'

type CustomTheme = typeof theme

declare module 'styled-components' {
    // eslint-disable-next-line
    export interface DefaultTheme extends CustomTheme {}
}
