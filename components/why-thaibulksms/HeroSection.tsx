import { withTranslation } from "../../i18n";
import PropTypes from "prop-types";
const HeroSectionWhy = ({ t }: any) => (
  <div
    className="hero_section v3 lazyload"
    // style={{ backgroundImage: 'url(/img/bg_11.png)' }}
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
  >
    <div className="container">
      <div className="row align-item-center hero_top_one">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero_img_one">
            <object type="image/svg+xml" data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-why.svg`}></object>
            {/* <img className="lazyload" data-src="/img/hero_4.png" alt="Image" /> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero_text_one v2">
            <h1>ทำไมถึงควรใช้บริการส่งSMS<br />ของ <span>ThaiBulkSMS</span></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);
HeroSectionWhy.getInitialProps = async () => ({
  namespacesRequired: ['WhyHeroSection'],
});

HeroSectionWhy.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('WhyHeroSection')(HeroSectionWhy);
