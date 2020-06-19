import { withTranslation, Link } from '../i18n';
import PropTypes from 'prop-types';
const Footer = ({ t }: any) => (
  <div className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>{t('menu-1')}</h4>
            <ul>
              <li>
                <Link href="/product">
                  <a href="#">{t('menu-1-1')}</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a href="#">{t('menu-1-2')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>{t('menu-2')}</h4>
            <ul>
              <li>
                <Link href="/KnowledgeListing">
                  <a href="#">{t('menu-2-1')}</a>
                </Link>
              </li>
              <li>
                <Link href="/UseCasesListing">
                  <a href="#">{t('menu-2-2')}</a>
                </Link>
              </li>
              <li>
                <Link href="/SuccessStoriesListing">
                  <a href="#">{t('menu-2-3')}</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a href="#">{t('menu-2-4')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>{t('menu-3')}</h4>
            <ul>
              <li>
                <Link href="/how-to-order">
                  <a href="#">{t('menu-3-1')}</a>
                </Link>
              </li>
              <li>
                <Link href="/Documentation">
                  <a href="#">{t('menu-3-2')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <Link href="/fb">
              <a href="#">
                <h4>
                  {t('menu-4')}
                  <img
                    className="lazyload"
                    style={{ maxWidth: '25px', marginLeft: '20px' }}
                    data-src="/img/fb.png"
                    alt="Image"
                  />
                </h4>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 md-none">
          <div className="footer_contact">
            <a href="tel:027986000">
              <img className="lazyload" data-src="/img/phone.png" alt="Image" />
              02-798-6000
            </a>
            <a href="mailto:contact@thaibulksms.com">
              <img className="lazyload" data-src="/img/mail.png" alt="" />
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
                  <a href="#">
                    <img
                      className="lazyload"
                      data-src="/img/logo_2.png"
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
                      data-src="/img/phone.png"
                      alt="Image"
                    />
                    02-798-6000
                  </a>
                  <a href="mailto:contact@thaibulksms.com">
                    <img className="lazyload" data-src="/img/mail.png" alt="" />
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
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
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
Footer.getInitialProps = async () => ({
  namespacesRequired: ['Footer'],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Footer')(Footer);
