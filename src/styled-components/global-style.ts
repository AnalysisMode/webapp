import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
   font-size: ${(props) => props.theme.font.size.smaller}
},
a, a:link, a:visited, a:active {
   text-decoration: none;

   * {
       text-decoration: none;
   }
}
`
