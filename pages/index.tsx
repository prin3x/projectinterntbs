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
        <title>{t('title')}</title>
        <meta name="title" content={t('title')} />
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <NextSeo openGraph={seo} />
        {/* <meta property="og:url" content={process.env.DOMAIN_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="บริการส่ง SMS ครบวงจร ส่งง่าย ถึงมือผู้รับ| ThaiBulkSMS"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://d1vb0eqohs6ps7.cloudfront.net/img/demoog.jpg"
        />
        <meta property="og:site_name" content="https://thaibulksms.com" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:domain" content="" /> */}
      </Head>
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
Homepage.getInitialProps = async () => ({
  namespacesRequired: ['HomeMeta'],
});
export default withTranslation('HomeMeta')(Homepage);
