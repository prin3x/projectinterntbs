import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const TrackSection = ({ t }: any) => (
  <div
    className="track_section lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
  >
    <div className="container">
      <div className="row track_top m-40">
        <div className="col-md-6 col-md-push-6">
          <div className="track_text">
            <h3>{t('LocationBasedSMSPage:advantagesSection.title-align-right')}</h3>
            <p>{t('LocationBasedSMSPage:advantagesSection.description-align-right')}</p>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <div className="track_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs02.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="row track_top m-40">
        <div className="col-md-6">
          <div className="track_text">
            <h3>{t('LocationBasedSMSPage:advantagesSection.title-align-left')}</h3>
            <p>{t('LocationBasedSMSPage:advantagesSection.description-align-left')}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="track_img">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs03.png`}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
TrackSection.getInitialProps = async () => ({
  namespacesRequired: ['LocationBasedSMSPage'],
});

TrackSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('LocationBasedSMSPage')(TrackSection);
