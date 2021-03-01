import React from 'react';
import {Div404, Div404Wrapper, DivPageNotFound, MainContainer} from '@style/404Styled';
import Head from 'next/head';
import global from 'global';

function Custom404() {
    return (
        <>
            <MainContainer>
                <Head>
                    <title>Page not found – {global.siteName}</title>
                    <meta name='description' content='page not found'/>
                </Head>
                <Div404Wrapper>
                    <Div404>404</Div404>
                    <DivPageNotFound>Page Not Found</DivPageNotFound>
                </Div404Wrapper>
            </MainContainer>
        </>
    );
}

export default Custom404;