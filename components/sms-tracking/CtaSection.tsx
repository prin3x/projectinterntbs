import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV3 = ({ t }: any) => (
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
                  'CtaSection::Avoid ineffective Marketing budget wastage <br/>through SMS Tracking.'
                ),
              }}
            ></h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
              className="btn v7"
            >
              {t('CtaSection::Free trial')}
            </a>
            <p>
              {t('CtaSection::Or')}{' '}
              <a href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                {t('CtaSection::log in')}
              </a>{' '}
              {t('CtaSection::, if you already have an account')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['Sms-tracking'],
});

CtaSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-tracking')(CtaSectionV3);
