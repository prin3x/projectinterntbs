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
            <h1>{t('homehero.title')}</h1>
            <p>{t('homehero.desc')}</p>
            <ul className="cta-btn">
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
                  className="btn v3"
                >
                  {t('homehero.freeBtn')}
                </a>
              </li>
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                  className="btn v5"
                >
                  {t('homehero.viewPackageBtn')}
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
