import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
// import Proloader from '../components/Proloader';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
import SmsSection from '../components/home/SmsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import EduSection from '../components/home/EduSection';
import CtaSection from '../components/home/CtaSection';
import BacktoTop from '../components/BacktoTop';
import { withTranslation } from '../i18n';
// export default function Home() {
//   return (
//     <Layout>
//       <Proloader />
//       <div className="page_wrapper">
//         <HeroSection />
//         <PartnerSection />
//         <FeatureSection />
//         <SimpleSliderSection />
//         <GlobeSection />
//         <SmsSection />
//         <TestimonialSection />
//         <EduSection />
//         <CtaSection />
//       </div>
//       <BacktoTop />
//     </Layout>
//   );
// }

const Homepage = () => (
  <React.Fragment>
    <Layout>
      {/* <Proloader /> */}
      <div className="page_wrapper">
        <HeroSection />
        <PartnerSection />
        <FeatureSection />
        <SimpleSliderSection />
        <GlobeSection />
        <SmsSection />
        <TestimonialSection />
        <EduSection />
        <CtaSection />
      </div>
      <BacktoTop />
    </Layout>
  </React.Fragment>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'header'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
