import styled from 'styled-components';
import theme from 'theme/theme';
import {Main} from 'theme/globalStyles';

export const MainContainer = styled(Main)`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;

  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`;

export const Div404 = styled.div`
  color: ${theme.colors.white};
  font-size: 5rem;
  line-height: 1;
  text-transform: uppercase;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {
    font-size: 8rem;
  }
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {
    font-size: 10rem;
  }
`;

export const DivPageNotFound = styled.div`
   color: ${theme.colors.white};
   font-size: ${theme.fontSizes.small};
   margin-bottom: 0.5rem;
   text-transform: uppercase;
   
   ${theme.mediaQueries.mobileLandscape} {}
  
   ${theme.mediaQueries.tabletPortrait} {
     margin-bottom: 1rem;
     font-size: ${theme.fontSizes.medium};
   }
  
   ${theme.mediaQueries.tabletLandscape} {}
  
   ${theme.mediaQueries.laptop} {
     font-size: ${theme.fontSizes.extraLarge};
   }
`;