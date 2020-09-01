import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Product, ProductPackage } from '../../services/shopping/pricing.model';
import numeral from 'numeral';
import TagManager from 'react-gtm-module';
import classnames from 'classnames';
import Cookie from 'js-cookie';
import appConfig from '../../appConfig';
import { useRouter } from 'next/router';
import { CheckFirstPurchase } from '../../services/shopping/payment.service';

const SenderActive = 5;
const SenderBegin = 1;

const BuyPackage = (packageItem: ProductPackage) => {
  let domain = 'localhost';

  if (appConfig.APP_ENV === appConfig.production) domain = '.thaibulksms.com';
  else if (appConfig.APP_ENV === appConfig.internalTest)
    domain = '.1mobyline.com';

  Cookie.set('packageId', packageItem.productId.toString(), { domain });
  window.location.replace(
    `${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/payment`
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
          {productItem.corporate.sender === SenderActive && (
            <div className="parent">
              <h4 className="ribbon">{t('pricingallpricing.bestsell')}</h4>
            </div>
          )}{' '}
          {productItem.corporate.sender === SenderBegin && (
            <div className="parent">
              <h4 className="ribbon">{t('pricingallpricing.begin')}</h4>
            </div>
          )}
          <div className="left__box">
            <h3>{numeral(productItem.amount).format('0,0')}</h3>
            <span>
              {t('pricingallpricing.life')} {`${productItem.period} `}
              {t('pricingallpricing.month')}
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
                <div className="row ribbon-container">
                  <div className="col-lg-4 offset-lg-1 col-sm-5 text-center">
                    <h4 className="d-md-none">Standard</h4>
                    <p className="p-line-through">0.99</p>
                    <h3>
                      {numeral(
                        productItem.standard.amount /
                          productItem.standard.credit
                      ).format('0.00')}
                      {` `}
                      <span>
                        {t('pricingallpricing.bath')}/
                        {t('pricingallpricing.message')}
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
                      <div className="sender__box1 div-line-through2">
                        <p className="p-line-through2">
                          <span className="none">99,999</span>{' '}
                          <span className="up"> +20% UP </span>
                        </p>
                      </div>
                      <div className="sender__box1">
                        <span>{t('pricingallpricing.quantity')}</span>
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
                          {t('pricingallpricing.buyBtn')}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-5 text-center">
                    <h4 className="d-md-none">Corporate</h4>
                    <p className="p-line-through">0.99</p>
                    <h3>
                      {numeral(
                        productItem.corporate.amount /
                          productItem.corporate.credit
                      ).format('0.00')}{' '}
                      <span>
                        {t('pricingallpricing.bath')}/
                        {t('pricingallpricing.message')}
                      </span>
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
                      <div className="sender__box1 div-line-through2">
                        <p className="p-line-through2">
                          <span className="none">99,999</span>{' '}
                          <span className="up"> +20% UP </span>
                        </p>
                      </div>
                      <div className="sender__box1">
                        <span>{t('pricingallpricing.quantity')}</span>
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
                          {t('pricingallpricing.buyBtn')}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 col-md-1 text-center devribbon-container ">
                    <div className="pack-img">
                      <img src="http://localhost:3000/img/extra-package.png"></img>
                      <div className="pack-text">
                        <p>
                          <b>Extra</b>
                          <br /> Top-Up!!!
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
    );
  }
  return itemPackages;
};

const FirstPurchase = ({ t, packages }: any) => {
  const router = useRouter();
  React.useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'purchase',
        action: 'intent',
      },
    });

    const dpd: any = router.query.dpd;

    if (!dpd) return;
    firstPurchase(dpd);
  }, [router]);

  const firstPurchase = async (dpd: string) => {
    try {
      await CheckFirstPurchase(dpd);
    } catch (error) {
      console.error(error);
      router.push('/pricing');
    }
  };
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
                  <p>{t('pricingallpricing.column1')}</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <div className="top__bar">
                      <div className="row">
                        <div className="col-6 text-center">
                          <p>{t('pricingallpricing.column2')}</p>
                        </div>
                        <div className="col-6 text-center">
                          <p>{t('pricingallpricing.column3')}</p>
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
                __html: t('pricingallpricing.footertitle'),
              }}
            />

            <div className="pricing__bottom d-flex align-items-center justify-content-center">
              <h5 className="mr-5">{t('pricingallpricing.footheader')}</h5>
              <Link href="/contact">
                <a className="btn v3">{t('pricingallpricing.sellBtn')}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FirstPurchase.getInitialProps = async () => ({
  namespacesRequired: ['PricingAllPricing'],
});

FirstPurchase.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PricingAllPricing')(React.memo(FirstPurchase));
