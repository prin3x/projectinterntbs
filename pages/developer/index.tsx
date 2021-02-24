import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import { seo } from '../../components/seo/developer';
import CtaSection from '../../components/developer/CtaSection';
import SimpleIconSection from '../../components/developer/SimpleIconSection';
import { withTranslation } from '../../i18n';

const Developer = ({ t }: any) => (
  <Layout>
    <Head>
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      openGraph={seo.openGraph}
      title={t('meta::title')}
      description={t('meta::description')}
    />
    <div className="page_wrapper">
      <SimpleIconSection />
      <CtaSection />
    </div>
    <BacktoTop />
  </Layout>
);

export default withTranslation('Developer')(Developer);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['Developer'],
    },
  };
};
