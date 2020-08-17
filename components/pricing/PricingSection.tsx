import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const PricingSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div
      className="pricing-section position-relative pricing__top lazyload"
      data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
    >
      <div className="container pricing">
        <h3 className="headPricing">ราคาแพ็กเกจ</h3>
        <div className="row justify-content-xl-end mt-80">
          <div className="col-lg-6 col-xl-4 col-md-6 pricing_right">
            <div
              className="pricing_box m-0 pricing_box1"
              style={{
                borderTop: '8px solid #31b1e7',
                backgroundColor: '#fff',
              }}
            >
              <h3 style={{ fontSize: '40px' }}>
                {t('pricingpricing.package.standard.header')}
              </h3>
              <p style={{ fontSize: '22px', color: '#5b6e80' }}>
                {t('pricingpricing.package.standard.title')}
              </p>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('pricingpricing.package.standard.feature.1')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('pricingpricing.package.standard.feature.2')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('pricingpricing.package.standard.feature.3')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('pricingpricing.package.standard.feature.4')}</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>{t('pricingpricing.start')}</span>
                <h2 style={{ fontSize: '72px', fontWeight: 500 }}>
                  {t('pricingpricing.package.standard.price')}
                  <span style={{ marginLeft: '1px' }}>
                    {t('pricingpricing.unit')}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6">
            <div
              className="pricing_box m-0"
              style={{
                borderTop: '8px solid #31b1e7',
                backgroundColor: '#fff',
              }}
            >
              <h3 style={{ fontSize: '40px' }}>
                {t('pricingpricing.package.corporate.header')}
              </h3>
              <p style={{ fontSize: '22px', color: '#5b6e80' }}>
                {t('pricingpricing.package.corporate.title')}
              </p>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('pricingpricing.package.corporate.feature.1')}</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>{t('pricingpricing.package.corporate.feature.2')}</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>{t('pricingpricing.package.corporate.feature.3')}</p>
                </li>
                <li>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>{t('pricingpricing.package.corporate.feature.4')}</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>{t('pricingpricing.start')}</span>
                <h2 style={{ fontSize: '72px', fontWeight: 500 }}>
                  {t('pricingpricing.package.corporate.price')}
                  <span style={{ marginLeft: '1px' }}>
                    {t('pricingpricing.unit')}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="img-fluid bg__img img__1 lazyload"
        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`}
        alt=""
      />
      <img
        className="img-fluid bg__img img__2 lazyload"
        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`}
        alt=""
      />
    </div>
  );
};

PricingSection.getInitialProps = async () => ({
  namespacesRequired: ['PricingPricingSection'],
});

PricingSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PricingPricingSection')(PricingSection);
