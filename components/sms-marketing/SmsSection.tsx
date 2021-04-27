import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import Link from 'next/link';
const SmsSectionV3 = () => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>SMS Marketing ช่องทางเสริมธุรกิจให้เติบโตขึ้น อย่างมีประสิทธิภาพ</h3>
                        <p>การส่งข้อความด้วย SMS Marketing เป็นการทำการตลาดโดยใช้ SMS ช่วยให้ทุกธุรกิจสามารถสื่อสารกับกลุ่มเป้าหมายหรือลูกค้าได้อย่างไม่จำกัด ส่งข้อความได้ทุกจุดประสงค์</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-marketing.png`}
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
                                    <h4>ต้องการส่งข้อความ SMS Marketing</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact">
                                        <a className="btn v8">ดูบริการ</a>
                                    </Link>
                                    <Link href="/contact">
                                        <a className="btn otp">ติดต่อเรา</a>
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
