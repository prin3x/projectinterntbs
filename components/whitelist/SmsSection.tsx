import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = () => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
<<<<<<< HEAD
                <div className="col-lg-7 col-md-push-6">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whitelist01.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-5 col-md-pull-6">
                    <div className="newsletter_text">
<<<<<<< HEAD
                        <h3>70% ของการส่ง SMS ไม่ถึงผู้รับ มาจากปัญหา Anti-Spam</h3>
                        <p>สถานะ “Anti-Spam” ที่พบในรายงานการส่งข้อความ เกิดจากการที่ผู้รับปลายทางเคยแจ้งเครือข่ายไว้ว่า ไม่ต้องการรับ SMS โฆษณารบกวน (Spam) ทำให้ SMS ถูกส่งไปไม่ถึง</p>
=======
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'SmsSection::Easy checkups: in only a few clicks,<br/> the OTP can be sent.'
                                ),
                            }}
                        ></h3>
                        <p>
                            {t(
                                'SmsSection::You can send OTP self-verification messages to increase customer security without writing additional programs. Simply set the values for only a few steps, and a code will be ready for use with the API, which quickens Developer workflows.'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-credit.svg`}
                        ></object>
>>>>>>> feature/add-new-credit-calculation-page
=======
                        <h3>
                            70% ของการส่ง SMS ไม่ถึงผู้รับ มาจากปัญหา Anti-Spam
                        </h3>
                        <p>
                            สถานะ “Anti-Spam” ที่พบในรายงานการส่งข้อความ
                            เกิดจากการที่ผู้รับปลายทางเคยแจ้งเครือข่ายไว้ว่า
                            ไม่ต้องการรับ SMS โฆษณารบกวน (Spam) ทำให้ SMS
                            ถูกส่งไปไม่ถึง
                        </p>
>>>>>>> d1b739688e6d951e295c2a574862532f9166f13b
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
<<<<<<< HEAD
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_text">
                                    <h4>SMS แบบไหนบ้างที่เข้าข่ายเป็น Spam</h4>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_field">
<<<<<<< HEAD
                                    <p className="textLeft">มักจะเป็น SMS ที่มีเนื้อหารบกวนผู้รับ เช่น การส่ง SMS ประเภทโฆษณา การตลาด และ การที่ผู้ส่งไม่ได้ขอ <span>Whitelist Sender Name</span> ก็จะทำให้เครือข่ายปลายทางถือว่าเป็นข้อความรบกวน (Spam) เช่นเดียวกัน</p>
=======
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>
                                        {t(
                                            'SmsSection::Immediately test the ready-to-use OTP transmission system'
                                        )}
                                    </h4>
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
                                    <a
                                        href={`https://otp-manager.thaibulksms.com/login`}
                                        className="btn otp"
                                        target="_blank"
                                    >
                                        {t('SmsSection::Login')}
                                    </a>
>>>>>>> feature/add-new-credit-calculation-page
=======
                                    <p className="textLeft">
                                        มักจะเป็น SMS ที่มีเนื้อหารบกวนผู้รับ
                                        เช่น การส่ง SMS ประเภทโฆษณา การตลาด และ
                                        การที่ผู้ส่งไม่ได้ขอ{' '}
                                        <span>Whitelist Sender Name</span>{' '}
                                        ก็จะทำให้เครือข่ายปลายทางถือว่าเป็นข้อความรบกวน
                                        (Spam) เช่นเดียวกัน
                                    </p>
>>>>>>> d1b739688e6d951e295c2a574862532f9166f13b
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
