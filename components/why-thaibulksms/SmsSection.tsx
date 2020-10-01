import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
  <div className="sms_section v3 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>SMS Communication Platform อันดับ 1 ของไทย มีตัวตนตรวจสอบได้</h3>
            <p>ThaiBulkSMS เป็น SMS Communication Platform ที่ได้รับการรับรองจาก กสทช. คุณจึงวางใจได้ว่า เมื่อซื้อเครดิตสำหรับส่ง SMS กับเราแล้ว จะสามารถใช้บริการได้จนครบ ไม่มีการปิดบริการไปโดยติดต่อไม่ได้</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src="/img/img-WhyNum1.png"
              alt="Image"
            />
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
