import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const GlobeSection = ({ t }: any) => (
  <div className="globe_section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="globe_text">
            <h3>
              {t('h1-1')} <span>{t('span1-1')}</span> {t('h1-2')}{' '}
              <span>{t('span1-2')}</span> {t('h1-3')}
            </h3>
            <p>{t('p1')}</p>
            <a href="#" className="btn v3">
              {t('a1')}
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="globe_img">
            <img src="img/img_10.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

GlobeSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeHeroSection'],
});

GlobeSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeGlobeSection')(GlobeSection);
