import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const UsertypeComponents = ({ t }: any) => (
  <div className="userType_section">
    <h2>{t('h1')}</h2>
    <p className="sub_userType">{t('p1')}</p>
    <div className="chooseType">
      <div className="indivType">
        <div className="img-user">
          <img className="lazyload" data-src="/img/img-indiv.png" alt="Image" />
        </div>
        <Link href="individual">
          <a href="#" className="btn v3">
            {t('a1')}
          </a>
        </Link>
      </div>
      <div className="companyType">
        <div className="img-user">
          <img
            className="lazyload"
            data-src="/img/img-company.png"
            alt="Image"
          />
        </div>
        <Link href="company">
          <a href="#" className="btn v3">
            {t('a2')}
          </a>
        </Link>
      </div>
    </div>
  </div>
);
UsertypeComponents.getInitialProps = async () => ({
  namespacesRequired: ['Usertype'],
});

UsertypeComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Usertype')(UsertypeComponents);
