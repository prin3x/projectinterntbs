import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';
import th from '../public/locales/th/Header.json'
import en from '../public/locales/en/Header.json'


const myLoader = ({src}) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const HeaderSubmodule = ({
    isLogin,
    lang,
    setLang,
    Cookie,
    setIsLogin,
    onSwitchLanguage,
    MySelect,
}) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const headerBar = useRef(null);
    function sticky() {
        var scroll = window.pageYOffset;
        if (headerBar.current !== null) {
            if (scroll < 40) {
                headerBar.current.classList.remove('sticky');
            } else {
                headerBar.current.classList.add('sticky');
            }
        }
    }

    useEffect(() => {
        async function loadCookies() {
            if (Cookie.get('LANG')) {
                const textLang = Cookie.get('LANG');
                setLang(textLang);
            }
        }
        loadCookies();
        // check Cookie Login
        if (Cookie.get('PASSCODE')) {
            setIsLogin(true);
        }
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    }, [setLang]);

    const HeaderLoginMenuMobile = ({ t, isLogin }) => {
        return (
            <div className="menu_btn">
                <ul>
                    <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                            <a className="btn v5 btn-sum-menu-mobile loginLink closemenu">
                                {isLogin === true ? t.header["Enter the system"] : t.header['Login']}
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL + '/pricing/'}`}>
                            <a className="btn v3 btn-sum-menu-mobile closemenu">
                                {isLogin === true ? t.header["Buy"] : t.header['Free trial']}
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const HeaderTopMenuMobile = () => (
        <div className="site-mobile-menu-header">
            <div className="row">
                <div
                    className="col-8"
                    style={{
                        marginTop: '0px',
                        paddingLeft: '35px',
                        paddingTop: '20px',
                    }}
                >
                    <Link href="/">
                        <a className="navbar-brand p-0 m-0 img-logo-title-menu-mobile closemenu">
                            <Image loader={myLoader} src="logo_1.png" alt="Logo" width={216} height={28} />
                        </a>
                    </Link>
                </div>
                <div className="col-4" style={{ paddingRight: '35px' }}>
                    <div className="site-mobile-menu-close  js-menu-toggle">
                        <span className="ion-ios-close-empty"></span>{' '}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={headerBar} className="header-bar-area position-fixed w-100 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 lg-none">
                        <div className="header_top">
                            <div className="header_contact_no">
                                <Link href="tel:027986000">
                                    <a>02-798-6000</a>
                                </Link>
                            </div>
                            <div className="header_select">
                                <select className="user_select" onChange={(e) => onSwitchLanguage(e)} defaultValue={lang}>
                                    <option value="th">TH</option>
                                    <option value="en">EN</option>
                                </select>
                                <select
                                    className="user_select"
                                    onChange={(e) =>
                                        onSwitchLanguage(e.currentTarget.value)
                                    }
                                    value={lang}
                                >
                                    {MySelect}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-9">
                        <Link href="/">
                            <a className="navbar-brand p-0 m-0">
                                <Image loader={myLoader} src="logo_1.png" alt="Logo" width={216} height={28} />
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-3 text-right"></div>
                    {/* end new sub menu mobile */}
                    <div className="col-lg-3 lg-none">
                        <div className="menu_btn">
                            <ul>
                                <li>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`} target="_blank">
                                        <a className="loginLink">
                                            {t.header["Free trial"]}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#all-pricing">
                                        <a className="btn v1">ดูราคาแพ็กเกจ</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSubmodule;
