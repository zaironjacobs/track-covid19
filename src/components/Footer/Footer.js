import React from 'react';
import Link from 'next/link';
import {
    FooterContainer, DivGithubIconWrapper,
    DivBuiltBy, DivInfoWrapper, DivContent
} from './FooterStyled'

const Footer = () => {
    return (
        <FooterContainer>
            <DivContent>
                <DivInfoWrapper>
                    <DivGithubIconWrapper>
                        <Link href={'https://github.com/zaironjacobs'}>
                            <a target='_blank'><i aria-label='github' className='fab fa-github github-icon'/></a>
                        </Link>
                    </DivGithubIconWrapper>
                    <DivBuiltBy>
                        <Link href={'https://zaironjacobs.com'}>
                            <a target='_blank'>Built by Zairon Jacobs</a>
                        </Link>
                    </DivBuiltBy>
                </DivInfoWrapper>
            </DivContent>
        </FooterContainer>
    );
}

export default Footer;
