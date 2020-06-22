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
        <div className="col-lg-6 col-md-12">
          <div className="track_img">
            <img className="lazyload" data-src="/img/img_22.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="track_text">
            <h3>
              {t('h1-1')} <br />
              {t('h1-2')}
            </h3>
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
                  {t('h2-1')}
                  <br />
                  {t('h2-2')}
                  <span>{t('span1')}</span>
                  {t('h2-3')}
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
                  <span>{t('span2')}</span>
                  {t('h3-2')}
                  <br />
                  {t('h3-3')}
                  <span>{t('span3')}</span>
                  {t('h3-4')}
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
TrackSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpTrackSection'],
});

TrackSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpTrackSection')(TrackSection);
