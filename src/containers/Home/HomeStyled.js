import styled from 'styled-components';
import theme from 'theme/theme';
import {Main} from 'theme/globalStyles';

export const MainContainer = styled(Main)`
    
`;

export const DivTopIconWrapper = styled.div`
  width: 100%;
  text-align: center;

  .top-icon {
    width: 50px;
    height: auto;
    vertical-align: bottom;

    ${theme.mediaQueries.mq_992px} {
      width: 100px;
    }
  }
`;

export const H1Country = styled.h1`

`;

export const DivBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mediaQueries.mq_1200px} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DivBox = styled.div`
  border: 1px solid #f1f1f1;
  width: 350px;
  height: 150px;
  margin-bottom: 35px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0, 115, 235, .07);
  border-radius: 5px;

  ${theme.mediaQueries.mq_1200px} {
    width: 275px;
  }
`;

export const DivBoxPanelHeading = styled.div`
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

export const DivCasesNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 115px;
  font-size: ${theme.fontSizes.medium};
  font-weight: 400;
`;

export const DivLastUpdated = styled.div`
  text-align: center;
`;

export const DivDataSource = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const ButtonToggleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 15px;

  ${theme.mediaQueries.mq_992px} {
    margin-bottom: 35px;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;

  .select-box {
    width: 350px;
    margin: 0 auto;

    ${theme.mediaQueries.mq_992px} {
      width: 50%
    }

    ${theme.mediaQueries.mq_992px} {
      margin-top: 35px;
    }
`;

export const ButtonToggle = styled.button`
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

  ${theme.mediaQueries.mq_768px} {
    height: 45px;
    width: 350px;
    font-size: 1.2rem;
  }
`


