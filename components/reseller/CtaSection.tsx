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
            <h3
              dangerouslySetInnerHTML={{
                __html: t('ResellerPage:ctaSection.title'),
              }}
            ></h3>
            <a href={``} className="btn v7">
              {t('ResellerPage:ctaSection.button')}
            </a>
            <p
              dangerouslySetInnerHTML={{
                __html: t('ResellerPage:ctaSection.description'),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
CtaSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['ResellerPage'],
});

CtaSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ResellerPage')(CtaSectionV2);
