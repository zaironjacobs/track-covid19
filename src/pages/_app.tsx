import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import Layout from '@components/Layout'
import { NextRouter, useRouter } from 'next/router'
import locales from '@locales/index'

const App = ({ Component, pageProps }) => {
    const router: NextRouter = useRouter()
    const { locale } = router
    let i18n
    switch (locale) {
        case 'en':
            i18n = locales.en
            break
        case 'nl':
            i18n = locales.nl
            break
        default:
            i18n = locales.en
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} i18n={i18n} />
            </Layout>
        </ThemeProvider>
    )
}

export default App
