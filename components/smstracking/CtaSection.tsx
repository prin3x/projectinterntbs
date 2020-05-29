import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV3 = ({ t }: any) => (
  <div
    className="cta_section v2"
    style={{ backgroundImage: 'url(img/bg_10.png)' }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3>
              {t('h1-1')} <br />
              {t('h1-2')}
            </h3>
            <a href="#" className="btn v7">
              {t('a1')}
            </a>
            <p>
              {t('p1-1')} <a href="#">{t('a2')}</a> {t('p1-2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['SmstrackingCtaSection'],
});

CtaSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('SmstrackingCtaSection')(CtaSectionV3);
