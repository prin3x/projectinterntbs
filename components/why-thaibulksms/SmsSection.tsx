import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
  <div className="sms_section v3 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>{t('SMS Communication Platform อันดับ 1 ของไทย มีตัวตนตรวจสอบได้')}</h3>
            <p>ThaiBulkSMS เป็นผู้ให้บริการ SMS Communication Platform ที่ได้รับการรับรองจาก กสทช. ที่เปิดให้บริการมามากกว่า 10 ปี คุณจึงวางใจในคุณภาพบริการของเราได้อย่างแน่นอน</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-WhyNum1.png`}
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
