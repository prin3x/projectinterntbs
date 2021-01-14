import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3
              dangerouslySetInnerHTML={{
                __html: t(
                  'ctaSection::Send OTPs with a ready-to-use system that does not require time wasted in programming.'
                ),
              }}
            ></h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
              className="btn v7"
            >
              {t('ctaSection::Try for free')}
            </a>
            <a
              href={`https://otp-manager.thaibulksms.com/login`}
              className="btn otp2"
              target="_blank"
            >
              {t('ctaSection::Login')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(CtaSectionV2);
