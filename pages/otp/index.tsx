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
import { withTranslation } from '../../i18n';
const Otp = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="OTP" />
      <meta property="og:description" content="OTP" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="https://thaibulksms.com" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:domain" content="" />
    </Head>
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
