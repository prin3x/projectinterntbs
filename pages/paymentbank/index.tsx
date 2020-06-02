import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/paymentbank/HeroSection';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
export default function Home() {
  return (
    <Layout>
      <Head>
      <title>paymentbank</title>
        <meta name="description" content="paymentbank" />
        <meta name="keywords" content="paymentbank" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content="https://d1vb0eqohs6ps7.cloudfront.net/paymentbank" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="paymentbank" />
        <meta property="og:description" content="paymentbank" />
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
        <div
          className="hero_section v3 payment_home"
          style={{
            backgroundImage: 'url(/img/bg_12.png)',
            backgroundSize: 'contain',
          }}
        >
          <HeroSection />
          <Help />
        </div>
      </div>
      <BacktoTop />
    </Layout>
  );
}
