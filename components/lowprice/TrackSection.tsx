import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const TrackSection = ({ t }: any) => (
    <div
        className="track_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
    >
        <div className="container">
            <div className="row track_top">
                <div className="col-md-6 col-md-push-6">
                    <div className="track_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'TrackSection::Know the full confirmation status of every entry.'
                                ),
                            }}
                        ></h3>
                        <p>
                            {t(
                                'TrackSection::OTP password self-confirmation statuses are fully viewable for every entry, whether they are successful or have expired.'
                            )}
                        </p>
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
                                        __html: t(
                                            'TrackSection::Operation of the OTP transmission system can only be used on the <span>Corporate SMS package</span>'
                                        ),
                                    }}
                                ></h4>
                                <a
                                    target="_blank"
                                    className="btn v3"
                                    href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/Thaibulksms-otp.pdf`}
                                >
                                    {t('TrackSection::Usage Manual')}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="track_box v2">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t(
                                            'TrackSection::If you have your OTP, you can connect with API as well.'
                                        ),
                                    }}
                                ></h4>
                                <a
                                    target="_blank"
                                    className="btn v3"
                                    href="https://developer.thaibulksms.com/reference#otp"
                                >
                                    {t('TrackSection::Learn more')}
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
    namespacesRequired: ['Otp'],
});

TrackSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(TrackSection);
