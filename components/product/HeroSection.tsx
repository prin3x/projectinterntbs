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
            <span>{t('span1')}</span>
            <h1>SMS Provider</h1>
            <p>{t('p1')}</p>
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
              {t('span2-1')}
              <br />
              {t('span2-2')}
            </span>
            <h2>
              <span>{t('span3')}</span> {t('h1')}
            </h2>
            <p>{t('p2')}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductHeroSection')(HeroSection);
