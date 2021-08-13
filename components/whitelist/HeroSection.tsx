import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
<<<<<<< HEAD
const HeroSectionV3 = ({  }: any) => (
=======
const HeroSectionV3 = ({ t }: any) => (
>>>>>>> feature/add-new-credit-calculation-page
    <div
        className="hero_section v3 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
    >
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_img_one">
                        <object
                            type="image/svg+xml"
<<<<<<< HEAD
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-whitelist.svg`}
=======
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-otp.svg`}
>>>>>>> feature/add-new-credit-calculation-page
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_text_one v2">
<<<<<<< HEAD
                        <h1>แก้ปัญหา SMS ส่งไม่ถึงด้วยการขอ <span>Whitelist</span></h1>
=======
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'HeroSection::An <span>OTP transmission service</span> that is ready to use<br/>, increases security and does<br/> not require additional programming.'
                                ),
                            }}
                        ></h1>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'HeroSection::This feature is only available for the <span>Corporate Package.</span>'
                                ),
                            }}
                        ></p>
>>>>>>> feature/add-new-credit-calculation-page
                    </div>
                </div>
            </div>
        </div>
    </div>
);
HeroSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

HeroSectionV3.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(HeroSectionV3);
