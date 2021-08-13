import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v2 ">
        <div className="container">
<<<<<<< HEAD
            <div className="row">
                <div className="col-xl-12">
                    <div className="simple_icon_title m-40 mb-100">
                        <h3>ทำไม ThaiBulkSMS ถึงสามารถขาย SMS ราคาถูก</h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-push-6">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lowPrice01.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-pull-6">
                   <div className="newsletter_text">
                        <h3>ซื้อจากเครือข่ายโดยตรงในปริมาณมาก ทำให้ได้ราคาต่อ SMS ถูกกว่า</h3>
                        <p>การที่เราขาย SMS ราคาถูก จึงไม่ได้เกิดจากการลดราคาเพื่อแข่งขันจนต้องลดคุณภาพตามไปด้วย ทำให้แม้ราคา SMS ของ ThaiBulkSMS จะถูกกว่าใคร คุณก็มั่นใจได้ว่าทุกการส่งมีประสิทธิภาพ เสถียร และถึงมือผู้รับแน่นอน</p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center m-60">
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lowPrice02.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>มีแพ็กเกจให้คุณเลือกตามต้องการยิ่งซื้อมาก ยิ่งได้ราคาถูก</h3>
                        <p>เรามีแพ็กเกจที่เหมาะกับธุรกิจของคุณมากถึง 6 แพ็กเกจ ยิ่งซื้อจำนวน SMS สูง ราคาก็ยิ่งถูก และหากอยากได้ราคาที่ถูกกว่านี้ สามารถ ติดต่อเรา เพื่อนำเสนอราคาที่ดีที่สุดให้แก่คุณ</p>
                        <a href="" className="btn v2">ดูราคาแพ็กเกจ</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="simple_icon_title m-60">
                        <h3>เลือกได้ ระหว่าง <span>Prepaid</span> และ <span>Postpaid</span></h3>
                        <p>หมดกังวลเรื่องการบริหารงบประมาณ เพราะสามารถกำหนดการจ่ายด้วยตนเอง</p>
=======
            <div className="row align-items-center">
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
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
<<<<<<< HEAD
                                    <h4>ทดลองใช้งานระบบส่ง SMS ฟรี ก่อนสั่งซื้อ</h4>
=======
                                    <h4>
                                        {t(
                                            'SmsSection::Immediately test the ready-to-use OTP transmission system'
                                        )}
                                    </h4>
>>>>>>> feature/add-new-credit-calculation-page
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
<<<<<<< HEAD
=======
                                    <a
                                        href={`https://otp-manager.thaibulksms.com/login`}
                                        className="btn otp"
                                        target="_blank"
                                    >
                                        {t('SmsSection::Login')}
                                    </a>
>>>>>>> feature/add-new-credit-calculation-page
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
