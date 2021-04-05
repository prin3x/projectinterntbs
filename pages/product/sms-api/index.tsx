import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'
import BacktoTop from '../../../components/BacktoTop'
import Layout from '../../../components/Layout'
import { seo } from '../../../components/seo/sms-api'
import CtaSection from '../../../components/sms-api/CtaSection'
import HeroSection from '../../../components/sms-api/HeroSection'
import SimpleIconSection from '../../../components/sms-api/SimpleIconSection'
import SmsSection from '../../../components/sms-api/SmsSection'
import { withTranslation } from '../../../i18n'

const SMS_API = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('meta::keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="canonical"
                href="https://www.thaibulksms.com/product/sms-api/"
            />
        </Head>
        <NextSeo
            openGraph={seo.openGraph}
            title={t('meta::title')}
            description={t('meta::description')}
        />
        <div className="page_wrapper">
            <HeroSection />
            <SmsSection />
            <SimpleIconSection />
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
)

export default withTranslation('SMSAPIPage')(SMS_API)
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['SMSAPIPage'],
        },
    }
}
