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
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    width: 75px;
    height: 75px;
  }

  ${theme.media._1200px} {
    img {
      width: 140px;
      height: 140px;
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
`;


export const Toggle = styled.button`
  cursor: pointer;
  color: white;
  background: ${theme.colors.denimBlue};
  border: none;
  font-size: ${theme.fontSizes.extraSmall};
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
    font-size: ${theme.fontSizes.small};
  }
`;


export const Info = styled.div`
  margin-top: 15px;
  padding: 0 10px 0 10px;

  ${theme.media._1200px} {
    margin-top: 50px;
  }

  .last-updated {
    text-align: center;
  }

  .data-source {
    text-align: center;
    margin-top: 10px;
  }
`;


export const LatestNews = styled.div`
  margin: 50px 0 0 0;
  max-width: 700px;
  width: 95%;
  border: 1px solid ${theme.colors.lightGrey};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 115, 235, .07);

  ${theme.media._768px} {
    max-width: 750px;
    width: 100%;
  }

  .heading {
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSizes.small};
    border-bottom: 1px solid ${theme.colors.lightGrey};
    background-color: ${theme.colors.raisinBlack};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
    margin: 0;
    padding: 10px 0 10px 0;
    font-weight: 400;
  }

  .news-box {
    height: 400px;
    overflow: scroll;
  }

  .news {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid ${theme.colors.lightGrey};

    :first-child {
      margin-top: 15px;
    }

    :last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }

  .title {
    font-size: ${theme.fontSizes.small};
    font-weight: 400;
    margin-bottom: 3px;
  }

  .description {
    font-size: ${theme.fontSizes.extraSmall};
    margin: 3px 0 15px 0;
    font-weight: 300;
  }

  .source-name {
    font-size: ${theme.fontSizes.extraSmall};
    margin: 3px 0 3px 0;
    font-weight: 400;
  }

  .published-date {
    font-size: 0.8rem;
    margin: 3px 0 3px 0;
    font-weight: 300;
  }
`;

