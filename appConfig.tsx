export default {
  production: 'production',
  development: 'development',
  internalTest: 'internal_test',
  GTM_CODE: process.env.NEXT_PUBLIC_GTM_CODE || '',
  API_URL_SHOPPING: process.env.NEXT_PUBLIC_API_URL_SHOPPING || '',
  PRODUCT_PACKAGE: process.env.NEXT_PUBLIC_PRODUCT_PACKAGE || '',
  API_URL_ACCOUNT: process.env.NEXT_PUBLIC_API_URL_ACCOUNT || '',
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  WEB_URL_ACCOUNT: process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT || '',
};
