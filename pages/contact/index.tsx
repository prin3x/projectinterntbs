import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/Layout';
import HeroSection from '../../components/contact/HeroSection';
import Help from '../../components/Help';
// import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/contact';
const BacktoTop = dynamic(() => import('../../components/BacktoTop'));
const Contact = ({ t }: any) => (
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
        <div className="page_wrapper">
            <div
                className="hero_section v3 payment_home lazyload"
                data-bgset="/img/bg_12.png"
                style={{
                    // backgroundImage: 'url(/img/bg_12.png)',
                    backgroundSize: 'contain',
                }}
            >
                <HeroSection />
                <img
                    data-src="/img/bg_13.png"
                    className="img-fluid shape__bottom lazyload"
                    alt=""
                />
                <Help />
            </div>
        </div>
        <BacktoTop />
    </Layout>
);
// Contact.getInitialProps = async () => ({
//   namespacesRequired: ['ContactMeta'],
// });
export default withTranslation('Contact')(Contact);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Contact'],
        },
    };
};
