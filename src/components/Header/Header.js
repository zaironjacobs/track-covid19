import React from 'react';
import {HeaderContainer, DivContent, DivLogoWrapper, DivLogo, ImgCoronavirusIcon} from './HeaderStyled';
import Link from 'next/link';
import coronavirusIcon from 'assets/images/coronavirus.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <DivContent>
                <DivLogoWrapper>
                    <Link href='/'>
                        <a>
                            <ImgCoronavirusIcon src={coronavirusIcon} alt='coronavirus'/>
                        </a>
                    </Link>
                    <DivLogo>
                        <Link href='/'><a>Track COVID-19</a></Link>
                    </DivLogo>
                </DivLogoWrapper>
            </DivContent>
        </HeaderContainer>
    );
}

export default Header;
