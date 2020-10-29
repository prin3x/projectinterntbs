import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({  }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>เลือกได้ ระหว่าง Prepaid และ Postpaid</h3>
            <p>หมดกังวลเรื่องการบริหารงบประมาณ เพราะสามารถกำหนดการจ่ายด้วยตนเอง</p>
          </div>
        </div>
      </div>  
      <div className="row m-80">
        <div className="col-lg-6">
          <div className="track_box productBox">
           <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global01.png`}
              alt="Image"
            />
            <h4><span>ส่งได้ทุกภาษา ไม่จำกัดความยาว</span></h4>
            <p>ไม่ว่าข้อความของคุณจะเป็นภาษาอะไร ความยาวเท่าไหร่ ก็ไม่ต้องกังวล เพราะเมื่อส่งผ่านระบบของเรา ผู้รับจะได้รับข้อความที่อ่านได้ง่าย และแสดงผลอย่างที่คุณตั้งใจไว้</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="track_box productBox v2">
           <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global02.png`}
              alt="Image"
            />
            <h4><span>พร้อมซัพพอร์ต โดยทีมงานผู้เชี่ยวชาญ</span></h4>
            <p>หากคุณต้องการความช่วยเหลือหรือคำแนะนำในการส่ง SMS ไปต่างประเทศศ เรามีผู้เชี่ยวชาญที่พร้อมซัพพอร์ตคุณ</p>
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
