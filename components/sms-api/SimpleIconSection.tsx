import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('SMSAPIPage:simpleIconSection.title')}</h3>
          </div>
        </div>
      </div>
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
            <a target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_TH.pdf`}>{t('SMSAPIPage:simpleIconSection.button-left-box')}</a>
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
            <a target="_blank" href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/ThaibulksmsAPIDocument_V2.0_EN.pdf`}>{t('SMSAPIPage:simpleIconSection.button-right-box')}</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('SMSAPIPage:simpleIconSection.title-bottom-box')}</h3>
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
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api01.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api02.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api03.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api04.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api05.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api06.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api07.svg`}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-api08.svg`}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a className="lang_link" target="_blank" href="https://drive.google.com/drive/folders/1VzLngYTjT49vOBHQlGHnQQF_ALGE2irQ?usp=sharing">
            {t('SMSAPIPage:simpleIconSection.button-bottom-box')}
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_5.png`}
              alt="Image"
            />
          </a>
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
