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
            <h3 dangerouslySetInnerHTML={{ __html: t('otpcta.title') }}></h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
              className="btn v7"
            >
              {t('otpcta.freeBtn')}
            </a>
            <p>
              {t('otpcta.footer1')}
              <a href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in`}>
                {t('otpcta.login')}
              </a>{' '}
              {t('otpcta.footer2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['OtpCtaSection'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpCtaSection')(CtaSectionV2);
