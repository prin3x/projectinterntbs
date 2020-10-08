export const seo = {
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/smart-sms-console`,
      type: 'website',
      title:
        'Smart SMS Console - ส่ง SMS ด้วยตนเอง | ThaiBulkSMS ',
      description:
        'ส่ง SMS ด้วยตนเอง ไม่ต้องผ่านตัวกลาง ด้วยระบบ Smart SMS Console เพื่อเพิ่มความสะดวกและรวดเร็วในการใช้งานยิ่งขึ้น',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Product-OTP.jpg`,
          width: 800,
          height: 600,
        },
      ],
      site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/smart-sms-console`,
    },
  };
  