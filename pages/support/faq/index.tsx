import React from 'react';
import Layout from '../../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/faq/HeroSection';
import TabContent from '../../../components/faq/TabContent';
import BacktoTop from '../../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../../components/seo/why-thaibulksms';
import { withTranslation } from '../../../i18n';
const FAQ = ({ t }: any) => (
    <Layout>
        <Head>
            <title>{t('meta::title')}</title>
            <meta name="title" content={t('meta::title')} />
            <meta name="description" content={t('meta::description')} />
            <meta name="keywords" content={t('meta::keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <NextSeo
                openGraph={seo.openGraph}
                twitter={{
                    site: seo.openGraph.site_name,
                    cardType: seo.openGraph.type,
                }}
            />
        </Head>
        {/* <Proloader /> */}
        <div className="page_wrapper">
            <HeroSection />
            <TabContent />
        </div>
        <BacktoTop />
    </Layout>
);

export default withTranslation('FAQ')(FAQ);

export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['FAQ'],
        },
    };
};
