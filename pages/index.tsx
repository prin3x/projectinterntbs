import React from 'react';
import dynamic from 'next/dynamic'
import { withTranslation } from '../i18n';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';


const Layout = dynamic(() => import('../components/Layout'))
const HeroSection = dynamic(() => import('../components/home/HeroSection'))
const PartnerSection = dynamic(() => import('../components/home/PartnerSection'))
const FeatureSection = dynamic(() => import('../components/home/FeatureSection'))
const SimpleSliderSection = dynamic(() => import('../components/home/SimpleSliderSection'))
const GlobeSection = dynamic(() => import('../components/home/GlobeSection'))
const SmsSection = dynamic(() => import('../components/home/SmsSection'))
const TestimonialSection = dynamic(() => import('../components/home/TestimonialSection'))
const EduSection = dynamic(() => import('../components/home/EduSection'))
const CtaSection = dynamic(() => import('../components/home/CtaSection'))
const BacktoTop = dynamic(() => import('../components/BacktoTop'))
const Homepage = ({ t }: any) => (
  <React.Fragment>
    <Layout>
      <Head>
        <meta name="keywords" content={t('keywords')} />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextSeo
        openGraph={seo.openGraph}
        title={t('title')}
        description={t('description')}
      />
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
// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['HomeMeta'],
// });
export default withTranslation('HomeMeta')(Homepage);
export const getStaticProps = async () => {
  return ({
    props: {
      namespacesRequired: ['HomeMeta'],
    },
  })
}
