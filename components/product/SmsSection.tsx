import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSection = ({ t }: any) => (
  <div
    className="sms_section lazyload"
    // style={{ backgroundImage: 'url(/img/promo_bg.png' }}
    data-bgset="/img/promo_bg.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
          <div className="sms_text">
            <h3>{t('h1')}</h3>
            <p>{t('p1')}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sms_feature">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>{t('p2')}</p>
                  <h3>2,000,00</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="sms_feature_item">
                  <p>{t('p3')}</p>
                  <h3>
                    2.9 <span>{t('span1')}</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_feature_item">
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src="/img/play_icon.png"
                      alt="Image"
                    />
                    {t('a1')}
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
                  <h4>{t('h2')}</h4>
                  <p>{t('p4')}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_field">
                  <input type="text" placeholder={t('input1')} />
                  <button className="btn v2" type="submit">
                    {t('button1')}
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
