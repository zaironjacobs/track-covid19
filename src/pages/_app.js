import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {DivApp, AnchorArrowUp, DivContent} from 'theme/globalStyles';
import {ThemeProvider} from "styled-components";
import Theme from 'theme/theme';
import {GlobalStyles} from 'theme/globalStyles';
import React, {useState, useEffect} from 'react';
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

    return (
        <DivApp>
            <Head>
                <title>{global.siteName}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'/>
                <meta name='format-detection' content='telephone=no'/>
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
                    rel='stylesheet'/>
                <link rel="stylesheet"
                      href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                      integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                      crossOrigin="anonymous"/>
            </Head>
            <ThemeProvider theme={Theme}>
                <GlobalStyles/>
                <Header/>
                <DivContent>
                    <Component {...pageProps} />
                </DivContent>
                <Footer/>
                <AnchorArrowUp arrowUpOpen={arrowUpOpen}>
                    <i onClick={toTop} className="fas fa-arrow-up arrow-up"/>
                </AnchorArrowUp>
            </ThemeProvider>
        </DivApp>
    )
}
