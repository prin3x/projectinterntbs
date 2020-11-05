import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../../components/BacktoTop';
import Layout from '../../../components/Layout';
import { seo } from '../../../components/seo/sms-api';
import CtaSection from '../../../components/sms-api/CtaSection';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/sms-api/HeroSection';
import SimpleIconSection from '../../../components/sms-api/SimpleIconSection';
import SmsSection from '../../../components/sms-api/SmsSection';
import TrackSection from '../../../components/sms-api/TrackSection';
import { withTranslation } from '../../../i18n';
const SMS_API = ({ t }: any) => (
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
// Otp.getInitialProps = async () => ({
//   namespacesRequired: ['OtpMeta'],
// });
export default withTranslation('OtpMeta')(SMS_API);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['OtpMeta'],
    },
  };
};
