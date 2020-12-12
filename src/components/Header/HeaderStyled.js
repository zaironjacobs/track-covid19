import styled from 'styled-components';
import theme from 'theme/theme';

export const HeaderContainer = styled.header`
  z-index: 9999;
  height: ${theme.heights.mobileHeader};
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0 5px 15px rgba(0, 115, 235, .05);

  ${theme.mediaQueries.mq_992px} {
    height: ${theme.heights.header};
  }

`;

export const DivContent = styled.div`
  max-width: ${theme.widths.contentDefault};
  width: 100%;
  margin: 0 auto;
  padding-left: ${theme.paddings.contentDefault};
  padding-right: ${theme.paddings.contentDefault};
`;

export const DivLogo = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;

  a {
    font-size: ${theme.fontSizes.small};
    text-decoration: none;
    font-weight: 400;
    color: ${theme.colors.black};
  }

  ${theme.mediaQueries.mq_768px} {
    a {
      font-size: ${theme.fontSizes.large};
    }
  }

  ${theme.mediaQueries.mq_992px} {
    padding-left: 0;
  }
`;

export const DivLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImgCoronavirusIcon = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;

  ${theme.mediaQueries.mq_992px} {
    height: 50px;
    width: 50px;
  }
`;
