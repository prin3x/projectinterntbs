import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>ส่งจากไฟล์ได้หลากหลาย สะดวกกว่า ปรับแต่งได้มากกว่า</h3>
            <p>ฟีเจอร์ส่งจากไฟล์ จะทำให้คุณสามารถส่งข้อความเดียวไปยังหลายเบอร์ หรือส่งข้อความต่างกันไปยังหลายเบอร์ได้ รองรับทั้ง CSV, TXT และ Excel</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img mt-5">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-01.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="sms_form_text">
                  <h4>ลองใช้ Smart SMS Console เพื่อส่ง SMS ผ่านเว็บไซต์ด้วยตนเอง</h4>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                    className="btn v8"
                  >
                    ทดลองใช้ฟรี
                  </a>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                    className="btn otp"
                  >
                    ล็อกอิน
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
