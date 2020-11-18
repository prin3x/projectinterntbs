import axios from 'axios';
import * as fbq from 'fbq';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import AppConfig from '../appConfig';
import { StoreContextProvider } from '../components/context/store';
import Proloader from '../components/Proloader';
import { seo } from '../components/seo/defaultseo';
import { appWithTranslation, i18n } from '../i18n';
import { checktoken } from '../services/user/user.service';

const tagManagerArgs = {
  gtmId: AppConfig.GTM_CODE || '',
};

// class MyApp extends App {
//   constructor(props: any) {
//     super(props);

//     axios.interceptors.request.use((config) => {
//       const jwtToken = Cookie.get('TBS_token');
//       if (jwtToken !== null) {
//         config.headers['Authorization'] = `Bearer ${jwtToken}`;
//       }
//       return config;
//     });

//     axios.interceptors.response.use((res) => {
//       // Any status code that lie within the range of 2xx cause this function to trigger
//       return res;
//     }, (error) => {
//       // Any status codes that falls outside the range of 2xx cause this function to trigger
//       const { status } = error.response;
//       if(status === 401) {
//         Router.push('/login');
//       }
//       return Promise.reject(error);
//     });

//   }
//   static async getInitialProps(appContext: any) {
//     const appProps = await App.getInitialProps(appContext);
//     return { ...appProps };
//   }

//   componentDidMount() {
//     if (!i18n.language) i18n.changeLanguage('th');
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//         <StoreContextProvider>
//           <Proloader />
//           <Component {...pageProps} />
//         </StoreContextProvider>
//       </>
//     );
//   }
// }
//     axios.interceptors.request.use((config) => {
//       const jwtToken = Cookie.get('TBS_token');
//       if (jwtToken !== null) {
//         config.headers['Authorization'] = `Bearer ${jwtToken}`;
//       }
//       return config;
//     });

axios.interceptors.request.use((config) => {
  const jwtToken = Cookie.get('TBS_token');
  if (jwtToken) {
    config.headers['Authorization'] = `Bearer ${jwtToken}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return res;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { status } = error.response;
    if (status === 401) {
      Router.push('/log-in');
    }
    return Promise.reject(error);
  },
);

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

    if (!fbq.init(AppConfig.facebookConversionTracking.PIXEL_ID))
      console.warn('fbq init failed.');

    handleRouteChange(router.pathname);
    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo {...seo} />
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
