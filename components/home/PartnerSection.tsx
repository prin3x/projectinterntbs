import dynamic from 'next/dynamic';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const PartnerSection = ({ t }: any) => (
  <div className="partner_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h6 className="partner_title">{t('h1')}</h6>
        </div>
        <div className="col-md-12">
          <OwlCarousel
            className="partner_wrap"
            items={5}
            nav={false}
            dots={false}
            autoplay
            autoplayTimeout={5500}
            loop={true}
            margin={30}
            center
            smartSpeed={2000}
            responsiveClass
            responsive={{
              0: {
                items: 3,
              },
              768: {
                items: 5,
              },
              1000: {
                items: 5,
              },
            }}
          >
            <div className="item">
              <div className="partner_item">
                <img
                  className="lazyload"
                  data-src="/img/partner_logo_1.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="lazyload"
                  data-src="/img/partner_logo_2.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="lazyload"
                  data-src="/img/partner_logo_3.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="lazyload"
                  data-src="/img/partner_logo_4.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="lazyload"
                  data-src="/img/partner_logo_5.png"
                  alt="Image"
                />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  </div>
);
PartnerSection.getInitialProps = async () => ({
  namespacesRequired: ['HomePartnerSection'],
});

PartnerSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomePartnerSection')(PartnerSection);
