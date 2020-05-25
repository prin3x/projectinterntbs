import React from 'react';

import Layout from '../components/Layout';
import Proloader from '../components/Proloader';
import HeroSection from '../components/HeroSection';
import SmsSection from '../components/SmsSection';
import PromoSection from '../components/PromoSection';
import SimpleSection from '../components/SimpleSection';
import PricingSection from '../components/PricingSection';
import SliderSection from '../components/SliderSection';
import FaqSection from '../components/FaqSection';
import BacktoTop from '../components/BacktoTop';

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
