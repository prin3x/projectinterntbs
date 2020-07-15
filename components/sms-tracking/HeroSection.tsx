import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSectionV4 = ({ t }: any) => (
  <div
    className="hero_section v3 lazyload"
    // style={{ backgroundImage: 'url(/img/bg_11.png)' }}
    data-bgset="/img/bg_11.png"
  >
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero_img_one">
            <object type="image/svg+xml" data="/img/img-smstracking.svg"></object>
            {/* <img className="lazyload" data-src="/img/hero_3.png" alt="Image" /> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero_text_one v2">
            <span>{t('sms-trackinghero.header')}</span>
            <h1>{t('sms-trackinghero.title')}</h1>
            <p>{/* {t('p1')} <span>{t('span2')}</span> {t('p2')} */}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
HeroSectionV4.getInitialProps = async () => ({
  namespacesRequired: ['Sms-trackingHeroSection'],
});

HeroSectionV4.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-trackingHeroSection')(HeroSectionV4);
