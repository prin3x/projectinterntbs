

import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/lowprice/HeroSection';
import SmsSection from '../../components/lowprice/SmsSection';
import SimpleIconSection from '../../components/lowprice/SimpleIconSection';
import TrackSection from '../../components/lowprice/TrackSection';
import CtaSection from '../../components/lowprice/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/lowprice';
import { withTranslation } from '../../i18n';
const lowprice = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('meta::keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
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
            <SimpleIconSection />
            <TrackSection />
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
);
// lowprice.getInitialProps = async () => ({
//   namespacesRequired: ['lowpriceMeta'],
// });
export default withTranslation('lowprice')(lowprice);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['lowprice'],
        },
    };
};

