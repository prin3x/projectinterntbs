import React from 'react';
import Layout from '../../components/Layout';
import PricingSection from '../../components/pricing-b/PricingSection';
import SmsSection from '../../components/pricing-b/SmsSection';
import UserType from '../../components/pricing-b/UserType';
import AllPricing from '../../components/pricing-b/AllPricing';
import FaqSection from '../../components/pricing-b/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import * as ProductService from '../../services/shopping/product.service';
import { PricingProps } from '../../services/shopping/pricing.model';

import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Pricing-b.json'
import en from '../../public/locales/en/Pricing-b.json'
const Pricing: any = ({ packages }: PricingProps) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="canonical"
                    href="https://www.thaibulksms.com/pricing-b/"
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
            />
            <div className="page_wrapper">
                <PricingSection />
                <SmsSection />
                <UserType />
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
export default Pricing;

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
