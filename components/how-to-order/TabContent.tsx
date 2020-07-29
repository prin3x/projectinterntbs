import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const TabContent = ({ t }: any) => {
  const [tab , setTab] = React.useState<any>() 
  React.useEffect(() => {
    setTab($('#pills-profile-tab'));
  }, [tab]);
  return (
    <div
      className="tab__content faq_section lazyload"
      // style={{ backgroundImage: 'url(/img/bg_3.png)' }}
      data-bgset="/img/bg_3.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">1</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o1.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.1.title')}</h4>
                        {/* <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.1.desc'),
                          }}
                        ></p> */}
                            <p>{t('howtoordertabcontent.content.1.desc1')}<Link href="/pricing"><a className="theme__text link mt-0">{t('howtoordertabcontent.content.1.desc2')}</a></Link>{t('howtoordertabcontent.content.1.desc3')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">2</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o2.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.2.title')}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.2.desc'),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">3</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o3.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.3.title')}</h4>
                        {/* <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.3.desc'),
                          }}
                        ></p> */}
                        <p
                          
                      >{t('howtoordertabcontent.content.3.desc1')}{' '}<a onClick={()=>{ tab?.tab('show') }} className="theme__text link mt-0">{t('howtoordertabcontent.content.3.desc2')}</a></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">4</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o4.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.4.title')}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.4.desc'),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">5</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o5.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.5.title')}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.5.desc'),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">6</span>
                        <img
                          className="img-fluid lazyload"
                          data-src="/img/o6.png"
                          alt=""
                        />
                      </div>
                      <div className="serial__content">
                        <h4>{t('howtoordertabcontent.content.6.title')}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t('howtoordertabcontent.content.6.desc'),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade second__tab"
                id="pills-profile"
                role="tabpanel"
              >
                <div className="row justify-content-center paymentImg">
                  <div className="col-lg-8">
                    <div className="box__wrapper">
                      <div className="box__header">
                        <h5>
                          {t('howtoordertabcontent.payment.creditnow.header')}
                        </h5>
                      </div>
                      <div className="box__body">
                        <div className="box__content border-0">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img
                                    className="lazyload"
                                    data-src="/img/icon_13.png"
                                    alt=""
                                  />
                                </div>
                                <h5
                                  dangerouslySetInnerHTML={{
                                    __html: t(
                                      'howtoordertabcontent.payment.creditnow.qrcodetitle'
                                    ),
                                  }}
                                ></h5>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: t(
                                      'howtoordertabcontent.payment.creditnow.qrcodedesc'
                                    ),
                                  }}
                                ></p>
                                <a
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup1"
                                >
                                  {t(
                                    'howtoordertabcontent.payment.creditnow.qrcodelink'
                                  )}
                                </a>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img
                                    className="lazyload"
                                    data-src="/img/icon_24.png"
                                    alt=""
                                  />
                                </div>
                                <h5>
                                  {t(
                                    'howtoordertabcontent.payment.creditnow.creditcradtitile'
                                  )}
                                </h5>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: t(
                                      'howtoordertabcontent.payment.creditnow.creditcraddecs'
                                    ),
                                  }}
                                ></p>

                                <a
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup1"
                                >
                                  {t(
                                    'howtoordertabcontent.payment.creditnow.creditcradlink'
                                  )}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box__wrapper">
                      <div className="box__header">
                        <h5>
                          {t('howtoordertabcontent.payment.creditwait.header')}
                        </h5>
                      </div>
                      <div className="box__body">
                        <div className="box__content border-0">
                          <div className="row">
                            <div className="col-12">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img
                                    className="lazyload"
                                    data-src="/img/icon_25.png"
                                    alt=""
                                  />
                                </div>
                                <h5 className="mt-4">
                                  {t(
                                    'howtoordertabcontent.payment.creditwait.title'
                                  )}
                                </h5>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: t(
                                      'howtoordertabcontent.payment.creditwait.desc'
                                    ),
                                  }}
                                ></p>

                                <a
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup2"
                                >
                                  {t(
                                    'howtoordertabcontent.payment.creditwait.link'
                                  )}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center link__box">
          <div className="col-xl-5 col-lg-12">
            <div className="faq_bottom_text">
              <h3>{t('howtoordertabcontent.question')}</h3>
              <p>{t('howtoordertabcontent.questiontitle')}</p>
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
                  <a className="btn v4">{t('howtoordertabcontent.telBtn')}</a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src="/img/img_2.png"
                    alt="Image"
                  />
                  <a className="btn v4">
                    {t('howtoordertabcontent.contactBtn')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src="/img/img_3.png"
                    alt="Image"
                  />
                  <a className="btn v4">{t('howtoordertabcontent.fbBrn')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TabContent.getInitialProps = async () => ({
  namespacesRequired: ['How-to-orderTabContent'],
});

TabContent.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('How-to-orderTabContent')(TabContent);
