import styled from 'styled-components'
import { Theme } from '@theme'
import { Main } from '@components/MyApp/MyAppStyled'

export const MainContainer = styled(Main)`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - ${Theme.footer.height});
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

        ${Theme.media._768px} {
            font-size: 140px;
        }

        ${Theme.media._1200px} {
            font-size: 160px;
        }
    }

    .not-found-page {
        font-size: 20px;
        text-transform: uppercase;

        ${Theme.media._768px} {
            font-size: 24px;
        }

        ${Theme.media._1200px} {
            font-size: 26px;
        }
    }
`
