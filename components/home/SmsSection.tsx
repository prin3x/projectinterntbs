import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV2 = ({ t }: any) => (
  <div
    className="sms_section lazyload"
    // style={{ backgroundImage: 'url(/img/promo_bg.png)' }}
    data-bgset="/img/promo_bg.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
          <div className="sms_text">
            <h3>{t('homesms.header')}</h3>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sms_feature">
            <div className="row">
              <div className="col-md-12">
                <div className="sms_feature_item">
                  <p>{t('homesms.title')}</p>
                  <h2>4,662,190,879</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sms_feature_item">
                  <p>{t('homesms.quantity')}</p>
                  <h3>300,000+</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sms_feature_item">
                  <p>{t('homesms.duration')}</p>
                  <h3>
                    1.9 <span>{t('homesms.second')}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_text">
                  <h4>{t('homesms.test.header')}</h4>
                  <p>{t('homesms.test.desc')}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_field">
                  <input
                    type="text"
                    placeholder={t('homesms.test.telNumber')}
                  />
                  <button className="btn v2" type="submit">
                    {t('homesms.test.confirmBtn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SmsSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['HomeHeroSection'],
});

SmsSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeSmsSection')(SmsSectionV2);
