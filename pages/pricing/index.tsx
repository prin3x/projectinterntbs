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
  PricingProps
} from '../../services/shopping/pricing.model';

import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing';
const Pricing: any = ({ t, packages }: PricingProps) => {
  return (
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
      <div className="page_wrapper">
        <PricingSection />
        <AllPricing packages={packages} />
        <FaqSection />
      </div>
      <BacktoTop />
    </Layout>
  );
};

// Pricing.getInitialProps = async () => {
//   // const params: PackageAll = {
//   //   filter: AppConfig.PRODUCT_PACKAGE,
//   // };
//   let packageAll;

//   try {
//     packageAll = await ProductService.GetPackageNormal();
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     packages: packageAll ? packageAll.packages : {},
//     namespacesRequired: ['PricingMeta'],
//   };
// };

// Pricing.getServerSideProps = async () => {
//   const params: PackageAll = {
//     filter: '136,137,138,139,140,141,142,143'
//   }
//   const packageAll = await ProductService.getPackageAll(params)
//   console.log('ok',packageAll)
//   return { props: { packageAll} }
// }
export default withTranslation('PricingMeta')(Pricing);

export const getStaticProps = async () => {
  let packageAll;

  try {
    packageAll = await ProductService.GetPackageNormal();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      packages: packageAll ? packageAll.packages : {},
      namespacesRequired: ['PricingMeta'],
    }
  };
}
