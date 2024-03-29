import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleIconSectionV2 = ({ t }: any) => (
    <div className="simple_icon_section">
        <div className="container">
            <div className="row">
                <div className="col-xl-10 offset-xl-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t(
                                'SimpleIconSection::Accurate campaign results measurement with tangible data'
                            )}
                        </h3>
                        <p>
                            {t(
                                'SimpleIconSection::You can use data from the “Campaign results” of SMS Tracking for marketing analyses on how efficient and price-effective your SMS campaign was.'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="icon_wrapper">
                        <img
                            className="arrow_bg"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_bg.png`}
                            alt="Image"
                        />
                        <div className="simple_icon_wrapper">
                            <div className="simple_icon smsTrakingpage">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_12.png`}
                                    alt="Image"
                                />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: t(
                                            'SimpleIconSection::Number of SMS messages sent to the recipient'
                                        ),
                                    }}
                                ></p>
                            </div>
                            <div className="simple_icon smsTrakingpage">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_4.png`}
                                    alt="Image"
                                />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: t(
                                            'SimpleIconSection::Number of recipients who opened the message'
                                        ),
                                    }}
                                ></p>
                            </div>
                            <div className="simple_icon smsTrakingpage">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_13.png`}
                                    alt="Image"
                                />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: t(
                                            'SimpleIconSection::Number of people who opened the website from the SMS message'
                                        ),
                                    }}
                                ></p>
                            </div>
                            {/* <div className="simple_icon">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_14.png`}
                  alt="Image"
                />
                <p>
                  {t('SimpleIconSection::p5-1')}
                  <br />
                  {t('SimpleIconSection::p5-2')}
                </p>
              </div> */}
                            <div className="simple_icon smsTrakingpage">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_17.png`}
                                    alt="Image"
                                />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: t(
                                            'SimpleIconSection::Number of credits used in the campaign'
                                        ),
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row icon_btn">
                <div className="col-lg-10 offset-lg-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="simple_icon_btn">
                                <h4>Conversion rate</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="simple_icon_btn">
                                <h4>ROI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
SimpleIconSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

SimpleIconSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-tracking')(SimpleIconSectionV2);
