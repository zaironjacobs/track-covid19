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
                            <a><i aria-label='github' className='fab fa-github github-icon'/></a>
                        </Link>
                    </DivGithubIconWrapper>
                    <DivBuiltBy>
                        Built by Zairon Jacobs
                    </DivBuiltBy>
                </DivInfoWrapper>
            </DivContent>
        </FooterContainer>
    );
}

export default Footer;
