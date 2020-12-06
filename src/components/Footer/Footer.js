import React from 'react';
import Link from 'next/link';
import {
    FooterContainer, DivGithubIconWrapper,
    DivCopyright, DivInfoWrapper, DivContent
} from './FooterStyled'

const Footer = () => {
    return (
        <FooterContainer>
            <DivContent>
                <DivInfoWrapper>
                    <DivCopyright>
                        Built by Zairon Jacobs
                    </DivCopyright>
                    <DivGithubIconWrapper>
                        <Link href={'https://github.com/zaironjacobs'}>
                            <a><i aria-label='github' className='fab fa-github github-icon'/></a>
                        </Link>
                    </DivGithubIconWrapper>
                </DivInfoWrapper>
            </DivContent>
        </FooterContainer>
    );
}

export default Footer;
