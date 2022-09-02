import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from '@theme'

export const MyAppStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${Theme.colors.white};
    text-rendering: optimizeLegibility;
    font-family: ${Theme.fonts.roboto}, sans-serif;
    color: ${Theme.colors.black};
    font-weight: 300;
    font-size: 16px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  ::selection {
    background: ${Theme.colors.royalBlueLight}; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: ${Theme.colors.royalBlueLight}; /* Gecko Browsers */
  }

  a {
    color: ${Theme.colors.black};
    text-decoration: none;
    transition: .3s;

    :hover {
      color: ${Theme.colors.royalBlueLight};
    }
  }

  img {
    color: transparent;
  }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 8px 50px 8px;
    min-height: calc(100vh - ${Theme.header.mobileHeight} - ${Theme.footer.height});

    ${Theme.media._992px} {
        padding-bottom: 50px;
    }

    ${Theme.media._1200px} {
        min-height: calc(100vh - ${Theme.header.height} - ${Theme.footer.height});
    }
`
