import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({  }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>ไม่จำเป็นต้องมีหมายเลขโทรศัพท์ในการส่ง</h3>
            <p>สามารถส่งข้อความได้ทันที เมื่อกลุ่มเป้าหมายเข้ามายังบริเวณที่กำหนดไว้ เข้าถึงกลุ่มเป้าหมายได้ง่ายขึ้น เหมาะสำหรับธุรกิจที่ต้องการเกิดการขายทันทีในพื้นที่ออฟไลน์</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs-01.png`}
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
                  <h4>เข้าถึงลูกค้าอย่างไร พิสูจน์ได้ด้วยตนเอง</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={``}
                    className="btn v8"
                  >
                    ให้เราช่วยแนะนำ
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
