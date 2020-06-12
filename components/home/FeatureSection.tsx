import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const FeatureSection = ({ t }: any) => (
  <div className="feature_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">
            {t('h1')}
            <span className="col_one">ThaiBulk</span>{' '}
            <span className="col_two">SMS</span>
          </h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="single_feature_item">
            <img className="lazyload" data-src="/img/icon_1.png" alt="Image" />
            <div className="single_feature_text">
              <h4>SMS Provider</h4>
              <p>
                {t('p1')}
                <br />
                {t('p1-1')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img className="lazyload" data-src="/img/icon_2.png" alt="Image" />
            <div className="single_feature_text">
              <h4>Direct Connection</h4>
              <p>{t('p2')}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img className="lazyload" data-src="/img/icon_3.png" alt="Image" />
            <div className="single_feature_text">
              <h4>User Friendly</h4>
              <p>
                {t('p3')} <br />
                {t('p3-1')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="single_feature_item">
            <img className="lazyload" data-src="/img/icon_4.png" alt="Image" />
            <div className="single_feature_text">
              <h4>Industry Expert</h4>
              <p>{t('p4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
FeatureSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeFeatureSection'],
});

FeatureSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeFeatureSection')(FeatureSection);
