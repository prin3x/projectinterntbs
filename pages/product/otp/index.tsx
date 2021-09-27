import React from 'react';
import Layout from '../../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../../components/otp/HeroSection';
import SmsSection from '../../../components/otp/SmsSection';
import SimpleIconSection from '../../../components/otp/SimpleIconSection';
import TrackSection from '../../../components/otp/TrackSection';
import CtaSection from '../../../components/otp/CtaSection';
import BacktoTop from '../../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../../components/seo/otp';
// import { withTranslation } from '../../../i18n';
import { useRouter } from 'next/router';
import th from '../../../public/locales/th/Otp.json'
import en from '../../../public/locales/en/Otp.json'

const Otp = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
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
                title={t.meta.title}
                description={t.meta.description}
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
}
// Otp.getInitialProps = async () => ({
//   namespacesRequired: ['OtpMeta'],
// });
export default Otp;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Otp'],
        },
    };
};
