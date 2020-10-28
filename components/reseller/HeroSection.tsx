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
                      data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-bulk.svg`}
                  ></object>
              </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
              <div className="hero_text_one v2">
                  <h1><span>เข้าถึงกลุ่มเป้าหมายในพื้นที่</span><br />ส่งข้อความได้ทันที ไม่ต้องใช้เบอร์</h1>
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
