import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const PricingSection = ({ t }: any) => (
  <div className="pricing-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section_title">{t('homeproductpricing.header')}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box productPage">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/price_1.png`}
              alt="Image"
            />
            <h3>{t('homeproductpricing.package.standard.header')}</h3>
            <p>{t('homeproductpricing.package.standard.title')}</p>
            <ul className="pricing_feature">
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('homeproductpricing.package.standard.feature.1')}</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('homeproductpricing.package.standard.feature.2')}</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('homeproductpricing.package.standard.feature.3')}</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('homeproductpricing.package.standard.feature.4')}</p>
              </li>
            </ul>
            <div className="price_plan">
              <span>{t('homeproductpricing.start')}</span>
              <h2>
                {t('homeproductpricing.package.standard.price')}{' '}
                <span>{t('homeproductpricing.unit')}</span>
              </h2>
              <a
                href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                className="btn v3"
              >
                {t('homeproductpricing.viewPackageBtn')}
              </a>
            </div>
            <div className="price_bottom_text">
              <p>{t('homeproductpricing.package.standard.suitable.title')}</p>
              <ul>
                <li>{t('homeproductpricing.package.standard.suitable.1')}</li>
                <li>{t('homeproductpricing.package.standard.suitable.2')}</li>
                <li>{t('homeproductpricing.package.standard.suitable.3')}</li>
                <li>{t('homeproductpricing.package.standard.suitable.4')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box productPage coperateRate">
            <img
              className="lazyload"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/price_2.png`}
              alt="Image"
            />
            <h3>{t('homeproductpricing.package.corporate.header')}</h3>
            <p>{t('homeproductpricing.package.corporate.title')}</p>
            <ul className="pricing_feature">
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('homeproductpricing.package.corporate.feature.1')}</p>
              </li>
              <li>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <p>{t('homeproductpricing.package.corporate.feature.2')}</p>
              </li>
              <li>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <p>{t('homeproductpricing.package.corporate.feature.3')}</p>
              </li>
              <li>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <p>{t('homeproductpricing.package.corporate.feature.4')}</p>
              </li>
            </ul>
            <div className="price_plan">
              <span>{t('homeproductpricing.start')}</span>
              <h2>
                {t('homeproductpricing.package.corporate.price')}{' '}
                <span>{t('homeproductpricing.unit')}</span>
              </h2>
              <a
                href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                className="btn v3"
              >
                {t('homeproductpricing.viewPackageBtn')}
              </a>
            </div>
            <div className="price_bottom_text">
              <p>{t('homeproductpricing.package.corporate.suitable.title')}</p>
              <ul>
                <li>{t('homeproductpricing.package.corporate.suitable.1')}</li>
                <li>{t('homeproductpricing.package.corporate.suitable.2')}</li>
                <li>{t('homeproductpricing.package.corporate.suitable.3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="pricing_bottom_text">
            {/* <span>{t('span5')}</span> */}
            <h3>{t('homeproductpricing.footer')}</h3>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
              className="btn v3"
            >
              {t('homeproductpricing.freeBtn')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
PricingSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductPricingSection'],
});

PricingSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductPricingSection')(PricingSection);
