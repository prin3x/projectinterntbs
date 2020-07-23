import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const UsertypeCompanyComponents = ({ t }: any) => (
  <div className="userType_section">
    <h2>{t('usertypecompany.header')}</h2>
    <p
      className="sub_userType"
      dangerouslySetInnerHTML={{ __html: t('usertypecompany.title') }}
    >
      {/* {t('usertypecompany.p1')} <span>{t('usertypecompany.span1')}</span> */}
    </p>
    <div className="form-indiv">
      <h3>{t('usertypecompany.form.title')}</h3>
      <h4>{t('usertypecompany.form.desc')}</h4>
      <div className="company-id">
        <input
          type="text"
          className="input-txt01"
          placeholder={t('usertypecompany.form.taxnumber')}
        />
        <a className="btn v2">{t('usertypecompany.form.searchBtn')}</a>
      </div>
      <input
        type="text"
        className="input-txt01"
        placeholder={t('usertypecompany.form.address')}
      />
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.street')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.district')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.county')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.province')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.postcode')}
        />
      </div>
      <hr className="form-user"></hr>
      <h3>{t('usertypecompany.taxinvoiceaddress.title')}</h3>
      <div className="select-address">
        <label>
          <input type="radio" name="light" checked />
          <span className="design"></span>
          <span className="text">
            {t('usertypecompany.taxinvoiceaddress.radio1')}
          </span>
        </label>

        <label>
          <input type="radio" name="light" />
          <span className="design"></span>
          <span className="text">
            {t('usertypecompany.taxinvoiceaddress.radio2')}
          </span>
        </label>
      </div>
      <input
        type="text"
        className="input-txt01"
        placeholder={t('usertypecompany.form.address')}
      />
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.street')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.district')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.county')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.province')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypecompany.form.postcode')}
        />
      </div>
      <div className="btn-regis">
        <a className="btn v2">
          {t('usertypecompany.taxinvoiceaddress.saveBtn')}
        </a>
      </div>
    </div>
  </div>
);
UsertypeCompanyComponents.getInitialProps = async () => ({
  namespacesRequired: ['UsertypeCompany'],
});

UsertypeCompanyComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('UsertypeCompany')(UsertypeCompanyComponents);
