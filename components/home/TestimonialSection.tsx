import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const TestimonialSection = ({ t }: any) => (
  <div className="testimonial_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3
            className="section_title"
            dangerouslySetInnerHTML={{ __html: t('hometestimonial.header') }}
          >
            {/* {t('h1')} <span className="col_one">ThaiBulk</span>{' '}
            <span className="col_two">SMS</span> */}
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <OwlCarousel
            className="testimonial_slider"
            items={1}
            nav={true}
            dots={false}
            loop={true}
            navText={[
              '<i class="ion-ios-arrow-back"></i>',
              '<i class="ion-ios-arrow-forward"></i>',
            ]}
            margin={30}
            center
            smartSpeed={2000}
            responsiveClass={true}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 1,
              },
              1000: {
                items: 1,
              },
            }}
          >
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  {t('hometestimonial.item.1.content')}
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img
                      className="lazyload"
                      data-src="/img/client_1.png"
                      alt="Image"
                    />
                  </div>
                  <div className="client_name">
                    <h6>{t('hometestimonial.item.1.credit')}</h6>
                    <p>{t('p2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  {t('hometestimonial.item.1.content')}
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img
                      className="lazyload"
                      data-src="/img/client_1.png"
                      alt="Image"
                    />
                  </div>
                  <div className="client_name">
                    <h6>{t('hometestimonial.item.1.credit')}</h6>
                    <p>{t('p2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_item">
                <p className="client_quote">
                  {t('hometestimonial.item.1.content')}
                </p>
                <div className="client_info">
                  <div className="client_img">
                    <img
                      className="lazyload"
                      data-src="/img/client_1.png"
                      alt="Image"
                    />
                  </div>
                  <div className="client_name">
                    <h6>{t('hometestimonial.item.1.credit')}</h6>
                    <p>{t('p2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Link href="/SuccessStoriesListing">
            <a className="btn v6">{t('hometestimonial.storyBtn')}</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
TestimonialSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeHeroSection'],
});

TestimonialSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeTestimonialSection')(TestimonialSection);
