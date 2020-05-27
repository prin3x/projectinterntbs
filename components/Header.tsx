import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
const Header = () => (
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
              <div className="nice-select user_select">
                <span className="current">Th</span>
                <ul className="list">
                  <li
                    data-value="Th"
                    className="option selected focus"
                    onClick={() => i18n.changeLanguage('th')}
                  >
                    Th
                  </li>
                  <li
                    data-value="En"
                    className="option"
                    onClick={() => i18n.changeLanguage('en')}
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
          <a className="navbar-brand p-0 m-0" href="#">
            <img src="/img/logo_1.png" alt="Logo" />
          </a>
        </div>
        <div className="col-lg-6 col-md-6 col-3 text-right">
          <div className="site-navbar">
            <nav className="site-navigation text-center">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li>
                  <Link href="/product">
                    <a className="active" href="#">
                      บริการ
                    </a>
                  </Link>
                </li>
                <li>
                  <a className="active" href="#">
                    ราคา
                  </a>
                </li>
                <li className="has-children">
                  <a className="active" href="#">
                    คลังข้อมูล
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">
                        <h6>EnterPrise</h6>
                        <p>Reach every customer, anywhere</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Marketing</h6>
                        <p>Extend and amplify your marketing campaigns</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Operations</h6>
                        <p>
                          Streamline workforce operations and customer
                          fulfillment
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Customer Service</h6>
                        <p>
                          Deliver personalized customer experiences at scale
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Healthcare</h6>
                        <p>Improve patient engagement with modern telehealth</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a className="active" href="#">
                    ซัพพอร์ต
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">
                        <h6>EnterPrise</h6>
                        <p>Reach every customer, anywhere</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Marketing</h6>
                        <p>Extend and amplify your marketing campaigns</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Operations</h6>
                        <p>
                          Streamline workforce operations and customer
                          fulfillment
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Customer Service</h6>
                        <p>
                          Deliver personalized customer experiences at scale
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h6>Healthcare</h6>
                        <p>Improve patient engagement with modern telehealth</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="active" href="#">
                    ติดต่อเรา
                  </a>
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
                    <a className="active" href="#">
                      บริการ
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      ราคา
                    </a>
                  </li>
                  <li className="has-children">
                    <span
                      className="arrow-collapse collapsed"
                      data-toggle="collapse"
                      data-target="#collapseItem0"
                    ></span>
                    <a className="active" href="#">
                      คลังข้อมูล
                    </a>
                    <ul className="collapse" id="collapseItem0">
                      <li>
                        <a href="#">
                          <h6>EnterPrise</h6>
                          <p>Reach every customer, anywhere</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Marketing</h6>
                          <p>Extend and amplify your marketing campaigns</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Operations</h6>
                          <p>
                            Streamline workforce operations and customer
                            fulfillment
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Customer Service</h6>
                          <p>
                            Deliver personalized customer experiences at scale
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Healthcare</h6>
                          <p>
                            Improve patient engagement with modern telehealth
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span
                      className="arrow-collapse collapsed"
                      data-toggle="collapse"
                      data-target="#collapseItem1"
                    ></span>
                    <a className="active" href="#">
                      ซัพพอร์ต
                    </a>
                    <ul className="collapse" id="collapseItem1">
                      <li>
                        <a href="#">
                          <h6>EnterPrise</h6>
                          <p>Reach every customer, anywhere</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Marketing</h6>
                          <p>Extend and amplify your marketing campaigns</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Operations</h6>
                          <p>
                            Streamline workforce operations and customer
                            fulfillment
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Customer Service</h6>
                          <p>
                            Deliver personalized customer experiences at scale
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Healthcare</h6>
                          <p>
                            Improve patient engagement with modern telehealth
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="active" href="#">
                      ติดต่อเรา
                    </a>
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
                <a href="#">ล็อกอิน</a>
              </li>
              <li>
                <a className="btn v1" href="#">
                  ซื้อเลย
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
Header.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Header);
