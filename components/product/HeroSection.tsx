import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSection = ({ t }: any) => (
  <div
    className="hero_section"
    style={{ backgroundImage: 'url(img/hero_bg.png)' }}
  >
    <img src="img/curve_1.png" alt="Image" className="hero_curve" />
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="hero_text_one">
            <span>{t('t3')}</span>
            <h1>SMS Provider</h1>
            <p>{t('t4')}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="hero_img_one">
            <img src="img/hero_1.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="row align-items-center hero_bottom_one">
        <div className="col-lg-6">
          <div className="hero_img_two">
            <img src="img/hero_2.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero_text_two">
            <span>
              บริการส่ง SMS ครบวงจร ครอบคลุม <br />
              ส่งง่าย หลากหลายธุรกิจมั่นใจ
            </span>
            <h2>
              <span>SMS Provider</span> เจ้าเดียวในไทย ที่ได้รับใบอนุญาตจาก
              กสทช.
            </h2>
            <p>
              ตรวจสอบได้ถึงมือถือปลายทาง ว่า SMS ส่งถึงมือถือผู้รับหรือไม่
              หากส่งไม่ถึง เช่น ติด Anti-Spam, ปิดเครื่อง, โทรศัพท์ข้อมูลเต็ม
              ฯลฯ ทางเราจะคืนเครดิตให้คุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('common')(HeroSection);
