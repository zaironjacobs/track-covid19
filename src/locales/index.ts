import SelectLanguage from '@interfaces/selectLanguage'
import en from '@locales/en'
import nl from '@locales/nl'

export default {
    en: en,
    nl: nl,
}

export const languages: SelectLanguage[] = [
    { value: 'en', label: 'English' },
    { value: 'nl', label: 'Nederlands' },
]
