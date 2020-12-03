export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing`,
    type: 'website',
    title:
      'แพ็กเกจ ราคา SMS สุดคุ้ม เริ่มต้นที่ 0.28 บาท | ThaiBulkSMS',
    description:
      'รวมแพ็กเกจราคา SMS สุดคุ้มของ ThaiBulkSMS เริ่มต้นเพียงแค่ 0.28 บาท',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
        width: 800,
        height: 600,
      },
    ],
    site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing`,
  },
};
