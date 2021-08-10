import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import CtaSection from '../../components/sms-marketing/CtaSection';
import DesSection from '../../components/sms-marketing/DesSection';
import HeroSection from '../../components/sms-marketing/HeroSection';
import SmsSection from '../../components/sms-marketing/SmsSection';
import { seo } from '../../components/seo/sms-marketing';
import { withTranslation } from '../../i18n';

const SmsMarketing = ({ t }: any) => (
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
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        {/* <Proloader /> */}
        <div className="page_wrapper">
            <HeroSection />
            <SmsSection />
            <DesSection />
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
);

export default withTranslation('Sms-marketing')(SmsMarketing);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Sms-marketing'],
        },
    };
};
