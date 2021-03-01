import styled from 'styled-components';
import theme from 'theme';
import {Main} from '@style/GlobalStyle';


export const MainContainer = styled(Main)`
`;


export const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 15px;

  ${theme.media._992px} {
    margin-bottom: 35px;
  }
`;


export const WorldIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 75px;
    height: 100%;
  }

  ${theme.media._1200px} {
    img {
      width: 140px;
      height: 100%;
    }
  }
`;


export const BoxesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${theme.media._1200px} {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
  }

  .box {
    border: 1px solid #f1f1f1;
    width: 350px;
    height: 150px;
    text-align: center;
    margin: 0 10px 35px 10px;
    box-shadow: 0 5px 25px rgba(0, 115, 235, .07);
    border-radius: 5px;

    ${theme.media._1200px} {
      width: 275px;
      margin-bottom: 0;
    }
  }

  .cases-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 115px;
    font-size: ${theme.fontSizes.medium};
    font-weight: 400;
  }
`;


export const BoxPanelHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  color: ${theme.colors.white};
  background-color: ${props => props.color};
  font-weight: 400;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;


export const SelectWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;

  .select-box {
    width: 350px;
    margin: 0 auto;

    ${theme.media._992px} {
      width: 50%
    }

    ${theme.media._992px} {
      margin-top: 35px;
    }
`;


export const Toggle = styled.button`
  cursor: pointer;
  color: white;
  background: ${theme.colors.denimBlue};
  border: none;
  font-size: 1rem;
  height: 40px;
  width: 350px;
  border-radius: 4px;
  outline: none;
  transition: 0.3s;

  :hover {
    background: ${theme.colors.royalBlueLight};
    -webkit-box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
  }

  ${theme.media._768px} {
    height: 45px;
    width: 350px;
    font-size: 1.2rem;
  }
`;


export const Info = styled.div`
  margin-top: 25px;
  padding: 0 10px 0 10px;

  ${theme.media._1200px} {
    margin-top: 75px;
  }

  .last-updated {
    text-align: center;
  }

  .data-source {
    text-align: center;
    margin-top: 10px;
  }
`;


