export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing`,
    type: 'website',
    title:
      'แพ็กเกจ ราคา SMS สุดคุ้มค่า ตอบโจทย์ทุกการใช้งาน | ThaiBulkSMS',
    description:
      'รวมแพ็กเกจราคา SMS สุดคุ้มของ ThaiBulkSMS ตอบโจทย์ทุกการใช้งาน',
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
