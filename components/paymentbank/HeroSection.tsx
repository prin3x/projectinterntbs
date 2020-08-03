import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Cookie from 'js-cookie';
import Router, { useRouter } from 'next/router';
import { ProductPackage, ProductBuy } from '../../services/shopping/pricing.model';
import { calcullateVat } from '../../services/helper.func';
import numeral from 'numeral';
interface BillPayment {
  orderId: string,
  productBuy: ProductBuy
}

let defaultProductBuy: ProductBuy = {
  productName: '',
  unitSms: 0,
  credit: 0,
  sendername: 0,
  amount: 0,
  vat: 0,
  total: 0,
  period: 0,
  productId: 0
}

let bill: BillPayment = {
  orderId: '',
  productBuy: defaultProductBuy

}
const HeroSection = ({ t, packages }: any) => {
  const router = useRouter()
  const [billPayment, setBillPayment] = useState(bill)
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



  React.useEffect(() => {
    const orderId: any = router.query.order
    const packageId: any = Cookie.get(`order-bank-${orderId}`)
    const packageSelect: ProductPackage[] = packages.filter((item: ProductPackage) => {
      return parseInt(packageId) === item.productId
    })

    if (!packageSelect.length) {
      window.scrollTo(0, 0)
      Router.push('/pricing')
      return
    }

    const vat = calcullateVat(packageSelect[0].amount, 7)
    defaultProductBuy = {
      productId: parseInt(packageId),
      productName: packageSelect[0].name,
      unitSms: packageSelect[0].amount / packageSelect[0].credit,
      credit: packageSelect[0].credit,
      amount: packageSelect[0].amount,
      sendername: packageSelect[0].sender,
      period: packageSelect[0].period,
      vat: vat,
      total: vat + packageSelect[0].amount
    }

    bill = {
      orderId: orderId,
      productBuy: defaultProductBuy
    }

    setBillPayment(bill)

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
                  </div>

                  <div className="col-6">
                    <h6 className="theme__text font-weight-bold"> {billPayment.orderId}</h6>
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
                              {t('paymentbankhero.bank.format.accountname')}
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
                          {numeral(billPayment.productBuy.amount).format('0,0')}{' '}
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

                    {/* <div className="d-flex justify-content-between align-items-center">
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
                    </div> */}

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
                          {numeral(billPayment.productBuy.vat).format('0,0')}{' '}
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
                          {numeral(billPayment.productBuy.total).format('0,0')}{' '}
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
