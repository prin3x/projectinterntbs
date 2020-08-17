import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const Components404 = () => (
  <div className="register_section">
    <div className="finish-regis">
      <div className="img-finish-regis">
        <object
          type="image/svg+xml"
          data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-404.svg`}
        ></object>
      </div>
      {/* <h2>{t('h1')}</h2>
      <p className="sub-text">{t('p1-1')}</p>
      <div className="btn-login">
        <Link href="/log-in">
          <a className="btn v2" >
            {t('a1')}
          </a>
        </Link>
      </div> */}
    </div>
  </div>
);
Components404.getInitialProps = async () => ({
  namespacesRequired: ['Thankyou'],
});

Components404.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Thankyou')(Components404);
