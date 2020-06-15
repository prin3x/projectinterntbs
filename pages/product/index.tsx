import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/product/HeroSection';
import SmsSection from '../../components/product/SmsSection';
import PromoSection from '../../components/product/PromoSection';
import SimpleSection from '../../components/product/SimpleSection';
import PricingSection from '../../components/product/PricingSection';
import SliderSection from '../../components/product/SliderSection';
import FaqSection from '../../components/product/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
const Product = () => (
  <Layout>
    <Head>
      <title>Product | Thaibulksms</title>
      <meta name="title" content="Product | Thaibulksms" />
      <meta name="description" content="product" />
      <meta name="keywords" content="product" />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        property="og:url"
        content="https://d1vb0eqohs6ps7.cloudfront.net/product"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="product" />
      <meta property="og:description" content="product" />
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
      <meta name="twitter:domain" content="" />
    </Head>
    {/* <Proloader /> */}
    <div className="page_wrapper">
      <HeroSection />
      <SmsSection />
      <PromoSection />
      <SimpleSection />
      <PricingSection />
      <SliderSection />
      <FaqSection />
    </div>
    <BacktoTop />
  </Layout>
);
Product.getInitialProps = async () => ({
  namespacesRequired: [],
});
export default withTranslation()(Product);
