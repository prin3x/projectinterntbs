import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import Link from 'next/link';
const FeatureSection = ({ t }: any) => (
    <div className="service_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="service_text">
                        <h2>{t('ServiceSection::homeserviceheader')}</h2>
                        <div className="serviceTBS">
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice01.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>Smart SMS Console</h3>
                                <p>{t('ServiceSection::homeservice1')}</p>
                                <Link href="/product/smart-sms-console">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice02.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>SMS API</h3>
                                <p>{t('ServiceSection::homeservice2')}</p>
                                <Link href="/product/sms-api">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice03.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>OTP Service</h3>
                                <p>{t('ServiceSection::homeservice3')}</p>
                                <Link href="/product/otp">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice04.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>SMS Tracking</h3>
                                <p>{t('ServiceSection::homeservice4')}</p>
                                <Link href="/product/sms-tracking">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice05.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>Global SMS</h3>
                                <p>{t('ServiceSection::homeservice5')}</p>
                                <Link href="/product/global-sms/">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                            <div className="serviceDetail">
                                <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-Hservice06.svg`}
                                    alt="Image"
                                    width="80"
                                    height="80"
                                />
                                <h3>Location Based SMS</h3>
                                <p>{t('ServiceSection::homeservice6')}</p>
                                <Link href="/product/location-based-sms">
                                    {t('ServiceSection::learnmore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="service_img">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-Hservice.svg`}
                            alt="Image"
                            width="80"
                            height="80"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
FeatureSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

FeatureSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(FeatureSection);
