import {ThemeProvider} from "styled-components";
import theme from 'theme';
import {GlobalStyle} from '@style/GlobalStyle';
import Layout from '@component/Layout';


const App = ({Component, pageProps}) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default App;
