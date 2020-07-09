import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const QuickRegisterComponents = ({ t }: any) => (
  <div className="register_section">
    <h2>{t('quickregister.header')}</h2>
    <div className="form-indiv">
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('quickregister.firstname')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('quickregister.lastname')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('quickregister.email')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('quickregister.password')}
        />
      </div>
      <div className="captcha">
        <img className="lazyload" data-src="/img/captcha.jpg" alt="Image" />
      </div>
      <div className="sec-checkbox">
        <div>
          <label className="container">
            {t('quickregister.rule')}
            <input type="checkbox" checked={true} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            {t('quickregister.news')}
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="btn-regis">
        <Link href="/register-success">
          <a className="btn v2" href="#">
            {t('quickregister.createBtn')}
          </a>
        </Link>
      </div>
    </div>
  </div>
);
QuickRegisterComponents.getInitialProps = async () => ({
  namespacesRequired: ['QuickRegister'],
});

QuickRegisterComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('QuickRegister')(QuickRegisterComponents);
