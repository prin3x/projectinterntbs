import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSection from '../../components/first/HeroSection';
import PartnerSection from '../../components/first/PartnerSection';
import FeatureSection from '../../components/first/FeatureSection';
import SimpleSliderSection from '../../components/first/SimpleSliderSection';
import GlobeSection from '../../components/first/GlobeSection';
import SmsSection from '../../components/first/SmsSection';
import TestimonialSection from '../../components/first/TestimonialSection';
import EduSection from '../../components/first/EduSection';
import CtaSection from '../../components/first/CtaSection';

import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSection></HeroSection>
        <PartnerSection></PartnerSection>
        <FeatureSection></FeatureSection>
        <SimpleSliderSection></SimpleSliderSection>
        <GlobeSection></GlobeSection>
        <SmsSection></SmsSection>
        <TestimonialSection></TestimonialSection>
        <EduSection></EduSection>
        <CtaSection></CtaSection>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
