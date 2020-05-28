import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const PromoSection = ({ t }: any) => (
  <div
    className="promo_section"
    style={{ backgroundImage: 'url(img/bg_5.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="promo_text">
            <h2>
              {t('h1-1')}
              <br />
              {t('h1-2')}
            </h2>
            <p>{t('p1')}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p>
                {t('p2-1')}
                <br />
                {t('p2-2')}
              </p>
            </div>
            <div className="promo_img">
              <img src="img/promo_2.png" alt="Image" />
              <a href="#" className="btn v2">
                {t('a1')}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p>
                {t('p3-1')}
                <br />
                {t('p3-2')}
              </p>
            </div>
            <div className="promo_img">
              <img src="img/promo_1.png" alt="Image" />
              <a href="#" className="btn v2">
                TBS Developer
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="promo_bottom_text">
            <p>
              {t('p4')}
              <span>{t('span1')}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img src="img/plane.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>{t('h2')}</h3>
            <p>
              {t('p5-1')}
              <br />
              {t('p5-2')}
              <br />
              {t('p5-3')}
            </p>
            <a className="link" href="#">
              {t('a2')}
            </a>
            <h6 className="promo_link">
              {t('h3-1')}
              <span>{t('span2')}</span>
              {t('h3-2')}
            </h6>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="service_feature_text">
            <h3>
              {t('h4-1')}
              <br />
              {t('h4-2')}
            </h3>
            <p>{t('p6')}</p>
            <a className="link" href="#">
              {t('a3')}
            </a>
            <h6 className="promo_link">
              {t('h5-1')}
              <span>{t('span3')}</span>
              {t('h5-2')}
            </h6>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_4.png" alt="Image" />
                <p>{t('p7')}</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_5.png" alt="Image" />
                <p>{t('p7')}</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img src="img/img_6.png" alt="Image" />
                <p>{t('p7')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img src="img/device.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>
              {t('h6-1')}
              <br />
              {t('h6-2')}
            </h3>
            <p>{t('p8')}</p>
            <a href="#" className="btn v2">
              {t('a4')}
            </a>
            <a className="link" href="#">
              {t('a5')}
            </a>
            <h6 className="promo_link">
              {t('h7-1')}
              <span>{t('span4')}</span>
              {t('h7-2')}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);
PromoSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductPromoSection'],
});

PromoSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductPromoSection')(PromoSection);
