import Link from 'next/link';
import {Content} from '@style/FooterStyled'


const Footer = () => {
    return (
        <>
            <Content>
                <div className='github-icon-wrapper'>
                    <Link href={'https://github.com/zaironjacobs'}>
                        <a target='_blank'><i aria-label='github' className='fab fa-github github-icon'/></a>
                    </Link>
                </div>
                <div className='built-by'>
                    <Link href={'https://zaironjacobs.com'}>
                        <a target='_blank'>Built by Zairon Jacobs</a>
                    </Link>
                </div>
            </Content>
        </>
    );
}

export default Footer;