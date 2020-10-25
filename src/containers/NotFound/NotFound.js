import React from 'react';
import {MainContainer, Div404, Div404Wrapper, DivPageNotFound} from './NotFoundStyled';
import {ButtonDefault} from '../../theme/globalStyles';
import Link from 'next/link';
import global from 'global';
import Head from 'next/head';

const NotFound = () => {
    return (
        <MainContainer>
            <Head>
                <title>Page not found – {global.siteName}</title>
                <meta name='description' content='page not found'/>
            </Head>
            <Div404Wrapper>
                <Div404>404</Div404>
                <DivPageNotFound>Page Not Found</DivPageNotFound>
                <Link href={global.paths.index}><ButtonDefault>Track COVID-19</ButtonDefault></Link>
            </Div404Wrapper>
        </MainContainer>
    );
}

export default NotFound;
