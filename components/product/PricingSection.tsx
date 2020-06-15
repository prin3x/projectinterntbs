import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const PricingSection = ({ t }: any) => (
  <div className="pricing-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="section_title">{t('h1')}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box">
            <img className="lazyload" data-src="/img/price_1.png" alt="Image" />
            <h3>Standard SMS</h3>
            <p>{t('p1')}</p>
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
              <h2>
                0.35 <span>{t('span2')}</span>
              </h2>
              <a href="#" className="btn v3">
                {t('a1')}
              </a>
            </div>
            <div className="price_bottom_text">
              <p>{t('p5')}</p>
              <ul>
                <li>{t('li1')}</li>
                <li>{t('li2')}</li>
                <li>{t('li3')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="pricing_box">
            <img className="lazyload" data-src="/img/price_2.png" alt="Image" />
            <h3>Corporate SMS</h3>
            <p>{t('p6')}</p>
            <ul className="pricing_feature">
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('p7')}</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('p8')}</p>
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                <p>{t('p9')}</p>
              </li>
            </ul>
            <div className="price_plan">
              <span>{t('span3')}</span>
              <h2>
                0.45 <span>{t('span4')}</span>
              </h2>
              <a href="#" className="btn v3">
                {t('a2')}
              </a>
            </div>
            <div className="price_bottom_text">
              <p>{t('p10')}</p>
              <ul>
                <li>{t('li5')}</li>
                <li>{t('li6')}</li>
                <li>{t('li7')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="pricing_bottom_text">
            <span>{t('span5')}</span>
            <h3>{t('h2')}</h3>
            <a href="#" className="btn v3">
              {t('a3')}
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
