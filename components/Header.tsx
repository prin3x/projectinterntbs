import { i18n, withTranslation } from '../i18n';
import React, { useState } from 'react';
import Cookie from 'js-cookie';
import appConfig from '../appConfig';
import HeaderSubmodule from '../tbs_submodule/HeaderSubmodule.js';
import MyHeader from '../components/myHeader';
import { useRouter } from 'next/router';
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

const Header = ({ t }: any) => {
    const { pathname } = useRouter();
    const [lang, setLang] = useState('TH');
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
        i18n.changeLanguage(value.toLowerCase());
    };

    const headerConfig = {
        lang,
        setLang,
        isLogin,
        setIsLogin,
        t,
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

export default withTranslation('Header')(Header);
