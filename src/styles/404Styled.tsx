import styled from 'styled-components'
import theme from 'theme'
import { Main } from '@styless/GlobalStyle'

export const MainContainer = styled(Main)`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - ${theme.footer.height});
`

export const NotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;

    .not-found-404 {
        font-size: 100px;
        line-height: 1;
        text-transform: uppercase;

        ${theme.media._768px} {
            font-size: 140px;
        }

        ${theme.media._1200px} {
            font-size: 160px;
        }
    }

    .not-found-page {
        font-size: 20px;
        text-transform: uppercase;

        ${theme.media._768px} {
            font-size: 24px;
        }

        ${theme.media._1200px} {
            font-size: 26px;
        }
    }
`
