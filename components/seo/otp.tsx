export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/log-in`,
    type: 'website',
    title:
      'บริการ OTP Ready-to-Use การส่งยืนยันตัวตนที่พร้อมใช้ทันที | ThaiBulkSMS',
    description:
      'บริการส่ง OTP Ready-to-Use ส่งรหัสยืนยันตัวตนที่พร้อมใช้งานได้ทันที เพื่อความปลอดภัยในการทำธุรกรรมออนไลน์',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/demoog.jpg`,
        width: 800,
        height: 600,
      },
    ],
    site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/log-in`,
  },
};
