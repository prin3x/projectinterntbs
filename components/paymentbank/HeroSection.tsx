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
      <div className="row justify-content-center hero_top_one paymentPage">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('paymentbankhero.header')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('paymentbankhero.payment.header')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content new__content">
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentbankhero.payment.ordernumber')}
                    </h6>
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentbankhero.payment.lastdate')}
                    </h6>
                  </div>

                  <div className="col-6">
                    <h6 className="theme__text font-weight-bold"> 0022953</h6>
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      <span className="theme__text font-weight-bold">
                        {t('paymentbankhero.payment.length')}
                        31 มีนาคม 2562 เวลา 13:35 น.
                      </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{t('paymentbankhero.bank.header')}</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__1.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>
                          {t('paymentbankhero.bank.inform.1.bankname')}
                        </p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accounttype')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountnumber')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountnumber')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.1.banktype')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.1.banknumber')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.1.name')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__2.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>
                          {t('paymentbankhero.bank.inform.2.bankname')}
                        </p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accounttype')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountnumber')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountname')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.2.banktype')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.2.banknumber')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.2.name')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__3.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>
                          {t('paymentbankhero.bank.inform.3.bankname')}
                        </p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accounttype')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountnumber')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountname')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.3.banktype')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.3.banknumber')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.3.name')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__4.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>
                          {t('paymentbankhero.bank.inform.4.bankname')}
                        </p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accounttype')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountnumber')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('paymentbankhero.bank.format.accountname')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.4.banktype')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.4.banknumber')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('paymentbankhero.bank.inform.4.name')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('paymentbankhero.howtopay.header')}</h5>
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
                  <h4>{t('paymentbankhero.howtopay.step.1')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_21.png"
                    alt=""
                  />
                  <h4>
                    2.
                    <a className="theme__text link">
                      {t('paymentbankhero.howtopay.step.2')}
                    </a>
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
                      __html: t('paymentbankhero.howtopay.step.3'),
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
                      __html: t('paymentbankhero.howtopay.step.4'),
                    }}
                  >
                    {/* 4. {t('paymentbankhero.h10-1')} <br />
                    {t('paymentbankhero.h10-2')} */}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper" ref={stickyBoxBar}>
            <div className="box__header">
              <h5>{t('paymentbankhero.price.header')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '28px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentbankhero.price.packet')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          30,000{' '}
                          <span
                            style={{
                              fontSize: '16px',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentbankhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '28px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentbankhero.price.code')}
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          100{' '}
                          <span
                            style={{
                              fontSize: '16px',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentbankhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '28px',
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
                              fontSize: '16px',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentbankhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="box__content border-0"
                style={{ backgroundColor: ' #f1f8f9' }}
              >
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '28px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentbankhero.price.total')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: '36px' }}
                        >
                          32,000{' '}
                          <span
                            style={{
                              fontSize: '16px',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentbankhero.bath')}
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
  namespacesRequired: ['PaymentbankHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentbankHeroSection')(HeroSection);
