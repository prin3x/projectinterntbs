import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SmsSectionV4 = ({ t }: any) => (
    <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'SmsSection::Real-time status checking on whether or not the recipient has read the message.'
                                ),
                            }}
                        ></h3>
                        <p>
                            {t(
                                'SmsSection::Free from issues where results cannot be measured after sending the SMS: sending with the Link feature through SMS Tracking allows you to accurately check the reading status, in addition to immediately following up on results after sending.'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_21.png`}
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-top">
                            <div className="col-lg-9 col-md-12">
                                <div className="sms_form_text">
                                    <h4
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                'SmsSection::Word of mouth does not equal what the eye sees: test SMS Tracking on your own.'
                                            ),
                                        }}
                                    ></h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="sms_form_field">
                                    <a
                                        href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                        className="btn v8"
                                    >
                                        {t('SmsSection::Free trial')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
SmsSectionV4.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

SmsSectionV4.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-tracking')(SmsSectionV4);
