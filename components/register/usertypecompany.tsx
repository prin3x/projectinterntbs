import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const UsertypeCompanyComponents = ({ t }: any) => (
  <div className="userType_section">
    <h2>{t('h1')}</h2>
    <p className="sub_userType">
      {t('p1')} <span>{t('span1')}</span>
    </p>
    <div className="form-indiv">
      <h3>{t('h2')}</h3>
      <h4>{t('h3')}</h4>
      <div className="company-id">
        <input type="text" className="input-txt01" placeholder={t('input1')} />
        <a className="btn v2" href="#">
          {t('a1')}
        </a>
      </div>
      <input type="text" className="input-txt01" placeholder={t('input2')} />
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input3')} />
        <input type="text" className="input-txt02" placeholder={t('input4')} />
      </div>
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input5')} />
        <input type="text" className="input-txt02" placeholder={t('input6')} />
      </div>
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input7')} />
      </div>
      <hr className="form-user"></hr>
      <h3>{t('h4')}</h3>
      <div className="select-address">
        <label>
          <input type="radio" name="light" checked />
          <span className="design"></span>
          <span className="text">{t('span2')}</span>
        </label>

        <label>
          <input type="radio" name="light" />
          <span className="design"></span>
          <span className="text">{t('span3')}</span>
        </label>
      </div>
      <input type="text" className="input-txt01" placeholder={t('input2')} />
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input3')} />
        <input type="text" className="input-txt02" placeholder={t('input4')} />
      </div>
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input5')} />
        <input type="text" className="input-txt02" placeholder={t('input6')} />
      </div>
      <div className="input-twocolumn">
        <input type="text" className="input-txt02" placeholder={t('input7')} />
      </div>
      <div className="btn-regis">
        <a className="btn v2" href="#">
          {t('a2')}
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
