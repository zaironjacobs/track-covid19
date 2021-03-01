import React from 'react';
import {Content} from '@style/HeaderStyled';
import Link from 'next/link';


const Header = () => {
    return (
        <>
            <Content>
                <div className='logo-wrapper'>
                    <Link href='/'>
                        <a>
                            <div className='virus-icon-wrapper'>
                                <img src='/images/coronavirus.svg' alt='coronavirus'/>
                            </div>
                        </a>
                    </Link>
                    <div className='name'>
                        <Link href='/'><a>Track COVID-19</a></Link>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Header;