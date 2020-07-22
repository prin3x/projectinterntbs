import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { PaymentType } from '../../services/shopping/payment.struct';
import classnames from 'classnames'
import { ProductPackage, ProductBuy } from '../../services/shopping/pricing.model';
import Router from 'next/router';
import numeral from 'numeral';
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  dataLayer: {
    event: 'register',
    register_method:'register_method',
    action: 'view'
  }
}

let defaultProductBuy: ProductBuy = {
  productName: '',
  unitSms: 0,
  credit: 0,
  sendername: 0,
  amount: 0,
  vat: 0,
  total: 0,
  period: 0
}
const calcullateVat = (amount: number, vat: number): number => {
  return amount * (vat / 100)
}
const HeroSection = ({ t, packages }: any) => {
  const [paymentType, setPaymentType] = useState('')
  const [productBuy, setProductBuy] = useState(defaultProductBuy)
  const [shipTo, setShipTo] = useState(false)
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
    const packageId: any = localStorage.getItem('packageId')


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
      productName: packageSelect[0].name,
      unitSms: packageSelect[0].amount / packageSelect[0].credit,
      credit: packageSelect[0].credit,
      amount: packageSelect[0].amount,
      sendername: packageSelect[0].sender,
      period: packageSelect[0].period,
      vat: vat,
      total: vat + packageSelect[0].amount,

    }

    setProductBuy(defaultProductBuy)
  }, [setProductBuy]);

  const handleSelectPayment = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const type = e.currentTarget.getAttribute('data-type')
    setPaymentType(type || '')
  }

  const onClickShipTo = () => {
    setShipTo(!shipTo)
  }
  
  return (
    <div className="container">
      <div className="row hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('paymenthero.header')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('paymenthero.payment.header')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{t('paymenthero.payment.creditnow.header')}</h6>
                  </div>
                  <div data-type={PaymentType.QR} className="col-md-6" onClick={handleSelectPayment}>
                    <div className={classnames('info__box', { active: paymentType === PaymentType.QR })}>
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_13.png"
                          alt=""
                        />
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t(
                            'paymenthero.payment.creditnow.qrcodetitle'
                          ),
                        }}
                      ></p>
                    </div>
                  </div>

                  <div className="col-md-6" data-type={PaymentType.CREDIT_CARD} onClick={handleSelectPayment}>
                    <div className={classnames('info__box', { active: paymentType === PaymentType.CREDIT_CARD })}>
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_24.png"
                          alt=""
                        />
                      </div>
                      <p>
                        {t('paymenthero.payment.creditnow.creditcradtitile')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h6>{t('paymenthero.payment.creditwait.header')}</h6>
                  </div>
                  <div className="col-md-6" data-type={PaymentType.BANK_TRANSFER} onClick={handleSelectPayment}>
                    <div className={classnames('info__box', { active: paymentType === PaymentType.BANK_TRANSFER })}>
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_25.png"
                          alt=""
                        />
                      </div>
                      <p>{t('paymenthero.payment.creditwait.title')}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p
                      style={{
                        color: '#5b6e80',
                        marginTop: '30px',
                        fontWeight: 400,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: t('paymenthero.payment.creditwait.desc'),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header" style={{ padding: '25px 30px' }}>
              <label className="radio_wrapper">
                <input type="radio" name="radio" checked={shipTo} />
                <span className="checkmark" onClick={onClickShipTo}></span>
              </label>
              <h5>{t('paymenthero.taxheader')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ padding: '40px 30px 50px' }}
              >
                <div className="row">
                  <div className="col-12">
                    <h6 className="border__bottom">
                      {t('paymenthero.taxaddress')}
                    </h6>

                    <h6 style={{ marginTop: '30px' }}>
                      บริษัท วันม๊อบบี้ จำกัด
                    </h6>
                    <p style={{ color: '#5b6e80', fontWeight: 400 }}>
                      เลขที่ 2521/10 ถนนลาดพร้าว แขวงคลองเจ้าคุณสิงห์
                      เขตวังทองหลาง กทม 10310
                      <br />
                      เลขทะเบียนนิติบุคคลเลขที่ 0105550113634
                    </p>

                    <a
                      href="#"
                      className="btn v8 button__sm_100"
                      style={{
                        marginTop: '30px', padding: '20px 30px'
                      }}
                    >
                      {t('paymenthero.changeaddressBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header" style={{ padding: '20px 25px' }}>
              <label className="radio_wrapper">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <h5>{t('paymenthero.taxheader')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ padding: '30px 20px 40px' }}
              >
                <div className="row">
                  <div className="col-12">
                    <h6 className="border__bottom">
                      {t('paymenthero.taxaddress')}
                    </h6>

                    <form action="#">
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.address')}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.street')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.district')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.county')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.province')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('paymenthero.form.postcode')}
                          />
                        </div>

                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn v8"
                            style={{ marginTop: '45px' }}
                          >
                            {t('paymenthero.form.submitBtn')}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper" ref={stickyBoxBar}>
            <div className="box__header">
              <h5>{t('paymenthero.taxinvoice.title')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{productBuy.productName}</h6>
                  </div>
                  <div className="col-12">
                    <div className="sender__box">
                      <div className="d-flex justify-content-between">
                        <p>{t('paymenthero.taxinvoice.price')}</p>
                        <p className="theme__text">
                          {numeral(productBuy.unitSms).format('0.00')}{` `}{t('paymenthero.taxinvoice.bath')}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>{t('paymenthero.taxinvoice.quantity')}</p>
                        <p className="theme__text">{numeral(productBuy.credit).format('0,0')}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>{t('paymenthero.taxinvoice.life')}</p>
                        <p className="theme__text">{productBuy.period} {t('paymenthero.taxinvoice.month')}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>Sender Name</p>
                        <p className="theme__text">{productBuy.sendername || '-'}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <a href="#" className="link theme__text">
                        {t('paymenthero.taxinvoice.changepackage')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box__content">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h6>{t('paymenthero.taxinvoice.waitconfirmtitle')}</h6>

                    <form action="#">
                      <div className="form__wrapper">
                        <input
                          type="text"
                          placeholder=""
                          className="input__box"
                        />
                        <button
                          type="submit"
                          className="btn v8"
                          style={{ width: '158px' }}
                        >
                          {t('paymenthero.taxinvoice.usecodeBtn')}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

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
                        {t('paymenthero.taxinvoice.pricepackage')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          {numeral(productBuy.amount).format('0,0')}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymenthero.taxinvoice.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    {/* <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymenthero.taxinvoice.discount')}
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
                            {t('paymenthero.taxinvoice.bath')}
                          </span>
                        </h6>
                      </div>
                    </div> */}

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
                          {numeral(productBuy.vat).format('0,0')}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymenthero.taxinvoice.bath')}
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
                        {t('paymenthero.taxinvoice.totalprice')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: '36px' }}
                        >
                          {numeral(productBuy.total).format('0,0')}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            บาท
                          </span>
                        </h6>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn v8 w-100 d-none d-xl-block"
                      style={{ marginTop: '65px' }}
                    >
                      {t('paymenthero.taxinvoice.confirepayment')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 order-4 text-center">
          <a
            href="#"
            className="btn v8 d-xl-none button__sm_100"
            style={{ marginTop: '30px', padding: '20px 30px' }}
          >
            {t('paymenthero.taxinvoice.confirepayment')}
          </a>
        </div>

        <div className="col-xl-8 order-5 bottom__content">
          <div className="box__wrapper">
            <h6 className="__title">{t('paymenthero.note.title')}</h6>
            <ul style={{ marginTop: '30px' }}>
              <li>{t('paymenthero.note.rule.1')}</li>
              <li>{t('paymenthero.note.rule.2')}</li>
              <li
                dangerouslySetInnerHTML={{
                  __html: t('paymenthero.note.rule.3'),
                }}
              ></li>
              <li>{t('paymenthero.note.rule.4')}</li>
              <li>{t('paymenthero.note.rule.5')}</li>
              <li>{t('paymenthero.note.rule.6')}</li>
            </ul>
          </div>

          <div className="box__wrapper ml-5">
            <h6 className="__title">
              {t('paymenthero.note.company.companyname')}
            </h6>
            <ul
              dangerouslySetInnerHTML={{
                __html: t('paymenthero.note.company.companyaddress'),
              }}
            ></ul>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['PaymentHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentHeroSection')(HeroSection);
