import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
<<<<<<< HEAD
const SimpleIconSection = ({  }: any) => (
  <div className="simple_icon_section bg-speed">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="simple_icon_title">
            <h3>การันตีราคา SMS บนหน้าเว็บที่ถูกที่สุด</h3>
          </div>
        </div>
      </div>
      <div className="row m-80">
          <div className="col-lg-10 offset-lg-1">
              <div className="row">
                  <div className="col-md-6">
                      <div className="simple_icon_btn">
                          <p className="headPriceLow">Standard SMS</p>
                          <h4 className="PriceLow">0.21</h4>
                          <p>บาท/ข้อความ</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="simple_icon_btn">
                          <p className="headPriceLow">Corporate SMS</p>
                          <h4 className="PriceLow">0.24</h4>
                          <p>บาท/ข้อความ</p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 m-center">
                    <a href="" className="btn v2">ติดต่อฝ่ายขาย</a>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="simple_icon_title">
            <h3>แบรนด์ชั้นนำที่วางใจ ThaiBulkSMS</h3>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 secBrandLowprice">
          <div className="brandLowprice">
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand01.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand02.png`}
                    alt="Image"
                />
            </div>
            <div className="imgBrand">
              <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand07.png`}
                    alt="Image"
                />
            </div>
          </div>
        </div>
=======
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>
              {t('SimpleIconSection::The OTP message can be set as desired')}
            </h3>
          </div>
        </div>
      </div>
      <div className="row feature_checklist_wrap">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>
                {t(
                  'SimpleIconSection::Your business name can be set as desired'
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>
                {t(
                  'SimpleIconSection::The number of digits can be set as desired'
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>
                {t(
                  'SimpleIconSection::The message Template can be set as desired'
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/check_icon.png`}
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>
                {t(
                  'SimpleIconSection::The password Expiration time can be set as desired'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>
              {t(
                'SimpleIconSection::The system can function in a variety of languages.'
              )}
            </h3>
          </div>
        </div>
      </div>
      <div className="row single_lang_wrap">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`}
                  alt="Image"
                />
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api02.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`}
                  alt="Image"
                />
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api04.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api05.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`}
                  alt="Image"
                />
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api08.svg`}
                  alt="Image"
                />
              </div>
            </div> */}
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-langGO.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang11.svg`}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a
            className="lang_link"
            href="https://developer.thaibulksms.com/reference#otp"
          >
            {t('SimpleIconSection::Learn more about the OTP API')}
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`}
              alt="Image"
            />
          </a>
        </div>
>>>>>>> feature/add-new-credit-calculation-page
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(SimpleIconSection);
