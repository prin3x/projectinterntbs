import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
  <div
    className="promo_section lazyload"
  >
    <div className="container">
      <div className="row align-items-center row_pad">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img m-80">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-02.png`}
              alt="Image"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>ส่ง SMS ที่ซับซ้อนกว่าได้ ด้วยการส่งผ่าน API</h3>
            <p>การส่ง SMS ผ่าน API จะใช้สำหรับการส่ง SMS แจ้งเตือนแบบอัตโนมัติ ที่ต้องมีการเชื่อมต่อข้อมูลกับแอพพลิเคชัน เว็บไซต์ หรือฐานข้อมูลที่มีอยู่ เช่น แจ้งสถานะการส่ง แจ้งเตือนวันหมดอายุ หรือให้ผู้รับยืนยันตัวตนด้วย OTP เป็นต้น</p>
            {/* <a className="link" >
              {t('productpromo.section.2.link')}
            </a> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 promo_item">
          <h3>วัดผลการส่งได้รวดเร็ว ด้วยรายงานที่ชาญฉลาด</h3>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS01.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>รายงานสถานะการเปิดอ่านข้อความ</h4>
              <p>รู้ได้ทันทีว่าผู้รับเปิดอ่านข้อความหรือไม่<br />(ผ่านการใช้งาน <span>SMS Tracking</span>)</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS02.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>รายงานสถานะการส่งโดยละเอียด</h4>
              <p>โดยดูสถานะการส่งของแต่ละเบอร์ได้ ทำให้รู้ว่าข้อความไหนบ้างที่ส่งไม่ถึงผู้รับ</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS03.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>รายงานการส่งย้อนหลัง</h4>
              <p>เลือกดูรายงานข้อมูลการส่งย้อนหลังได้</p>
            </div>
          </div>
        </div> 
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img m-80">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-03.png`}
              alt="Image"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>ตั้งชื่อผู้ส่งเองได้ เพิ่มความน่าเชื่อถือให้ธุรกิจ</h3>
            <p>คุณสามารถกำหนดชื่อผู้ส่ง (Sender Name) เองได้ นอกจากเพิ่มความน่าเชื่อถือเมื่อเปิดอ่านแล้ว ยังเพิ่มความเป็น Branding ให้กับธุรกิจคุณอีกด้วย</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpSimpleIconSection'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSimpleIconSection')(SimpleIconSection);
