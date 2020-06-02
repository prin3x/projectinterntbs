import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/smstracking/HeroSection';
import SmsSection from '../../components/smstracking/SmsSection';
import SimpleIconSection from '../../components/smstracking/SimpleIconSection';
import TrackSection from '../../components/smstracking/TrackSection';
import CtaSection from '../../components/smstracking/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>smstracking</title>
        <meta name="description" content="smstracking" />
        <meta name="keywords" content="smstracking" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content="https://d1vb0eqohs6ps7.cloudfront.net/smstracking" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="smstracking" />
        <meta property="og:description" content="smstracking" />
        <meta property="og:image" content="https://d1vb0eqohs6ps7.cloudfront.net/img/demoog.jpg" />
        <meta property="og:site_name" content="https://thaibulksms.com" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
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
