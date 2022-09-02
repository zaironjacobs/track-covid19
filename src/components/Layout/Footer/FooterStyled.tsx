import styled from 'styled-components'
import { theme } from '@theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'

export const Wrapper = styled.div`
    height: ${theme.footer.height};
    background: ${theme.colors.white};
    width: 100%;
    border-top: 1px solid ${theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 15px 15px;
`

export const SelectLanguageWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;

    ${theme.media._1200px} {
        justify-content: flex-end;
    }
`

export const WorldIconWrapper = styled.div`
    margin-right: 10px;

    i {
        font-size: 20px;
    }
`

export const SelectLanguage = styled(Select)`
    max-width: 225px;
    width: 100%;
`

export const GitHubIconWrapper = styled.div`
    margin: 25px 0 10px 0;
`

export const GitHubIcon = styled(FontAwesomeIcon)`
    color: black;
    font-size: 25px;
    transition: 0.3s;

    :hover {
        color: ${theme.colors.royalBlueLight};
    }
`
export const BuiltBy = styled.div`
    a {
        color: ${theme.colors.black};
        text-decoration: none;
        transition: 0.3s;

        :hover {
            color: ${theme.colors.royalBlueLight};
        }
    }
`
