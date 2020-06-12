import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSectionV2 = ({ t }: any) => (
  <div
    className="hero_section v2 lazyload"
    // style={{ backgroundImage: 'url(/img/hero_img_2.png)' }}
    data-bgset="/img/hero_img_2.png"
  >
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="hero_text_one">
            <h1>{t('h1')}</h1>
            <p>{t('p1')}</p>
            <ul className="cta-btn">
              <li>
                <a className="btn v3" href="#">
                  {t('a1')}
                </a>
              </li>
              <li>
                <a className="btn v5" href="#">
                  {t('a2')}
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
  namespacesRequired: ['HomeHeroSection'],
});

HeroSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeHeroSection')(HeroSectionV2);
