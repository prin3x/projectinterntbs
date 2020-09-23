export const seo = {
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/product`,
    type: 'website',
    title:
      'ผู้ให้บริการอันดับ 1 การส่งข้อความผ่านอินเทอร์เน็ต ครบวงจร  - ทดลองส่งข้อความฟรี 20 เครดิต',
    description:
      'คุณภาพและบริการที่ดีที่สุด ด้วยประสบการณ์กว่า 10 ปี | ส่ง SMS สุดเสถียรทุกเครือข่าย ถึงมือผู้รับ - ทดลองส่งข้อความ 20 เครดิต',
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
