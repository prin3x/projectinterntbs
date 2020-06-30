import dynamic from 'next/dynamic';
import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
const SimpleSliderSection = ({ t }: any) => {
  const mainImage: any = useRef(null);
  function onInitialized(e: any) {
    let count = 0;
    e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
      (val: any) => {
        if (val.className === 'owl-item active') {
          val.style.opacity = 0.5;
          if (count === 0) {
            val.style.opacity = 1;
          }
          count++;
        } else {
          val.style.opacity = 0.5;
        }
      }
    );
  }
  function handleSelect(e: any) {
    let count = 0;
    e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
      (val: any) => {
        val.style.opacity = 0.5;
      }
    );
    e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
      (val: any) => {
        if (val.className === 'owl-item active') {
          if (count === 0) {
            val.style.opacity = 1;
            val.children[0].children[0].childNodes.forEach((childval: any) => {
              if (childval.className === 'linking') {
                if (mainImage.current !== null) {
                  mainImage.current.data = childval.innerText;
                }
              }
            });
            count++;
          }
        }
      }
    );
  }
  return (
    <div className="simple_slider_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="simple_slider_heading_wrap">
              <div className="simple_slider_heading">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: t('homesimpleslider.header'),
                  }}
                ></h3>
              </div>
              <div className="simple_slider_heading_img">
                <object
                  ref={mainImage}
                  type="image/svg+xml"
                  data="/img/TBS-home-feature01.svg"
                ></object>
                {/* <img
                  ref={mainImage}
                  className="lazyload"
                  data-src="/img/img_23.png"
                  alt="Image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <OwlCarousel
              className="simple_slider_wrapper"
              items={2}
              nav
              dots={false}
              loop
              onTranslated={(e) => handleSelect(e)}
              onInitialized={(e) => onInitialized(e)}
              navText={[
                '<i class="ion-ios-arrow-back"></i>',
                '<i class="ion-ios-arrow-forward"></i>',
              ]}
              // margin={30}
              // center
              smartSpeed={1000}
              responsiveClass
              mouseDrag={false}
              responsive={{
                0: {
                  items: 1,
                  margin: 20,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 1,
                  center: true,
                },
                1200: {
                  items: 2,
                },
              }}
            >
              <div className="item">
                <div className="simple_slider_item">
                  <h4>{t('homesimpleslider.item.1.title')}</h4>
                  <img
                    className="lazyload"
                    data-src="/img/user_3.png"
                    alt="Image"
                  />
                  <p>
                    {t('homesimpleslider.item.1.desc')}
                    <Link href="/">
                      <a href="#">
                        <span>{t('homesimpleslider.item.1.link')}</span>
                      </a>
                    </Link>
                  </p>
                  <a href="#" className="btn v9">
                    {t('homesimpleslider.testBtn')}
                  </a>
                  <span className="linking" style={{ display: 'none' }}>
                    /img/TBS-home-feature01.svg
                    {/* <object
                      type="image/svg+xml"
                      data="/img/TBS-home-feature01.svg"
                    ></object> */}
                  </span>
                </div>
              </div>
              <div className="item">
                <div className="simple_slider_item">
                  <h4>{t('homesimpleslider.item.2.title')}</h4>
                  <img
                    className="lazyload"
                    data-src="/img/user_3.png"
                    alt="Image"
                  />
                  <p>
                    {t('homesimpleslider.item.2.desc')}
                    <Link href="/">
                      <a href="#">
                        <span>{t('homesimpleslider.item.2.link')}</span>
                      </a>
                    </Link>
                  </p>
                  <a href="#" className="btn v9">
                    {t('homesimpleslider.testBtn')}
                  </a>
                  <span className="linking" style={{ display: 'none' }}>
                    /img/TBS-home-feature02.svg
                    {/* <object
                      type="image/svg+xml"
                      data="/img/TBS-home-feature02.svg"
                    ></object> */}
                  </span>
                </div>
              </div>
              <div className="item">
                <div className="simple_slider_item">
                  <h4>{t('homesimpleslider.item.3.title')}</h4>
                  <img
                    className="lazyload"
                    data-src="/img/user_3.png"
                    alt="Image"
                  />
                  <p>{t('homesimpleslider.item.3.desc')}</p>
                  <a href="#" className="btn v9">
                    {t('homesimpleslider.testBtn')}
                  </a>
                  <span className="linking" style={{ display: 'none' }}>
                    /img/TBS-home-feature03.svg
                    {/* <object
                      type="image/svg+xml"
                      data="/img/TBS-home-feature03.svg"
                    ></object> */}
                  </span>
                </div>
              </div>
              <div className="item">
                <div className="simple_slider_item">
                  <h4>{t('homesimpleslider.item.4.title')}</h4>
                  <img
                    className="lazyload"
                    data-src="/img/user_3.png"
                    alt="Image"
                  />
                  <p>
                    {t('homesimpleslider.item.4.desc')}
                    <Link href="/">
                      <a href="#">
                        <span>{t('homesimpleslider.item.4.link')}</span>
                      </a>
                    </Link>
                  </p>
                  <a href="#" className="btn v9">
                    {t('homesimpleslider.testBtn')}
                  </a>
                  <span className="linking" style={{ display: 'none' }}>
                    /img/TBS-home-feature04.svg
                    {/* <object
                      type="image/svg+xml"
                      data="/img/TBS-home-feature04.svg"
                    ></object> */}
                  </span>
                </div>
              </div>
              <div className="item">
                <div className="simple_slider_item a">
                  <h4>{t('homesimpleslider.item.5.title')}</h4>
                  <img
                    className="lazyload"
                    data-src="/img/user_3.png"
                    alt="Image"
                  />
                  <p>
                    {t('homesimpleslider.item.5.desc')}
                    <Link href="/">
                      <a href="#">
                        <span>{t('homesimpleslider.item.5.link')}</span>
                      </a>
                    </Link>
                  </p>
                  <a href="#" className="btn v9">
                    {t('homesimpleslider.testBtn')}
                  </a>
                  <span className="linking" style={{ display: 'none' }}>
                    /img/TBS-home-feature05.svg
                    {/* <object
                      type="image/svg+xml"
                      data="/img/TBS-home-feature05.svg"
                    ></object> */}
                  </span>
                </div>
              </div>
            </OwlCarousel>
            <a href="#" className="lang_link text-right pr-4">
              {t('homesimpleslider.testBtn')}
              <img
                className="lazyload"
                data-src="/img/arrow_3.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SimpleSliderSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeSimpleSliderSection'],
});

SimpleSliderSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeSimpleSliderSection')(SimpleSliderSection);
