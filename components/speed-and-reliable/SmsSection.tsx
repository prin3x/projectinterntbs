import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-push-6">
                <div className="newsletter_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-credit.svg`}
                        ></object>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-md-pull-6">
                <div className="newsletter_text">
                        <h3>ส่งเร็ว ถึงไว ส่ง OTP ไม่ Delay</h3>
                        <p>ThaiBulkSMS จะทำให้ทุกการส่ง SMS ออกจากระบบเป็นไปอย่างรวดเร็ว ให้คุณมั่นใจได้ว่า OTP จะส่งถึงลูกค้าได้แบบไม่ต้องรอ</p>
                        <p className="textNum">ระยะเวลาส่ง SMS ออกจากระบบโดยเฉลี่ย</p>
                        <h3><span>0.75 วินาที</span></h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-center m-60">
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-speed02.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>ระบบเสถียร รองรับการส่งได้หลักล้านต่อวัน</h3>
                        <p>Server ของ ThaiBulkSMS มีความเสถียรสูง พร้อมทีมผู้เชี่ยวชาญด้านเทคนิคคอยสแตนด์บายแก้ปัญหา หมดกังวลเรื่องการส่ง SMS ไม่ได้เพราะระบบล่มเป็นระยะเวลานาน</p>
                        <div className="secTextDetail">
                            <div className="textDetail">    
                                <p className="textNum">จำนวนการส่งโดยเฉลี่ย / วัน</p>
                                <h3><span>1,500,000+</span></h3>
                            </div>
                            <div className="textDetail">    
                                <p className="textNum">Uptime</p>
                                <h3><span>99.95%</span></h3>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>พิสูจน์ความเร็วและความเสถียรด้วยตัวคุณเอง</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <a
                                        href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                        className="btn v8"
                                    >
                                        {t('SmsSection::Try for free')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(SmsSectionV3);
