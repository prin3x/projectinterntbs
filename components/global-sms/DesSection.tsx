import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('GlobalSMSPage:desSection.title')}</h3>
            <p>{t('GlobalSMSPage:desSection.description')}</p>
          </div>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-lg-6">
          <div className="track_box productBox">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global01.png`}
              alt="Image"
            />
            <h4>
              <span>{t('GlobalSMSPage:desSection.title-left-box')}</span>
            </h4>
            <p>{t('GlobalSMSPage:desSection.description-left-box')}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="track_box productBox v2">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global02.png`}
              alt="Image"
            />
            <h4>
              <span>{t('GlobalSMSPage:desSection.title-right-box')}</span>
            </h4>
            <p>{t('GlobalSMSPage:desSection.description-right-box')}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['GlobalSMSPage'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('GlobalSMSPage')(SimpleIconSection);