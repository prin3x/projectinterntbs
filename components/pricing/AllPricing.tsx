import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Product, ProductPackage } from '../../services/shopping/pricing.model';
import numeral from 'numeral';
import TagManager from 'react-gtm-module';
import classnames from 'classnames';
import Cookie from 'js-cookie';
import appConfig from '../../appConfig';
import Swal from 'sweetalert2';
import { decodeTBSToken } from '../../services/user/user.service';

const SenderActive = 5;

const BuyPackage = (packageItem: ProductPackage) => {
  let domain = 'localhost';

  if (appConfig.APP_ENV === appConfig.production) domain = '.thaibulksms.com';
  else if (appConfig.APP_ENV === appConfig.internalTest)
    domain = '.1mobyline.com';

  const decodeToken = decodeTBSToken();
  if (decodeToken && decodeToken.isSubaccount) {
    Swal.fire({
      title: 'แจ้งเตือน',
      html:
        "<p style='font-size:15px;'>บัญชีของคุณเป็นบัญชีผู้ใช้สำรองไม่สามารถทำรายการสั่งซื้อได้ กรุณาติดต่อผู้ดูแลบัญชีผู้ใช้หลักของคุณเพื่อดำเนินการ</p>",
      allowOutsideClick: false,
      confirmButtonText: 'ปิด',
    });
    return;
  }

  Cookie.set('packageId', packageItem.productId.toString(), { domain });
  window.location.replace(
    `${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/payment/`
  );
};
const showPackage = (packages: Product[], t: Function) => {
  let itemPackages: any = [];
  for (let item in packages) {
    let productItem = packages[item];
    let itemNo = item + 1;
    itemPackages.push(
      <div
        key={itemNo}
        className={classnames('row', 'no-gutters', 'single__pricing', {
          'm-0': !item,
          active: productItem.corporate.sender === 5,
        })}
        data-toggle="collapse"
        data-target={`.collapse${itemNo}`}
        aria-expanded={productItem.corporate.sender === SenderActive}
        aria-controls={`collapse${itemNo}`}
      >
        <div className="col-md-4 box">
          {productItem.corporate.sender === SenderActive ? (
            <div className="parent">
              <h4 className="ribbon">{t('AllPricing::Bestsellers')}</h4>
            </div>
          ) : null}
          {parseInt(item) === 1 ? (
            <div className="parent">
              <h4 className="ribbon">{t('AllPricing::For beginners')}</h4>
            </div>
          ) : null}

          <div className="left__box">
            <h3>
              {numeral(productItem.amount).format('0,0')}
              {` `}
              <span>{t('AllPricing::Baht')}</span>
            </h3>
            <span>
              {t('AllPricing::Duration of usage')} {`${productItem.period} `}
              {t('AllPricing::months')}
            </span>
          </div>
        </div>
        <div className="col-md-8 box">
          <div className="row">
            <div className="col-12">
              <div className="pricing__content">
                <div className="arrow-down">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/arrow_down.png`}
                    alt=""
                  />
                </div>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/shape_triangle.png`}
                  className="shape__box"
                  alt=""
                />
                <div className="row">
                  <div className="col-sm-6 text-center">
                    <h4 className="d-md-none">Standard</h4>

                    <h3>
                      {numeral(
                        productItem.standard.amount /
                          productItem.standard.credit
                      ).format('0.00')}
                      {` `}
                      <span>
                        {/* {t('AllPricing::bath')}/{t('AllPricing::message')} */}
                        {t('AllPricing::Baht/message')}
                      </span>
                    </h3>

                    <div
                      className={classnames(
                        'expand',
                        'collapse',
                        `collapse${itemNo}`,
                        { show: productItem.standard.sender === SenderActive }
                      )}
                      data-parent="#accordion"
                    >
                      <div className="sender__box1">
                        <span>{t('AllPricing::Number of messages')}</span>
                        <span className="theme__text">
                          {numeral(productItem.standard.credit).format('0,0')}
                        </span>
                      </div>
                      <div className="sender__box1">
                        <span>Sender Name</span>
                        <span className="theme__text">
                          {productItem.standard.sender
                            ? productItem.standard.sender
                            : '-'}
                        </span>
                      </div>

                      <div className="text-center">
                        <button
                          // href="#"
                          onClick={() => BuyPackage(productItem.standard)}
                          className="btn v8"
                        >
                          {t('AllPricing::Buy now')}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 text-center">
                    <h4 className="d-md-none">Corporate</h4>

                    <h3>
                      {numeral(
                        productItem.corporate.amount /
                          productItem.corporate.credit
                      ).format('0.00')}{' '}
                      <span>{t('AllPricing::Baht/message')}</span>
                    </h3>

                    <div
                      className={classnames(
                        'expand',
                        'collapse',
                        `collapse${itemNo}`,
                        { show: productItem.corporate.sender === SenderActive }
                      )}
                      data-parent="#accordion"
                    >
                      <div className="sender__box1">
                        <span>{t('AllPricing::Number of messages')}</span>
                        <span className="theme__text">
                          {numeral(productItem.corporate.credit).format('0,0')}
                        </span>
                      </div>
                      <div className="sender__box1">
                        <span>Sender Name</span>
                        <span className="theme__text">
                          {productItem.corporate.sender
                            ? productItem.corporate.sender
                            : '-'}
                        </span>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => BuyPackage(productItem.corporate)}
                          className="btn v8"
                        >
                          {t('AllPricing::Buy now')}
                        </button>
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
  }
  return itemPackages;
};

const AllPricing = ({ t, packages }: any) => {
  React.useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'purchase',
        action: 'intent',
      },
    });
  }, []);

  return (
    <div
      className="all__pricing accordion lazyload"
      id="accordion"
      data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/pricing_bg.png`}
    >
      <div className="container priceTable">
        <div className="row">
          <div className="col-12">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="left__box left__box__top">
                  <p>{t('AllPricing::Package prices')}</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <div className="top__bar">
                      <div className="row">
                        <div className="col-6 text-center">
                          <p>{t('AllPricing::Standard SMS')}</p>
                        </div>
                        <div className="col-6 text-center">
                          <p>{t('AllPricing::Corporate SMS')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showPackage(packages, t)}
          </div>

          <div className="col-12 text-center pricing__bottom__content">
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  'AllPricing::• Package prices do not include VAT.<br>• 3% withholding tax is available only when purchasing in the name of juristic persons.'
                ),
              }}
            />
            <div className="row">
              <div className="col-md-10 offset-md-1 col-sm-12 offset-sm-0">
                <div className="special-price">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                      <h3>ได้ SMS ราคาถูกยิ่งกว่า เมื่อสั่งซื้อปริมาณมาก</h3>
                      <button className="btn v2 sms-btn-text" type="submit">ติดต่อฝ่ายขาย</button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <p className="head-price">Standard SMS</p>
                      <p><span>0.21</span> บาท/ข้อความ</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <p className="head-price">Corporate SMS</p>
                      <p><span>0.24</span> บาท/ข้อความ</p>
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

AllPricing.getInitialProps = async () => ({
  namespacesRequired: ['Pricing'],
});

AllPricing.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Pricing')(React.memo(AllPricing));
