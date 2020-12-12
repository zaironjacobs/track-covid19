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
`;

export const DivContent = styled.div`
  max-width: ${theme.widths.contentDefault};
  width: 100%;
  margin: 0 auto;
  padding-left: ${theme.paddings.contentDefault};
  padding-right: ${theme.paddings.contentDefault};
`;

export const DivBuiltBy = styled.div`
  a {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.superSmall};
  }
`;

export const DivInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DivGithubIconWrapper = styled.div`
  margin-bottom: 10px;

  .github-icon {
    color: black;
    font-size: 25px;
  }
`;


