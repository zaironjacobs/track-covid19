import Head from 'next/head'
import global from 'global'
import Footer from '@components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            {/* Head */}
            <Head>
                <title>{global.siteName}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="title" content="Track COVID19" />
                <meta name="description" content="Track COVID19" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

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

            {/* Page content */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Layout
