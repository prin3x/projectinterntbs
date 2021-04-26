import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const FeatureSection = () => (
    <div className="service_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="service_text">
                        <h2>บริการของ ThaiBulkSMS</h2>
                        <div className="serviceTBS">
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice01.svg`}
                                    alt="Image"
                                />
                                <h3>Smart SMS Console</h3>
                                <p>ส่ง SMS ผ่านเว็บไซต์ได้ด้วยตนเอง ส่งง่าย วัดผลการส่งได้รวดเร็ว</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice02.svg`}
                                    alt="Image"
                                />
                                <h3>SMS API</h3>
                                <p>บริการ SMS API สำหรับ Developer เชื่อมต่อด้วยภาษาที่คุณเลือก</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice03.svg`}
                                    alt="Image"
                                />
                                <h3>OTP Service</h3>
                                <p>ระบบส่ง OTP พร้อมใช้ เพิ่มความปลอดภัยไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice04.svg`}
                                    alt="Image"
                                />
                                <h3>SMS Tracking</h3>
                                <p>วัดผลแคมเปญ SMS แม่นยำ ไม่เสียงบโฆษณาไป โดยเปล่าประโยชน์</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice05.svg`}
                                    alt="Image"
                                />
                                <h3>Global SMS</h3>
                                <p>ส่ง SMS และ OTP ได้ทั่วโลก ด้วยราคาที่คุ้มค่า ส่งไว ติดตามผลการส่งได้</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice06.svg`}
                                    alt="Image"
                                />
                                <h3>Location Based SMS</h3>
                                <p>เข้าถึงกลุ่มเป้าหมาย แบบกำหนดพื้นที่ ส่งข้อความได้ ไม่ต้องใช้เบอร์</p>
                                <a href="">เรียนรู้เพิ่มเติม</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="service_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-Hservice.svg`}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
FeatureSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

FeatureSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(FeatureSection);
