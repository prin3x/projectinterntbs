import React from 'react';
import Layout from '../../components/Layout';
import RegisterfinishComponents from '../../components/register/register-success';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/register_success';
const Registeruccess = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <NextSeo openGraph={seo.openGraph} />
    </Head>
    <RegisterfinishComponents />
  </Layout>
);
Registeruccess.getInitialProps = async () => ({
  namespacesRequired: ['RegistersuccessMeta'],
});
export default withTranslation('RegistersuccessMeta')(Registeruccess);
