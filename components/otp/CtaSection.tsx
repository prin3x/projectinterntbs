import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV2 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    // style={{ backgroundImage: 'url(/img/bg_10.png)' }}
    data-bgset="/img/bg_10.png"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3 dangerouslySetInnerHTML={{ __html: t('otpcta.title') }}></h3>
            <Link href="/register">
              <a className="btn v7">{t('otpcta.freeBtn')}</a>
            </Link>
            <p>
              {t('otpcta.footer1')}
              <Link href="/log-in">
                <a>{t('otpcta.login')}</a>
              </Link>{' '}
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
