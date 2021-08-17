import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
    <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t(
                                'SimpleIconSection::The OTP message can be set as desired'
                            )}
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
        </div>
        <div className="simple_icon_section bg-speed">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="newsletter_img">
                            <img
                                className="lazyload"
                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whitelist02.png`}
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="newsletter_text">
                            <h3>
                                การขอ Whitelist Sender Name จะเข้ามาช่วยลดปัญหา
                                Anti-Spam
                            </h3>
                            <p>
                                การขอ Whitelist Sender Name
                                เป็นการขออนุมัติจากเครือข่ายให้ SMS ที่ส่งจาก
                                Sender Name
                                ดังกล่าวสามารถเข้าถึงผู้รับที่เคยแจ้งว่าไม่ต้องการรับข้อความได้
                                จึงช่วยลดปัญหา Anti-Spam
                                และเพิ่มโอกาสในการส่งถึงผู้รับได้มากขึ้น
                            </p>
                            <p>
                                <span>
                                    *ไม่ครอบคลุมการส่งข้อความประเภทโฆษณาและการตลาด
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="iconWhitelist">
                            <div className="Whitelist">
                                <object
                                    type="image/svg+xml"
                                    data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist01.svg`}
                                ></object>
                                <p>ผ่านการรับรองเบื้องต้น จากเครือข่าย</p>
                            </div>
                            <div className="Whitelist">
                                <object
                                    type="image/svg+xml"
                                    data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist02.svg`}
                                ></object>
                                <p>ลดปัญหา Anti-Spam</p>
                            </div>
                            <div className="Whitelist">
                                <object
                                    type="image/svg+xml"
                                    data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist03.svg`}
                                ></object>
                                <p>เพิ่มโอกาสในการส่งถึงผู้รับ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xl-8">
                        <div className="simple_icon_title">
                            <h3>ขอ Whitelist ง่าย ๆ ใน 3 ขั้นตอน</h3>
                            <div className="row m-60">
                                <div className="col-lg-4 col-sm-12">
                                    <div className="stepWhitelist">
                                        <object
                                            type="image/svg+xml"
                                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW01.svg`}
                                        ></object>
                                        <p>1. สั่งซื้อแพ็กเกจ</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="stepWhitelist">
                                        <object
                                            type="image/svg+xml"
                                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW02.svg`}
                                        ></object>
                                        <p>
                                            2. แจ้งขอชื่อผู้ส่งที่ต้องการใช้
                                            Whitelist
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="stepWhitelist">
                                        <object
                                            type="image/svg+xml"
                                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW03.svg`}
                                        ></object>
                                        <p>
                                            3. พร้อมใช้งานทันที
                                            หลังได้รับอนุมัติ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="sms_form_text">
                            <h4>
                                แพ็กเกจเล็ก ก็ขอ Whitelist ได้เริ่มต้นที่{' '}
                                <span>3,500 บาท</span>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sms_form_field">
                            <a
                                href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                className="btn v8"
                            >
                                สั่งซื้อแพ็กเกจ
                            </a>
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
    </div>
);
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

SimpleIconSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Otp')(SimpleIconSection);
