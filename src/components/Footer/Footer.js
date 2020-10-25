import React from 'react';
import Link from 'next/Link';
import {
    FooterContainer, DivTopLine, DivGithubIconWrapper,
    DivCopyright, DivWrapper,
} from './FooterStyled'

const Footer = () => {
    return (
        <FooterContainer>
            <DivTopLine/>
            <DivWrapper>
                <DivCopyright>
                    Made by Zairon Jacobs
                </DivCopyright>
                <DivGithubIconWrapper>
                    <Link href={'https://github.com/zaironjacobs'}>
                        <a><i aria-label='github' className='fab fa-github github-icon'/></a>
                    </Link>
                </DivGithubIconWrapper>
            </DivWrapper>
        </FooterContainer>
    );
}

export default Footer;