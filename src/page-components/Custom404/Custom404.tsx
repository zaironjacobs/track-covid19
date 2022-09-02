import { Notfound404, NotFoundPage, NotFoundWrapper } from '@page-components/Custom404/Custom404Styled'
import Head from 'next/head'
import { global } from '@global'

export const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Page not found – {global.siteName}</title>
                <meta name="description" content="page not found" />
            </Head>
            <NotFoundWrapper>
                <Notfound404>404</Notfound404>
                <NotFoundPage>Page Not Found</NotFoundPage>
            </NotFoundWrapper>
        </>
    )
}
