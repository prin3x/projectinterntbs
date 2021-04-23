import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Link from 'next/link';
const SmsSectionV3 = () => (
    <div className="sms_section v2 ">
        <div className="container">
             <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>SMS Alert คือการส่งข้อความรูปแบบหนึ่ง</h3>
                        <p>ซึ่งมีจุดประสงค์ในการแจ้งเตือนตามข่าวสารที่ผู้ส่งต้องการกระจายข้อมูล โดยสามารถส่งข้อความทั้งหมดผ่านระบบ API ได้</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-alert.png`}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>ส่ง SMS Alert ด้วยการเชื่อมต่อ SMS API</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact">
                                        <a className="btn v8">รายละเอียดเพิ่มเติม</a>
                                    </Link>
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
    namespacesRequired: ['LocationBasedSMSPage'],
});

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('LocationBasedSMSPage')(SmsSectionV3);
