import '@styles/fonts.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import { Layout } from '@components/Layout'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

fontAwesomeConfig.autoAddCss = false

export const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
