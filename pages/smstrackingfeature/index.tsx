import React from 'react';

import Layout from '../../components/Layout';
import Proloader from '../../components/Proloader';
import HeroSectionV4 from '../../components/HeroSectionV4';
import SmsSectionV4 from '../../components/SmsSectionV4';
import SimpleIconSectionV2 from '../../components/SimpleIconSectionV2';
import TrackSectionV2 from '../../components/TrackSectionV2';
import CtaSectionV3 from '../../components/CtaSectionV3';

import BacktoTop from '../../components/BacktoTop';

export default function Home() {
  return (
    <Layout>
      <Proloader></Proloader>
      <div className="page_wrapper">
        <HeroSectionV4></HeroSectionV4>
        <SmsSectionV4></SmsSectionV4>
        <SimpleIconSectionV2></SimpleIconSectionV2>
        <TrackSectionV2></TrackSectionV2>
        <CtaSectionV3></CtaSectionV3>
      </div>
      <BacktoTop></BacktoTop>
    </Layout>
  );
}
