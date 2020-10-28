import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({  }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>ราคาคุ้มค่า ดีกว่าหน้าเว็บ</h3>
            <p>เมื่อเป็นตัวแทนจำหน่าย ไม่ว่าจะซื้อ SMS ปริมาณใดก็ตาม คุณจะได้ราคา Special Rate ที่ดีกว่าหน้าเว็บ เหมาะกับธุรกิจ Software House หรือ Digital Agency</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller01.png`}
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
                  <h4>สนใจเป็นตัวแทนจำหน่ายกับ ThaiBulkSMS</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={``}
                    className="btn v8"
                  >
                    ขอใบเสนอราคา
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
