import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>คู่มือการเชื่อมต่อ API</h3>
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
            <p>API Manual</p>
            <h4>Thai Version</h4>
            <a href="">[Download]</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="track_box apipage v2">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-aw-api02.png`}
              alt="Image"
            />
            <p>API Manual</p>
            <h4>English Version</h4>
            <a href="">[Download]</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('otpsimpleicon.apiheader')}</h3>
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
          <a className="lang_link" href="https://developer.thaibulksms.com/reference#otp">
            {t('otpsimpleicon.apilink')}
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
  namespacesRequired: ['OtpSimpleIconSection'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSimpleIconSection')(SimpleIconSection);
