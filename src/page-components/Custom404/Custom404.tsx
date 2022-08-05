import { MainContainer, NotFoundWrapper } from '@page-components/Custom404/Custom404Styled'
import Head from 'next/head'
import { Global } from '@global'

export const Custom404 = () => {
    return (
        <MainContainer>
            <Head>
                <title>Page not found – {Global.siteName}</title>
                <meta name="description" content="page not found" />
            </Head>
            <NotFoundWrapper>
                <div className="not-found-404">404</div>
                <div className="not-found-page">Page Not Found</div>
            </NotFoundWrapper>
        </MainContainer>
    )
}
