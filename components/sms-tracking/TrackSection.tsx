import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSectionV2 = ({ t }: any) => (
  <div
    className="track_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-md-6 col-md-push-6">
          <div className="track_text">
            <h3>{t('sms-trackingtracksection.title')}</h3>
            <p>{t('sms-trackingtracksection.desc')}</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img">
            <object
              type="image/svg+xml"
              data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/otp1_animate.svg"`}
            ></object>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="track_box">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingtracksection.campaigntitle'),
                  }}
                ></h4>
                <Link href="/">
                  <a className="btn v3">
                    {t('sms-trackingtracksection.campaignBtn')}
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="track_box v2">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingtracksection.corporatepackagetitle'),
                  }}
                ></h4>
                <a className="btn v3">
                  {t('sms-trackingtracksection.corporatepackageBtn')}
                </a>
              </div>
            </div> */}
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
