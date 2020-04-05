import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
   font-size: ${(props) => props.theme.font.size.smaller};
   font-family: ${(props) => props.theme.font.family.body};
   color: ${(props) => props.theme.colors.light['shade-1']};
},
a, a:link, a:visited, a:active {
   text-decoration: none;

   * {
       text-decoration: none;
   }
}
`
