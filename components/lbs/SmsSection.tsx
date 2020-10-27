import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3 dangerouslySetInnerHTML={{ __html: t('otpsms.header') }}></h3>
            <p>{t('otpsms.title')}</p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img">
            <object
              type="image/svg+xml"
              data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-credit.svg`}
            ></object>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="sms_form_text">
                  <h4>{t('otpsms.freetitle')}</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                    className="btn v8"
                  >
                    {t('otpsms.freeBtn')}
                  </a>
                  <a
                    href={`https://otp-manager.thaibulksms.com/login`}
                    className="btn otp"
                    target="_blank"
                  >
                    ล็อกอิน
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

SmsSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['OtpSmsSection'],
});

SmsSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSmsSection')(SmsSectionV3);
