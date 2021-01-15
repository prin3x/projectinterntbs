import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const WhyBrandSection = ({ t }: any) => (
  <div className="simple_icon_section v2 bg-whyTop">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('แบรนด์ชั้นนำที่วางใจ ThaiBulkSMS')}</h3>
          </div>
        </div>
      </div>
      <div className="row single_lang_wrap WhyBrand m-80">
        <div className="col-xl-10 offset-xl-1">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand01.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand02.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang why-brand">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand07.png`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-12 text-center">
          <a className="btn v3">ขั้นตอนการใช้งาน</a>
        </div> */}
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>ส่งเร็ว ถึงไว มั่นใจได้ในความเสถียร ด้วยระบบ Intelligent Routing</h3>
          </div>
        </div>
      </div>
      <div className="row m-80">
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why01.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>ส่งผ่าน 3 เครือข่ายหลักโดยตรง</h4>
              <p>การส่งจึงเป็นไปอย่างรวดเร็ว และมีความเสถียรสูง ไม่เกิดปัญหาคอขวดเพราะมีหลายช่องทางให้เลือกส่ง</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why02.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>เลือกช่องทางส่งที่ตรงกับ เครือข่ายของเบอร์ผู้รับ</h4>
              <p>เรามีระบบตรวจสอบเครือข่ายของเบอร์ผู้รับและจะคัดแยก SMS ให้ส่งผ่านเครือข่ายนั้นโดยตรง ซึ่งจะส่งได้เร็วกว่า</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why03.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>เลือกช่องทางส่งที่ดีที่สุดโดยอัตโนมัติ</h4>
              <p>ถ้าหากช่องทางใดมีปัญหา ระบบจะสามารถย้ายการส่งไปยังช่องทางอื่นได้ทันที และยังมีระบบสำรองในการส่งอีกด้วย</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mt-80">
          <a href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`} className="btn v3">ทดลองส่งฟรี</a>
        </div>
      </div>
    </div>
  </div>
);

WhyBrandSection.getInitialProps = async () => ({
  namespacesRequired: ['WhyBrandSection'],
});

WhyBrandSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('WhyBrandSection')(WhyBrandSection);
