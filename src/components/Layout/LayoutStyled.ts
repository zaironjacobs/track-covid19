import styled from 'styled-components'
import { theme } from '@theme'

export const Wrapper = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 8px 50px 8px;
    min-height: calc(100vh - ${theme.header.mobileHeight} - ${theme.footer.height});

    ${theme.media._992px} {
        padding-bottom: 50px;
    }

    ${theme.media._1200px} {
        min-height: calc(100vh - ${theme.header.height} - ${theme.footer.height});
    }
`

