import { withTranslation } from '../../i18n';
import Link from 'next/link';

import PropTypes from 'prop-types';
const PromoSection = ({}: any) => (
    <div
        className="promo_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-pricingC.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="promo_text">&nbsp;</div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/imgPricingC01.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>ส่งข้อความโฆษณาแบบวัดผลได้</h3>
                        <p>
                            มีรายงานการส่งที่เจาะลึก
                            เป็นเจ้าเดียวที่สามารถรู้ว่าผู้รับเปิดข้อความหรือไม่{' '}
                            <a href="">การันตีส่งถึงทุกเบอร์</a>{' '}
                            แม้แต่เบอร์ที่แจ้งบล็อก SMS โฆษณาไว้กับเครือข่าย{' '}
                            <span>หากส่งไม่ถึง เราพร้อมคืนเครดิตให้</span>
                        </p>
                        <div>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v2"
                            >
                                ดูราคาแพ็กเกจ
                            </a>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v11"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                        </div>
                        <Link href="/product/otp">
                            <a className="link">
                                อ่านเพิ่มเติมเกี่ยวกับการวัดผล SMS
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12 order-lg-12">
                    <div className="promo_item_three_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_16.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-1">
                    <div className="service_feature_text">
                        <h3>ส่ง OTP ถึงทันที ไม่ Delay</h3>
                        <p>
                            ส่ง OTP ถึงลูกค้าแบบไม่ต้องรอ พร้อม{' '}
                            <a href="">ระบบ OTP พร้อมใช้</a> ให้นำไปส่ง OTP
                            ได้ทันที โดยไม่ต้องเขียนโปรแกรมเพิ่ม
                        </p>
                        <div>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v2"
                            >
                                ดูราคาแพ็กเกจ
                            </a>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v11"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-alert.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>ส่งข้อความแจ้งเตือนด้วย API</h3>
                        <p>
                            เชื่อมต่อกับระบบคุณด้วย <a href="">SMS API</a>{' '}
                            เพื่อส่งข้อความแจ้งเตือนนัดหมาย แจ้งสถานะขนส่ง ฯลฯ
                            มี SDK รองรับหลายภาษาคู่มือการใช้งานที่ทำตามได้ง่าย
                            พร้อมทีมเทคนิคคอยตอบคำถามและช่วยแก้ปัญหาแม้อยู่นอกเวลาทำการ
                        </p>
                        <div>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v2"
                            >
                                ดูราคาแพ็กเกจ
                            </a>
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v11"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                        </div>
                        <Link href="/product/otp">
                            <a className="link">
                                ดูข้อมูลที่จำเป็นสำหรับนักพัฒนา
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
PromoSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

PromoSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Product')(PromoSection);
