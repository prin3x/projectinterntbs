import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSectionV2 = ({ t }: any) => (
  <div
    className="hero_section v2"
    style={{ backgroundImage: 'url(img/hero_img_2.png)' }}
  >
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="hero_text_one">
            {/* <h1>ตอบโจทย์ทุกความต้องการ ด้านการส่ง SMS</h1>
            <p>ส่ง SMS ไว มั่นใจได้ในความเสถียรพร้อมให้คำปรึกษาทุกขั้นตอน</p> */}
            <h1>{t('t1')}</h1>
            <p>{t('t2')}</p>
            <ul className="cta-btn">
              <li>
                <a className="btn v3" href="#">
                  ทดลองส่งฟรี
                </a>
              </li>
              <li>
                <a className="btn v5" href="#">
                  ดูแพ็กเกจราคา
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeroSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

HeroSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('common')(HeroSectionV2);
