import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import { seo } from '../../components/seo/user-manual';
import CtaSection from '../../components/user-manual/CtaSection';
import SimpleIconSection from '../../components/user-manual/SimpleIconSection';
import { withTranslation } from '../../i18n';

const Usermanual = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('keywords')} />
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
        <div className="page_wrapper">
            <SimpleIconSection />
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
);

export default withTranslation('user-manual')(Usermanual);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['user-manual'],
        },
    };
};
