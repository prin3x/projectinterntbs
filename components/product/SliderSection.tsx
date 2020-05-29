import dynamic from 'next/dynamic';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const SliderSection = ({ t }: any) => (
  <div
    className="slider_section"
    style={{ backgroundImage: 'url(img/bg_2.png)' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">{t('h1')}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <OwlCarousel
            items={4}
            nav
            dots={false}
            autoplay
            autoplayTimeout={5500}
            loop
            navText={[
              '<i class="ion-ios-arrow-back"></i>',
              '<i class="ion-ios-arrow-forward"></i>',
            ]}
            margin={30}
            center
            smartSpeed={2000}
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 3,
              },
              1000: {
                items: 4,
              },
            }}
          >
            <div className="item">
              <div className="slider_item">
                <h3>{t('h2')}</h3>
                <p>{t('p1')}</p>
                <a href="#">{t('a1')}</a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('h3')}</h3>
                <p>{t('p2')}</p>
                <a href="#">{t('a1')}</a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('h4')}</h3>
                <p>{t('p2')}</p>
                <a href="#">{t('a1')}</a>
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('h5')}</h3>
                <p>{t('p2')}</p>
                <a href="#">{t('a1')}</a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  </div>
);
SliderSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductSliderSection'],
});

SliderSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductSliderSection')(SliderSection);
