import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductPackage, ProductBuy, QrData } from '../../services/shopping/pricing.model';
import { calcullateVat } from '../../services/helper.func';
import numeral from 'numeral';
import Swal from 'sweetalert2'
import * as PaymentService from '../../services/shopping/payment.service'
import Countdown, { zeroPad } from 'react-countdown';
import * as dateFnsTimezone from 'date-fns-timezone'
import { isBefore } from 'date-fns'
interface BillPayment {
  orderId: string,
  productBuy: ProductBuy
}

interface QRshow {
  productId?: number,
  expire?: string,
  image?: string,
  status: string,
  timeStamp?: Date,
  uniqueTransactionCode?: string
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

let qrShow: QRshow = {
  status: 'Waiting',
  image: '/img/qr_code.png'
}

let bill: BillPayment = {
  orderId: '',
  productBuy: defaultProductBuy

}

let paySettimeOut: any
let qrShowSettimeOut: any

const expireTimeFormat = (expire: any) => {
  const d = expire.split(" ")
  const t = d[1].split(":")
  const date: any = d[0].split("-")
  const m = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ]
  const mm = m[parseInt(date[1]) - 1]
  const yyyy = parseInt(date[0]) + 543
  return [
    `${date[2]} ${mm} ${yyyy}`,
    `${t[0]}.${t[1]}`
  ]
}
const HeroSection = ({ t, packages }: any) => {
  const router = useRouter()
  const [billPayment, setBillPayment] = useState(bill)
  const [qrGenerate, setQrGenerate] = useState(qrShow)
  const [btnDownload, setBtnDownload] = useState(false)
  const stickyBoxBar: any = useRef(null);
  const canvasRef: any = useRef();

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
    setBtnDownload(true)
    if (!Swal.isVisible()) {
      Swal.fire({
        title: 'กำลังโหลด...',
        showConfirmButton: false,
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
    }
    window.addEventListener('scroll', stickyBox);
    return () => {
      window.removeEventListener('scroll', stickyBox);
    };
  }, []);

  React.useEffect(() => {


    loadQrImage()

    return () => {
      clearTimeout(paySettimeOut)
      clearInterval(qrShowSettimeOut)
    }

  }, []);
  const loadQrImage = async () => {
    const orderId: any = router.query.orderId
    if (!orderId) {
      qrShowSettimeOut = setTimeout(loadQrImage, 3000)
      return
    }
    const data: QrData = {
      invoice_no: orderId
    }

    try {
      qrShow = await PaymentService.QrShow(data)
    } catch (e) {
      console.error(e.message)
      window.scrollTo(0, 0)
      router.push('/pricing').then(() => {
        Swal.close()
      })
      return
    }


    detailPayment(qrShow.productId)
    if (qrShow.status === 'Success') {
      setQrGenerate(qrShow)
      Swal.close()
      await checkPay(qrShow)
      return
    } else {
      qrShowSettimeOut = setTimeout(loadQrImage, 3000)
    }


  }
  const checkPay = async (qrShow: QRshow) => {
    const orderId: any = router.query.orderId
    const data: QrData = {
      invoice_no: orderId
    }
    try {
      const qrPay = await PaymentService.QrCheckPay(data)
      if (qrPay.status === true) {
        window.scrollTo(0, 0)
        router.push('/payment/thankyou')
      }
  
    } catch (error) {
      console.error(error.message)
      window.scrollTo(0, 0)
      router.push('/pricing').then(() => {
        Swal.close()
      })
      return
    }

    const expire = dateFnsTimezone.parseFromTimeZone(qrShow.expire || '', 'YYYY-MM-DD HH:mm:ss', { timeZone: 'Asia/Bangkok' })
      if (!isBefore(expire, new Date())) {
        paySettimeOut = setTimeout(() => checkPay(qrShow), 3000)
      } else {
        setBtnDownload(false)
      }
    
  }

  const detailPayment = (packageId: any) => {
    const orderId: any = router.query.orderId
    const packageSelect: ProductPackage[] = packages.filter((item: ProductPackage) => {
      return parseInt(packageId) === item.productId
    })
    if (!packageSelect.length) {
      window.scrollTo(0, 0)
      router.push('/pricing')
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
  }
  const expire = qrGenerate.expire ? dateFnsTimezone.parseFromTimeZone(qrGenerate.expire, 'YYYY-MM-DD HH:mm:ss', { timeZone: 'Asia/Bangkok' }) : new Date()

  const showTimeFormat = ({ minutes, seconds }: any) => {
    return <span>{`${zeroPad(minutes)}:${zeroPad(seconds)}`}</span>
  }


  const onComplete = () => {
    setBtnDownload(false)
  }


  const onDownloadQr = () => {
    const date = expireTimeFormat(qrGenerate.expire)
    const ctx = canvasRef.current.getContext('2d')
    canvasRef.current.width = 400;
    canvasRef.current.height = 400;
    let imageObj1 = new Image();
    imageObj1.src = qrGenerate.image || ''
    ctx.clearRect(0, 0, 400, 400);
    ctx.drawImage(imageObj1, 100, 10, 200, 200);
    let x = canvasRef.current.width / 2;
    ctx.fillStyle = "red";
    ctx.font = "12pt sans-serif";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText("กรุณาชำระภายในเวลา " + date[1] + " น.", x, 250);
    ctx.font = "10pt sans-serif";
    ctx.fillText("ของวันที่ " + date[0], x, 270);

    ctx.fillText("หากชำระไม่ทันภายในเวลาที่กำหนด", x, 310);
    ctx.fillText(`กรุณาทำรายการสั่งซื้ออีกครั้ง ${Date.now()}`, x, 330);

    ctx.beginPath();
    ctx.moveTo(20, 350);
    ctx.lineTo(380, 350);
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.fillText("QR Code นี้ไม่สามารถใช้ชำระช้ำ หรือใช้ชำระรายการอื่นได้", x, 380);

    var filename = "qr.png"
    var element = document.createElement('a');
    element.setAttribute('href', canvasRef.current.toDataURL('image/png', 3.0));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const onQrRenew = async () => {
    setBtnDownload(true)
    Swal.fire({
      title: 'กำลังโหลด...',
      showConfirmButton: false,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
    const orderId: any = router.query.orderId
    const data: QrData = {
      invoice_no: orderId
    }
    try{
      await PaymentService.QrRenew(data)
      await loadQrImage()
    }catch(e){
      console.error(e.message)
      window.scrollTo(0, 0)
      router.push('/pricing').then(() => {
        Swal.close()
      })
      return
    }

  }
  return (
    <div className="container">
      <div className="row justify-content-center hero_top_one paymentPage">
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
                  <div className="col-12 text-center secQR">
                    <h6
                      className="title__box__top"
                    >
                      {t('paymentqrhero.paymentqr.title1')}
                    </h6>
                    <h6
                      style={{
                        fontWeight: 400,
                        color: '#5b6e80',
                        marginTop: '5px',
                      }}
                    >
                      {t('paymentqrhero.paymentqr.title2')}
                    </h6>
                    <canvas ref={canvasRef} width={400} height={400} style={{ display: 'none' }} />
                    <img
                      src={qrGenerate.image}
                      className="img-fluid border border-dark imgQr"
                      alt=""
                      style={{ margin: '50px 0' }}
                    />

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentqrhero.paymentqr.ordernumber')}
                      <span className="theme__text font-weight-bold">
                        {qrGenerate.uniqueTransactionCode}
                      </span>
                    </h6>
                    {btnDownload ? <button
                      onClick={onDownloadQr}
                      type="button"
                      className="btn v8 new__btn"
                      style={{ margin: '30px 0', padding: '20px 80px' }}
                    >
                      {t('paymentqrhero.paymentqr.downloadBtn')}
                    </button> : <button
                      onClick={onQrRenew}
                      type="button"
                      className="btn v8 new__btn"
                      style={{ margin: '30px 0', padding: '20px 80px' }}
                    >
                        {t('รีเฟรช QR Code')}
                      </button>}

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('paymentqrhero.paymentqr.lifetime')} {' '}
                      <span
                        className="font-weight-bold"
                        style={{ color: '#ff1414' }}
                      >
                        {qrGenerate.status === 'Success' ? <Countdown date={expire} renderer={showTimeFormat} onComplete={onComplete} /> : null}
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
                    <h6>{billPayment.productBuy.productName}</h6>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '28px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentqrhero.price.packet')}
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
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    {/* <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '28px',
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
                              fontSize: '16px',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('paymentqrhero.bath')}
                          </span>
                        </h6>
                      </div>
                    </div> */}

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
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
                          lineHeight: '28px',
                          fontWeight: 500,
                        }}
                      >
                        {t('paymentqrhero.price.total')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: ' 30px' }}
                        >
                          {numeral(billPayment.productBuy.total).format('0,0')}{' '}
                          <span
                            style={{
                              fontSize: '16px',
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
