import React from 'react';
import Layout from '../../../components/Layout';
import UsertypeCompanyComponents from '../../../components/register/usertypecompany';
import Head from 'next/head';
import { withTranslation } from '../../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../../components/seo/purchase_user-type_company';
const Usertypecompany = ({ t }: any) => (
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
    <UsertypeCompanyComponents />
  </Layout>
);
Usertypecompany.getInitialProps = async () => ({
  namespacesRequired: ['UsertypeCompanyMeta'],
});
export default withTranslation('UsertypeCompanyMeta')(Usertypecompany);
