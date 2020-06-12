import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const PricingSection = ({ t }: any) => {
  React.useEffect(() => {
    // $('select').niceSelect();
  }, []);
  return (
    <div
      className="pricing-section position-relative pricing__top lazyload"
      // style={{ backgroundImage: 'url(/img/bg_11.png)' }}
      data-bgset="/img/bg_11.png"
    >
      <div className="container">
        <div className="row justify-content-xl-end mt-80">
          <div className="col-lg-6 col-xl-4 col-md-6">
            <div
              className="pricing_box m-0 pricing_box1"
              style={{
                borderTop: '8px solid #31b1e7',
                backgroundColor: '#fff',
              }}
            >
              <h3 style={{ fontSize: '40px' }}>{t('h1')}</h3>
              <p
                style={{ fontSize: '22px', color: '#5b6e80' }}
                className="my-4"
              >
                {t('p1')}
              </p>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p2')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p3')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p4')}</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>{t('span1')}</span>
                <h2 style={{ fontSize: '86px', fontWeight: 500 }}>
                  0.35
                  <span style={{ marginLeft: '1px' }}> {t('bath')} / SMS</span>
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
              <h3 style={{ fontSize: '40px' }}>{t('h2')}</h3>
              <p
                style={{ fontSize: '22px', color: '#5b6e80' }}
                className="my-4"
              >
                {t('p5')}
              </p>
              <ul className="pricing_feature">
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p6')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p7')}</p>
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  <p>{t('p8')}</p>
                </li>
              </ul>
              <div className="price_plan">
                <span>{t('span1')}</span>
                <h2 style={{ fontSize: '86px', fontWeight: 500 }}>
                  0.45{' '}
                  <span style={{ marginLeft: '1px' }}> {t('bath')} / SMS</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="img-fluid bg__img img__1 lazyload"
        data-src="/img/img_25.png"
        alt=""
      />
      <img
        className="img-fluid bg__img img__2 lazyload"
        data-src="/img/img__11.png"
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
