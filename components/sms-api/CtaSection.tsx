import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const CtaSectionV2 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3>{t('SMSAPIPage:ctaSection.title')}</h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
              className="btn v7"
            >
              {t('SMSAPIPage:ctaSection.button-left')}
            </a>
            <a href="" className="btn otp2" target="_blank">
              {t('SMSAPIPage:ctaSection.button-right')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['SMSAPIPage'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('SMSAPIPage')(CtaSectionV2);
