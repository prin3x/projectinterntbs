import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSection = ({ t }: any) => (
  <div
    className="track_section lazyload"
    // style={{ backgroundImage: 'url(/img/bg_7.png)' }}
    data-bgset="/img/bg_7.png"
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-md-6 col-md-push-6">
        <div className="track_text">
            <h3 dangerouslySetInnerHTML={{ __html: t('otptrack.title') }}></h3>
            <p>{t('otptrack.desc')}</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img">
            {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
            <img className="lazyload" data-src="/img/img_22.png" alt="Image" />
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
                    __html: t('otptrack.box.1.title'),
                  }}
                ></h4>
                <a className="btn v3">{t('otptrack.box.1.linkBtn')}</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="track_box v2">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('otptrack.box.2.title'),
                  }}
                ></h4>
                <a className="btn v3">{t('otptrack.box.2.linkBtn')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
TrackSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpTrackSection'],
});

TrackSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpTrackSection')(TrackSection);
