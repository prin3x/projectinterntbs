import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
const HeroSection = ({ t }: any) => {
  React.useEffect(() => {
    var wind = $(window);
    var sticky__box = $('.side__box');
    wind.on('scroll', function () {
      var scroll = window.pageYOffset;
      if (scroll < 300) {
        sticky__box.removeClass('sticky__box');
      } else {
        sticky__box.addClass('sticky__box');
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('h1')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h2')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content new__content">
                <div className="row">
                  <div className="col-4">
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('h3')}
                    </h6>
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('h4')}
                    </h6>
                  </div>

                  <div className="col-8">
                    <h6 className="theme__text font-weight-bold"> 0022953</h6>
                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                      {t('h5')}
                      <span className="theme__text font-weight-bold">
                        31 มีนาคม 2562 เวลา 13:35 น.
                      </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{t('h6')}</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__1.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>{t('p1')}</p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p2')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p3')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p4')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p5')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              250-3-00072-1
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p6')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__2.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>{t('p7')}</p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p2')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p3')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p4')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p5')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              996-2-07408-9
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p6')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__3.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>{t('p8')}</p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p2')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p3')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p4')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p5')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              066-7-05442-3
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p6')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="item__box__2 d-flex align-items-start">
                      <img
                        src="/img/img__4.png"
                        alt=""
                        style={{ marginRight: '20px' }}
                      />

                      <div>
                        <p style={{ marginBottom: '10px' }}>{t('p9')}</p>

                        <div className="d-flex">
                          <div style={{ marginRight: '20px' }}>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p2')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p3')}
                            </p>
                            <p style={{ fontWeight: 400, color: '#5b6e80' }}>
                              {t('p4')}
                            </p>
                          </div>

                          <div>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p5')}
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              673-1-01576-5
                            </p>
                            <p
                              style={{ fontWeight: 400 }}
                              className="theme__text"
                            >
                              {t('p6')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h7')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ backgroundColor: ' #f1f8f9' }}
              >
                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_20.png"
                    alt=""
                  />
                  <h4>1. {t('h8')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_21.png"
                    alt=""
                  />
                  <h4>
                    2.{' '}
                    <a href="#" className="theme__text link">
                      {t('a1')}
                    </a>
                  </h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_22.png"
                    alt=""
                  />
                  <h4>
                    3. {t('h9-1')}
                    <br />
                    {t('h9-2')}
                  </h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img
                    className="img-fluid lazyload"
                    data-src="/img/icon_23.png"
                    alt=""
                  />
                  <h4>
                    4. {t('h10-1')} <br />
                    {t('h10-2')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper side__box">
            <div className="box__header">
              <h5>{t('h11')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h12')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          30,000{' '}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h13')}
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          100{' '}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        VAT (7%)
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          2,100
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="box__content border-0"
                style={{ backgroundColor: ' #f1f8f9' }}
              >
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: ' #5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h14')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: '36px' }}
                        >
                          32,000{' '}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['PaymentbankHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentbankHeroSection')(HeroSection);
