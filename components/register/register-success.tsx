import { withTranslation, Link } from '../../i18n';
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
      <h2>{t('registerfinish.title')}</h2>
      <p
        className="sub-text"
        dangerouslySetInnerHTML={{ __html: t('registerfinish.desc') }}
      ></p>
      <div className="btn-login">
        <Link href="/login">
          <a className="btn v2" href="#">
            {t('registerfinish.loginBtn')}
          </a>
        </Link>
      </div>
      <p>
        {t('registerfinish.resendsms')}
        <a href="">{t('registerfinish.linkresendsms')}</a>
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
