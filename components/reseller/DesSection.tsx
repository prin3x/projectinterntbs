import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('ResellerPage:desSection.title')}</h3>
            <p>{t('ResellerPage:desSection.description')}</p>
          </div>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-lg-6">
          <div className="track_box productBox">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-reseller01.png`}
              alt="Image"
            />
            <h4
              dangerouslySetInnerHTML={{
                __html: t('ResellerPage:desSection.title-left-box'),
              }}
            ></h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="track_box productBox v2">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-reseller02.png`}
              alt="Image"
            />
            <h4
              dangerouslySetInnerHTML={{
                __html: t('ResellerPage:desSection.title-right-box'),
              }}
            ></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['ResellerPage'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ResellerPage')(SimpleIconSection);
