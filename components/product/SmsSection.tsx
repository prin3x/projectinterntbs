import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import TestQuickregister from '../quickregister/testQuickregister';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';
import Cookie from 'js-cookie';
const SmsSection = ({ t }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin] = useState(Cookie.get('PASSCODE') ? true : false);
    return (
        <div
            className="sms_section productsms lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>
                                {t(
                                    'SmsSection::Sending OTP without delays. Running your campaigns without interruptions.'
                                )}
                            </h3>
                            <p>
                                {t(
                                    'SmsSection::ThaiBulkSMS uses an Intelligent Routing system to automatically select the fastest sending channel, so you  can be confident in the speed and stability of every instance of SMS sending.'
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="sms_feature">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t(
                                                'SmsSection::The average number of SMS sent / day'
                                            )}
                                        </p>
                                        <p>300,000+</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t(
                                                'SmsSection::The average amount of time taken to send SMS'
                                            )}
                                        </p>
                                        <p>
                                            1.9{' '}
                                            <span>
                                                {t('SmsSection::Seconds')}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="sms_feature_item">
                                        <ModalVideo
                                            channel="youtube"
                                            isOpen={isOpen}
                                            videoId="v2ILWufxX8Y"
                                            onClose={() => setIsOpen(false)}
                                        />
                                        <a onClick={() => setIsOpen(true)}>
                                            <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play_icon.png`}
                                                alt="Image"
                                            />
                                            {t(
                                                'SmsSection::Why can we send SMS so quickly?'
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isLogin && <TestQuickregister />}
            </div>
            <style jsx>{`
                #overlay {
                    position: fixed;
                    display: none;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 2;
                    cursor: pointer;
                }

                #text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: 50px;
                    color: white;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                }
            `}</style>
        </div>
    );
};
SmsSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

SmsSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Product')(SmsSection);
