import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
    <div className="sms_section v3 ">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6 col-md-push-6">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-WhyNum1.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="newsletter_text">
                        <h3>
                            {t(
                                'SmsSection::As Thailand’s Number 1 SMS Communication Platform, which can be personally confirmed,'
                            )}
                        </h3>
                        <p>
                            {t(
                                'SmsSection::ThaiBulkSMS provides the SMS Communication Platform that is certified by the National Broadcasting and Telecommunications Commission. We have been operating for over 10 years, so you can certainly rest assured in the quality of our service.'
                            )}
                        </p>
                    </div>
                </div>    
            </div>
            <div className="row m-80">
                <div className="col-md-6">
                    <div className="track_img mt-5">
                        {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysupport.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="track_text mt-5">
                        <h3>ซัพพอร์ตโดยทีมคนไทย ที่ให้บริการระดับโลก</h3>
                        <p>เรามีทีมซัพพอร์ตคนไทยคอยให้ความช่วยเหลือแม้นอกเวลาทำการ ติดต่อง่ายกว่า ไม่มีอุปสรรคด้านการสื่อสาร จึงแก้ปัญหาได้เร็วกว่า ทั้งนี้การให้บริการของเรายังได้มาตรฐานระดับโลก จากการที่เรามี <a href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/global-sms/`}>บริการส่ง SMS ไปต่างประเทศ</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

SmsSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('WhyThaibulksms')(SmsSectionV3);
