import styled, {createGlobalStyle} from 'styled-components';
import theme from 'theme/theme';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
    text-rendering: optimizeLegibility;
    font-family: ${theme.fonts.roboto}, sans-serif;
    color: ${theme.colors.black};
    font-weight: 300;
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
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
  
  h1 {
    ${theme.mediaQueries.mq_480px} {
      font-size:  ${theme.fontSizes.medium};
    }
  
    ${theme.mediaQueries.mq_768px} {
      font-size: ${theme.fontSizes.large};
    }
  
    ${theme.mediaQueries.mq_992px} {}
  
    ${theme.mediaQueries.mq_1200px} {}
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
    
  ${theme.mediaQueries.mq_480px} {}
  
  ${theme.mediaQueries.mq_768px} {}
  
  ${theme.mediaQueries.mq_992px} {
    padding: 20px 0 50px 0;
  }
  
  ${theme.mediaQueries.mq_1200px} {}
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
  
  ${theme.mediaQueries.mq_480px} {}
  
  ${theme.mediaQueries.mq_768px} {
    height: 45px;
    width: 160px;
    font-size: 1.2rem;
  }
  
  ${theme.mediaQueries.mq_992px} {}
  
  ${theme.mediaQueries.mq_1200px} {}
`


export const DivApp = styled.div`
  
  ${theme.mediaQueries.mq_480px} {}
  
  ${theme.mediaQueries.mq_768px} {}
  
  ${theme.mediaQueries.mq_992px} {}
  
  ${theme.mediaQueries.mq_1200px} {}
`;

export const DivContent = styled.div`
  min-height: calc(100vh - ${theme.heights.mobileHeader} - ${theme.heights.mobileFooter});
  max-width: ${theme.widths.contentDefault};
  width: 100%;
  margin: 0 auto;
  padding-left: ${theme.paddings.contentDefault};
  padding-right: ${theme.paddings.contentDefault};
  
  ${theme.mediaQueries.mq_480px} {}
  
  ${theme.mediaQueries.mq_768px} {}
  
  ${theme.mediaQueries.mq_992px} {
    min-height: calc(100vh - ${theme.heights.header} - ${theme.heights.footer});
    }
  
  ${theme.mediaQueries.mq_1200px} {}
`;

export const AnchorArrowUp = styled.a`
  display: none;
  
  ${theme.mediaQueries.mq_480px} {}
  
  ${theme.mediaQueries.mq_768px} {}
  
  ${theme.mediaQueries.mq_992px} {
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
  
  ${theme.mediaQueries.mq_1200px} {}
`;
