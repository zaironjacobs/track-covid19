import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {DivApp, AnchorArrowUp, DivContainer} from 'theme/globalStyles';
import {ThemeProvider} from "styled-components";
import Theme from 'theme/theme';
import {GlobalStyles} from 'theme/globalStyles';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SWRConfig} from 'swr';
import Head from 'next/head';
import global from 'global';

export default function MyApp({Component, pageProps}) {
    const [arrowUpOpen, setArrowUpOpen] = useState(false);

    const toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const arrowUpScrollFunction = () => {
        const y = window.scrollY;
        if (y >= 200) {
            setArrowUpOpen(true);
        } else {
            setArrowUpOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", arrowUpScrollFunction);
    });


    const fetcher = (url) => axios(url).then(res => res.data);

    return (
        <DivApp>
            <Head>
                <title>{'Site – ' + global.siteName}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'/>
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
                    rel='stylesheet'/>
                <link
                    rel="stylesheet" href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
                    integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
                    crossOrigin='anonymous'/>
            </Head>
            <SWRConfig value={fetcher}>
                <ThemeProvider theme={Theme}>
                    <GlobalStyles/>
                    <Header/>
                    <DivContainer>
                        <Component {...pageProps} />
                    </DivContainer>
                    <Footer/>
                    <AnchorArrowUp arrowUpOpen={arrowUpOpen}>
                        <i onClick={toTop} className="fas fa-arrow-up arrow-up"/>
                    </AnchorArrowUp>
                </ThemeProvider>
            </SWRConfig>
        </DivApp>
    )
}
