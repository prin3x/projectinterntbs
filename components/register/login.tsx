import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const Login = ({ t }: any) => (
  <div className="login_section">
    <h2>{t('h1')}</h2>
    <div className="form-login">
      <input type="text" className="input-txt01" placeholder={t('input1')} />
      <input type="text" className="input-txt01" placeholder={t('input2')} />
      <div className="link-forgot">
        <a href="">{t('a1')}</a>&nbsp;&nbsp;&nbsp;
        <a href="">{t('a2')}</a>
      </div>
      <div className="btn-login">
        <a className="btn v2" href="#">
          {t('a3')}
        </a>
      </div>
    </div>
  </div>
);
Login.getInitialProps = async () => ({
  namespacesRequired: ['Login'],
});

Login.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Login')(Login);
