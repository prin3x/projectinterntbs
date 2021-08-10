import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import CtaSection from '../../components/sms-alert/CtaSection';
import DesSection from '../../components/sms-alert/DesSection';
import HeroSection from '../../components/sms-alert/HeroSection';
import SmsSection from '../../components/sms-alert/SmsSection';
import { seo } from '../../components/seo/sms-alert';
import { withTranslation } from '../../i18n';

const SmsAlertPage = ({ t }: any) => (
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

export default withTranslation('Sms-alert')(SmsAlertPage);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Sms-alert'],
        },
    };
};
