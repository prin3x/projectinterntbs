import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import CtaSection from '../../components/reseller/CtaSection';
// import Proloader from '../components/Proloader';
import HeroSection from '../../components/reseller/HeroSection';
import SimpleIconSection from '../../components/reseller/SimpleIconSection';
import SmsSection from '../../components/reseller/SmsSection';
import TrackSection from '../../components/reseller/TrackSection';
import { seo } from '../../components/seo/reseller';
import { withTranslation } from '../../i18n';

const Reseller = ({ t }: any) => (
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

export default withTranslation('ResellerMeta')(Reseller);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['ResellerMeta'],
    },
  };
};
