import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSection from '../../components/product/HeroSection';
import SmsSection from '../../components/product/SmsSection';
import PromoSection from '../../components/product/PromoSection';
import SimpleSection from '../../components/product/SimpleSection';
import PricingSection from '../../components/product/PricingSection';
import SliderSection from '../../components/product/SliderSection';
import FaqSection from '../../components/product/FaqSection';
import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSection></HeroSection>
        <SmsSection></SmsSection>
        <PromoSection></PromoSection>
        <SimpleSection></SimpleSection>
        <PricingSection></PricingSection>
        <SliderSection></SliderSection>
        <FaqSection></FaqSection>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
