import {Content} from '@style/HeaderStyled';
import Link from 'next/link';


const Header = () => {
    return (
        <>
            <Content>

                {/* Logo */}
                <div className='logo-wrapper'>
                    <Link href='/'>
                        <div className='virus-icon-wrapper'>
                            <img src='/images/coronavirus.svg' alt='coronavirus'/>
                        </div>
                    </Link>
                    <div className='name'>
                        <Link href='/'>Track COVID-19</Link>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Header;