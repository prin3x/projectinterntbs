import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import React, { useState, useRef, useEffect } from 'react';
import Cookie from 'js-cookie';

const HeaderTopMenuMobile = () => (
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close  js-menu-toggle">
      <span className="ion-ios-close-empty"></span>{' '}
    </div>
  </div>
);
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
              <div className="header_select" style={{ display: 'none' }}>
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
                      <a className="active">{t('header.product')}</a>
                    </Link>
                    <ul className="dropdown">
                      <li className="listsub">
                        <Link href="/product/smart-sms-console">
                          <a>
                            <h6>Smart SMS Console</h6>
                            <p className="txtSub">ส่ง SMS ผ่านเว็บไซต์ได้ด้วยตนเอง ส่งง่าย วัดผลการส่งได้รวดเร็ว</p>
                          </a>
                        </Link>
                        <Link href="/product/sms-api">
                          <a>
                            <h6>SMS API</h6>
                            <p className="txtSub">เพียงใช้งาน SMS API คุณก็ส่งข้อความได้บนแพลตฟอร์มของตนเอง</p>
                          </a>
                        </Link>
                        <Link href="/product/otp">
                          <a>
                            <h6>OTP Service</h6>
                            <p className="txtSub">ระบบส่ง OTP พร้อมใช้ เพิ่มความปลอดภัยไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                          </a>
                        </Link>
                      </li>
                      <li className="listsub">
                        <Link href="/product/sms-tracking">
                          <a>
                            <h6>SMS Tracking</h6>
                            <p className="txtSub">วัดผลแคมเปญ SMS แม่นยำ ไม่เสียงบการตลาดไปโดยเปล่าประโยชน์</p>
                          </a>
                        </Link>
                        <Link href="/product/global-sms">
                          <a>
                            <h6>Global SMS</h6>
                            <p className="txtSub">ส่ง SMS และ OTP ได้ทั่วโลก ด้วยราคาที่คุ้มค่า</p>
                          </a>
                        </Link>
                        <Link href="/product/location-based-sms">
                          <a>
                            <h6>Location Based SMS</h6>
                            <p className="txtSub">เข้าถึงกลุ่มเป้าหมายในพื้นที่ ส่งข้อความได้ทันที ไม่ต้องใช้เบอร์</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="active">{t('header.pricing')}</a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link href="/resource">
                      <a className="active">คลังข้อมูล</a>
                    </Link>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} passHref={true}>
                          <a><h6>ความรู้</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} passHref={true}>
                          <a><h6>ตัวอย่างการใช้งาน</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} passHref={true}>
                          <a><h6>เรื่องราวความสำเร็จ</h6></a>
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">ซัพพอร์ต</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/support/how-to-order">
                          <a><h6>{t('header.howtoorder')}</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/support/faq">
                          <a ><h6>คำถามที่พบบ่อย</h6></a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">{t('header.documentation')}</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/developer">
                          <a ><h6>ดาวน์โหลดคู่มือ</h6></a>
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
                    <a className="active">เกี่ยวกับบริษัท</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/why-thaibulksms">
                          <a><h6>ทำไมต้อง ThaiBulkSMS</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a><h6>{t('header.contact')}</h6></a>
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
                {/* <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close  js-menu-toggle">
                    <span className="ion-ios-close-empty"></span>{' '}
                  </div>
                </div> */}
                <HeaderTopMenuMobile />
                <div className="site-mobile-menu-body">
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="product">
                        {t('header.product')}
                      </a>
                    </li>
                  </ul>
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="pricing">
                        {t('header.pricing')}
                      </a>
                    </li>
                  </ul>
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="resource">
                        คลังข้อมูล
                      </a>
                    </li>
                  </ul>
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="support">
                        ซัพพอร์ต
                      </a>
                    </li>
                  </ul>
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="documentation">
                        {t('header.documentation')}
                      </a>
                    </li>
                  </ul>
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      <a className="show-site-sub-menu" data-name="aboutme">
                        เกี่ยวกับบริษัท
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="site-nav-wrap"> */}
                  {/* <li className="has-children"> */}
                  {/* <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span> */}
                  {/* <Link href="/product">
                        <a className="active closemenu">
                          {t('header.product')}
                        </a>
                      </Link> */}
                  {/* <ul className="collapse" id="collapseItem0">
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
                      </ul> */}
                  {/* </li> */}

                  {/* <li>
                      <Link href="/pricing">
                        <a className="closemenu">
                          {t('header.pricing')}
                        </a>
                      </Link>
                    </li>

                    <li className="has-children">
                      <Link href="/resource"><a className="closemenu">คลังข้อมูล</a></Link>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} passHref={true}>
                            <a><h6>ความรู้</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} passHref={true}>
                            <a><h6>ตัวอย่างการใช้งาน</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} passHref={true}>
                            <a><h6>เรื่องราวความสำเร็จ</h6></a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">ซัพพอร์ต</a>
                      <ul className="collapse" id="collapseItem1">
                        <li>
                          <Link href="/support/how-to-order">
                            <a className="closemenu">
                              <h6>{t('header.howtoorder')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/support/faq">
                            <a className="closemenu"><h6>คำถามที่พบบ่อย</h6></a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-children">
                      <a className="active">{t('header.documentation')}</a>
                      <ul className="collapse" id="collapseItem2">
                        <li>
                          <Link href="/developer">
                            <a className="closemenu"><h6>ดาวน์โหลดคู่มือ</h6></a>
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
                      <a className="active">เกี่ยวกับบริษัท</a>
                      <ul className="collapse" id="collapseItem3">
                        <li>
                          <Link href="/why-thaibulksms">
                            <a className="closemenu"><h6>ทำไมต้อง ThaiBulkSMS</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a className="closemenu">
                              <h6> {t('header.contact')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                  <div className="menu_btn">
                    <ul>
                      <li>
                        <a
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                          className="loginLink"
                        >
                          {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                        </a>
                      </li>
                      <li>
                        <Link href="/pricing">
                          <a className="btn v1">
                            {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* new sub menu mobile */}
              <div id="product">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <h5 className="show-site-sub-menu head-site-sub-menu">{t('header.product')}</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>จุดเด่นผลิตภัณฑ์</a>
                      </li>
                    </ul>
                    <h5 className="head-site-sub-menu">สำหรับการตลาด</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>Smart SMS Console</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>SMS Tracking</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>Location Based SMS</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>Global SMS</a>
                      </li>
                    </ul>
                    <h5 className="head-site-sub-menu">สำหรับนักพัฒนา</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>SMS API</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>OTP Service</a>
                      </li>
                    </ul>
                    <div className="menu_btn">
                      <ul>
                        <li>
                          <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                            className="loginLink"
                          >
                            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <a className="btn v1">
                              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="resource">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <h5 className="show-site-sub-menu head-site-sub-menu">คลังข้อมูล</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>คลังข้อมูล</a>
                      </li>
                    </ul>
                    <h5 className="head-site-sub-menu">บทความ</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>ความรู้</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>ตัวอย่างการใช้งาน</a>
                      </li>
                    </ul>
                    <h5 className="head-site-sub-menu">การศึกษา</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>เรื่องราวความสำเร็จ</a>
                      </li>
                    </ul>
                    <div className="menu_btn">
                      <ul>
                        <li>
                          <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                            className="loginLink"
                          >
                            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <a className="btn v1">
                              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="support">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <h5 className="show-site-sub-menu head-site-sub-menu">ซัพพอร์ต</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>{t('header.howtoorder')}</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>คำถามที่พบบ่อย</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>{t('header.contact')}</a>
                      </li>
                    </ul>
                    <div className="margin-top-sub-menu">
                      <h5 className="head-site-sub-menu">ช่องทางติดต่อ</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <a>02-789-000</a>
                        </li>
                        <li className="sub-head-menu">
                          <a>content@thaibulksms.com</a>
                        </li>
                        <li className="sub-head-menu">
                          <a>ThaiBulkSMS</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu_btn">
                      <ul>
                        <li>
                          <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                            className="loginLink"
                          >
                            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <a className="btn v1">
                              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="documentation">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <h5 className="show-site-sub-menu head-site-sub-menu">{t('header.documentation')}</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>ดาวน์โหลดคู่มือ</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>ดาวน์โหลดตัวอย่าง SDK</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>API References</a>
                      </li>
                    </ul>
                    <div className="menu_btn">
                      <ul>
                        <li>
                          <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                            className="loginLink"
                          >
                            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <a className="btn v1">
                              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="aboutme">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <h5 className="show-site-sub-menu head-site-sub-menu">เกี่ยวกับบริษัท</h5>
                    <ul className="title-sub-menu">
                      <li className="sub-head-menu">
                        <a>ทำไมต้อง ThaiBulkSMS</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>ติดต่อเรา</a>
                      </li>
                      <li className="sub-head-menu">
                        <a>Reseller Program</a>
                      </li>
                    </ul>
                    <div className="margin-top-sub-menu">
                      <h5 className="head-site-sub-menu">ช่องทางติดต่อ</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <a>02-789-000</a>
                        </li>
                        <li className="sub-head-menu">
                          <a>content@thaibulksms.com</a>
                        </li>
                        <li className="sub-head-menu">
                          <a>ThaiBulkSMS</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu_btn">
                      <ul>
                        <li>
                          <a
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                            className="loginLink"
                          >
                            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </li>
                        <li>
                          <Link href="/pricing">
                            <a className="btn v1">
                              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end new sub menu mobile */}
          <div className="col-lg-3 lg-none">
            <div className="menu_btn">
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                    className="loginLink"
                  >
                    {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                  </a>
                </li>
                <li>
                  {isLogin === true ? (
                    <Link href="/pricing">
                      <a className="btn v1">{t(`header.buy-` + 'b')}</a>
                    </Link>
                  ) : (
                      <a
                        className="btn v1"
                        href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                      >
                        {t(`header.buy-` + 'a')}
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
  namespacesRequired: ['header'];
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Header);
