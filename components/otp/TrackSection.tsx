import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSection = ({ t }: any) => (
  <div
    className="track_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
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
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_22.png`}
              alt="Image"
            />
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
                <a className="btn v3" href="https://tbs.readme.io/reference">
                  {t('otptrack.box.2.linkBtn')}
                </a>
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
