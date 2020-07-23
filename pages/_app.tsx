import App from 'next/app';
import Router, { useRouter } from 'next/router';
import { appWithTranslation, i18n } from '../i18n';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { checktoken } from '../services/user/user.service';
import Proloader from '../components/Proloader';
import { StoreContextProvider } from '../components/context/store';
import AppConfig from '../appConfig';
const tagManagerArgs = {
  gtmId: AppConfig.GTM_CODE || '',
};

function MyApp({ Component, pageProps }: any) {
  if (!i18n.language) i18n.changeLanguage('th');
  const router = useRouter();
  const handleRouteChange = async (url: string) => {
    if ((await checktoken()) && url === '/log-in') {
      // Router.push('/member');
      window.location.replace('https://member.thaibulksms.com/');
    }
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    handleRouteChange(router.pathname);
    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <>
      <StoreContextProvider>
        <Proloader />
        <Component {...pageProps} />
      </StoreContextProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
