import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import * as React from 'react';
const menuClick = () => {
  if ($('.divnice').hasClass('open')) $('.divnice').removeClass('open');
  else $('.divnice').addClass('open');
};
const changeLang = (lang: any) => {
  $('.option').removeClass('selected').removeClass('focus');
  $('.' + lang)
    .addClass('selected')
    .addClass('focus');
  $('.current').text(lang);
};

const Header = ({ t }: any) => {
  const lang = i18n.language;
  React.useEffect(() => {
    // window is accessible here.
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function () {
      var scroll = window.pageYOffset;
      if (scroll < 100) {
        sticky.removeClass('sticky');
      } else {
        sticky.addClass('sticky');
      }
    });
  }, []);
  return (
    <div className="header-bar-area position-fixed w-100 ">
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
                  className="nice-select user_select divnice"
                  onClick={menuClick}
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
                        changeLang('th');
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
                        changeLang('en');
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
              <a className="navbar-brand p-0 m-0" href="#">
                <img
                  className="lazyload"
                  data-src="/img/logo_1.png"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-3 text-right">
            <div className="site-navbar">
              <nav className="site-navigation text-center">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <Link href="/product">
                      <a className="active" href="#">
                        {t('menu-1')}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="active" href="#">
                        {t('menu-2')}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-order">
                      <a className="active" href="#">
                        {t('menu-8')}
                      </a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <a className="active" href="#">
                      {t('menu-3')}
                    </a>
                    <ul className="dropdown">
                      <li>
                        <Link href="/ResourcesLanding">
                          <a href="#">
                            <h6>{t('menu-3-1')}</h6>
                            {/* <p>{t('menu-3-1-s')}</p> */}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/KnowledgeListing">
                          <a href="#">
                            <h6>{t('menu-3-2')}</h6>
                            {/* <p>{t('menu-3-2-s')}</p> */}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/UseCasesListing">
                          <a href="#">
                            <h6>{t('menu-3-3')}</h6>
                            {/* <p>{t('menu-3-3-s')}</p> */}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/SuccessStoriesListing">
                          <a href="#">
                            <h6>{t('menu-3-4')}</h6>
                            {/* <p>{t('menu-3-4-s')}</p> */}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/Documentation">
                      <a className="active" href="#">
                        {t('menu-4')}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="active" href="#">
                        {t('menu-5')}
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="d-lg-none sm-right">
                <a href="#" className="mobile-bar js-menu-toggle">
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
                        <a className="active" href="#">
                          {t('menu-1')}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing">
                        <a className="active" href="#">
                          {t('menu-2')}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-to-order">
                        <a className="active" href="#">
                          {t('menu-8')}
                        </a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span>
                      <a className="active" href="#">
                        {t('menu-3')}
                      </a>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/ResourcesLanding">
                            <a href="#">
                              <h6>{t('menu-3-1')}</h6>
                              {/* <p>{t('menu-3-1-s')}</p> */}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/KnowledgeListing">
                            <a href="#">
                              <h6>{t('menu-3-2')}</h6>
                              {/* <p>{t('menu-3-2-s')}</p> */}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/UseCasesListing">
                            <a href="#">
                              <h6>{t('menu-3-3')}</h6>
                              {/* <p>{t('menu-3-3-s')}</p> */}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/SuccessStoriesListing">
                            <a href="#">
                              <h6>{t('menu-3-4')}</h6>
                              {/* <p>{t('menu-3-4-s')}</p> */}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/Documentation">
                        <a className="active" href="#">
                          {t('menu-4')}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className="active" href="#">
                          {t('menu-5')}
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
                  <Link href="/login">
                    <a href="#">{t('menu-6')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="btn v1" href="#">
                      {t('menu-7')}
                    </a>
                  </Link>
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
