import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/contact/HeroSection';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>contact</title>
        <meta name="description" content="contact" />
        <meta name="keywords" content="contact" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="contact" />
        <meta property="og:description" content="contact" />
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
      <div className="page_wrapper">
        <div
          className="hero_section v3 payment_home"
          style={{
            backgroundImage: 'url(/img/bg_12.png)',
            backgroundSize: 'contain',
          }}
        >
          <HeroSection />
          <img
            src="/img/bg_13.png"
            className="img-fluid shape__bottom"
            alt=""
          />
          <Help />
        </div>
      </div>
      <BacktoTop />
    </Layout>
  );
}
