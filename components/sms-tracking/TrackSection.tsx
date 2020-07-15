import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSectionV2 = ({ t }: any) => (
  <div
    className="track_section lazyload"
    // style={{ backgroundImage: 'url(/img/bg_7.png)' }}
    data-bgset="/img/bg_7.png"
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-lg-6 col-md-12">
          <div className="track_img">
            <object type="image/svg+xml" data="/img/otp1_animate.svg"></object>
            {/* <img className="lazyload" data-src="/img/img_19.png" alt="Image" /> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="track_text">
            <h3>{t('sms-trackingtracksection.title')}</h3>
            <p>{t('sms-trackingtracksection.desc')}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="track_box">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingtracksection.campaigntitle'),
                  }}
                ></h4>
                <a href="#" className="btn v3">
                  {t('sms-trackingtracksection.campaignBtn')}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="track_box v2">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingtracksection.corporatepackagetitle'),
                  }}
                ></h4>
                <a href="#" className="btn v3">
                  {t('sms-trackingtracksection.corporatepackageBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
TrackSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['Sms-trackingTrackSection'],
});

TrackSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-trackingTrackSection')(TrackSectionV2);
