import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleIconSectionV2 = ({ t }: any) => (
  <div className="simple_icon_section">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offsert-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('sms-trackingsimpleicon.title')}</h3>
            <p>{t('sms-trackingsimpleicon.desc')}</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="icon_wrapper">
            <img className="arrow_bg" src="/img/arrow_bg.png" alt="Image" />
            <div className="simple_icon_wrapper">
              <div className="simple_icon smsTrakingpage">
                <img
                  className="lazyload"
                  data-src="/img/img_12.png"
                  alt="Image"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingsimpleicon.feature.1'),
                  }}
                ></p>
              </div>
              <div className="simple_icon smsTrakingpage">
                <img
                  className="lazyload"
                  data-src="/img/img_4.png"
                  alt="Image"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingsimpleicon.feature.2'),
                  }}
                ></p>
              </div>
              <div className="simple_icon smsTrakingpage">
                <img
                  className="lazyload"
                  data-src="/img/img_13.png"
                  alt="Image"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingsimpleicon.feature.3'),
                  }}
                ></p>
              </div>
              {/* <div className="simple_icon">
                <img
                  className="lazyload"
                  data-src="/img/img_14.png"
                  alt="Image"
                />
                <p>
                  {t('sms-trackingsimpleicon.p5-1')}
                  <br />
                  {t('sms-trackingsimpleicon.p5-2')}
                </p>
              </div> */}
              <div className="simple_icon smsTrakingpage">
                <img
                  className="lazyload"
                  data-src="/img/img_17.png"
                  alt="Image"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('sms-trackingsimpleicon.feature.4'),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row icon_btn">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            <div className="col-md-6">
              <div className="simple_icon_btn">
                <h4>Conversion rate</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="simple_icon_btn">
                <h4>ROI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['Sms-trackingSimpleIconSection'],
});

SimpleIconSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Sms-trackingSimpleIconSection')(
  SimpleIconSectionV2
);
