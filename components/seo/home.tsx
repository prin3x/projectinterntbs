export const seo = {
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
        type: 'website',
        title:
            'บริษัทส่งข้อความผ่าน SMS Gateway ราคาเริ่ม 0.21 บาท | ThaiBulkSMS',
        description:
            'บริษัทส่ง SMS ครบวงจร ราคาดี ส่งง่าย ถึงมือผู้รับ| ThaiBulkSMS',
        keywords:
            'free,sms,gateway,website,mobile,phone,online,text,message,messages,thailand,aggregator,thai,server,service,services,providers,shortcodes,ส่ง,ฟรี,gsm,ขาย,ถูก,2g,3g,4g,messaging,,ais,api,bulk,advertising,pricing,price,reseller,software,solutions,campaignscoporate,broadcast,direct,dtac,truemove,hutch,cdma,net,ads,ราคา,promotion,การตลาด,ธุรกิจ,เครือข่าย,เว็บ,โฆษณา,โทรศัพท์เคลื่อนที่,โทรศัพท์มือถือ,ข้อความ,ข้อความสั้น,สตางค์,หารายได้ออนไลน์,ออนไลน์',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/og-image/OG-TBS-Home.jpg`,
                width: 800,
                height: 600,
            },
        ],
        site_name: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
    },
}
