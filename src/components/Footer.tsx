import Link from 'next/link';
import {Content} from '@style/FooterStyled'
import SelectLanguage from '@interface/selectLanguage';
import {Dispatch, useEffect, useState} from 'react';
import {NextRouter, useRouter} from 'next/router';
import Select from 'react-select';
import {languages} from '@locale/index';


const Footer = () => {
    const [selectedLanguageLabel, setSelectedLanguageLabel]: [string, Dispatch<any>] = useState('');
    const router: NextRouter = useRouter();

    // Set the current language label detected by NextRouter
    useEffect(() => {
        const {locale} = router;
        let language: SelectLanguage;
        switch (locale) {
            case 'en':
                language = languages.find((language: SelectLanguage) => {
                    return language.value === 'en';
                });
                setSelectedLanguageLabel(language.label);
                break;
            case 'nl':
                language = languages.find((language: SelectLanguage) => {
                    return language.value === 'nl';
                });
                setSelectedLanguageLabel(language.label);
                break;
            default:
                language = languages.find((language: SelectLanguage) => {
                    return language.value === 'en';
                });
                setSelectedLanguageLabel(language.label);
        }
    }, []);

    // Change the language
    const changeLanguage = (value) => {
        const {locale} = router;
        if (value == locale) {
            return;
        }
        router.push('/', '/', {locale: value});
    }

    // Custom styles for Select
    const selectCustomStyles: {} = {
        option: (styles) => ({
            ...styles,
            cursor: 'pointer',
        }),
        control: (styles) => ({
            ...styles,
            cursor: 'pointer',
        })
    };

    return (
        <>
            <Content>

                {/* Select language */}
                <div className='select-language-wrapper'>
                    <div className='world-icon-wrapper'>
                        <i className='fas fa-globe-americas'/>
                    </div>
                    <Select placeholder={selectedLanguageLabel}
                            className='select-language'
                            options={languages}
                            styles={selectCustomStyles}
                            onChange={language => {
                                setSelectedLanguageLabel(language);
                                changeLanguage(language.value);
                            }}
                            instanceId='select-language'
                            menuPlacement='top'
                    />
                </div>

                {/* Github */}
                <div className='github-icon-wrapper'>
                    <Link href={'https://github.com/zaironjacobs'}>
                        <a target='_blank'><i aria-label='github' className='fab fa-github github-icon'/></a>
                    </Link>
                </div>

                {/* Built by */}
                <div className='built-by'>
                    <Link href={'https://zaironjacobs.com'}>
                        <a target='_blank'>Built by Zairon Jacobs</a>
                    </Link>
                </div>

            </Content>
        </>
    );
}

export default Footer;