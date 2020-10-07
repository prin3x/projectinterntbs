import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';

const SmartSmsConsoleContentSection = ({ t }: any) => (
    <div
        className="hero_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_bg.png`}
    >
        <img
            className="hero_curve lazyload"
            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/curve_1.png`}
            alt="Image"
        />
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div
                        className="hero_text_one"
                        dangerouslySetInnerHTML={{
                            __html: t('producthero.section.1.title'),
                        }}
                    ></div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="hero_img_one">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/banner-product.svg`}
                        ></object>
                    </div>
                </div>
            </div>
            <div className="row align-items-center hero_bottom_one">
                <div className="col-lg-6">
                    <div className="hero_img_two">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_2.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero_text_two">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: t('producthero.section.2.title1'),
                            }}
                        ></span>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: t('producthero.section.2.title2'),
                            }}
                        ></h2>
                        <p>{t('producthero.section.2.title3')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
SmartSmsConsoleContentSection.getInitialProps = async () => ({
    namespacesRequired: ['SmartSmsConsoleContentSection'],
});

SmartSmsConsoleContentSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('SmartSmsConsoleContentSection')(SmartSmsConsoleContentSection);
