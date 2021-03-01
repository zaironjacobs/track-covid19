import styled from 'styled-components';
import theme from 'theme';


export const Content = styled.div`
  height: ${theme.heights.footer};
  background: ${theme.colors.white};
  width: 100%;
  border-top: 1px solid ${theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .built-by {
  }

  .github-icon-wrapper {
    margin-bottom: 10px;

    .github-icon {
      color: black;
      font-size: 25px;
    }
  }
`;

