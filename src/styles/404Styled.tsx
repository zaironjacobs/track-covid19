import styled from 'styled-components';
import theme from 'theme';
import {Main} from '@style/GlobalStyle';

export const MainContainer = styled(Main)`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${theme.heights.footer});
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;

  .not-found-404 {
    font-size: 5rem;
    line-height: 1;
    text-transform: uppercase;

    ${theme.media._768px} {
      font-size: 8rem;
    }

    ${theme.media._1200px} {
      font-size: 10rem;
    }
  }

  .page-not-found {
    font-size: ${theme.fontSizes.small};
    margin-bottom: 0.5rem;
    text-transform: uppercase;

    ${theme.media._768px} {
      margin-bottom: 1rem;
      font-size: ${theme.fontSizes.medium};
    }

    ${theme.media._1200px} {
      font-size: ${theme.fontSizes.extraLarge};
    }
  }
`;
