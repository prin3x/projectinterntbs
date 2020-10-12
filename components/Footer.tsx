import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link, withTranslation } from '../i18n';
const Footer = ({ t }: any) => {
  useEffect(() => { }, []);
  return (
    <div className="footer_section">
      <div className="container" id="footer">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>{t('footer.service')}</h4>
              <ul>
                <li>
                  <Link href="/product">
                    <a>{t('footer.highlight')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a>{t('footer.pricing')}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>{t('footer.database')}</h4>
            <ul>
              <li>
                <Link href="/KnowledgeListing">
                  <a>{t('footer.knowledge')}</a>
                </Link>
              </li>
              <li>
                <Link href="/UseCasesListing">
                  <a>{t('footer.example')}</a>
                </Link>
              </li>
              <li>
                <Link href="/SuccessStoriesListing">
                  <a>{t('footer.successstories')}</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>{t('footer.smsbasic')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>{t('footer.support')}</h4>
              <ul>
                <li>
                  <Link href="/support/how-to-order">
                    <a>{t('footer.howtoorder')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">คำถามที่พบบ่อย</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                    className="active closemenu"
                  >
                    {t('footer.documentation')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer_widget">
              <h4>เกี่ยวกับบริษัท</h4>
              <ul>
                <li>
                  <Link href="/why-thaibulksms">ทำไมต้อง ThaibulkSMS</Link>
                </li>
              </ul>
            </div>
            <br />
            <div className="footer_widget">

              <h4>
                {t('footer.about')}
                <a href="https://www.facebook.com/ThaiBulkSMS" target="_blank">
                  <img
                    className="lazyload"
                    style={{ maxWidth: '25px', marginLeft: '20px' }}
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                    alt="Image"
                  />
                </a>
              </h4>

            </div>
          </div>
          <div className="col-12 md-none">
            <div className="footer_contact">
              <a href="tel:027986000">
                <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                  alt="Image"
                />
                02-798-6000
              </a>
              <a href="mailto:contact@thaibulksms.com">
                <img
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                  alt=""
                />{' '}
                contact@thaibulksms.com
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer_bottom">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-5 col-md-5">
                  <div className="footer_logo">
                    <a>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_2.png`}
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-7 xs-none">
                  <div className="footer_contact">
                    <a href="tel:027986000">
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                        alt="Image"
                      />
                      02-798-6000
                    </a>
                    <a href="mailto:contact@thaibulksms.com">
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                        alt=""
                      />
                      contact@thaibulksms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer_copyright">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <ul className="footer_menu">
                    <li>
                      <Link href="/condition">
                        <a>Terms and Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/condition">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <p className="copyright">
                    Copyright © 2020 ThaiBulkSMS.com All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Footer.getInitialProps = async () => ({
  namespacesRequired: ['Footer'],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Footer')(React.memo(Footer));
