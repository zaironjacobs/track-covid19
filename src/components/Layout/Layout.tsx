import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import { Footer } from '@components/Layout/Footer'
import { ReactNode } from 'react'
import { Global } from '@global'
import { Header } from '@components/Layout/Header'

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            {/* Title */}
            <Head>
                <title>{Global.siteName}</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Page content */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    )
}
