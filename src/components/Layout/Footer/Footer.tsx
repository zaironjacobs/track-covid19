import Link from 'next/link'
import { Content } from '@components/Layout/Footer/FooterStyled'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Select from 'react-select'
import { ILocaleOption } from '@interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    //const [selectedLanguageLabel, setSelectedLanguageLabel]: [string, Dispatch<any>] = useState('')
    const router = useRouter()
    const { pathname, asPath, query, locale, locales } = router
    const [localeOptions, setLocaleOptions] = useState<ILocaleOption[]>(undefined as any)

    // Set the locales options
    useEffect(() => {
        if (!locales) return
        const options: ILocaleOption[] = []
        for (const locale of locales) options.push({ value: locale, label: locale })
        setLocaleOptions(options)
    }, [locales])

    // Change the locale
    const onChangeLocale = (nextLocale: string) => {
        if (!nextLocale) return
        if (locale === nextLocale) return
        router.push({ pathname, query }, asPath, { locale: nextLocale }).then()
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
        <>
            <Content>
                {/* Select language */}
                <div className="select-language-wrapper">
                    <div className="world-icon-wrapper">
                        <i className="fas fa-globe-americas" />
                    </div>
                    <Select
                        placeholder={locale}
                        className="select-language"
                        options={localeOptions}
                        styles={selectCustomStyles}
                        onChange={(option) => {
                            if (option) onChangeLocale(option.value)
                        }}
                        instanceId="select-language"
                        menuPlacement="top"
                    />
                </div>

                {/* Github */}
                <div className="github-icon-wrapper">
                    <Link href={'https://github.com/zaironjacobs'}>
                        <a target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="github-icon" />
                        </a>
                    </Link>
                </div>

                {/* Built by */}
                <div className="built-by">
                    <Link href={'https://zaironjacobs.com'}>
                        <a target="_blank">Built by Zairon Jacobs</a>
                    </Link>
                </div>
            </Content>
        </>
    )
}
