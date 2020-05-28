import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const TrackSectionV2 = ({ t }: any) => (
  <div
    className="track_section"
    style={{ backgroundImage: 'url(img/bg_7.png)' }}
  >
    <div className="container">
      <div className="row track_top">
        <div className="col-lg-6 col-md-12">
          <div className="track_img">
            <img src="img/img_19.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="track_text">
            <h3>{t('h1')}</h3>
            <p>{t('p1')}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="track_box">
                <h4>
                  {t('h2-1')} <br />
                  <span>SMS Tracking</span> <br />
                  {t('h2-2')}
                </h4>
                <a href="#" className="btn v3">
                  {t('a1')}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="track_box v2">
                <h4>
                  {t('h3-1')}
                  <br />
                  <span>Corporate Package</span> {t('h3-2')}
                </h4>
                <a href="#" className="btn v3">
                  {t('a2')}
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
  namespacesRequired: ['SmstrackingTrackSection'],
});

TrackSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('SmstrackingTrackSection')(TrackSectionV2);
