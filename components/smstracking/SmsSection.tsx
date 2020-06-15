import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV4 = ({ t }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>
              {t('h1-1')} <br />
              {t('h1-2')}
            </h3>
            <p>{t('p1')}</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <img className="lazyload" data-src="/img/img_21.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-top">
              <div className="col-lg-8 col-md-12">
                <div className="sms_form_text">
                  <h4>
                    {t('h2-1')} <br />
                    {t('h2-2')}
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a href="#" className="btn v8">
                    {t('a1')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SmsSectionV4.getInitialProps = async () => ({
  namespacesRequired: ['SmstrackingSmsSection'],
});

SmsSectionV4.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('SmstrackingSmsSection')(SmsSectionV4);
