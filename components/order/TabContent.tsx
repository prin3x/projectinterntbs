import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const TabContent = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div
      className="tab__content faq_section"
      style={{ backgroundImage: 'url(/img/bg_3.png)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">1</span>
                        <img src="/img/o1.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h1')}</h4>
                        <p>
                          {t('p1')}
                          <a href="#" className="theme__text link mt-0">
                            {t('a1')}
                          </a>
                          <br /> {t('p2-1')}
                          <br />
                          {t('p2-2')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">2</span>
                        <img src="/img/o2.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h2')}</h4>
                        <p>
                          {t('p3-1')}
                          <br />
                          {t('p3-2')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">3</span>
                        <img src="/img/o3.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h3')}</h4>
                        <p>
                          {t('p4-1')}
                          <br />
                          {t('p4-2')} <br />
                          <a href="#" className="theme__text link mt-0">
                            {t('a2')}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">4</span>
                        <img src="/img/o4.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h4')}</h4>
                        <p>
                          {t('p5-1')}
                          <br />
                          {t('p5-2')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">5</span>
                        <img src="/img/o5.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h5')}</h4>
                        <p>
                          {t('p6-1')}
                          <br />
                          {t('p6-2')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-start icon__box__wrapper">
                      <div className="icon__box">
                        <span className="serial__number">6</span>
                        <img src="/img/o6.png" className="img-fluid" alt="" />
                      </div>
                      <div className="serial__content">
                        <h4>{t('h6')}</h4>
                        <p>
                          {t('p7-1')}
                          <br />
                          {t('p7-2')}
                          <br />
                          {t('p7-3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade second__tab"
                id="pills-profile"
                role="tabpanel"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="box__wrapper">
                      <div className="box__header">
                        <h5>{t('h7')}</h5>
                      </div>
                      <div className="box__body">
                        <div className="box__content border-0">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img src="/img/icon_13.png" alt="" />
                                </div>
                                <h5>
                                  {t('h8-1')}
                                  <br /> {t('h8-2')}
                                </h5>
                                <p>
                                  {t('p8-1')} <br />
                                  {t('p8-2')}
                                </p>

                                <a
                                  href="#"
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup1"
                                >
                                  {t('a3')}
                                </a>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img src="/img/icon_24.png" alt="" />
                                </div>
                                <h5>{t('h9')}</h5>
                                <p>
                                  {t('p9-1')} <br />
                                  {t('p9-2')}
                                </p>

                                <a
                                  href="#"
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup1"
                                >
                                  {t('a4')}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box__wrapper">
                      <div className="box__header">
                        <h5>{t('h10')}</h5>
                      </div>
                      <div className="box__body">
                        <div className="box__content border-0">
                          <div className="row">
                            <div className="col-12">
                              <div className="info__box flex-column text-center border-0 new__info__box">
                                <div className="info__icon mr-0">
                                  <img src="/img/icon_25.png" alt="" />
                                </div>
                                <h5 className="mt-4">{t('h11')}</h5>
                                <p>
                                  {t('p10-1')}
                                  <br />
                                  {t('p10-2')}
                                </p>

                                <a
                                  href="#"
                                  className="theme__text link"
                                  data-toggle="modal"
                                  data-target="#popup2"
                                >
                                  {t('a5')}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center link__box">
          <div className="col-xl-5 col-lg-12">
            <div className="faq_bottom_text">
              <h3>{t('h12')}</h3>
              <p>{t('p11')}</p>
            </div>
          </div>
          <div className="col-xl-7 col-12-7">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img src="/img/img_1.png" alt="Image" />
                  <a href="#" className="btn v4">
                    {t('a6')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img src="/img/img_2.png" alt="Image" />
                  <a href="#" className="btn v4">
                    {t('a7')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img src="/img/img_3.png" alt="Image" />
                  <a href="#" className="btn v4">
                    {t('a8')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TabContent.getInitialProps = async () => ({
  namespacesRequired: ['OrderTabContent'],
});

TabContent.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OrderTabContent')(TabContent);
