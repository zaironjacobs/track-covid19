import { createGlobalStyle } from 'styled-components'
import { theme } from '@theme'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
    text-rendering: optimizeLegibility;
    font-family: ${theme.fonts.roboto}, sans-serif;
    color: ${theme.colors.black};
    font-weight: 300;
    font-size: 16px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  ::selection {
    background: ${theme.colors.royalBlueLight}; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: ${theme.colors.royalBlueLight}; /* Gecko Browsers */
  }

  p {
    margin: 0;
  }
`
