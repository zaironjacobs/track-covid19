import styled from 'styled-components'
import theme from 'theme'
import { Main } from '@styless/GlobalStyle'

export const MainContainer = styled(Main)``

export const ToggleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 15px;

    ${theme.media._992px} {
        margin-bottom: 35px;
    }
`

export const Toggle = styled.button`
    cursor: pointer;
    color: white;
    background: ${theme.colors.denimBlue};
    border: none;
    height: 40px;
    max-width: 300px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    transition: 0.3s;
    font-size: 18px;

    :hover {
        background: ${theme.colors.royalBlueLight};
        -webkit-box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
        -moz-box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
        box-shadow: 0 0 41px -17px rgba(0, 0, 0, 0.6);
    }

    ${theme.media._768px} {
        height: 45px;
        width: 350px;
    }
`

export const Title = styled.div`
    font-weight: 400;
    text-transform: uppercase;
    font-size: 35px;
    margin: 35px 0;
`

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
`

export const BoxesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${theme.media._1200px} {
        width: 80%;
        flex-direction: row;
        justify-content: center;
    }

    .box {
        border: 1px solid #f1f1f1;
        max-width: 350px;
        width: 100%;
        height: 150px;
        text-align: center;
        margin: 0 35px 35px 35px;
        box-shadow: 0 5px 25px rgba(0, 115, 235, 0.07);
        border-radius: 5px;

        ${theme.media._1200px} {
            max-width: 400px;
            margin-bottom: 0;
        }
    }

    .cases-numbers {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 115px;
        font-weight: 400;
        font-size: 28px;
    }
`

export const BoxPanelHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    color: ${theme.colors.white};
    background-color: ${(props) => props.color};
    font-weight: 400;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 20px;
`

export const SelectWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;

  .select-country {
    width: 350px;
    margin: 0 auto;

    ${theme.media._992px} {
      width: 50%
    }
`

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
`

export const LatestNews = styled.div`
    margin: 50px 0 0 0;
    max-width: 700px;
    width: 95%;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 5px 25px rgba(0, 115, 235, 0.07);

    ${theme.media._768px} {
        max-width: 750px;
        width: 100%;
    }

    .heading {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid ${theme.colors.lightGrey};
        background-color: ${theme.colors.raisinBlack};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: white;
        margin: 0;
        padding: 10px 0 10px 0;
        font-weight: 400;
        font-size: 20px;
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
        font-weight: 400;
        margin-bottom: 3px;
        font-size: 20px;
    }

    .description {
        margin: 3px 0 15px 0;
        font-weight: 300;
    }

    .source-name {
        margin: 3px 0 3px 0;
        font-weight: 400;
    }

    .published-date {
        font-size: 0.8rem;
        margin: 3px 0 3px 0;
        font-weight: 300;
    }
`
