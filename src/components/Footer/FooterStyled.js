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
  border-top: 1px solid ${theme.colors.lightGrey};
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    height: ${theme.heights.footer};
  }
  
  ${theme.mediaQueries.laptop} {}
`;

export const DivContent = styled.div`
  max-width: ${theme.widths.contentDefault};
  width: 100%;
  margin: 0 auto;
  padding-left: ${theme.paddings.contentDefault};
  padding-right: ${theme.paddings.contentDefault};
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
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

export const DivInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
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


