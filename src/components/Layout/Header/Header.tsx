import { Content } from '@components/Layout/Header/HeaderStyled'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
    return (
        <Content>
            {/* Logo */}
            <div className="logo-wrapper">
                <Link href="/src/pages" passHref>
                    <div className="virus-icon-wrapper">
                        <Image src="/images/coronavirus.svg" alt="coronavirus" width={45} height={40} />
                    </div>
                </Link>
                <div className="name">
                    <Link href="/src/pages">Track COVID-19</Link>
                </div>
            </div>
        </Content>
    )
}
