import Link from 'next/link'
import {
    BuiltBy,
    GitHubIcon,
    GitHubIconWrapper,
    SelectLanguage,
    SelectLanguageWrapper,
    WorldIconWrapper,
    Wrapper,
} from '@components/Layout/Footer/FooterStyled'
import { useRouter } from 'next/router'
import { ILocaleOption } from '@interfaces'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    const router = useRouter()
    const { pathname, asPath, query, locale, locales } = router

    const localeOptions: ILocaleOption[] = []
    if (locales) for (const locale of locales) localeOptions.push({ value: locale, label: locale })

    // Change the locale
    function onChangeLocale(option: ILocaleOption) {
        if (locale === option.value) return
        router.push({ pathname, query }, asPath, { locale: option.value }).then()
    }

    // Custom styles for Select
    const selectCustomStyles: {} = {
        option: (styles: any) => ({
            ...styles,
            cursor: 'pointer',
        }),
        control: (styles: any) => ({
            ...styles,
            cursor: 'pointer',
        }),
    }

    return (
        <Wrapper>
            {/* Select language */}
            <SelectLanguageWrapper>
                <WorldIconWrapper>
                    <i className="fas fa-globe-americas" />
                </WorldIconWrapper>
                <SelectLanguage
                    placeholder={locale}
                    options={localeOptions}
                    styles={selectCustomStyles}
                    onChange={(option) => onChangeLocale(option as ILocaleOption)}
                    instanceId="select-language"
                    menuPlacement="top"
                />
            </SelectLanguageWrapper>

            {/* Github */}
            <GitHubIconWrapper>
                <Link href={'https://github.com/zaironjacobs'}>
                    <a target="_blank">
                        <GitHubIcon icon={faGithub} />
                    </a>
                </Link>
            </GitHubIconWrapper>

            {/* Built by */}
            <BuiltBy>
                <Link href={'https://zaironjacobs.com'}>
                    <a target="_blank">Built by Zairon Jacobs</a>
                </Link>
            </BuiltBy>
        </Wrapper>
    )
}
