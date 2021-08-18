import React from 'react';
import Layout from '../../../components/Layout';
// import Proloader from '../../../components/Proloader';
import HeroSection from '../../../components/sms-tracking/HeroSection';
import SmsSection from '../../../components/sms-tracking/SmsSection';
import SimpleIconSection from '../../../components/sms-tracking/SimpleIconSection';
import TrackSection from '../../../components/sms-tracking/TrackSection';
import CtaSection from '../../../components/sms-tracking/CtaSection';
import BacktoTop from '../../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../../components/seo/sms-tracking';
const Smstracking = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('meta::keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="twitter:title" content={seo.openGraph.title} />
            <meta
                name="twitter:description"
                content={seo.openGraph.description}
            />
            <meta
                name="twitter:image:src"
                content={seo.openGraph.images[0].url}
            />
        </Head>
        <NextSeo
            openGraph={seo.openGraph}
            title={t('meta::title')}
            description={t('meta::description')}
            twitter={{
                site: seo.openGraph.site_name,
                cardType: seo.openGraph.type,
            }}
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
// Smstracking.getInitialProps = async () => ({
//   namespacesRequired: ['Sms-trackingMeta'],
// });
export default withTranslation('Sms-tracking')(Smstracking);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Sms-tracking'],
        },
    };
};
