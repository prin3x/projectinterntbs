import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const RegisterComponents = ({ t }: any) => (
  <div className="register_section">
    <h2>{t('h1')}</h2>
    <div className="form-indiv">
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input1')} />
        <input type="text" className="input-txt02" placeholder={t('input2')} />
      </div>
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input3')} />
        <input type="text" className="input-txt02" placeholder={t('input4')} />
      </div>
      <div className="captcha">
        <img className="lazyload" data-src="/img/captcha.jpg" alt="Image" />
      </div>
      <div className="sec-checkbox">
        <div>
          <label className="container">
            {t('div1')}
            <input type="checkbox" checked={true} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            {t('div2')}
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="btn-regis">
        <Link href="/register-success">
          <a className="btn v2" href="#">
            {t('a1')}
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
