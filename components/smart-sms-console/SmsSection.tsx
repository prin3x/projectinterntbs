import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV3 = ({ t }: any) => (
  <div className="sms_section v2 ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="newsletter_text">
            <h3>
              {t(
                'SmsSection::Sending from a variety of files is possible and more convenient and customizable.'
              )}
            </h3>
            <p>
              {t(
                'SmsSection::The “Send from a file” feature allows you to send the same message to a variety of numbers, or send separate messages to a variety of numbers, supporting CSV, TXT, and Excel files.'
              )}
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="newsletter_img mt-5">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-01.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form v2">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="sms_form_text">
                  <h4>
                    {t(
                      'SmsSection::Try using Smart SMS Console to send SMS messages through a website on your own.'
                    )}
                  </h4>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="sms_form_field">
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                    className="btn v8"
                  >
                    {t('SmsSection::Try for free')}
                  </a>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                    className="btn otp"
                  >
                    {t('SmsSection::Login')}
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
  namespacesRequired: ['SmartSmsConsole'],
});

SmsSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('SmartSmsConsole')(SmsSectionV3);
