import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import { Footer } from '@components/Layout/Footer'
import { ReactNode } from 'react'
import { global } from '@global'
import { Header } from '@components/Layout/Header'
import { Wrapper } from './LayoutStyled'

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            {/* Title */}
            <Head>
                <title>{global.siteName}</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Page content */}
            <Wrapper>{children}</Wrapper>

            {/* Footer */}
            <Footer />
        </>
    )
}
