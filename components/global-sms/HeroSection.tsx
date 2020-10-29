import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const HeroSectionV3 = ({  }: any) => (
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
                      data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-global.svg`}
                  ></object>
              </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
              <div className="hero_text_one v2">
                  <h1><span>ส่ง SMS และ OTP</span><br />ได้ทั่วโลก ด้วยราคาที่คุ้มค่า</h1>
              </div>
          </div>
        </div>
      </div>
  </div>
);
HeroSectionV3.getInitialProps = async () => ({
  namespacesRequired: ['OtpHeroSection'],
});

HeroSectionV3.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpHeroSection')(HeroSectionV3);
