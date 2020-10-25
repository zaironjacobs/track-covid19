import React from 'react';
import {HeaderContainer, DivLogo} from './HeaderStyled';
import Link from 'next/Link';

const Header = () => {
    return (
        <HeaderContainer>
            <DivLogo><Link href='/'>Track COVID-19</Link></DivLogo>
        </HeaderContainer>
    );
}

export default Header;