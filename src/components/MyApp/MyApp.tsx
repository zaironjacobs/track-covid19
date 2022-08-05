import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { MyAppStyled } from '@components/MyApp/MyAppStyled'
import { Layout } from '@components/Layout'
import { Theme } from '@theme'

export const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={Theme}>
            <MyAppStyled />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
