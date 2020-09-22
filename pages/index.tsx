import React from 'react';
import Layout from '../components/Layout';
// import Proloader from '../components/Proloader';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
import SmsSection from '../components/home/SmsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import EduSection from '../components/home/EduSection';
import CtaSection from '../components/home/CtaSection';
import { withTranslation } from '../i18n';
import BacktoTop from '../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';
const Homepage = ({ t }: any) => (
  <React.Fragment>
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
        <PartnerSection />
        <FeatureSection />
        <SimpleSliderSection />
        <GlobeSection />
        <SmsSection />
        <TestimonialSection />
        <EduSection />
        <CtaSection />
      </div>
      <BacktoTop />
    </Layout>
  </React.Fragment>
);
// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['HomeMeta'],
// });
export default withTranslation('HomeMeta')(Homepage);
export const getStaticProps = async () => {
  return ({
    props: {
      namespacesRequired: ['HomeMeta'],
    },
  })
}
