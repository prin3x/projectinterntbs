import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { PaymentType } from '../../services/shopping/payment.struct';
import classnames from 'classnames'
import { ProductPackage, ProductBuy, FormBodyPayment, Payment2C2PReponse } from '../../services/shopping/pricing.model';
import Router from 'next/router';
import numeral from 'numeral';
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import Swal from 'sweetalert2'
import Cookie from 'js-cookie';
// import TagManager from 'react-gtm-module'
import ThailandAddress from '../autocomplete-address-thai'
import * as PaymentService from '../../services/shopping/payment.service'
import { UserAddress, UserType, UpdateUserAddress } from '../../services/user/user.model';
import { calcullateVat } from '../../services/helper.func';
import Link from 'next/link'
// const tagManagerArgs = {
//   dataLayer: {
//     event: 'register',
//     register_method: 'register_method',
//     action: 'view'
//   }
// }

interface AddressShipTo {
  companyName: string,
  address: string,
  taxId: string,
  accType: string,
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

let address: AddressShipTo = {
  companyName: '',
  address: '',
  taxId: '',
  accType: ''
}

interface ThaiAddress {
  subdistrict: string,
  district: string,
  province: string,
  zipcode: string
}

let thaiAddressDefault: ThaiAddress = {
  subdistrict: '',
  district: '',
  province: '',
  zipcode: ''
}

let credit2c2pResult: Payment2C2PReponse = {
  version: '',
  merchantId: '',
  paymentDescription: '',
  invoiceNo: '',
  orderId: '',
  currency: '',
  amount: '',
  customerEmail: '',
  paymentOption: '',
  hash: '',
  paymentUrl: '',
  resultUrlFrontent: '',
  resultUrlBackend: ''
}


const HeroSection = ({ t, packages }: any) => {
  const [paymentType, setPaymentType] = useState('')
  const [productBuy, setProductBuy] = useState(defaultProductBuy)
  const [shipTo, setShipTo] = useState(false)
  const [addressShipTo, setAddressShipTo] = useState(address)
  const [changeAddress, setChangeAddress] = useState(false)
  const stickyBoxBar: any = useRef(null);
  const form2c2pRef: any = useRef();
  const [thaiAddress, setThaiAddress] = useState(thaiAddressDefault)
  const [data2c2p, setData2c2p] = useState(credit2c2pResult)
  const { register, handleSubmit, clearErrors, errors, setValue } = useForm();
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
    register({ name: "subdistrict" }, { required: true });
    register({ name: "district" }, { required: true });
    register({ name: "province" }, { required: true });
    register({ name: "zipcode" }, { required: true, validate: v => v.length === 5, pattern: /\d/ });
    register({ name: "address" }, { required: true })
  }, [register]);

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

    setProductBuy(defaultProductBuy)

    const getAddress = async () => {
      await loadUserAddress()
    }
    getAddress()
  }, [setProductBuy]);

  const loadUserAddress = async () => {
    try {
      const res: UserAddress = await PaymentService.GetAddress()
      address = {
        accType: res.accType,
        companyName: res.billToAddress.company_name,
        address: `${res.shipToAddress.building_info} ${res.shipToAddress.address_no} ${res.shipToAddress.street_info} ตำบล/แขวง ${res.shipToAddress.district} <br>อำเภอ/เขต ${res.shipToAddress.amphur} <br>จังหวัด ${res.shipToAddress.province} ${res.shipToAddress.postcode}`,
        taxId: res.taxID
      }
      setShipTo(res.accType === UserType.Company)
      setAddressShipTo(address)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleSelectPayment = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const type = e.currentTarget.getAttribute('data-type')
    setPaymentType(type || '')
  }

  const onClickShipTo = async () => {
    setShipTo(!shipTo)
  }

  const onSubmitAddress = async (values: any) => {
    Swal.fire({
      title: 'กำลังบันทึกข้อมูล',
      showConfirmButton: false,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
    let contactPoint
    if (UserType.Company === addressShipTo.accType) {
      contactPoint = values.contact_point || 'ฝ่ายบัญชี/การเงิน'
    } else {
      contactPoint = values.contact_point || ''
    }

    const data: UpdateUserAddress = {
      type: addressShipTo.accType,
      ship_to_contact_point: contactPoint,
      ship_to_address: values.address,
      ship_to_street: values.street,
      ship_to_sub_district: values.subdistrict,
      ship_to_district: values.district,
      ship_to_province: values.province,
      ship_to_postcode: values.zipcode
    }
    await PaymentService.UpdateAddress(data)
    try {
      await loadUserAddress()
    } catch (error) {
      console.log(error.message)
    }

    setChangeAddress(false)
    setValue('contact_point', '')
    setValue('address', '')
    setValue('street', '')
    setValue('subdistrict', '')
    setValue('district', '')
    setValue('province', '')
    setValue('zipcode', '')
    setThaiAddress(thaiAddressDefault)
    Swal.close()
  }

  const onChangeAddress = (e: React.FormEvent<HTMLInputElement>) => {
    clearErrors(e.currentTarget.name)
    const data = {
      subdistrict: e.currentTarget.name === 'subdistrict' ? e.currentTarget.value : thaiAddress.subdistrict,
      district: e.currentTarget.name === 'district' ? e.currentTarget.value : thaiAddress.district,
      province: e.currentTarget.name === 'province' ? e.currentTarget.value : thaiAddress.province,
      zipcode: e.currentTarget.name === 'zipcode' ? e.currentTarget.value : thaiAddress.zipcode
    }
    setValue('subdistrict', data.subdistrict)
    setValue('district', data.district)
    setValue('province', data.province)
    setValue('zipcode', data.zipcode)
    setThaiAddress(data)

  }

  const onSelectAddress = (fullAddress: ThaiAddress) => {
    clearErrors()
    const { subdistrict, district, province, zipcode } = fullAddress
    setValue('subdistrict', subdistrict)
    setValue('district', district)
    setValue('province', province)
    setValue('zipcode', zipcode)
    setThaiAddress({
      subdistrict,
      district,
      province,
      zipcode
    })
  }

  const onSubmitPayment = async () => {
    if (!paymentType) {
      Swal.fire({
        icon: 'warning',
        title: 'ช่องทางชำระเงิน',
        text: 'กรุณาเลือกช่องทางชำระเงิน เพื่อกดยืนยันการชำระ',
      })
      return
    }
    if (changeAddress) {
      Swal.fire({
        icon: 'warning',
        title: 'ที่อยู่สำหรับจัดส่งใบกำกับภาษี',
        text: 'กรุณาแก้ไขและบันทึกข้อมูลให้เรียบร้อย',
      })
      return
    }


    Swal.fire({
      title: 'กำลังบันทึกข้อมูล',
      showConfirmButton: false,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })

    const formBody: FormBodyPayment = {
      product_id: productBuy.productId,
      is_tax_invoice: shipTo ? 'true' : 'false'
    }
    if (paymentType === PaymentType.BANK_TRANSFER) {

      const bankResult = await PaymentService.BankTransferSubmit(formBody)
      window.scrollTo(0, 0)
      const transactionId = bankResult.transactionId
      const query = { order: transactionId }
      const url = { pathname: '/paymentbank', query }

      Cookie.set(`order-bank-${transactionId}`, productBuy.productId.toString(), { expires: 0.15 })
      localStorage.removeItem('packageId')
      Router.push(url).then(() => {
        Swal.close()
      })
    } else if (paymentType === PaymentType.CREDIT_CARD) {
      credit2c2pResult = await PaymentService.Credit2C2PPaymentSubmit(formBody)
      setData2c2p(credit2c2pResult)
      localStorage.removeItem('packageId')
      form2c2pRef.current.submit()
      
    }
  }

  const sectionAdress = () => {
    return <div className="row">
      <div className="col-12">
        <h6 className="border__bottom">
          {t('paymenthero.taxaddress')}
        </h6>

        <h6 style={{ marginTop: '30px' }}>
          {addressShipTo.companyName}
        </h6>
        <p style={{ color: '#5b6e80', fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: addressShipTo.address }} />
        <p style={{ color: '#5b6e80', fontWeight: 400 }}>
          {addressShipTo.taxId ? `เลขทะเบียนนิติบุคคลเลขที่ ${addressShipTo.taxId}` : null}
        </p>

        <button
          onClick={() => {
            setChangeAddress(true)
          }}
          className="btn v8 button__sm_100"
          style={{
          }}
        >
          {t('paymenthero.changeaddressBtn')}
        </button>
      </div>
    </div>
  }

  const formAdress = () => {
    return <form onSubmit={handleSubmit(onSubmitAddress)}>
      <div className="row">
        <div className="col-12">
          <h6 className="border__bottom">
            {t('paymenthero.taxaddress')}
          </h6>
        </div>
        <div className="col-12">
          <input
            type="text"
            className="input__box"
            name="contact_point"
            ref={register}
            placeholder={t('paymenthero.form.contact_point')}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="input__box"
            name="address"

            onChange={(e) => {
              clearErrors(e.currentTarget.name),
                setValue(e.currentTarget.name, e.currentTarget.value)
            }}
            placeholder={t('paymenthero.form.address')}
          />
          {_.get("address.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="street"
            className="input__box"
            ref={register}
            placeholder={t('paymenthero.form.street')}
          />
          {_.get("street.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}
        </div>

        <div className="col-md-6">
          <ThailandAddress
            address="subdistrict"
            value={thaiAddress.subdistrict}
            onChange={onChangeAddress}
            onSelect={onSelectAddress}
            renderInput={(props: any) => <input
              {...props}
              type="text"
              name="subdistrict"
              className="input__box"
              placeholder={t('paymenthero.form.district')}
            />}
          />

          {_.get("subdistrict.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}
        </div>

        <div className="col-md-6">

          <ThailandAddress
            address="district"
            value={thaiAddress.district}
            onChange={onChangeAddress}
            onSelect={onSelectAddress}
            renderInput={(props: any) => <input
              {...props}
              type="text"
              name="district"
              className="input__box"
              placeholder={t('paymenthero.form.county')}
            />}
          />

          {_.get("district.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}

        </div>

        <div className="col-md-6">
          <ThailandAddress
            address="province"
            value={thaiAddress.province}
            onChange={onChangeAddress}
            onSelect={onSelectAddress}
            renderInput={(props: any) => <input
              {...props}
              type="text"
              name="province"
              className="input__box"
              placeholder={t('paymenthero.form.province')}
            />}
          />
          {_.get("province.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}
        </div>

        <div className="col-md-6">
          <ThailandAddress
            address="zipcode"
            value={thaiAddress.zipcode}
            onChange={onChangeAddress}
            onSelect={onSelectAddress}
            renderInput={(props: any) => <input
              {...props}
              type="text"
              name="zipcode"
              className="input__box"
              placeholder={t('paymenthero.form.postcode')}
            />
            }
          />
          {_.get("zipcode.type", errors) === "required" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is required</p>
          )}
          {_.get("zipcode.type", errors) === "validate" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is zipcode</p>
          )}
          {_.get("zipcode.type", errors) === "pattern" && (
            <p style={{
              color: '#e20000',
              margin: '15px',
            }}>This field is number</p>
          )}
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
                <input type="radio" name="radio" onChange={() => { }} checked={shipTo} />
                <span className="checkmark" onClick={onClickShipTo}></span>
              </label>
              <h5>{t('paymenthero.taxheader')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ padding: '40px 30px 50px' }}
              >
                {changeAddress ? formAdress() : sectionAdress()}
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
                      <Link href="/pricing">
                        <a className="link theme__text">
                          {t('paymenthero.taxinvoice.changepackage')}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="box__content">
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
              </div> */}

              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '36px',
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

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '36px',
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

                    <button
                      type="button"
                      className="btn v8 w-100 d-none d-xl-block"
                      style={{ marginTop: '30px' }}
                      onClick={onSubmitPayment}
                    >
                      {t('paymenthero.taxinvoice.confirepayment')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 order-4 text-center">
          <button
            type="button"
            className="btn v8 d-xl-none button__sm_100"
            style={{ marginTop: '30px', padding: '20px 30px' }}
            onClick={onSubmitPayment}
          >
            {t('paymenthero.taxinvoice.confirepayment')}
          </button>
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
      <form id="myform2c2p" ref={form2c2pRef} method="post" action={data2c2p.paymentUrl}>
        <input type="hidden" id="version" name="version" defaultValue={data2c2p.version} />
        <input type="hidden" id="merchant_id" name="merchant_id" defaultValue={data2c2p.merchantId} />
        <input type="hidden" id="payment_description" name="payment_description" defaultValue={data2c2p.paymentDescription} />
        <input type="hidden" id="order_id" name="order_id" defaultValue={data2c2p.orderId} />
        <input type="hidden" id="invoice_no" name="invoice_no" defaultValue={data2c2p.invoiceNo} />
        <input type="hidden" id="currency" name="currency" defaultValue={data2c2p.currency} />
        <input type="hidden" id="amount" name="amount" defaultValue={data2c2p.amount} />
        <input type="hidden" id="customer_email" name="customer_email" defaultValue={data2c2p.customerEmail} />
        <input type="hidden" id="payment_option" name="payment_option" defaultValue={data2c2p.paymentOption} />
        <input type="hidden" id="hash_value" name="hash_value" defaultValue={data2c2p.hash} />
        <input type="hidden" id="result_url_1" name="result_url_1" defaultValue={data2c2p.resultUrlFrontent} />
        <input type="hidden" id="result_url_2" name="result_url_2" defaultValue={data2c2p.resultUrlBackend} />
      </form>
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
