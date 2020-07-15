import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const UsertypeIndividual = ({ t }: any) => (
  <div className="userType_section">
    <h2>{t('usertypeindividual.header')}</h2>
    <p
      className="sub_userType"
      dangerouslySetInnerHTML={{ __html: t('usertypeindividual.title') }}
    >
      {/* {t('usertypeindividual.p1')} <span>{t('usertypeindividual.span1')}</span> */}
    </p>
    <div className="form-indiv">
      <h3>{t('usertypeindividual.form.title')}</h3>
      <input
        type="text"
        className="input-txt01"
        placeholder={t('usertypeindividual.form.taxnumber')}
      />
      <input
        type="text"
        className="input-txt01"
        placeholder={t('usertypeindividual.form.address')}
      />
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.street')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.district')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.county')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.province')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.postcode')}
        />
      </div>
      <hr className="form-user"></hr>
      <h3>{t('usertypeindividual.taxinvoiceaddress.title')}</h3>
      <div className="select-address">
        <label>
          <input type="radio" name="light" />
          <span className="design"></span>
          <span className="text">
            {t('usertypeindividual.taxinvoiceaddress.radio1')}
          </span>
        </label>

        <label>
          <input type="radio" name="light" />
          <span className="design"></span>
          <span className="text">
            {t('usertypeindividual.taxinvoiceaddress.radio2')}
          </span>
        </label>
      </div>
      <input
        type="text"
        className="input-txt01"
        placeholder={t('usertypeindividual.form.address')}
      />
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.street')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.district')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.county')}
        />
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.province')}
        />
      </div>
      <div className="input-twocolumn">
        <input
          type="text"
          className="input-txt02"
          placeholder={t('usertypeindividual.form.postcode')}
        />
      </div>
      <div className="btn-regis">
        <Link href="/payment">
          <a className="btn v2" href="#">
            {t('usertypeindividual.taxinvoiceaddress.saveBtn')}
          </a>
        </Link>
      </div>
    </div>
  </div>
);
UsertypeIndividual.getInitialProps = async () => ({
  namespacesRequired: ['UsertypeIndividual'],
});

UsertypeIndividual.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('UsertypeIndividual')(UsertypeIndividual);
