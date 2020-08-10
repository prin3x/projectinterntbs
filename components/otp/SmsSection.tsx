import { withTranslation, Link } from '../../i18n';
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
            <object type="image/svg+xml" data="/img/img-credit.svg"></object>
            {/* <img
              className="lazyload"
              data-src="/img/device_2.png"
              alt="Image"
            /> */}
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
                  <Link href="/register">
                    <a className="btn v8">{t('otpsms.freeBtn')}</a>
                  </Link>
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
