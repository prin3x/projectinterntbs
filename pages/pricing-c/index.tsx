import React from 'react';
import Layout from '../../components/Layout';
import PricingSection from '../../components/pricing-c/PricingSection';
import SmsSection from '../../components/pricing-c/SmsSection';
import PromoSection from '../../components/pricing-c/PromoSection';
import AllPricing from '../../components/pricing-c/AllPricing';
import FaqSection from '../../components/pricing-c/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import * as ProductService from '../../services/shopping/product.service';
import { PricingProps } from '../../services/shopping/pricing.model';

import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing';
const Pricing: any = ({ t, packages }: PricingProps) => {
    return (
        <Layout>
            <Head>
                <meta name="keywords" content={t('keywords')} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="canonical"
                    href="https://www.thaibulksms.com/pricing-c/"
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t('meta::title')}
                description={t('meta::description')}
            />
            <div className="page_wrapper">
                <PricingSection />
                <SmsSection />
                <PromoSection />
                <section id="all-pricing"></section>
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
export default withTranslation('Pricing-c')(Pricing);

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
            namespacesRequired: ['Pricing'],
        },
    };
};
