import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const WhyPriceSection = ({ t }: any) => (
  <div className="simple_icon_section v2 bg-whyBottom">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t(`จะเน้นราคาถูก หรือได้ฟีเจอร์ครบก็เลือกได้ตามต้องการ`)}</h3>
          </div>
        </div>
        <div className="row justify-content-xl-center col-xl-10 offset-xl-1 m-80">
          <div className="col-lg-6 col-md-6">
            <div
              className="pricing_box m-0 pricing_box1 whyPrice"
              style={{
                borderTop: '8px solid #31b1e7',
                backgroundColor: '#fff',
              }}
            >
              <h3>
                Standard Package
              </h3>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>ราคาถูกกว่า</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>ดูรายงานการส่งได้</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>ใช้งานฟีเจอร์พื้นฐานได้ครบถ้วน</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>มีเครื่องมือวัดผลแคมเปญ</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>เริ่มต้นที่</span>
                <h2>
                  0.28
                  <span style={{ marginLeft: '1px' }}>
                    บาท / SMS
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="pricing_box m-0 whyPrice"
              style={{
                borderTop: '8px solid #31b1e7',
                backgroundColor: '#fff',
              }}
            >
              <h3>
                Corporate Package
              </h3>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>ทุกฟีเจอร์ของ Standard SMS</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>ส่ง OTP ด้วยระบบพร้อมใช้</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>คืนเครดิตถ้าส่งไม่ถึงผู้รับ</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>เช็กสถานะการส่งได้ละเอียดยิ่งกว่า</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>เริ่มต้นที่</span>
                <h2>
                  0.34
                  <span style={{ marginLeft: '1px' }}>
                    บาท / SMS
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a className="btn v3">เรียนรู้เพิ่มเติมเกี่ยวกับฟีเจอร์</a>
        </div>
      </div>
      
    </div>
  </div>
);

WhyPriceSection.getInitialProps = async () => ({
  namespacesRequired: ['WhyPriceSection'],
});

WhyPriceSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('WhyPriceSection')(WhyPriceSection);
