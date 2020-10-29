import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../../components/BacktoTop';
import Layout from '../../../components/Layout';
import CtaSection from '../../../components/location-based-sms/CtaSection';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/location-based-sms/HeroSection';
import SimpleIconSection from '../../../components/location-based-sms/SimpleIconSection';
import SmsSection from '../../../components/location-based-sms/SmsSection';
import TrackSection from '../../../components/location-based-sms/TrackSection';
import { seo } from '../../../components/seo/location-based-sms';
import { withTranslation } from '../../../i18n';

const LocationBasedSMS = ({ t }: any) => (
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

export default withTranslation('LocationBasedSMSMeta')(LocationBasedSMS);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['LocationBasedSMSMeta'],
    },
  };
};
