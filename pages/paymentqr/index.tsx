import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/paymentqr/HeroSection';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/paymentqr';
const Paymentqr = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <NextSeo openGraph={seo.openGraph} />
    </Head>
    {/* <Proloader /> */}
    <div className="page_wrapper">
      <div
        className="hero_section v3 payment_home lazyload"
        data-bgset="/img/bg_12.png"
        style={{
          // backgroundImage: 'url(/img/bg_12.png)',
          backgroundSize: 'contain',
        }}
      >
        <HeroSection />
        <Help />
      </div>
    </div>
    <BacktoTop />
  </Layout>
);
Paymentqr.getInitialProps = async () => ({
  namespacesRequired: ['PaymentqrMeta'],
});
export default withTranslation('PaymentqrMeta')(Paymentqr);
