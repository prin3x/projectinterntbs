import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/otp/HeroSection';
import SmsSection from '../../components/otp/SmsSection';
import SimpleIconSection from '../../components/otp/SimpleIconSection';
import TrackSection from '../../components/otp/TrackSection';
import CtaSection from '../../components/otp/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/otp';
import { withTranslation } from '../../i18n';
const Otp = ({ t }: any) => (
  <Layout>
    <Head>
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      openGraph={seo.openGraph}
      title={t('title')}
      description={t('description')}
    />
    {/* <Proloader /> */}
    <div className="page_wrapper">
      <HeroSection />
      <SmsSection />
      <SimpleIconSection />
      <TrackSection />
      <CtaSection />
    </div>
    <BacktoTop />
  </Layout>
);
Otp.getInitialProps = async () => ({
  namespacesRequired: ['OtpMeta'],
});
export default withTranslation('OtpMeta')(Otp);
