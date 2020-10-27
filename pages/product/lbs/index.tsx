import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../../components/BacktoTop';
import Layout from '../../../components/Layout';
import CtaSection from '../../../components/lbs/CtaSection';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/lbs/HeroSection';
import SimpleIconSection from '../../../components/lbs/SimpleIconSection';
import SmsSection from '../../../components/lbs/SmsSection';
import TrackSection from '../../../components/lbs/TrackSection';
import { seo } from '../../../components/seo/lbs';
import { withTranslation } from '../../../i18n';

const Lbs = ({ t }: any) => (
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

export default withTranslation('OtpMeta')(Lbs);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['OtpMeta'],
    },
  };
};
