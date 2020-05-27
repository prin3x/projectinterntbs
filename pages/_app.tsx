import React from 'react';
import App from 'next/app';
import { appWithTranslation, i18n } from '../i18n';

function MyApp({ Component, pageProps }: any) {
  console.log('runnnnnnnnnnnnn');
  console.log(console.log(i18n.language));
  if (!i18n.language) i18n.changeLanguage('th');
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  // console.log(i18n.language);
  // console.log(i18n);
  // i18n.changeLanguage('th');
  return { ...appProps };
};

export default appWithTranslation(MyApp);
