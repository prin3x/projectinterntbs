import { withTranslation, Link } from '../../i18n'
import PropTypes from 'prop-types'
const FaqSection = ({ t }: any) => (
    <div
        className="faq_section lazyload"
        // style={{ backgroundImage: 'url(/img/bg_3.png)' }}
        // data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
    >
        <div className="container">
            <div className="row align-items-center mt-5">
                <div className="col-xl-5 col-lg-12">
                    <div className="faq_bottom_text">
                        <h3>
                            {t('HeroSection::Do you still have questions?')}
                        </h3>
                        <p>
                            {t(
                                'HeroSection::Select your most convenient contact channel'
                            )}
                        </p>
                    </div>
                </div>
                <div className="col-xl-7 col-12-7">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                                    alt="Image"
                                />
                                <a href="tel:027986000" className="btn v4">
                                    {t('HeroSection::Contact an officer')}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                                    alt="Image"
                                />
                                <Link href="/contact">
                                    <a className="btn v4">
                                        {t(
                                            'HeroSection::The officer will contact you back'
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                                    alt="Image"
                                />
                                <a
                                    href="mailto:contact@thaibulksms.com"
                                    className="btn v4"
                                >
                                    {t('HeroSection::Email')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
FaqSection.getInitialProps = async () => ({
    namespacesRequired: ['FAQ'],
})

FaqSection.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('FAQ')(FaqSection)
// export default FaqSection;
