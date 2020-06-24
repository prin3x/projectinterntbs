import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const menuClick = () => {
  var elDivnice = document.getElementsByClassName('devnice-select')[0];
  if (elDivnice.classList.contains('open')) elDivnice.classList.remove('open');
  else elDivnice.classList.add('open');
};
const HeroSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div className="container">
      <style jsx>{`
        .nice-select.open .list {
          width: 100%;
          opacity: 1;
          pointer-events: auto;
          -webkit-transform: scale(1) translateY(0);
          -ms-transform: scale(1) translateY(0);
          transform: scale(1) translateY(0);
        }
        .nice-select .option:hover,
        .nice-select .option.focus,
        .nice-select .option.selected.focus {
          background-color: #10b7e4;
          color: #000;
        }
      `}</style>
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('h1')}</h3>
        </div>

        <div className="col-12">
          <div className="contact__box">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="contact__left">
                  <img
                    src="/img/contact.png"
                    className="img-fluid left__img"
                    alt=""
                  />

                  <h3>{t('h2')}</h3>
                  <ul>
                    <li style={{ marginTop: '10px' }}>
                      <img
                        className="lazyload"
                        data-src="/img/location.png"
                        alt=""
                      />
                      <p>
                        {t('p1-1')} <br />
                        {t('p1-2')}
                      </p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src="/img/call.png"
                        alt=""
                      />
                      <p>{t('p2')}</p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src="/img/calendar.png"
                        alt=""
                      />
                      <p>{t('p3')}</p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src="/img/mail_2.png"
                        alt=""
                      />
                      <p>contact@thaibulksms.com</p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src="/img/clock.png"
                        alt=""
                      />
                      <p>{t('p4')}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form_part">
                  <form action="#">
                    {/* <select name="se1" id="" className="input__box v2">
                      <option value="">ติดต่อฝ่ายขาย</option>
                      <option value="">พบปัญหาการใช้งาน</option>
                      <option value="">สอบถามข้อมูลบริการ</option>
                      <option value="">แนะนำติชม</option>
                    </select> */}
                    <div
                      className="nice-select input__box v2 devnice-select"
                      onClick={menuClick}
                    >
                      <span className="current">{t('span1')}</span>
                      <ul className="list">
                        <li className="option selected" data-value="">
                          {t('li1')}
                        </li>
                        <li className="option " data-value="">
                          {t('li2')}
                        </li>
                        <li className="option " data-value="">
                          {t('li3')}
                        </li>
                        <li className="option " data-value="">
                          {t('li4')}
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      className="input__box v2"
                      placeholder={t('placeholder1')}
                    />

                    <input
                      type="text"
                      className="input__box v2"
                      placeholder={t('placeholder2')}
                    />
                    <input
                      type="text"
                      className="input__box v2"
                      placeholder={t('placeholder3')}
                    />
                    <input
                      type="text"
                      className="input__box v2"
                      placeholder={t('placeholder4')}
                    />

                    <textarea
                      className="input__box v2"
                      placeholder={t('placeholder5')}
                    ></textarea>

                    <img
                      src="/img/captcha.png"
                      className="img-fluid"
                      style={{ marginTop: '40px' }}
                      alt=""
                    />

                    <label className="checkbox-wrapper">
                      {t('label1')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>

                    <div
                      className="button__wrapper text-center"
                      style={{ marginTop: '90px' }}
                    >
                      <button type="submit" className="btn v8">
                        {t('button1')}
                      </button>
                    </div>
                  </form>
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
  namespacesRequired: ['ContactHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ContactHeroSection')(HeroSection);
