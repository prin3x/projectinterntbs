import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleSection = ({ t }: any) => (
  <div
    className="simple_section"
    style={{ backgroundImage: 'url(/img/bg_4.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="simple_title">{t('h1')}</h2>
        </div>
        <div className="col-md-12">
          <ul className="simple_feature_list">
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-1')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-2')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-3')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-4')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-5')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-6')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-7')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-8')}</p>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <p>{t('p1-9')}</p>
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
