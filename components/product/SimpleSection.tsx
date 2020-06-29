import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleSection = ({ t }: any) => (
  <div
    className="simple_section lazyload"
    // style={{ backgroundImage: 'url(/img/bg_4.png)' }}
    data-bgset="/img/bg_4.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="simple_title">{t('homeproductsimple.header')}</h2>
        </div>
        <div className="col-md-12">
          <ul className="simple_feature_list">
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.1')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.2')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.3')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.4')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.5')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.6')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.7')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.8')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('homeproductsimple.feature.9')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
SimpleSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductSimpleSection'],
});

SimpleSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductSimpleSection')(SimpleSection);
