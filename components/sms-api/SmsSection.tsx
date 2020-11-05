import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>SMS API สำหรับ Developer</h3>
            <p>เชื่อมต่อด้วยภาษาที่คุณเลือก ด้วยระบบ API ของ ThaiBulkSMS</p>
            <ul className="api-des">
              <li>มั่นใจ เชื่อถือได้ เรื่องความเสถียร</li>
              <li>รับรองความปลอดภัยในการเชื่อมต่อ API</li>
              <li>เชื่อมต่อง่ายด้วยตนเอง ภายใน 5 นาที</li>
              <li>รองรับการใช้งานมากกว่า 10 ภาษา</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-aw-api01.png`}
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
                  <h4>ติดปัญหาหรือมีข้อสงสัยเกี่ยวกับการเชื่อมต่อ API</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                    className="btn v8"
                  >
                    สอบถามผู้เชี่ยวชาญ
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
  namespacesRequired: ['OtpSmsSection'],
});

SmsSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSmsSection')(SmsSectionV3);
