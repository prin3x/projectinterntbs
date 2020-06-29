import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
const HeroSection = ({ t }: any) => {
  const stickyBoxBar: any = useRef(null);
  function stickyBox() {
    var scroll = window.pageYOffset;
    if (stickyBoxBar.current !== null) {
      if (scroll < 300) {
        stickyBoxBar.current.classList.remove('sticky__box');
      } else {
        stickyBoxBar.current.classList.add('sticky__box');
      }
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', stickyBox);
    return () => {
      window.removeEventListener('scroll', stickyBox);
    };
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('paymentqrhero.header')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('paymentqrhero.paymentqr.header')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12 text-center">
                    <h6
                      style={{ fontSize: ' 36px' }}
                      className="title__box__top"
                    >
                      {t('paymentqrhero.paymentqr.title1')}
                    </h6>
                    <h6
                      style={{
                        fontWeight: 400,
                        color: '#5b6e80',
                        marginTop: '15px',
                      }}
                    >
                      {t('paymentqrhero.paymentqr.title2')}
                    </h6>

                    <img
                      src="/img/qr_code.png"
                      className="img-fluid border border-dark"
                      alt=""
                      style={{ margin: '50px 0' }}
                    />

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentqrhero.paymentqr.ordernumber')}
                      <span className="theme__text font-weight-bold">
                        0022589
                      </span>
                    </h6>

                    <a
                      href="#"
                      className="btn v8 new__btn"
                      style={{ margin: '30px 0', padding: '20px 80px' }}
                    >
                      {t('paymentqrhero.paymentqr.downloadBtn')}
                    </a>

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentqrhero.paymentqr.lifetime')}
                      <span
                        className="font-weight-bold"
                        style={{ color: '#ff1414' }}
                      >
                        14:59
                      </span>{' '}
                      {t('paymentqrhero.paymentqr.minute')}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('paymentqrhero.howtopayqr.header')}</h5>
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
                      __html: t('paymentqrhero.howtopayqr.step.1'),
                    }}
                  >
                    {/* 1. {t('paymentqrhero.h8')}
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
                  <h4>{t('paymentqrhero.howtopayqr.step.2')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_17.png"
                    alt=""
                  />
                  <h4>{t('paymentqrhero.howtopayqr.step.3')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_18.png"
                    alt=""
                  />
                  <h4>{t('paymentqrhero.howtopayqr.step.4')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_19.png"
                    alt=""
                  />
                  <h4>{t('paymentqrhero.howtopayqr.step.5')}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper" ref={stickyBoxBar}>
            <div className="box__header">
              <h5>{t('paymentqrhero.price.header')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentqrhero.price.packet')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          30,000{' '}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentqrhero.price.code')}
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          100
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        VAT (7%)
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          2,100
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="box__content border-0"
                style={{ backgroundColor: '#f1f8f9' }}
              >
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentqrhero.price.total')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: ' 36px' }}
                        >
                          32,000
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
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
  );
};
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['PaymentqrHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentqrHeroSection')(HeroSection);
