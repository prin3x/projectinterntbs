import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Product, ProductPackage } from '../../services/shopping/pricing.model';
import numeral from 'numeral';
import TagManager from 'react-gtm-module'
import classnames from 'classnames';
import Cookie from 'js-cookie';
import appConfig from '../../appConfig'

const SenderActive = -1;

const BuyPackage = (packageItem: ProductPackage) => {
  let domain = 'localhost';

  if (appConfig.APP_ENV === appConfig.production) domain = '.thaibulksms.com';
  else if (appConfig.APP_ENV === appConfig.internalTest) domain = '.1mobyline.com';

  Cookie.set('packageId', packageItem.productId.toString(),{domain})
  window.location.replace(`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/payment`)
};
const showPackage = (packages: Product[], t: Function) => {
  let itemPackages:any = [];
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
                <div className="arrow-down"><img src="/img/arrow_down.png" alt=""/></div>
                <img
                  src="/img/shape_triangle.png"
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
                  <div className="col-sm-6 text-center">
                    <h4 className="d-md-none">Corporate</h4>

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
      }
    })
  }, []);

  return (
    <div
      className="all__pricing accordion lazyload"
      id="accordion"
      // style={{ backgroundImage: 'url(/img/pricing_bg.png)' }}
      data-bgset="/img/pricing_bg.png"
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
              <a className="btn v3">{t('pricingallpricing.sellBtn')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AllPricing.getInitialProps = async () => ({
  namespacesRequired: ['PricingAllPricing'],
});

AllPricing.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PricingAllPricing')(React.memo(AllPricing));
