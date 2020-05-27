import React from 'react';
import App from 'next/app';
import { appWithTranslation, i18n } from '../i18n';

function MyApp({ Component, pageProps }: any) {
  if (!i18n.language) i18n.changeLanguage('th');
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
