import styled from 'styled-components'
import { Theme } from '@theme'

export const Content = styled.div`
    height: ${Theme.footer.height};
    background: ${Theme.colors.white};
    width: 100%;
    border-top: 1px solid ${Theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 15px 15px;

    .built-by {
    }

    .github-icon-wrapper {
        margin: 25px 0 10px 0;

        .github-icon {
            color: black;
            font-size: 25px;
            transition: 0.3s;

            :hover {
                color: ${Theme.colors.royalBlueLight};
            }
        }
    }

    .select-language-wrapper {
        display: flex;
        width: 80%;
        justify-content: center;
        align-items: center;

        ${Theme.media._1200px} {
            justify-content: flex-end;
        }

        .world-icon-wrapper {
            margin-right: 10px;

            i {
                font-size: 20px;
            }
        }

        .select-language {
            max-width: 225px;
            width: 100%;
        }
    }
`
