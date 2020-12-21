import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import React, { useState, useRef, useEffect } from 'react';
import Cookie from 'js-cookie';

const Header = ({ t }: any) => {
  const lang = i18n.language;
  const [isLogin, setIsLogin] = useState(Cookie.get('PASSCODE') ? true : false);
  const headerBar: any = useRef(null);
  function sticky() {
    var scroll = window.pageYOffset;
    if (headerBar.current !== null) {
      if (scroll < 100) {
        headerBar.current.classList.remove('sticky');
      } else {
        headerBar.current.classList.add('sticky');
      }
    }
  }
  function menuClick() {
    var elDivnice = document.getElementsByClassName('divnice')[0];
    if (elDivnice.classList.contains('open'))
      elDivnice.classList.remove('open');
    else elDivnice.classList.add('open');
  }
  useEffect(() => {
    // check Cookie Login
    if (Cookie.get('PASSCODE')) {
      setIsLogin(true);
    }
    window.addEventListener('scroll', sticky);
    return () => {
      window.removeEventListener('scroll', sticky);
    };
  }, []);

  return (
    <div ref={headerBar} className="header-bar-area position-fixed w-100 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 lg-none">
            <div className="header_top">
              <div className="header_contact_no">
                <a href="tel:027986000">02-798-6000</a>
              </div>
              <div className="header_select" style={{ display: '' }}>
                <select className="user_select" style={{ display: '' }}>
                  <option>Th</option>
                  <option>En</option>
                </select>
                <div
                  onClick={menuClick}
                  className="nice-select user_select divnice"
                >
                  <span className="current">{lang}</span>
                  <ul className="list">
                    <li
                      data-value="Th"
                      // className="option th"
                      className={
                        lang == 'th' ? 'option th selected focus' : 'option th'
                      }
                      onClick={() => {
                        i18n.changeLanguage('th');
                      }}
                    >
                      Th
                    </li>
                    <li
                      data-value="En"
                      // className="option en"
                      className={
                        lang == 'en' ? 'option en selected focus' : 'option en'
                      }
                      onClick={() => {
                        i18n.changeLanguage('en');
                      }}
                    >
                      En
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-9">
            <Link href="/">
              <a className="navbar-brand p-0 m-0">
                <img
                  className=""
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-3 text-right">
            <div className="site-navbar">
              <nav className="site-navigation text-center">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="has-children">
                    <Link href="/product">
                      <a className="active">{t('header::Products')}</a>
                    </Link>
                    <ul className="dropdown">
                      <li className="listsub">
                        <Link href="/product/smart-sms-console">
                          <a>
                            <h6>Smart SMS Console</h6>
                            <p className="txtSub">
                              {t(
                                'header::Send SMS messages on your own through a website. Easy to send and can be quickly analyzed.'
                              )}
                            </p>
                          </a>
                        </Link>
                        <Link href="/product/sms-api">
                          <a>
                            <h6>SMS API</h6>
                            <p className="txtSub">
                              {t(
                                'header::Simply by using SMS API, you can send messages through your platform.'
                              )}
                            </p>
                          </a>
                        </Link>
                        <Link href="/product/otp">
                          <a>
                            <h6>OTP Service</h6>
                            <p className="txtSub">
                              {t(
                                'header::A secure, ready-to-use OTP Service that does not require additional programming.'
                              )}
                            </p>
                          </a>
                        </Link>
                      </li>
                      <li className="listsub">
                        <Link href="/product/sms-tracking">
                          <a>
                            <h6>SMS Tracking</h6>
                            <p className="txtSub">
                              {t(
                                'header::Accurate SMS Campaign results that do not waste your marketing budget.'
                              )}
                            </p>
                          </a>
                        </Link>
                        <Link href="/product/global-sms">
                          <a>
                            <h6>Global SMS</h6>
                            <p className="txtSub">
                              {t(
                                'header::Send SMS and OTP messages globally at valuable prices.'
                              )}
                            </p>
                          </a>
                        </Link>
                        <Link href="/product/location-based-sms">
                          <a>
                            <h6>Location Based SMS</h6>
                            <p className="txtSub">
                              {t(
                                'header::Enter your target group within specific areas. Send messages immediately without requiring phone numbers.'
                              )}
                            </p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="active">{t('header::Pricing')}</a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link href="/resource">
                      <a className="active">{t('header::Database')}</a>
                    </Link>
                    <ul
                      className="dropdown"
                      style={{ minWidth: '260px', left: '-30%' }}
                    >
                      <li>
                        <Link
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`}
                          passHref={true}
                        >
                          <a>
                            <h6>{t('header::Knowledge')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`}
                          passHref={true}
                        >
                          <a>
                            <h6>{t('header::Example Operations')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`}
                          passHref={true}
                        >
                          <a>
                            <h6>{t('header::Success Stories')}</h6>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">{t('header::Support')}</a>
                    <ul
                      className="dropdown"
                      style={{ minWidth: '260px', left: '-30%' }}
                    >
                      <li>
                        <Link href="/support/how-to-order">
                          <a>
                            <h6>{t('header::Ordering Methods')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/support/faq">
                          <a>
                            <h6>{t('header::Frequently Asked Questions')}</h6>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">{t('header::For Developers')}</a>
                    <ul
                      className="dropdown"
                      style={{ minWidth: '260px', left: '-30%' }}
                    >
                      <li>
                        <Link href="/developer">
                          <a>
                            <h6>{t('header::Download Guide')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                        >
                          <h6>API References</h6>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">{t('header::About the Company')}</a>
                    <ul
                      className="dropdown"
                      style={{ minWidth: '260px', left: '-30%' }}
                    >
                      <li>
                        <Link href="/why-thaibulksms">
                          <a>
                            <h6>{t('header::Why use ThaiBulkSMS?')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>
                            <h6>{t('header::Contact us')}</h6>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="d-lg-none sm-right">
                <a className="mobile-bar js-menu-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close  js-menu-toggle">
                    <span className="ion-ios-close-empty"></span>{' '}
                  </div>
                </div>
                <div className="site-mobile-menu-body">
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      {/* <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span> */}
                      <Link href="/product">
                        <a className="active closemenu">
                          {t('header::Products')}
                        </a>
                      </Link>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/product/smart-sms-console">
                            <a className="closemenu">
                              <h6>Smart SMS Console</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/sms-api">
                            <a className="closemenu">
                              <h6>SMS API</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/otp">
                            <a className="closemenu">
                              <h6>OTP Service</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/sms-tracking">
                            <a className="closemenu">
                              <h6>SMS Tracking</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/global-sms">
                            <a className="closemenu">
                              <h6>Global SMS</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/location-based-sms">
                            <a className="closemenu">
                              <h6>Location Based SMS</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/pricing">
                        <a className="closemenu">{t('header::Pricing')}</a>
                      </Link>
                    </li>

                    <li className="has-children">
                      <Link href="/resource">
                        <a className="closemenu">{t('header::Database')}</a>
                      </Link>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`}
                            passHref={true}
                          >
                            <a>
                              <h6>{t('header::Knowledge')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`}
                            passHref={true}
                          >
                            <a>
                              <h6>{t('header::Example Operations')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`}
                            passHref={true}
                          >
                            <a>
                              <h6>{t('header::Success Stories')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">{t('header::Support')}</a>
                      <ul className="collapse" id="collapseItem1">
                        <li>
                          <Link href="/support/how-to-order">
                            <a className="closemenu">
                              <h6>{t('header::Ordering Methods')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/support/faq">
                            <a className="closemenu">
                              <h6>{t('header::Frequently Asked Questions')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-children">
                      <a className="active">{t('header::For Developers')}</a>
                      <ul className="collapse" id="collapseItem2">
                        <li>
                          <Link href="/developer">
                            <a className="closemenu">
                              <h6>{t('header::Download Guide')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                            className="active closemenu"
                          >
                            <h6>API References</h6>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">{t('header::About the Company')}</a>
                      <ul className="collapse" id="collapseItem3">
                        <li>
                          <Link href="/why-thaibulksms">
                            <a className="closemenu">
                              <h6>{t('header::Why use ThaiBulkSMS?')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a className="closemenu">
                              <h6> {t('header::Contact us')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="menu_btn">
                    <ul>
                      <li>
                        <a
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                          className="loginLink"
                        >
                          {t(
                            'header::' +
                              (isLogin === true ? 'Enter the system' : 'Login')
                          )}
                        </a>
                      </li>
                      <li>
                        <Link href="/pricing">
                          <a className="btn v1">
                            {t(
                              `header::` +
                                (isLogin === true ? 'Buy' : 'Free trial')
                            )}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 lg-none">
            <div className="menu_btn">
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                    className="loginLink"
                  >
                    {t(
                      'header::' +
                        (isLogin === true ? 'Enter the system' : 'Login')
                    )}
                  </a>
                </li>
                <li>
                  {isLogin === true ? (
                    <Link href="/pricing">
                      <a className="btn v1">{t(`header::` + 'Buy')}</a>
                    </Link>
                  ) : (
                    <a
                      className="btn v1"
                      href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                    >
                      {t(`header::` + 'Free trial')}
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Header.getInitialProps = async () => {
  namespacesRequired: ['Header'];
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('Header')(Header);
