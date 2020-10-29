import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../../components/BacktoTop';
import CtaSection from '../../../components/global-sms/CtaSection';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/global-sms/HeroSection';
import SimpleIconSection from '../../../components/global-sms/SimpleIconSection';
import SmsSection from '../../../components/global-sms/SmsSection';
import TrackSection from '../../../components/global-sms/TrackSection';
import Layout from '../../../components/Layout';
import { seo } from '../../../components/seo/global-sms';
import { withTranslation } from '../../../i18n';

const GlobalSMS = ({ t }: any) => (
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

export default withTranslation('GlobalSMSMeta')(GlobalSMS);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['GlobalSMSMeta'],
    },
  };
};
