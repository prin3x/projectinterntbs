import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const PromoSection = ({ t }: any) => (
  <div
    className="promo_section lazyload"
    // style={{ backgroundImage: 'url(/img/bg_5.png)' }}
    data-bgset="/img/bg_5.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="promo_text">
            <h2
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.1.header'),
              }}
            ></h2>
            <p>{t('productpromo.section.1.title')}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p
                dangerouslySetInnerHTML={{
                  __html: t('productpromo.section.1.title-left'),
                }}
              ></p>
            </div>
            <div className="promo_img">
              <object
                type="image/svg+xml"
                data="/img/img-sms.svg"
                className="lazyload"
              ></object>
              {/* <img
                className="lazyload"
                data-src="/img/img-sms.svg"
                alt="Image"
              /> */}
              <a href="#" className="btn v2">
                {t('productpromo.section.1.freeBtn')}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="promo_item">
            <div className="promo_title">
              <p
                dangerouslySetInnerHTML={{
                  __html: t('productpromo.section.1.title-right'),
                }}
              ></p>
            </div>
            <div className="promo_img">
              <img
                className="lazyload"
                data-src="/img/img-api.svg"
                alt="Image"
              />
              <a href="#" className="btn v2">
                {t('productpromo.section.1.developerBtn')}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="promo_bottom_text">
            <p
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.1.footer'),
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img className="lazyload" data-src="/img/plane.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3>{t('productpromo.section.2.header')}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.2.title'),
              }}
            ></p>
            <a className="link" href="#">
              {t('productpromo.section.2.link')}
            </a>
            <h6
              className="promo_link"
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.2.footer'),
              }}
            ></h6>
          </div>
        </div>
      </div>
      <div className="row align-items-center row_pad">
        <div className="col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <div className="service_feature_text">
            <h3
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.3.header'),
              }}
            ></h3>
            <p>{t('productpromo.section.3.title')}</p>
            <Link href="/sms-tracking">
              <a className="link" href="#">
                {t('productpromo.section.3.link')}
              </a>
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img
                  className="lazyload"
                  data-src="/img/img_4.png"
                  alt="Image"
                />
                <p>{t('productpromo.section.3.box.1')}</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img
                  className="lazyload"
                  data-src="/img/img_5.png"
                  alt="Image"
                />
                <p>{t('productpromo.section.3.box.2')}</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="service_feature_item">
                <img
                  className="lazyload"
                  data-src="/img/img_6.png"
                  alt="Image"
                />
                <p>{t('productpromo.section.3.box.3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="promo_item_three_img">
            <img className="lazyload" data-src="/img/device.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="service_feature_text">
            <h3
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.4.header'),
              }}
            ></h3>
            <p>{t('productpromo.section.4.title')}</p>
            <a href="#" className="btn v2">
              {t('productpromo.section.4.freeBtn')}
            </a>
            <Link href="/otp">
              <a className="link" href="#">
                {t('productpromo.section.4.link')}
              </a>
            </Link>
            <h6
              className="promo_link"
              dangerouslySetInnerHTML={{
                __html: t('productpromo.section.4.footer'),
              }}
            ></h6>
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
