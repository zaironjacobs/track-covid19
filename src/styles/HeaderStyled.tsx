import styled from 'styled-components';
import theme from 'theme';


export const Content = styled.header`
  z-index: 9999;
  height: ${theme.heights.mobileHeader};
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0 5px 15px rgba(0, 115, 235, .05);

  ${theme.media._992px} {
    height: ${theme.heights.header};
  }

  .logo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .name {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;

    a {
      font-size: ${theme.fontSizes.small};
      text-decoration: none;
      font-weight: 400;
      color: ${theme.colors.black};
    }

    ${theme.media._768px} {
      a {
        font-size: ${theme.fontSizes.large};
      }
    }

    ${theme.media._992px} {
      padding-left: 0;
    }
  }

  .virus-icon-wrapper {
    margin-right: 10px;

    img {
      width: 35px;
      height: auto;

      ${theme.media._992px} {
        width: 45px;
      }
    }
  }
`;
