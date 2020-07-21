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

        <meta
          property="og:title"
          content="รวมแพ็กเกจราคาสุดคุ้มของ ThaiBulkSMS ในราคาเริ่มต้นเพียงแค่ 0.28 บาท - ทดลองส่งข้อความฟรี 20 เครดิต"
        />
        <meta property="og:description" content="" />
        <meta property="og:url" content={process.env.DOMAIN_URL + '/pricing'} />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://thaibulksms.com" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:domain" content="" />
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
