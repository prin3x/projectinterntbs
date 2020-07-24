import React from 'react';
import Layout from '../../components/Layout';
import PricingSection from '../../components/pricing/PricingSection';
import AllPricing from '../../components/pricing/AllPricing';
import FaqSection from '../../components/pricing/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import * as ProductService from '../../services/shopping/product.service';
import {
  PricingProps,
  PackageAll,
} from '../../services/shopping/pricing.model';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing';
const Pricing: any = ({ t, packages }: PricingProps) => {
  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
        <meta name="title" content={t('title')} />
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <NextSeo openGraph={seo.openGraph} />
      </Head>
      <div className="page_wrapper">
        <PricingSection />
        <AllPricing packages={packages} />
        <FaqSection />
      </div>
      <BacktoTop />
    </Layout>
  );
};

Pricing.getInitialProps = async () => {
  const params: PackageAll = {
    filter: '136,137,138,139,140,141,142,143',
  };
  const packageAll = await ProductService.getPackageAll(params);

  return {
    packages: packageAll.packages,
    test: 'ssdfsdfsfds',
    namespacesRequired: ['PricingMeta'],
  };
};

// Pricing.getServerSideProps = async () => {
//   const params: PackageAll = {
//     filter: '136,137,138,139,140,141,142,143'
//   }
//   const packageAll = await ProductService.getPackageAll(params)
//   console.log('ok',packageAll)
//   return { props: { packageAll} }
// }
export default withTranslation('PricingMeta')(Pricing);
