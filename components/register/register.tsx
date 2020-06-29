import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const RegisterComponents = ({ t }: any) => (
  <div className="register_section">
    <h2>{t('register.header')}</h2>
    <div className="form-indiv">
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('register.firstname')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('register.lastname')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('register.phone')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('register.email')}
        />
      </div>
      <div className="captcha">
        <img className="lazyload" data-src="/img/captcha.jpg" alt="Image" />
      </div>
      <div className="sec-checkbox">
        <div>
          <label className="container">
            {t('register.rule')}
            <input type="checkbox" checked={true} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            {t('register.news')}
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="btn-regis">
        <Link href="/register-success">
          <a className="btn v2" href="#">
            {t('register.createBtn')}
          </a>
        </Link>
      </div>
    </div>
  </div>
);
RegisterComponents.getInitialProps = async () => ({
  namespacesRequired: ['Register'],
});

RegisterComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Register')(RegisterComponents);
