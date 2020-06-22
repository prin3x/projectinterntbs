import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSection = ({ t }: any) => (
  <div
    className="hero_section lazyload"
    // style={{ backgroundImage: 'url(/img/hero_bg.png)' }}
    data-bgset="/img/hero_bg.png"
  >
    <img
      className="hero_curve lazyload"
      data-src="/img/curve_1.png"
      alt="Image"
    />
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="hero_text_one">
            <span>{t('span1')}</span>
            <h1>{t('h1')}</h1>
            <p>{t('p1')}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="hero_img_one">
            <img className="lazyload" data-src="/img/hero_1.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="row align-items-center hero_bottom_one">
        <div className="col-lg-6">
          <div className="hero_img_two">
            <img className="lazyload" data-src="/img/hero_2.png" alt="Image" />
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
              <span>{t('span3')}</span>
              <br /> {t('h2')}
            </h2>
            <p>{t('p2')}</p>
            <Link href="/">
              <a>
                <p style={{ color: '#31b1e7' }}>{t('p3')}</p>
              </a>
            </Link>
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
