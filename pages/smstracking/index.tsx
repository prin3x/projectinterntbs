import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSection from '../../components/smstracking/HeroSection';
import SmsSection from '../../components/smstracking/SmsSection';
import SimpleIconSection from '../../components/smstracking/SimpleIconSection';
import TrackSection from '../../components/smstracking/TrackSection';
import CtaSection from '../../components/smstracking/CtaSection';

import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSection></HeroSection>
        <SmsSection></SmsSection>
        <SimpleIconSection></SimpleIconSection>
        <TrackSection></TrackSection>
        <CtaSection></CtaSection>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
