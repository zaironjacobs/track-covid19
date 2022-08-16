import { Content } from '@components/Layout/Header/HeaderStyled'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
    return (
        <Content>
            {/* Logo */}
            <div className="logo-wrapper">
                <Link href="/">
                    <a>
                        <div className="virus-icon-wrapper">
                            <Image src="/images/coronavirus.svg" alt="coronavirus" width={45} height={40} />
                        </div>
                    </a>
                </Link>
                <div className="name">
                    <Link href="/">Track COVID-19</Link>
                </div>
            </div>
        </Content>
    )
}
