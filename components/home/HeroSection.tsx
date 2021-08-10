import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSectionV2 = ({ t }: any) => (
    // <div
    //     className="hero_section v2 lazyload"
    //     data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mobile/hero_img_2.webp [(max-width:767px)] | ${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_img_2.png`}
    // >

    <div className="hero_section v2">
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="hero_text_one">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'HeroSection::Meeting every one of your SMS sending needs.'
                                ),
                            }}
                        />
                        <p>
                            {t(
                                'HeroSection::SMS sending service capable of quick sending with reliable stability. Consultation is available at every step.'
                            )}
                        </p>
                        <ul className="cta-btn">
                            <li>
                                <a
                                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
                                    className="btn v3"
                                >
                                    {t('HeroSection::Try SMS sending for free')}
                                </a>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a className="btn v5">
                                        {t('HeroSection::View package prices')}
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

HeroSectionV2.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(HeroSectionV2);
