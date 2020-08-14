import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const FaqSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div
      className="faq_section lazyload"
      // style={{ backgroundImage: 'url(/img/bg_3.png)' }}
      data-bgset="/img/bg_3.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section_title">{t('pricingfaq.header')}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div
              className="accordion md-accordion"
              id="accordionEx"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseOne1"
                    aria-expanded="false"
                    aria-controls="collapseOne1"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.1.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapseOne1"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.1.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo2">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.2.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapseTwo2"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo2"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.2.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree3">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseThree3"
                    aria-expanded="false"
                    aria-controls="collapseThree3"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.3.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapseThree3"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree3"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <p>{t('pricingfaq.faq.3.desc')}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingFour">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.4.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.4.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div
              className="accordion md-accordion"
              id="accordionEx2"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div className="card-header" role="tab" id="headingFive">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx2"
                    href="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.5.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingFive"
                  data-parent="#accordionEx2"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.5.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="heading6">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx2"
                    href="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.6.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse6"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading6"
                  data-parent="#accordionEx2"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.6.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="heading7">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx2"
                    href="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse7"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.7.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse7"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading7"
                  data-parent="#accordionEx2"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.7.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="heading8">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx2"
                    href="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse8"
                  >
                    <span className="close ion-ios-arrow-down"></span>
                    <span className="open ion-ios-arrow-up"></span>
                    <h5 className="mb-0 faq_header">
                      {t('pricingfaq.faq.8.title')}
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse8"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading8"
                  data-parent="#accordionEx2"
                >
                  <div className="card-body">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('pricingfaq.faq.8.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-80">
          <div className="col-xl-5 col-lg-12">
            <div className="faq_bottom_text">
              <h3>{t('pricingfaq.question')}</h3>
              <p>{t('pricingfaq.questiontitle')}</p>
            </div>
          </div>
          <div className="col-xl-7 col-12-7">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src="/img/img_1.png"
                    alt="Image"
                  />
                  <a href="tel:027986000" className="btn v4">
                    {t('pricingfaq.telBtn')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src="/img/img_2.png"
                    alt="Image"
                  />
                  <Link href="/contact">
                    <a className="btn v4">{t('pricingfaq.contactBtn')}</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src="/img/img_3.png"
                    alt="Image"
                  />
                  <a className="btn v4">{t('pricingfaq.fbBrn')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FaqSection.getInitialProps = async () => ({
  namespacesRequired: ['PricingFaqSection'],
});

FaqSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PricingFaqSection')(FaqSection);