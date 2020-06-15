const Footer = () => (
  <div className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Package Compare</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>Blog</h4>
            <ul>
              <li>
                <a href="#">Knowledge</a>
              </li>
              <li>
                <a href="#">Use Cases</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Intro to SMS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">How to order</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Developer</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Why ThaibulkSMS</a>
              </li>
              <li>
                <a href="#">Reseller Program</a>
              </li>
            </ul>
            <p className="xs-none">
              Follow us{' '}
              <a href="#">
                <img className="lazyload" data-src="/img/fb.png" alt="Image" />
              </a>{' '}
            </p>
          </div>
        </div>
        <div className="col-12 md-none">
          <div className="footer_widget">
            <p>
              {' '}
              <a href="#">
                <img className="lazyload" data-src="/img/fb.png" alt="Image" />
              </a>{' '}
              Follow us{' '}
            </p>
          </div>
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
export default Footer;
