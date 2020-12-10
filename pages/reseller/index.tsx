import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import AdvantagesSection from '../../components/reseller/AdvantagesSection';
import CtaSection from '../../components/reseller/CtaSection';
import DesSection from '../../components/reseller/DesSection';
import HeroSection from '../../components/reseller/HeroSection';
import SmsSection from '../../components/reseller/SmsSection';
import { seo } from '../../components/seo/reseller';
import { withTranslation } from '../../i18n';

const Reseller = ({ t }: any) => (
  <Layout>
    <Head>
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      openGraph={seo.openGraph}
      title={t('ResellerPage:::meta::title')}
      description={t('ResellerPage:::meta::description')}
    />
    {/* <Proloader /> */}
    <div className="page_wrapper">
      <HeroSection />
      <SmsSection />
      <DesSection />
      <AdvantagesSection />
      <CtaSection />
    </div>
    <BacktoTop />
  </Layout>
);

export default withTranslation('ResellerPage')(Reseller);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['ResellerPage'],
    },
  };
};
