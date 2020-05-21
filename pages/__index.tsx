import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <div className='proloader'>
        <div className='loader_34'>
          <div className='ytp-spinner'>
            <div className='ytp-spinner-container'>
              <div className='ytp-spinner-rotator'>
                <div className='ytp-spinner-left'>
                  <div className='ytp-spinner-circle'></div>
                </div>
                <div className='ytp-spinner-right'>
                  <div className='ytp-spinner-circle'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='page_wrapper'>
        <div className='header-bar-area position-fixed w-100 '>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 lg-none'>
                <div className='header_top'>
                  <div className='header_contact_no'>
                    <a href='tel:027986000'>02-798-6000</a>
                  </div>
                  {/* <div className="header_select">
                    <select className="user_select">
                      <option>Th</option>
                      <option>En</option>
                    </select>
                  </div> */}
                  <div className='header_select'>
                    <select className='user_select' style={{ display: 'none' }}>
                      <option>Th</option>
                      <option>En</option>
                    </select>
                    <div className='nice-select user_select'>
                      <span className='current'>Th</span>
                      <ul className='list'>
                        <li data-value='Th' className='option selected focus'>
                          Th
                        </li>
                        <li data-value='En' className='option'>
                          En
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-6 col-9'>
                <a className='navbar-brand p-0 m-0' href='#'>
                  <img src='/img/logo_1.png' alt='Logo' />
                </a>
              </div>
              <div className='col-lg-6 col-md-6 col-3 text-right'>
                <div className='site-navbar'>
                  <nav className='site-navigation text-center'>
                    <ul className='site-menu js-clone-nav d-none d-lg-block'>
                      <li>
                        <a className='active' href='#'>
                          บริการ
                        </a>
                      </li>
                      <li>
                        <a className='active' href='#'>
                          ราคา
                        </a>
                      </li>
                      <li className='has-children'>
                        <a className='active' href='#'>
                          คลังข้อมูล
                        </a>
                        <ul className='dropdown'>
                          <li>
                            <a href='#'>
                              <h6>EnterPrise</h6>
                              <p>Reach every customer, anywhere</p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Marketing</h6>
                              <p>Extend and amplify your marketing campaigns</p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Operations</h6>
                              <p>
                                Streamline workforce operations and customer
                                fulfillment
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Customer Service</h6>
                              <p>
                                Deliver personalized customer experiences at
                                scale
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Healthcare</h6>
                              <p>
                                Improve patient engagement with modern
                                telehealth
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a className='active' href='#'>
                          ซัพพอร์ต
                        </a>
                        <ul className='dropdown'>
                          <li>
                            <a href='#'>
                              <h6>EnterPrise</h6>
                              <p>Reach every customer, anywhere</p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Marketing</h6>
                              <p>Extend and amplify your marketing campaigns</p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Operations</h6>
                              <p>
                                Streamline workforce operations and customer
                                fulfillment
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Customer Service</h6>
                              <p>
                                Deliver personalized customer experiences at
                                scale
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <h6>Healthcare</h6>
                              <p>
                                Improve patient engagement with modern
                                telehealth
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className='active' href='#'>
                          ติดต่อเรา
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className='d-lg-none sm-right'>
                    <a href='#' className='mobile-bar js-menu-toggle'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                  <div className='site-mobile-menu'>
                    <div className='site-mobile-menu-header'>
                      <div className='site-mobile-menu-close  js-menu-toggle'>
                        <span className='ion-ios-close-empty'></span>{' '}
                      </div>
                    </div>
                    <div className='site-mobile-menu-body'>
                      <ul className='site-nav-wrap'>
                        <li>
                          <a className='active' href='#'>
                            บริการ
                          </a>
                        </li>
                        <li>
                          <a className='active' href='#'>
                            ราคา
                          </a>
                        </li>
                        <li className='has-children'>
                          <span
                            className='arrow-collapse collapsed'
                            data-toggle='collapse'
                            data-target='#collapseItem0'
                          ></span>
                          <a className='active' href='#'>
                            คลังข้อมูล
                          </a>
                          <ul className='collapse' id='collapseItem0'>
                            <li>
                              <a href='#'>
                                <h6>EnterPrise</h6>
                                <p>Reach every customer, anywhere</p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Marketing</h6>
                                <p>
                                  Extend and amplify your marketing campaigns
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Operations</h6>
                                <p>
                                  Streamline workforce operations and customer
                                  fulfillment
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Customer Service</h6>
                                <p>
                                  Deliver personalized customer experiences at
                                  scale
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Healthcare</h6>
                                <p>
                                  Improve patient engagement with modern
                                  telehealth
                                </p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='has-children'>
                          <span
                            className='arrow-collapse collapsed'
                            data-toggle='collapse'
                            data-target='#collapseItem1'
                          ></span>
                          <a className='active' href='#'>
                            ซัพพอร์ต
                          </a>
                          <ul className='collapse' id='collapseItem1'>
                            <li>
                              <a href='#'>
                                <h6>EnterPrise</h6>
                                <p>Reach every customer, anywhere</p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Marketing</h6>
                                <p>
                                  Extend and amplify your marketing campaigns
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Operations</h6>
                                <p>
                                  Streamline workforce operations and customer
                                  fulfillment
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Customer Service</h6>
                                <p>
                                  Deliver personalized customer experiences at
                                  scale
                                </p>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <h6>Healthcare</h6>
                                <p>
                                  Improve patient engagement with modern
                                  telehealth
                                </p>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className='active' href='#'>
                            ติดต่อเรา
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 lg-none'>
                <div className='menu_btn'>
                  <ul>
                    <li>
                      <a href='#'>ล็อกอิน</a>
                    </li>
                    <li>
                      <a className='btn v1' href='#'>
                        ซื้อเลย
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='hero_section'
          style={{ backgroundImage: 'url(img/hero_bg.png)' }}
        >
          <img src='img/curve_1.png' alt='Image' className='hero_curve' />
          <div className='container'>
            <div className='row align-item-center hero_top_one'>
              <div className='col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2'>
                <div className='hero_text_one'>
                  <span>เพิ่มความสำเร็จให้ SMS Marketing ด้วย</span>
                  <h1>SMS Provider</h1>
                  <p>อันดับ 1 ของไทย</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1'>
                <div className='hero_img_one'>
                  <img src='img/hero_1.png' alt='Image' />
                </div>
              </div>
            </div>
            <div className='row align-items-center hero_bottom_one'>
              <div className='col-lg-6'>
                <div className='hero_img_two'>
                  <img src='img/hero_2.png' alt='Image' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='hero_text_two'>
                  <span>
                    บริการส่ง SMS ครบวงจร ครอบคลุม <br />
                    ส่งง่าย หลากหลายธุรกิจมั่นใจ
                  </span>
                  <h2>
                    <span>SMS Provider</span> เจ้าเดียวในไทย
                    ที่ได้รับใบอนุญาตจาก กสทช.
                  </h2>
                  <p>
                    ตรวจสอบได้ถึงมือถือปลายทาง ว่า SMS ส่งถึงมือถือผู้รับหรือไม่
                    หากส่งไม่ถึง เช่น ติด Anti-Spam, ปิดเครื่อง,
                    โทรศัพท์ข้อมูลเต็ม ฯลฯ ทางเราจะคืนเครดิตให้คุณ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='sms_section '
          style={{ backgroundImage: 'url(img/promo_bg.png' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 '>
                <div className='sms_text'>
                  <h3>ส่ง OTP ไม่ดีเลย รันแคมเปญไม่สะดุด</h3>
                  <p>
                    ส่ง SMS ผ่าน 3 เครือข่ายหลักโดยตรง (AIS, TRUE, DTAC)
                    ระบบเลือกช่องทางการส่งที่ตรงกับเครือข่ายของเบอร์ผู้รับ
                    รับประกันความเสถียร 24/7
                  </p>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='sms_feature'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                      <div className='sms_feature_item'>
                        <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                        <h3>2,000,00</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                      <div className='sms_feature_item'>
                        <p>ระยะเวลาการส่ง SMS โดยเฉลี่ย</p>
                        <h3>
                          2.9 <span>วินาที</span>
                        </h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                      <div className='sms_feature_item'>
                        <a href='#'>
                          <img src='img/play_icon.png' alt='Image' />
                          ทำไมเราถึงส่งไว?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='sms_form'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='sms_form_text'>
                        <h4>ทดลองส่ง SMS เข้ามือถือคุณได้ทันที</h4>
                        <p>เพียงกรอกเบอร์มือถือของคุณ และยืนยันตัวตนผ่าน OTP</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <div className='sms_form_field'>
                        <input type='text' placeholder='เบอร์มือถือของคุณ' />
                        <button className='btn v2' type='submit'>
                          ยืนยันเบอร์
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='promo_section'
          style={{ backgroundImage: 'url(img/bg_5.png)' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                <div className='promo_text'>
                  <h2>
                    ฟีเจอร์ครบ ตอบโจทย์ทั้ง <br />
                    Marketer และ Developer
                  </h2>
                  <p>ใช้ง่าย ไม่ว่าจะส่งผ่านเว็บหรือ API</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='promo_item'>
                  <div className='promo_title'>
                    <p>
                      ส่งผ่านเว็บเองง่าย ๆ <br />
                      ไม่ต้องรู้เรื่องเทคนิคก็ส่งได้
                    </p>
                  </div>
                  <div className='promo_img'>
                    <img src='img/promo_2.png' alt='Image' />
                    <a href='#' className='btn v2'>
                      ทดลองส่งฟรี
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='promo_item'>
                  <div className='promo_title'>
                    <p>
                      เขียนเชื่อม API ง่าย <br />
                      ต่อได้ทุกภาษา
                    </p>
                  </div>
                  <div className='promo_img'>
                    <img src='img/promo_1.png' alt='Image' />
                    <a href='#' className='btn v2'>
                      TBS Developer
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='promo_bottom_text'>
                  <p>
                    ยังไม่ค่อยเข้าใจว่าการส่ง SMS ผ่าน ThaiBulkSMS
                    ต่างจากการส่งผ่านมือถืออย่างไร{' '}
                    <span>ความรู้เบื้องต้นเกี่ยวกับ SMS</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='row align-items-center row_pad'>
              <div className='col-lg-6 col-md-12'>
                <div className='promo_item_three_img'>
                  <img src='img/plane.png' alt='Image' />
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='service_feature_text'>
                  <h3>ไม่เสียเครดิต ถ้าส่งไม่ถึงผู้รับ</h3>
                  <p>
                    ตรวจสอบได้ถึงมือถือปลายทาง ว่า SMS ส่งถึงมือถือผู้รับหรือไม่{' '}
                    <br />
                    หากส่งไม่ถึง เช่น ติด Anti-Spam, ปิดเครื่อง,
                    โทรศัพท์ข้อมูลเต็ม <br />
                    ฯลฯ ทางเราจะคืนเครดิตให้คุณ
                  </p>
                  <a className='link' href='#'>
                    Anti-Spam คืออะไร
                  </a>
                  <h6 className='promo_link'>
                    ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
                  </h6>
                </div>
              </div>
            </div>
            <div className='row align-items-center row_pad'>
              <div className='col-lg-5 col-md-12 col-12 order-lg-1 order-md-2 order-2'>
                <div className='service_feature_text'>
                  <h3>
                    วัดผลแคมเปญแม่นยำ <br />
                    ด้วย SMS Tracking
                  </h3>
                  <p>
                    ติดตามลูกค้าหรือกลุ่มเป้าหมายได้ทันทีหลังจาก ที่กดส่งข้อความ
                    พร้อมเช็กสถานะได้ว่าปลายทาง เปิดอ่านข้อความของเราแล้วหรือยัง
                  </p>
                  <a className='link' href='#'>
                    SMS Tracking ทำงานอย่างไร?
                  </a>
                  <h6 className='promo_link'>
                    ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
                  </h6>
                </div>
              </div>
              <div className='col-lg-7 col-md-12 col-12 order-lg-2 order-md-1 order-1'>
                <div className='row'>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_4.png' alt='Image' />
                      <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_5.png' alt='Image' />
                      <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_6.png' alt='Image' />
                      <p>รู้ว่าใครเปิด หรือไม่เปิดข้อความ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12'>
                <div className='promo_item_three_img'>
                  <img src='img/device.png' alt='Image' />
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='service_feature_text'>
                  <h3>
                    ระบบส่ง OTP แบบพร้อมใช้ <br />
                    ไม่ต้องเขียนโปรแกรมเพิ่ม
                  </h3>
                  <p>
                    ให้ Developer ทำงานง่ายและสะดวกขึ้น เพราะเพียงเซ็ตอัพ
                    เบื้องต้นไม่กี่คลิก ก็ได้โค้ดสำหรับนำไปใช้กับ API ได้ทันที
                  </p>
                  <a href='#' className='btn v2'>
                    ทดลองส่งฟรี
                  </a>
                  <a className='link' href='#'>
                    อ่านเพิ่มเติมเกี่ยวกับ OTP Ready-to-Use
                  </a>
                  <h6 className='promo_link'>
                    ฟีเจอร์นี้สำหรับ <span>แพ็กเกจ Corporate SMS</span> เท่านั้น
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='simple_section'
          style={{ backgroundImage: 'url(img/bg_4.png)' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='simple_title'>
                  ครบทุกฟีเจอร์พื้นฐาน ของการส่ง SMS
                </h2>
              </div>
              <div className='col-md-12'>
                <ul className='simple_feature_list'>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>ตรวจสอบผลการส่งได้ทันที</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>ตรวจสอบผลการส่งได้ทันที</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>ตั้งเวลาส่งได้หลากหลาย</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>มีรายงานการส่งแบบละเอียด</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>กำหนด Sender Name ได้</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>สถานะการส่งที่ระบุชัดเจน</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>ระบบ Block List</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>Phonebook</p>
                  </li>
                  <li>
                    <i className='far fa-check-circle'></i>
                    <p>มี Template ให้</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='pricing-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section_title'>แพ็กเกจและราคา</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <div className='pricing_box'>
                  <img src='img/price_1.png' alt='Image' />
                  <h3>Standard SMS</h3>
                  <p>ส่ง SMS ผ่านเว็บ ส่งง่ายกว่ามือถือ ดูรายงานการส่งได้</p>
                  <ul className='pricing_feature'>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>ราคาถูกกว่า</p>
                    </li>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>Key Benefit</p>
                    </li>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>Key Benefit</p>
                    </li>
                  </ul>
                  <div className='price_plan'>
                    <span>เริ่มต้นที่</span>
                    <h2>
                      0.35 <span>บาท / SMS</span>
                    </h2>
                    <a href='#' className='btn v3'>
                      ดูราคาแพ็กเกจ
                    </a>
                  </div>
                  <div className='price_bottom_text'>
                    <p>เหมาะกับใคร?</p>
                    <ul>
                      <li>ผู้ที่ใช้งาน Volume เยอะๆ</li>
                      <li>Suitable for</li>
                      <li>Suitable for</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='pricing_box'>
                  <img src='img/price_2.png' alt='Image' />
                  <h3>Corporate SMS</h3>
                  <p>ส่ง SMS ผ่านเว็บ ส่งง่ายกว่ามือถือ ดูรายงานการส่งได้</p>
                  <ul className='pricing_feature'>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>ส่ง OTP ได้</p>
                    </li>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>คืนเครดิตถ้าส่งไม่ถึงผู้รับ</p>
                    </li>
                    <li>
                      <i className='far fa-check-circle'></i>
                      <p>มีเครื่องมือวัดผลแคมเปญ</p>
                    </li>
                  </ul>
                  <div className='price_plan'>
                    <span>เริ่มต้นที่</span>
                    <h2>
                      0.45 <span>บาท / SMS</span>
                    </h2>
                    <a href='#' className='btn v3'>
                      ดูราคาแพ็กเกจ
                    </a>
                  </div>
                  <div className='price_bottom_text'>
                    <p>เริ่มต้นที่</p>
                    <ul>
                      <li>ผู้ที่ต้องการส่ง OTP</li>
                      <li>ทีม Marketing ที่ต้องการวัดผลแคมเปญ</li>
                      <li>Suitable for</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='pricing_bottom_text'>
                  <span>ตารางเปรียบเทียบแพ็กเกจแบบละเอียด </span>
                  <h3>
                    ยังไม่แน่ใจว่าจะเลือกแพ็กเกจไหน เราให้คุณทดลองส่งก่อนได้
                  </h3>
                  <a href='#' className='btn v3'>
                    ทดลองส่งฟรี
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='slider_section'
          style={{ backgroundImage: 'url(img/bg_2.png)' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='section_title'>นำ SMS ไปใช้งานได้หลากหลาย</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <OwlCarousel
                  items={4}
                  nav
                  dots={false}
                  //   autoplay
                  autoplayTimeout={5500}
                  loop
                  navText={[
                    '<i class="ion-ios-arrow-back"></i>',
                    '<i class="ion-ios-arrow-forward"></i>',
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
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>ส่ง OTP ยืนยันตัวตน</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>โปรโมตกิจกรรม การตลาด</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>แจ้งสถานะการขนส่ง</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>แจ้งเตือนวัน หมดอายุ</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                </OwlCarousel>
                {/* <div className='owl-carousel2 slider_wrap'>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>ส่ง OTP ยืนยันตัวตน</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>โปรโมตกิจกรรม การตลาด</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>แจ้งสถานะการขนส่ง</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='slider_item'>
                      <h3>แจ้งเตือนวัน หมดอายุ</h3>
                      <p>
                        รหัสผ่านแบบใช้ครั้งเดียว เพื่อ
                        เพิ่มความปลอดภัยให้กับการทำ ธุรกรรมทางอินเทอร์เน็ต
                      </p>
                      <a href='#'>การส่ง OTP ต่างจาก SMS ปกติอย่างไร? </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className='faq_section'
          style={{ backgroundImage: 'url(img/bg_3.png)' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='section_title'>คำถามที่พบบ่อย</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-6 col-lg-12'>
                <div
                  className='accordion md-accordion'
                  id='accordionEx'
                  role='tablist'
                  aria-multiselectable='true'
                >
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingOne1'>
                      <a
                        data-toggle='collapse'
                        data-parent='#accordionEx'
                        href='#collapseOne1'
                        aria-expanded='false'
                        aria-controls='collapseOne1'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapseOne1'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='headingOne1'
                      data-parent='#accordionEx'
                    >
                      <div className='card-body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est in obcaecati nulla amet distinctio sapiente,
                          itaque porro, neque at laudantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingTwo2'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx'
                        href='#collapseTwo2'
                        aria-expanded='false'
                        aria-controls='collapseTwo2'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          ความยาวของข้อความในการส่ง SMS พิมพ์ได้เยอะ ขนาดไหน?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapseTwo2'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='headingTwo2'
                      data-parent='#accordionEx'
                    >
                      <div className='card-body'>
                        <p>
                          {' '}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel maiores quidem animi, rem maxime autem
                          quaerat, facilis porro doloremque aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingThree3'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx'
                        href='#collapseThree3'
                        aria-expanded='false'
                        aria-controls='collapseThree3'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapseThree3'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='headingThree3'
                      data-parent='#accordionEx'
                    >
                      <div className='card-body'>
                        <p>
                          {' '}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Harum sed aliquam odit aperiam deleniti quae,
                          rerum dolore voluptate rem aspernatur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingFour'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx'
                        href='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapseFour'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='headingFour'
                      data-parent='#accordionEx'
                    >
                      <div className='card-body'>
                        <p>
                          {' '}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Facere voluptates cum saepe atque fugiat vero
                          commodi eos, neque excepturi deleniti beatae.
                          Laboriosam quam quisquam, similique ipsam eos fugit
                          minima molestias.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-12'>
                <div
                  className='accordion md-accordion'
                  id='accordionEx2'
                  role='tablist'
                  aria-multiselectable='true'
                >
                  <div className='card'>
                    <div className='card-header' role='tab' id='headingFive'>
                      <a
                        data-toggle='collapse'
                        data-parent='#accordionEx2'
                        href='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapseFive'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='headingFive'
                      data-parent='#accordionEx2'
                    >
                      <div className='card-body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolor eveniet ex officia, assumenda ratione
                          repellendus fuga molestiae sequi delectus ut.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='heading6'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx2'
                        href='#collapse6'
                        aria-expanded='false'
                        aria-controls='collapse6'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapse6'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='heading6'
                      data-parent='#accordionEx2'
                    >
                      <div className='card-body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fugit nam minima illo corporis sed? Laboriosam
                          aperiam odit voluptatem, magnam fugiat?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='heading7'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx2'
                        href='#collapse7'
                        aria-expanded='false'
                        aria-controls='collapse7'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapse7'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='heading7'
                      data-parent='#accordionEx2'
                    >
                      <div className='card-body'>
                        <p>
                          {' '}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fugit nam minima illo corporis sed? Laboriosam
                          aperiam odit voluptatem, magnam fugiat?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-header' role='tab' id='heading8'>
                      <a
                        className='collapsed'
                        data-toggle='collapse'
                        data-parent='#accordionEx2'
                        href='#collapse8'
                        aria-expanded='false'
                        aria-controls='collapse8'
                      >
                        <span className='close ion-ios-arrow-down'></span>
                        <span className='open ion-ios-arrow-up'></span>
                        <h5 className='mb-0 faq_header'>
                          Standard SMS และ Corporate SMS แตกต่างกัน อย่างไร?
                        </h5>
                      </a>
                    </div>
                    <div
                      id='collapse8'
                      className='collapse'
                      role='tabpanel'
                      aria-labelledby='heading8'
                      data-parent='#accordionEx2'
                    >
                      <div className='card-body'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fugit nam minima illo corporis sed? Laboriosam
                          aperiam odit voluptatem, magnam fugiat?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row align-items-center mt-80'>
              <div className='col-xl-5 col-lg-12'>
                <div className='faq_bottom_text'>
                  <h3>ยังคงมีข้อสงสัย?</h3>
                  <p>เลือกช่องทางติดต่อที่คุณสะดวก</p>
                </div>
              </div>
              <div className='col-xl-7 col-12-7'>
                <div className='row'>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_1.png' alt='Image' />
                      <a href='#' className='btn v4'>
                        ติดต่อเจ้าหน้าที่
                      </a>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_2.png' alt='Image' />
                      <a href='#' className='btn v4'>
                        เจ้าหน้าที่ติดต่อกลับ
                      </a>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='service_feature_item'>
                      <img src='img/img_3.png' alt='Image' />
                      <a href='#' className='btn v4'>
                        Facebook Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-6'>
                <div className='footer_widget'>
                  <h4>Product</h4>
                  <ul>
                    <li>
                      <a href='#'>Features</a>
                    </li>
                    <li>
                      <a href='#'>Package Compare</a>
                    </li>
                    <li>
                      <a href='#'>Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='footer_widget'>
                  <h4>Blog</h4>
                  <ul>
                    <li>
                      <a href='#'>Knowledge</a>
                    </li>
                    <li>
                      <a href='#'>Use Cases</a>
                    </li>
                    <li>
                      <a href='#'>Success Stories</a>
                    </li>
                    <li>
                      <a href='#'>Intro to SMS</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='footer_widget'>
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href='#'>How to order</a>
                    </li>
                    <li>
                      <a href='#'>FAQ</a>
                    </li>
                    <li>
                      <a href='#'>Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='footer_widget'>
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href='#'>Why ThaibulkSMS</a>
                    </li>
                    <li>
                      <a href='#'>Reseller Program</a>
                    </li>
                  </ul>
                  <p className='xs-none'>
                    Follow us{' '}
                    <a href='#'>
                      <img src='img/fb.png' alt='Image' />
                    </a>{' '}
                  </p>
                </div>
              </div>
              <div className='col-12 md-none'>
                <div className='footer_widget'>
                  <p>
                    {' '}
                    <a href='#'>
                      <img src='img/fb.png' alt='Image' />
                    </a>{' '}
                    Follow us{' '}
                  </p>
                </div>
                <div className='footer_contact'>
                  <a href='tel:027986000'>
                    <img src='img/phone.png' alt='Image' />
                    02-798-6000
                  </a>
                  <a href='mailto:contact@thaibulksms.com'>
                    <img src='img/mail.png' alt='' />
                    contact@thaibulksms.com
                  </a>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='footer_bottom'>
                  <div className='row align-items-end'>
                    <div className='col-xl-6 col-lg-5 col-md-5'>
                      <div className='footer_logo'>
                        <a href='#'>
                          <img src='img/logo_2.png' alt='Image' />
                        </a>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-7 col-md-7 xs-none'>
                      <div className='footer_contact'>
                        <a href='tel:027986000'>
                          <img src='img/phone.png' alt='Image' />
                          02-798-6000
                        </a>
                        <a href='mailto:contact@thaibulksms.com'>
                          <img src='img/mail.png' alt='' />
                          contact@thaibulksms.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='footer_copyright'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-12 col-md-12'>
                      <ul className='footer_menu'>
                        <li>
                          <a href='#'>Terms and Conditions</a>
                        </li>
                        <li>
                          <a href='#'>Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-xl-6 col-lg-12 col-md-12'>
                      <p className='copyright'>
                        Copyright © 2020 ThaiBulkSMS.com All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='#' className='back-to-top'>
        <i className='fa fa-angle-up'></i>
      </a>
    </div>
  );
}
