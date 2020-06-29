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
      <div className="row hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('h1')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h2')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{t('h3')}</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="info__box">
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_13.png"
                          alt=""
                        />
                      </div>
                      <p>
                        {t('p1-1')}
                        <br />
                        {t('p1-2')}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info__box">
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_24.png"
                          alt=""
                        />
                      </div>
                      <p>{t('p2')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h6>{t('p3')}</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="info__box">
                      <div className="info__icon">
                        <img
                          className="lazyload"
                          data-src="/img/icon_25.png"
                          alt=""
                        />
                      </div>
                      <p>{t('p4')}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p
                      style={{
                        color: '#5b6e80',
                        marginTop: '30px',
                        fontWeight: 400,
                      }}
                    >
                      {t('p5-1')}
                      <br />
                      {t('p5-2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header" style={{ padding: '25px 30px' }}>
              <label className="radio_wrapper">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <h5>{t('h4')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ padding: '40px 30px 50px' }}
              >
                <div className="row">
                  <div className="col-12">
                    <h6 className="border__bottom">{t('h5')}</h6>

                    <h6 style={{ marginTop: '30px' }}>{t('h6')}</h6>
                    <p style={{ color: '#5b6e80', fontWeight: 400 }}>
                      {t('h7-1')}
                      <br />
                      {t('h7-2')}
                    </p>

                    <a
                      href="#"
                      className="btn v8 button__sm_100"
                      style={{
                        marginTop: '45px',
                        width: '274px',
                        height: '65px',
                      }}
                    >
                      {t('a1')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header" style={{ padding: '25px 30px' }}>
              <label className="radio_wrapper">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <h5>{t('h8')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ padding: '40px 30px 50px' }}
              >
                <div className="row">
                  <div className="col-12">
                    <h6 className="border__bottom">{t('h9')}</h6>

                    <form action="#">
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input1')}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input2')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input3')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input4')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input5')}
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            className="input__box"
                            placeholder={t('input6')}
                          />
                        </div>

                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn v8"
                            style={{ marginTop: '45px' }}
                          >
                            {t('button1')}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h10')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12">
                    <h6>{t('h11')}</h6>
                  </div>
                  <div className="col-12">
                    <div className="sender__box">
                      <div className="d-flex justify-content-between">
                        <p>{t('p6')}</p>
                        <p className="theme__text">0.35 {t('bath')}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>{t('p7')}</p>
                        <p className="theme__text">85,714</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>{t('p8')}</p>
                        <p className="theme__text">2 {t('year')}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>Sender Name</p>
                        <p className="theme__text">5</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <a href="#" className="link theme__text">
                        {t('a2')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box__content">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h6>{t('h12')}</h6>

                    <form action="#">
                      <div className="form__wrapper">
                        <input
                          type="text"
                          placeholder="TBS 20"
                          className="input__box"
                        />
                        <button
                          type="submit"
                          className="btn v8"
                          style={{ width: '158px' }}
                        >
                          {t('button2')}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h13')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          30,000
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
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h14')}
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          100
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
                          color: '#5b6e80',
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
                style={{ backgroundColor: '#f1f8f9' }}
              >
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h15')}
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
                            บาท
                          </span>
                        </h6>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn v8 w-100 d-none d-xl-block"
                      style={{ marginTop: '65px' }}
                    >
                      {t('a3')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 order-4 text-center">
          <a
            href="#"
            className="btn v8 d-xl-none button__sm_100"
            style={{ marginTop: '65px', padding: '24px 145px' }}
          >
            {t('a4')}
          </a>
        </div>

        <div className="col-xl-8 order-5 bottom__content">
          <div className="box__wrapper">
            <h6 className="__title">หมายเหตุ</h6>
            <ul style={{ marginTop: '30px' }}>
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>
                {t('li3')}
                <a href="mailto::contact@thaibulksms.com">{t('a5')}</a>
              </li>
              <li>{t('li4')}</li>
              <li>{t('li5')}</li>
              <li>{t('li6')}</li>
            </ul>
          </div>

          <div className="box__wrapper ml-5">
            <h6 className="__title">{t('h7')}</h6>
            <ul>
              <li>{t('li7')}</li>
              <li>{t('li8')}</li>
              <li>{t('li9')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['PaymentHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentHeroSection')(HeroSection);
