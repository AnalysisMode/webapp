// import original module declarations
import 'styled-components'
import { DefaultTheme, createGlobalStyle } from 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryGreen: string
            lightGreen: string
            darkGreen: string
            brown: string
            red: {
                [key: string]: string
            }
            blue: {
                [key: string]: string
            }
            dark: {
                [key: string]: string
            }
            light: {
                [key: string]: string
            }
        }
        font: {
            family: {
                title: string
                body: string
            }
            size: {
                [key: string]: string
            }
        }
        spacing: {
            tiny: number
            small: number
            medium: number
            large: number
        }
    }
}

// Export theme implementing interface
export const theme: DefaultTheme = {
    colors: {
        primaryGreen: '#2BBD7E',
        lightGreen: '#69F0AE',
        darkGreen: '#219653',
        brown: '#F2994A',
        red: {
            'shade-1': '#EB5757',
        },
        blue: {
            'shade-1': '#2F80ED',
            'shade-2': '#56CCF2',
            'shade-3': '#BBE4DD',
        },
        dark: {
            'shade-1': '#000000',
            'shade-2': '#01170E',
            'shade-3': '#06281A',
        },
        light: {
            'shade-1': '#ffffff',
            'shade-2': '#e5e5e5',
        },
    },
    font: {
        family: {
            title: 'Brinnan',
            body: 'Neutrif Pro',
        },
        size: {
            smaller: '16px',
            small: '18px',
            medium: '26px',
            large: '46px',
        },
    },
    spacing: {
        large: 30,
        medium: 20,
        small: 15,
        tiny: 10,
    },
}

export const GlobalStyle = createGlobalStyle`
    body {
     font-size: ${({ theme }) => theme.font.size.smaller};
     font-family: ${({ theme }) => theme.font.family.body};
    },
    a, a:link, a:visited, a:active {
      text-decoration: none;

      * {
          text-decoration: none;
      }
  }
`
