import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSectionV3 from '../../components/HeroSectionV3';
import SmsSectionV3 from '../../components/SmsSectionV3';
import SimpleIconSection from '../../components/SimpleIconSection';
import TrackSection from '../../components/TrackSection';
import CtaSectionV2 from '../../components/CtaSectionV2';

import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSectionV3></HeroSectionV3>
        <SmsSectionV3></SmsSectionV3>
        <SimpleIconSection></SimpleIconSection>
        <TrackSection></TrackSection>
        <CtaSectionV2></CtaSectionV2>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
