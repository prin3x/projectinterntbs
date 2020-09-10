import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
const TabContent = ({ t }: any) => {
  const [tab, setTab] = React.useState<any>();
  const [showModalbank, setShowModalbank] = useState(false);
  const [showModalqr, setShowModalqr] = useState(false);
  const [showModalcredit, setShowModalcredit] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setTab($('#pills-profile-tab'));
    Modal.setAppElement('#ElementModal');
    // }, [tab]);
  }, []);

  return (
    <div
      className="tab__content faq_section lazyload"
      data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
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
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o1.png`}
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
                        <p>
                          {t('howtoordertabcontent.content.1.desc1')}
                          <Link href="/pricing">
                            <a className="theme__text link mt-0">
                              {t('howtoordertabcontent.content.1.desc2')}
                            </a>
                          </Link>
                          {t('howtoordertabcontent.content.1.desc3')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">2</span>
                        <img
                          className="img-fluid lazyload"
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o2.png`}
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
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o3.png`}
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
                        <p>
                          {t('howtoordertabcontent.content.3.desc1')}{' '}
                          <a
                            onClick={() => {
                              tab?.tab('show');
                            }}
                            className="theme__text link mt-0"
                          >
                            {t('howtoordertabcontent.content.3.desc2')}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">4</span>
                        <img
                          className="img-fluid lazyload"
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o4.png`}
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
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o5.png`}
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
                          data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o6.png`}
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
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_13.png`}
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
                                  onClick={() => {
                                    setIsOpen(true);
                                    setShowModalqr(true);
                                  }}
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
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_24.png`}
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
                                  onClick={() => {
                                    setIsOpen(true);
                                    setShowModalcredit(true);
                                  }}
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
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_25.png`}
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
                                  onClick={() => {
                                    setIsOpen(true);
                                    setShowModalbank(true);
                                  }}
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
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                    alt="Image"
                  />
                  <a href="tel:027986000" className="btn v4">
                    {t('howtoordertabcontent.telBtn')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                    alt="Image"
                  />
                  <Link href="/contact">
                    <a className="btn v4">
                      {t('howtoordertabcontent.contactBtn')}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                    alt="Image"
                  />
                  <a href="mailto:contact@thaibulksms.com" className="btn v4">
                    {t('howtoordertabcontent.fbBrn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ElementModal">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {}}
          className="modalClass"
          contentLabel=""
        >
          <button
            style={{ float: 'right' }}
            onClick={() => {
              setIsOpen(false);
              setShowModalbank(false);
              setShowModalqr(false);
              setShowModalcredit(false);
            }}
            className="btn-close-order"
          >
            <i className="fas fa-times"></i>
          </button>
          {showModalbank && (
            <div className="box__wrapper">
              <div className="box__header">
                <h5>
                  {t(
                    'PaymentbankHeroSection:paymentbankhero.howtopay.headermodal'
                  )}
                </h5>
              </div>
              <div className="box__body">
                <div
                  className="box__content border-0"
                  style={{ backgroundColor: ' #f1f8f9' }}
                >
                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_20.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentbankHeroSection:paymentbankhero.howtopay.step.1'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_21.png"
                      alt=""
                    />
                    <h4>
                      2.
                      {t(
                        'PaymentbankHeroSection:paymentbankhero.howtopay.step.2'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_22.png"
                      alt=""
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: t(
                          'PaymentbankHeroSection:paymentbankhero.howtopay.step.3'
                        ),
                      }}
                    >
                      {/* 3. {t('paymentbankhero.h9-1')}
              <br />
              {t('paymentbankhero.h9-2')} */}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_23.png"
                      alt=""
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: t(
                          'PaymentbankHeroSection:paymentbankhero.howtopay.step.4'
                        ),
                      }}
                    >
                      {/* 4. {t('paymentbankhero.h10-1')} <br />
              {t('paymentbankhero.h10-2')} */}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showModalqr && (
            <div className="box__wrapper">
              <div className="box__header">
                <h5>
                  {t(
                    'PaymentqrHeroSection:paymentqrhero.howtopayqr.headermodal'
                  )}
                </h5>
              </div>
              <div className="box__body">
                <div
                  className="box__content border-0"
                  style={{ backgroundColor: '#f1f8f9' }}
                >
                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_15.png"
                      alt=""
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: t(
                          'PaymentqrHeroSection:paymentqrhero.howtopayqr.step.1'
                        ),
                      }}
                    >
                      {/* 1. {t('PaymentqrHeroSection:paymentqrhero.h8')}
              <br />
              QR Code */}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_16.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentqrHeroSection:paymentqrhero.howtopayqr.step.2'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_17.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentqrHeroSection:paymentqrhero.howtopayqr.step.3'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_18.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentqrHeroSection:paymentqrhero.howtopayqr.step.4'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_19.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentqrHeroSection:paymentqrhero.howtopayqr.step.5'
                      )}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showModalcredit && (
            <div className="box__wrapper">
              <div className="box__header">
                <h5>
                  {t(
                    'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.headermodal'
                  )}
                </h5>
              </div>
              <div className="box__body">
                <div
                  className="box__content border-0"
                  style={{ backgroundColor: '#f1f8f9' }}
                >
                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_26.png"
                      alt=""
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: t(
                          'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.step.1'
                        ),
                      }}
                    ></h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_27.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.step.2'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_28.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.step.3'
                      )}
                    </h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_29.png"
                      alt=""
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: t(
                          'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.step.1'
                        ),
                      }}
                    ></h4>
                  </div>

                  <div className="d-flex align-items-center item__box">
                    <img
                      className="img-fluid lazyload"
                      data-src="/img/icon_30.png"
                      alt=""
                    />
                    <h4>
                      {t(
                        'PaymentcreditHeroSection:paymentcredithero.howtopaycredit.step.5'
                      )}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

TabContent.getInitialProps = async () => ({
  namespacesRequired: [
    'How-to-orderTabContent',
    'PaymentbankHeroSection',
    'PaymentqrHeroSection',
  ],
});

TabContent.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation([
  'How-to-orderTabContent',
  'PaymentbankHeroSection',
  'PaymentqrHeroSection',
  'PaymentcreditHeroSection',
])(TabContent);
