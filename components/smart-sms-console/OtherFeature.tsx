import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const TrackSection = ({ t }: any) => (
    <div
        className="track_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-md-12 promo_item">
                    <h2>
                        {t(
                            'OtherFeature::Many additional features ready for sending with the Smart SMS Console'
                        )}
                    </h2>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="track_box feature">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS04.png`}
                                    alt="Image"
                                />
                                <h4>
                                    {t(
                                        'OtherFeature::Set a variety of messaging time periods'
                                    )}
                                </h4>
                                <p>
                                    {t(
                                        'OtherFeature::Preemptively set time periods as desired by using verifiable time period checking reports.'
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="track_box v2 feature">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS05.png`}
                                    alt="Image"
                                />
                                <h4>{t('OtherFeature::Phonebook system')}</h4>
                                <p>
                                    {t(
                                        'OtherFeature::Record the numbers in the system by using a phonebook system, allowing messages to be sent more easily.'
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="track_box v2 feature">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS06.png`}
                                    alt="Image"
                                />
                                <h4>
                                    {t(
                                        'OtherFeature::Near-empty credit warning notifications'
                                    )}
                                </h4>
                                <p>
                                    {t(
                                        'OtherFeature::Email notifications when credit balances are lower than determined amounts, which can be set by the user.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <div className="track_box feature">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS07.png`}
                                    alt="Image"
                                />
                                <h4>
                                    {t(
                                        'OtherFeature::Messages of any length can be sent'
                                    )}
                                </h4>
                                <p>
                                    {t(
                                        'OtherFeature::The text can be automatically combined into a single message for ease of reading, supported to a maximum of 5 messages.'
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="track_box v2 feature">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS08.png`}
                                    alt="Image"
                                />
                                <h4>{t('OtherFeature::Blocklist system')}</h4>
                                <p>
                                    {t(
                                        'OtherFeature::When numbers that do not wish to be messaged are added to the Blocklist, the system will remove these numbers and cease further messages.'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['SmartSmsConsole'],
});

TrackSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('SmartSmsConsole')(TrackSection);
