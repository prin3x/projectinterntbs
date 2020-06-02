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
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>OTP</title>
        <meta name="description" content="OTP" />
        <meta name="keywords" content="OTP" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="OTP" />
        <meta property="og:description" content="OTP" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="article" />
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
}
