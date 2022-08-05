import styled from 'styled-components'
import { Theme } from '@theme'

export const Content = styled.header`
    z-index: 9999;
    height: ${Theme.header.mobileHeight};
    position: sticky;
    top: 0;
    background: ${Theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${Theme.colors.lightGrey};
    box-shadow: 0 5px 15px rgba(0, 115, 235, 0.05);

    ${Theme.media._992px} {
        height: ${Theme.header.height};
    }

    .logo-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .name {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        text-align: center;
        font-size: 22px;

        ${Theme.media._768px} {
            font-size: 32px;
        }

        a {
            text-decoration: none;
            font-weight: 400;
            color: ${Theme.colors.black};
        }

        ${Theme.media._992px} {
            padding-left: 0;
        }
    }

    .virus-icon-wrapper {
        margin-right: 10px;
    }
`
