import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSection = ({ t }: any) => (
  <div
    className="sms_section productsms lazyload"
    // style={{ backgroundImage: 'url(/img/promo_bg.png' }}
    data-bgset="/img/promo_bg.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 ">
          <div className="sms_text">
            <h3>{t('productsms.header')}</h3>
            <p>{t('productsms.title')}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sms_feature">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>{t('productsms.quantity')}</p>
                  <h3>300,000+</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>{t('productsms.duration')}</p>
                  <h3>
                    1.9 <span>{t('productsms.second')}</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_feature_item">
                  <a>
                    <img
                      className="lazyload"
                      data-src="/img/play_icon.png"
                      alt="Image"
                    />
                    {t('productsms.sendfastBtn')}
                  </a>
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
                  <h4>{t('productsms.test.header')}</h4>
                  <p>{t('productsms.test.desc')}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_field">
                  <input
                    type="text"
                    placeholder={t('productsms.test.telNumber')}
                  />
                  <button className="btn v2" type="submit">
                    {t('productsms.test.confirmBtn')}
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
SmsSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductSmsSection'],
});

SmsSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductSmsSection')(SmsSection);
