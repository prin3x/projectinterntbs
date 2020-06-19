import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const LoginComponents = ({ t }: any) => (
  <div className="login_section">
    <h2>{t('h1')}</h2>
    <div className="form-login">
      <input type="text" className="input-txt01" placeholder={t('input1')} />
      <input type="text" className="input-txt01" placeholder={t('input2')} />
      <div className="link-forgot">
        <Link href="/register">
          <a href="">{t('a1')}</a>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/forgot-password">
          <a href="">{t('a2')}</a>
        </Link>
      </div>
      <div className="btn-login">
        <a className="btn v2" href="#">
          {t('a3')}
        </a>
      </div>
    </div>
  </div>
);
LoginComponents.getInitialProps = async () => ({
  namespacesRequired: ['Login'],
});

LoginComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Login')(LoginComponents);
