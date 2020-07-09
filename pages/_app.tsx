import App from 'next/app';
import Router, { useRouter } from 'next/router';
import { appWithTranslation, i18n } from '../i18n';
import React, { useEffect } from 'react';
import { checktoken } from '../services/user/user.service';
import Proloader from '../components/Proloader';
function MyApp({ Component, pageProps }: any) {
  if (!i18n.language) i18n.changeLanguage('th');
  const router = useRouter();
  const handleRouteChange = async (url: string) => {
    if ((await checktoken()) && url === '/log-in') {
      Router.push('/member');
    }
  };
  useEffect(() => {
    handleRouteChange(router.pathname);
    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <>
      <Proloader />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
