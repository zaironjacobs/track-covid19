import styled from 'styled-components'
import { theme } from '@theme'

export const NotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
`

export const NotFoundPage = styled.div`
    font-size: 20px;
    text-transform: uppercase;

    ${theme.media._768px} {
        font-size: 24px;
    }

    ${theme.media._1200px} {
        font-size: 26px;
    }
`

export const Notfound404 = styled.div`
    font-size: 100px;
    line-height: 1;
    text-transform: uppercase;

    ${theme.media._768px} {
        font-size: 140px;
    }

    ${theme.media._1200px} {
        font-size: 160px;
    }
`
