import styled from 'styled-components';
import theme from 'theme/theme';

export const FooterContainer = styled.footer`
  height: ${theme.heights.mobileFooter};
  background: ${theme.colors.white};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    height: ${theme.heights.footer};
  }
  
  ${theme.mediaQueries.laptop} {}
`;

export const DivCopyright = styled.div`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.superSmall};
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`;

export const DivWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 0 ${theme.spaces.mobilePortrait} 0 ${theme.spaces.mobilePortrait};
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    padding: 0 ${theme.spaces.tabletLandscape} 0 ${theme.spaces.tabletLandscape};
  }
  
  ${theme.mediaQueries.laptop} {
    padding: 0 ${theme.spaces.laptop} 0 ${theme.spaces.laptop};
  }
`;

export const DivTopLine = styled.div`
  background-color: ${theme.colors.lightGrey};
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {
    margin: 0 ${theme.spaces.laptop} 0 ${theme.spaces.laptop};
  }
`;

export const DivGithubIconWrapper = styled.div`
  margin-top: 10px;
  
  .github-icon {
    color: black;
    font-size: 25px;
  }
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`;


