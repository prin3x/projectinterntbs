import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
<<<<<<< HEAD
const SimpleIconSection = ({ }: any) => (
  <div className="simple_icon_section  bg-speed">
    <div className="container">
      
      <div className="row align-items-center">
          <div className="col-lg-5">
              <div className="newsletter_text">
                  <h3>ทำไมเราถึงส่งได้เร็วและเสถียรกว่า</h3>
                  <p>ThaiBulkSMS ใช้ระบบ Intelligent Routing ในการเลือกช่องทางส่งที่เร็วที่สุดให้โดยอัตโนมัติ คุณจึงมั่นใจได้ในความเร็วและความเสถียรของทุกการส่ง SMS</p>
                  <p className="textNum">Transaction สูงสุดที่รองรับ / วินาที</p>
                  <h3><span>400 TPS</span></h3>
              </div>
          </div>
          <div className="col-lg-7">
              <div className="newsletter_img">
                <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_15.png`}
                    alt="Image"
                />
              </div>
          </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="sendOperator">
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper01.svg`}
              ></object>
              <p>ส่งผ่าน 3 เครือข่ายโดยตรง</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper02.svg`}
              ></object>
              <p>เลือกช่องทางส่ง ที่ตรงกับเครือข่ายเบอร์ผู้รับ</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper03.svg`}
              ></object>
              <p>เลือกช่องทางส่งที่ดีที่สุดอัตโนมัติ</p>
            </div>
            <div className="sendOper">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper04.svg`}
              ></object>
              <p>มีระบบจัดการคิวด้วย AI ไม่เกิดปัญหาคอขวด</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 secBrandSpeed">
          <p>จำนวน SMS ที่เราส่งไปจนถึงเวลานี้</p>
          <h2>4,748,327,510</h2>
          <p>แบรนด์ชั้นนำ ที่ส่ง SMS กับเรา</p>
          <div className="brandSpeed">
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
      </div>
>>>>>>> feature/add-new-credit-calculation-page
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
