import React from 'react';
import Layout from '../../components/Layout';
import QuickRegisterComponents from '../../components/register/quickregister';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
const QuickRegister = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta
        property="og:title"
        content="ลงทะเบียนเข้าใช้งาน ให้คุณได้ทดลองส่งข้อความฟรี 20 เครดิตทันที - ThaiBulkSMS"
      />
      <meta property="og:description" content="" />
      <meta property="og:url" content={process.env.DOMAIN_URL + '/register'} />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="https://thaibulksms.com" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:domain" content="" />
    </Head>
    <QuickRegisterComponents />
  </Layout>
);
QuickRegister.getInitialProps = async () => ({
  namespacesRequired: ['RegisterMeta'],
});
export default withTranslation('RegisterMeta')(QuickRegister);
