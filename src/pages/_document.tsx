import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Track COVID19" />
                    <meta name="description" content="Track COVID19" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />*/}
                    {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />*/}
                    {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />*/}
                    {/*<link rel="manifest" href="/site.webmanifest" />*/}
                    <meta name="description" content="Notes" />

                    <meta property="og:image" content="" />
                    <meta property="og:image:alt" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://covid19.zaironjacobs.com" />
                    <meta property="og:title" content="Track COVID19" />
                    <meta property="og:site_name" content="Track COVID19" />
                    <meta property="og:description" content="Track COVID19" />
                    <meta property="og:locale" content="en_US" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="covid19.zaironjacobs.com" />
                    <meta property="twitter:url" content="https://covid19.zaironjacobs.com/" />
                    <meta name="twitter:title" content="Track COVID19" />
                    <meta name="twitter:description" content="Track COVID19" />
                    <meta name="twitter:image" content="" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
