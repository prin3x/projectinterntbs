import React from 'react';
// import dynamic from 'next/dynamic'
import { withTranslation } from '../i18n';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';
// import SimpleSliderSection from '../components/home/SimpleSliderSection';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import FeatureSection from '../components/home/FeatureSection';
import ServiceSection from '../components/home/ServiceSection';
import SimpleSliderSection from '../components/home/SimpleSliderSection';
import GlobeSection from '../components/home/GlobeSection';
import SmsSection from '../components/home/SmsSection';
import SuccessSection from '../components/home/SuccessSection';
import TestimonialSection from '../components/home/TestimonialSection';
import EduSection from '../components/home/EduSection';
import CtaSection from '../components/home/CtaSection';
import BacktoTop from '../components/BacktoTop';

// const Layout = dynamic(() => import('../components/Layout'))
// const HeroSection = dynamic(() => import('../components/home/HeroSection'))
// const PartnerSection = dynamic(() => import('../components/home/PartnerSection'))
// const FeatureSection = dynamic(() => import('../components/home/FeatureSection'))
// const SimpleSliderSection = dynamic(() => import('../components/home/SimpleSliderSection'))
// const GlobeSection = dynamic(() => import('../components/home/GlobeSection'))
// const SmsSection = dynamic(() => import('../components/home/SmsSection'))
// const TestimonialSection = dynamic(() => import('../components/home/TestimonialSection'))
// const EduSection = dynamic(() => import('../components/home/EduSection'))
// const CtaSection = dynamic(() => import('../components/home/CtaSection'))
// const BacktoTop = dynamic(() => import('../components/BacktoTop'))
const Homepage = ({ t }: any) => (
    <React.Fragment>
        <Layout>
            <Head>
                <meta name="keywords" content={t('keywords')} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {/* <link rel="canonical" href="https://www.thaibulksms.com/" /> */}
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
                <PartnerSection />
                <FeatureSection />
                <SmsSection />
                <SuccessSection />
                <ServiceSection />
                <SimpleSliderSection />
                <GlobeSection />
                <TestimonialSection />
                <EduSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    </React.Fragment>
);
// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['HomeMeta'],
// });
export default withTranslation('Home')(Homepage);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Home'],
        },
    };
};
