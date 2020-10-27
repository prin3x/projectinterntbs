export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller`,
    type: 'website',
    title: 'Reseller | ThaiBulkSMS',
    description: 'Reseller Description',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
        width: 800,
        height: 600,
      },
    ],
    site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller`,
  },
};
