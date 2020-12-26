export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product`,
    type: 'website',
    title: 'บริการส่งข้อความ ครบวงจร ส่งง่าย ถึงมือผู้รับ | ThaiBulkSMS',
    description:
      'บริการส่งข้อความอันดับ 1 ผ่านอินเทอร์เน็ต ครบวงจร - ทดลองส่งข้อความฟรี 20 เครดิต',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product.jpg`,
        width: 800,
        height: 600,
      },
    ],
    site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product`,
  },
};
