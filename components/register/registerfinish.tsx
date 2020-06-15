import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const RegisterfinishComponents = ({ t }: any) => (
  <div className="register_section">
    <div className="finish-regis">
      <div className="img-finish-regis">
        <img
          className="lazyload"
          data-src="/img/img-finish-regis.png"
          alt="Image"
        />
      </div>
      <h2>{t('h1')}</h2>
      <p className="sub-text">
        {t('p1-1')}
        <br />
        {t('p1-2')}
      </p>
      <div className="btn-login">
        <a className="btn v2" href="#">
          {t('a1')}
        </a>
      </div>
      <p>
        {t('p2')}
        <a href="">{t('a2')}</a>
      </p>
    </div>
  </div>
);
RegisterfinishComponents.getInitialProps = async () => ({
  namespacesRequired: ['Registerfinish'],
});

RegisterfinishComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Registerfinish')(RegisterfinishComponents);
