import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/otp/HeroSection';
import SmsSection from '../../components/otp/SmsSection';
import SimpleIconSection from '../../components/otp/SimpleIconSection';
import TrackSection from '../../components/otp/TrackSection';
import CtaSection from '../../components/otp/CtaSection';
import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
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
