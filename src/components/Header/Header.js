import React from 'react';
import {HeaderContainer, DivContent, DivLogoWrapper, DivLogo} from './HeaderStyled';
import Link from 'next/link';
import CoronavirusIcon from '../../../public/assets/images/coronavirus.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <DivContent>
                <DivLogoWrapper>
                    <Link href='/'><a><CoronavirusIcon className='coronavirus-icon'/></a></Link>
                    <DivLogo>
                        <Link href='/'><a>Track COVID-19</a></Link>
                    </DivLogo>
                </DivLogoWrapper>
            </DivContent>
        </HeaderContainer>
    );
}

export default Header;