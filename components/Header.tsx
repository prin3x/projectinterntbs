import React, { useState } from 'react';
import Cookie from 'js-cookie';
import appConfig from '../appConfig';
import HeaderSubmodule from '../tbs_submodule/HeaderSubmodule';
import MyHeader from '../components/myHeader';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import th from '../public/static/locales/th/Header.json'
import en from '../public/static/locales/en/Header.json'
=======
import th from '../public/locales/th/Header.json';
import en from '../public/locales/en/Header.json';
>>>>>>> 77c5c178db9320fea644406d7e707eee6bd28d55

const options = [
    { value: 'TH', text: 'TH' },
    { value: 'EN', text: 'EN' },
];

const MySelect = options.map((list) => {
    return (
        <option key={list.value} value={list.value}>
            {list.text}
        </option>
    );
});

const Header = () => {
    const { pathname } = useRouter();
    const router = useRouter();
<<<<<<< HEAD

    const { locale } = router;
    const t = locale === 'th' ? th : en;

=======
    const {locale} = router;
>>>>>>> 77c5c178db9320fea644406d7e707eee6bd28d55
    const [lang, setLang] = useState('TH');
    const t = locale === 'th' ? th : en;
    const [isLogin, setIsLogin] = useState(
        Cookie.get('PASSCODE') ? true : false
    );

    // function menuClick() {
    //   var elDivnice = document.getElementsByClassName('divnice')[0];
    //   if (elDivnice.classList.contains('open'))
    //     elDivnice.classList.remove('open');
    //   else elDivnice.classList.add('open');
    // }

    const onSwitchLanguage = (value: string) => {
        setLang(value);
        let domain = 'localhost';
        if (appConfig.APP_ENV === appConfig.production)
            domain = '.thaibulksms.com';
        else if (appConfig.APP_ENV === appConfig.internalTest)
            domain = '.1mobyline.com';
        Cookie.set('LANG', value, {
            domain,
            expires: 7,
        });
<<<<<<< HEAD
        // i18n.changeLanguage(value.toLowerCase());
        const locale = value.toLowerCase();
        router.push(router.pathname, router.asPath, { locale })
=======
        const locale = value.toLowerCase();
        router.push(router.pathname, router.asPath, { locale });
>>>>>>> 77c5c178db9320fea644406d7e707eee6bd28d55
    };

    const headerConfig = {
        lang,
        setLang,
        isLogin,
        setIsLogin,
        Cookie,
        onSwitchLanguage,
        MySelect,
    };

    return pathname === '/pricing-c' || pathname === '/pricing-b' ? (
        <MyHeader {...headerConfig} />
    ) : (
        <HeaderSubmodule {...headerConfig} />
    );

};
Header.getInitialProps = async () => ({
    namespacesRequired: ['Header'],
});

export default Header;
