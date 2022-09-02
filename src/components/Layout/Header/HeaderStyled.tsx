import styled from 'styled-components'
import { theme } from '@theme'

export const Wrapper = styled.header`
    z-index: 9999;
    height: ${theme.header.mobileHeight};
    position: sticky;
    top: 0;
    background: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    box-shadow: 0 5px 15px rgba(0, 115, 235, 0.05);

    ${theme.media._992px} {
        height: ${theme.header.height};
    }
`

export const VirusIconWrapper = styled.div`
    margin-right: 10px;
`
export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Name = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    font-size: 22px;

    ${theme.media._768px} {
        font-size: 32px;
    }

    a {
        text-decoration: none;
        font-weight: 400;
        color: ${theme.colors.black};
    }

    ${theme.media._992px} {
        padding-left: 0;
    }
`
