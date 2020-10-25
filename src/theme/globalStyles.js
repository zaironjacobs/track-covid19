import styled, {createGlobalStyle} from 'styled-components';
import theme from 'theme/theme';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: ${theme.colors.white};
    text-rendering: optimizeLegibility;
    font-family: ${theme.fonts.roboto}, sans-serif;
    color: ${theme.colors.black};
    font-weight: 200;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  ::selection {
    background: ${theme.colors.babyBlueEyes}; /* WebKit/Blink Browsers */
  }
  
  ::-moz-selection {
    background: ${theme.colors.babyBlueEyes}; /* Gecko Browsers */
  }

  h1, h2, h3 {
    color: ${theme.colors.black};
    font-weight: 200;
    text-align: center;
    text-transform: uppercase;
  }
  
  h1 {
    ${theme.mediaQueries.mobileLandscape} {
      font-size:  ${theme.fontSizes.medium};
    }
  
    ${theme.mediaQueries.tabletPortrait} {
      font-size: ${theme.fontSizes.large};
    }
  
    ${theme.mediaQueries.tabletLandscape} {}
  
    ${theme.mediaQueries.laptop} {}
  }
  
  p {
    font-size: ${theme.fontSizes.extraSmall};
  }

  a {
    color: ${theme.colors.white};
    text-decoration: none;
  }
`

export const Main = styled.main`
  width: 100%;
  padding: 5px 0 25px 0;
    
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    padding: 20px 0 50px 0;
  }
  
  ${theme.mediaQueries.laptop} {}
`;

export const ButtonDefault = styled.button`
  cursor: pointer;
  color: white;
  background: ${theme.colors.denimBlue};
  border: none;
  font-size: 1rem;
  height: 40px;
  width: 140px;
  border-radius: 4px;
  outline:none;
  transition: 0.3s;
  
  :hover {
    background: ${theme.colors.royalBlueLight};
    -webkit-box-shadow: 0 0 41px -17px rgba(0,0,0,0.6);
    -moz-box-shadow: 0 0 41px -17px rgba(0,0,0,0.6);
    box-shadow: 0 0 41px -17px rgba(0,0,0,0.6);
  }
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {
    height: 45px;
    width: 160px;
    font-size: 1.2rem;
  }
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`


export const DivApp = styled.div`
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`;

export const DivContainer = styled.div`
  min-height: calc(100vh - ${theme.heights.mobileHeader} - ${theme.heights.mobileFooter});
  padding: 0 ${theme.spaces.mobilePortrait} 0 ${theme.spaces.mobilePortrait};
  display: flex;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    min-height: calc(100vh - ${theme.heights.header} - ${theme.heights.footer});
    padding: 0 ${theme.spaces.tabletLandscape} 0 ${theme.spaces.tabletLandscape};
  }
  
  ${theme.mediaQueries.laptop} {
    padding: 0 ${theme.spaces.laptop} 0 ${theme.spaces.laptop};
  }
`;

export const AnchorArrowUp = styled.a`
  display: none;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    display: block;
    position: fixed;
    right: 4%;
    bottom: 4%;
      
    .arrow-up {
      margin-right: 0;
      font-size: 1.5rem;
      font-weight: 100;
      cursor: pointer;
    
      :hover {
        color: ${theme.colors.royalBlueLight};
      }
    }
    
    opacity: ${props => props.arrowUpOpen ? '1' : '0'};
    transform: ${props => props.arrowUpOpen ? 'translate3d(0,0,0)' : 'translate3d(0,-10px,0)'}; 
    transition: .4s linear;
  }
  
  ${theme.mediaQueries.laptop} {}
`;