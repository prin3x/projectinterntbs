import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/product/HeroSection';
import SmsSection from '../../components/product/SmsSection';
import PromoSection from '../../components/product/PromoSection';
import SimpleSection from '../../components/product/SimpleSection';
import PricingSection from '../../components/product/PricingSection';
import SliderSection from '../../components/product/SliderSection';
import FaqSection from '../../components/product/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/product';
const Product = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="canonical" href="https://www.thaibulksms.com/product/" />
        </Head>
        <NextSeo
            openGraph={seo.openGraph}
            title={t('meta::title')}
            description={t('meta::description')}
        />
        {/* <Proloader /> */}
        <div className="page_wrapper">
            <HeroSection />
            <SmsSection />
            <PromoSection />
            <SimpleSection />
            <PricingSection />
            <SliderSection />
            <FaqSection />
        </div>
        <BacktoTop />
    </Layout>
);
// Product.getInitialProps = async () => ({
//   namespacesRequired: ['ProductMeta'],
// });
export default withTranslation('Product')(Product);

export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Product'],
        },
    };
};
