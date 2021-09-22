import React from 'react';
import Layout from '../../components/Layout';
import PricingSection from '../../components/pricing-c/PricingSection';
import FirstPurchase from '../../components/pricing-c/FirstPurchase';
import FaqSection from '../../components/pricing-c/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import * as ProductService from '../../services/shopping/product.service';
import { PricingProps } from '../../services/shopping/pricing.model';

import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing-c';
import { useRouter } from 'next/router';
import th from '../../public/static/locales/th/Pricing-c.json'
import en from '../../public/static/locales/en/Pricing-c.json'

const Pricing: any = ({ packages, packagesNormal }: PricingProps) => {
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
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
            />
            <div className="page_wrapper">
                <PricingSection />
                <FirstPurchase
                    packages={packages}
                    packagesNormal={packagesNormal}
                />
                <FaqSection />
            </div>
            <BacktoTop />
        </Layout>
    );
};

// Pricing.getInitialProps = async () => {

//   let packageAll;
//   let packageAllNormal;

//   try {
//     packageAll = await ProductService.GetPackageFirstPurchase();
//     packageAllNormal = await ProductService.GetPackageNormal();
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     packages: packageAll ? packageAll.packages : {},
//     packagesNormal: packageAllNormal ? packageAllNormal.packages : {},
//     namespacesRequired: ['PricingMeta'],
//   };
// };

export default Pricing;

export const getStaticProps = async () => {
    let packageAll;
    let packageAllNormal;

    try {
        packageAll = await ProductService.GetPackageFirstPurchase();
        packageAllNormal = await ProductService.GetPackageNormal();
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            packages: packageAll ? packageAll.packages : {},
            packagesNormal: packageAllNormal ? packageAllNormal.packages : {},
            namespacesRequired: ['Pricing'],
        },
    };
};
