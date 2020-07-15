import dynamic from 'next/dynamic';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const SliderSection = ({ t }: any) => (
  <div
    className="slider_section lazyload"
    // style={{ backgroundImage: 'url(/img/bg_2.png)' }}
    data-bgset="/img/bg_2.png"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section_title">{t('productslider.header')} </h3>
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
              '<i className="ion-ios-arrow-back"></i>',
              '<i className="ion-ios-arrow-forward"></i>',
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
                <h3>{t('productslider.item.1.title')}</h3>
                <p>{t('productslider.item.1.desc')}</p>
                {/* <a href="#">{t('a1')}</a> */}
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('productslider.item.2.title')}</h3>
                <p>{t('productslider.item.2.desc')}</p>
                {/* <a href="#">{t('a1')}</a> */}
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('productslider.item.3.title')}</h3>
                <p>{t('productslider.item.3.desc')}</p>
                {/* <a href="#">{t('a1')}</a> */}
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('productslider.item.4.title')}</h3>
                <p>{t('productslider.item.4.desc')}</p>
                {/* <a href="#">{t('a1')}</a> */}
              </div>
            </div>
            <div className="item">
              <div className="slider_item">
                <h3>{t('productslider.item.5.title')}</h3>
                <p>{t('productslider.item.5.desc')}</p>
                {/* <a href="#">{t('a1')}</a> */}
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
    <p style={{ textAlign: 'center', marginTop: '50px', color: '#31b1e7' }}>
      {t('productslider.exampleBtn')}
    </p>
  </div>
);
SliderSection.getInitialProps = async () => ({
  namespacesRequired: ['ProductSliderSection'],
});

SliderSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ProductSliderSection')(SliderSection);
