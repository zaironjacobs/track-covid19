import styled from 'styled-components';
import theme from 'theme/theme';

export const HeaderContainer = styled.header`
  height: ${theme.heights.mobileHeader};
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0 5px 15px rgba(0,115,235,.05);
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {
    height: ${theme.heights.header};
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

export const ButtonBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({theme, open}) => open ? theme.colors.black : theme.colors.black};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'display: none' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
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
        
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {
    a {
      font-size: ${theme.fontSizes.large};
    }
  }
  
  ${theme.mediaQueries.tabletLandscape} {
    padding-left: 0;
  }
  
  ${theme.mediaQueries.laptop} {}
`;

export const DivLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  .coronavirus-icon {
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  
  ${theme.mediaQueries.mobileLandscape} {}
  
  ${theme.mediaQueries.tabletPortrait} {}
  
  ${theme.mediaQueries.tabletLandscape} {}
  
  ${theme.mediaQueries.laptop} {}
`;
