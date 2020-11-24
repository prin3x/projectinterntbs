import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const SimpleIconSection = ({ t }: any) => (
  <div className="hero_section v3 lazyload" data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}>
    <div className="container">
      <div className="row mt-80">
        <div className="col-xl-8 col-md-12 mt-80">
          <div className="simple_icon_title dev-page">
            <h3>{t('SMSAPIPage:simpleIconSection.title')}</h3>
            <div className="row m-40">
              <div className="col-lg-6">
                <div className="track_box apipage">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                    alt="Image"
                  />
                  <p>{t('SMSAPIPage:simpleIconSection.breadcrumb-left-box')}</p>
                  <h4>{t('SMSAPIPage:simpleIconSection.title-left-box')}</h4>
                  <a target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V1.7_TH.pdf`}>{t('SMSAPIPage:simpleIconSection.button-left-box')}</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="track_box apipage v2">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`}
                    alt="Image"
                  />
                  <p>{t('SMSAPIPage:simpleIconSection.breadcrumb-right-box')}</p>
                  <h4>{t('SMSAPIPage:simpleIconSection.title-right-box')}</h4>
                  <a target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V1.7_EN.pdf`}>{t('SMSAPIPage:simpleIconSection.button-right-box')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12 mt-80">
          <div className="simple_icon_title  dev-page">
            <h3>คู่มือการใช้งาน OTP Service</h3>
            <div className="row m-40">
              <div className="col-lg-12">
                <div className="track_box apipage">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api01.png`}
                    alt="Image"
                  />
                  <p>OTP Service Manual</p>
                  <h4>{t('SMSAPIPage:simpleIconSection.title-left-box')}</h4>
                  <a target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/Thaibulksms-otp.pdf`}>{t('SMSAPIPage:simpleIconSection.button-left-box')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-xl-12 btn-api-ref">
         
            <a className="btn v3" target="_blank" href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}>ดู API Reference</a>
    
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>ตัวอย่าง SDK</h3>
            <p>ดาวน์โหลดตัวอย่าง SDK ภาษาที่คุณต้องการ</p>
          </div>
        </div>
      </div>
      <div className="row single_lang_wrap">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang01.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-PHP.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang02.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-VB.NET.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang03.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-C.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang04.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-C++.NET.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang05.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-CShap.NET.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang06.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-ObjC.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang07.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaiBulkSMS_ClassicASP_NoParser.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang08.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-ActionScript.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang09.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-Python.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-lang10.svg`}
                  alt="Image"
                />
                <a className="lang_link" target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ExampleCode-JavaScript.zip`}>
                  [ดาวน์โหลด]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['SMSAPIPage'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('SMSAPIPage')(SimpleIconSection);
