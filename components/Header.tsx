import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import React, { useState, useRef, useEffect } from 'react';
import Cookie from 'js-cookie';
// import { logout } from '../services/user/user.service';
// const logOut = () => {
//   logout();
//   window.location.reload();
// };

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
              <div className="header_select">
                <select className="user_select" style={{ display: 'none' }}>
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
                <img className="" src="/img/logo_1.png" alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-3 text-right">
            <div className="site-navbar">
              <nav className="site-navigation text-center">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <Link href="/product">
                      <a className="active">{t('header.product')}</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                      className="active"
                    >
                      {t('header.pricing')}
                    </a>
                  </li>
                  <li>
                    <Link href="/support/how-to-order">
                      <a className="active">{t('header.howtoorder')}</a>
                    </Link>
                  </li>
                  {/* <li className="has-children">
                    <a className="active" >
                      {t('header.database')}
                    </a>
                    <ul className="dropdown">
                      <li>
                        <Link href="/ResourcesLanding">
                          <a>
                            <h6>{t('header.resources')}</h6>
                          </a>
                        </Link>
                      </li>
                      <li className="listsub">
                        <Link href="/KnowledgeListing">
                          <a>
                            <h6>{t('header.knowledge')}</h6>
                            <p className="txtSub">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
                          </a>
                        </Link>
                        <Link href="/UseCasesListing">
                          <a>
                            <h6>{t('header.example')}</h6>
                            <p className="txtSub">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
                          </a>
                        </Link>
                        <Link href="/SuccessStoriesListing">
                          <a>
                            <h6>{t('header.successstories')}</h6>
                            <p className="txtSub">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link href="/Documentation">
                      <a className="active">{t('header.documentation')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="active">{t('header.contact')}</a>
                    </Link>
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
                    <li>
                      <Link href="/product">
                        <a className="active closemenu">
                          {t('header.product')}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                        className="active closemenu"
                      >
                        {t('header.pricing')}
                      </a>
                    </li>
                    <li>
                      <Link href="/support/how-to-order">
                        <a className="active closemenu">
                          {t('header.howtoorder')}
                        </a>
                      </Link>
                    </li>
                    {/* <li className="has-children">
                      <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span>
                      <a className="active">{t('header.database')}</a>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/ResourcesLanding">
                            <a  className="closemenu">
                              <h6>{t('header.resources')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/KnowledgeListing">
                            <a  className="closemenu">
                              <h6>{t('header.knowledge')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/UseCasesListing">
                            <a  className="closemenu">
                              <h6>{t('header.example')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/SuccessStoriesListing">
                            <a  className="closemenu">
                              <h6>{t('header.successstories')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/Documentation">
                        <a className="active closemenu">
                          {t('header.documentation')}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className="active closemenu">
                          {t('header.contact')}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 lg-none">
            <div className="menu_btn">
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}
                    className="loginLink"
                  >
                    {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_SHOPPING}/pricing`}
                    className="btn v1"
                  >
                    {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                  </a>
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
  namespacesRequired: ['header'];
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Header);
