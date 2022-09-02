import { LogoWrapper, Name, VirusIconWrapper, Wrapper } from '@components/Layout/Header/HeaderStyled'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Link href="/">
                    <a>
                        <VirusIconWrapper>
                            <Image src="/images/coronavirus.svg" alt="coronavirus" width={45} height={40} />
                        </VirusIconWrapper>
                    </a>
                </Link>
                <Name>
                    <Link href="/">
                        <a>Track COVID-19</a>
                    </Link>
                </Name>
            </LogoWrapper>
        </Wrapper>
    )
}
