import SelectLanguage from '@interface/selectLanguage'
import en from '@locale/en'
import nl from '@locale/nl'

export default {
    en: en,
    nl: nl,
}

export const languages: SelectLanguage[] = [
    { value: 'en', label: 'English' },
    { value: 'nl', label: 'Nederlands' },
]
