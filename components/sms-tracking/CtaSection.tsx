import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const CtaSectionV3 = ({ t }: any) => (
  <div
    className="cta_section v2 lazyload"
    // style={{ backgroundImage: 'url(/img/bg_10.png)' }}
    data-bgset="/img/bg_10.png"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className=" col-lg-12">
          <div className="cta-text">
            <h3
              dangerouslySetInnerHTML={{
                __html: t('sms-trackingctasection.title'),
              }}
            ></h3>
            <a className="btn v7">{t('sms-trackingctasection.freeBtn')}</a>
            <p>
              {t('sms-trackingctasection.lablelogin1')}{' '}
              <a>{t('sms-trackingctasection.lablelogin2')}</a>{' '}
              {t('sms-trackingctasection.lablelogin3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['Sms-trackingCtaSection'],
});

CtaSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-trackingCtaSection')(CtaSectionV3);
