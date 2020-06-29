import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSection = ({ t }: any) => (
  <div className="cta_section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-12">
          <div className="cta-text">
            <h3 dangerouslySetInnerHTML={{ __html: t('homecta.header') }}></h3>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <ul className="cta-btn before-footer">
            <li>
              <a className="btn v3" href="#">
                {t('homecta.freeBtn')}
              </a>
            </li>
            <li>
              <a className="btn v5" href="#">
                {t('homecta.viewPackageBtn')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
CtaSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeCtaSection'],
});

CtaSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeCtaSection')(CtaSection);
