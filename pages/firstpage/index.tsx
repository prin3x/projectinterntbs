import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSectionV2 from '../../components/HeroSectionV2';
import PartnerSection from '../../components/PartnerSection';
import FeatureSection from '../../components/FeatureSection';
import SimpleSliderSection from '../../components/SimpleSliderSection';
import GlobeSection from '../../components/GlobeSection';
import SmsSectionV2 from '../../components/SmsSectionV2';
import TestimonialSection from '../../components/TestimonialSection';
import EduSection from '../../components/EduSection';
import CtaSection from '../../components/CtaSection';

import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSectionV2></HeroSectionV2>
        <PartnerSection></PartnerSection>
        <FeatureSection></FeatureSection>
        <SimpleSliderSection></SimpleSliderSection>
        <GlobeSection></GlobeSection>
        <SmsSectionV2></SmsSectionV2>
        <TestimonialSection></TestimonialSection>
        <EduSection></EduSection>
        <CtaSection></CtaSection>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
