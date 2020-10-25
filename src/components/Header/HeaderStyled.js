import styled from 'styled-components';
import theme from 'theme/theme';

export const HeaderContainer = styled.header`
  height: ${theme.heights.mobileHeader};
  padding: 0 ${theme.spaces.mobilePortrait} 0 ${theme.spaces.mobilePortrait};
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
    padding: 0 ${theme.spaces.tabletLandscape} 0 ${theme.spaces.tabletLandscape};
  }
  
  ${theme.mediaQueries.laptop} {
    padding: 0 ${theme.spaces.laptop} 0 ${theme.spaces.laptop};
  }
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
  width: 100%;
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
