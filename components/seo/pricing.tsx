export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing`,
        type: 'website',
        title:
            'แพ็กเกจ SMS ราคาถูก ส่งข้อความ เพียง 0.21 บาท ตอบโจทย์ทุกการใช้งาน | ThaiBulkSMS',
        description:
            'แพ็กเกจราคา SMS ราคาถูกของ ThaiBulkSMS ราคาสุดคุ้มค่าทุกการใช้งาน พร้อมฟีเจอร์ในการส่ง ครบวงจร',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing`,
    },
}
