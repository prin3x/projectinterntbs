import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/speed-and-reliable/HeroSection';
import SmsSection from '../../components/speed-and-reliable/SmsSection';
import SimpleIconSection from '../../components/speed-and-reliable/SimpleIconSection';
<<<<<<< HEAD
=======
import TrackSection from '../../components/speed-and-reliable/TrackSection';
>>>>>>> feature/add-new-credit-calculation-page
import CtaSection from '../../components/speed-and-reliable/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/speed-and-reliable';
import { withTranslation } from '../../i18n';
const speed = ({ t }: any) => (
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
<<<<<<< HEAD
=======
            <TrackSection />
>>>>>>> feature/add-new-credit-calculation-page
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
);
// speed.getInitialProps = async () => ({
//   namespacesRequired: ['speedMeta'],
// });
export default withTranslation('speed-and-reliable')(speed);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['speed-and-reliable'],
        },
    };
};
