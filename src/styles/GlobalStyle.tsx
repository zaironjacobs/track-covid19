import styled, {createGlobalStyle} from 'styled-components';
import theme from 'theme';


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

  a {
    color: ${theme.colors.black};
    text-decoration: none;
    transition: .3s;

    :hover {
      color: ${theme.colors.royalBlueLight};
    }
  }

  img {
    color: transparent;
  }
`;


export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 8px 50px 8px;
  min-height: calc(100vh - ${theme.heights.mobileHeader} - ${theme.heights.footer});

  ${theme.media._992px} {
    padding-bottom: 50px;
  }

  ${theme.media._1200px} {
    min-height: calc(100vh - ${theme.heights.header} - ${theme.heights.footer});
  }
`;
