import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import { withTranslation } from '../../i18n';
import { seo } from '../../components/seo/resource';
import HeroSection from '../../components/resource/HeroSection';
import ContentSection from '../../components/resource/ContentSection';
import CtaSection from '../../components/resource/CtaSection'
const Resource = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('keywords')} />
            <meta name="author" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <NextSeo
            openGraph={seo.openGraph}
            title={t('title')}
            description={t('description')}
        />

        <div className="page_wrapper">
            <HeroSection />
            <ContentSection />
            <CtaSection />
            <Help />
        </div>

        <BacktoTop />
    </Layout>
)

export default withTranslation('ResourceMeta')(Resource);
export const getStaticProps = async () => {
    return ({
        props: {
            namespacesRequired: ['ResourceMeta'],
        },
    })
}

