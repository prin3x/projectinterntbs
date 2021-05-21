import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/cookie-policy/HeroSection';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/condition';
const Condition = ({ t }: any) => (
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
        <div className="page_wrapper">
            <div
                className="hero_section v3 payment_home lazyload"
                data-bgset="/img/bg_12.png"
                style={
                    {
                        // backgroundImage: 'url(/img/bg_12.png)',
                        // backgroundSize: 'contain',
                    }
                }
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
// Condition.getInitialProps = async () => ({
//   namespacesRequired: ['ConditionMeta'],
// });
export default withTranslation('CookiePolicy')(Condition);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['CookiePolicy'],
        },
    };
};
