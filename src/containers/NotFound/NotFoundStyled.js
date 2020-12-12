import styled from 'styled-components';
import theme from 'theme/theme';
import {Main} from 'theme/globalStyles';

export const MainContainer = styled(Main)`
  display: flex;
  justify-content: center;
  min-height: inherit;
`;

export const Div404Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

export const Div404 = styled.div`
  font-size: 5rem;
  line-height: 1;
  text-transform: uppercase;

  ${theme.mediaQueries.mq_768px} {
    font-size: 8rem;
  }

  ${theme.mediaQueries.mq_1200px} {
    font-size: 10rem;
  }
`;

export const DivPageNotFound = styled.div`
  font-size: ${theme.fontSizes.small};
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  ${theme.mediaQueries.mq_768px} {
    margin-bottom: 1rem;
    font-size: ${theme.fontSizes.medium};
  }

  ${theme.mediaQueries.mq_1200px} {
    font-size: ${theme.fontSizes.extraLarge};
  }
`;
