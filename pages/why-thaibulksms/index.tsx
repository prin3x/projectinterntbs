import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/why-thaibulksms/HeroSection';
import SmsSection from '../../components/why-thaibulksms/SmsSection';
import BrandSection from '../../components/why-thaibulksms/BrandSection';
import PriceSection from '../../components/why-thaibulksms/PriceSection';
import TrackSection from '../../components/why-thaibulksms/TrackSection';
import CtaSection from '../../components/why-thaibulksms/CtaSection';
import FaqSection from '../../components/why-thaibulksms/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/otp';
import { withTranslation } from '../../i18n';
const WhyThaibulksms = ({ t }: any) => (
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
      <HeroSection />
      <SmsSection />
      <BrandSection />
      <PriceSection />
      <TrackSection />
      <CtaSection />
      <FaqSection />
    </div>
    <BacktoTop />
  </Layout>
);

export default withTranslation('WhyThaibulksmsMeta')(WhyThaibulksms);

export const getStaticProps = async () => {
  return ({
    props: {
      namespacesRequired: ['WhyThaibulksmsMeta'],
    },
  })
}
