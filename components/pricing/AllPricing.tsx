import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const AllPricing = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div
      className="all__pricing accordion"
      id="accordion"
      style={{ backgroundImage: 'url(/img/pricing_bg.png)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="left__box left__box__top">
                  <p>{t('p1')}</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <div className="top__bar">
                      <div className="row">
                        <div className="col-6 text-center">
                          <p>{t('p2')}</p>
                        </div>
                        <div className="col-6 text-center">
                          <p>{t('p3')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row no-gutters single__pricing m-0"
              data-toggle="collapse"
              data-target=".collapse1"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>1,000</h3>
                  <span>
                    {t('span1')} 2 {t('year')}
                  </span>
                </div>
              </div>
              <div className="col-md-8 box">
                <div className="row">
                  <div className="col-12">
                    <div className="pricing__content">
                      <img
                        src="/img/shape_triangle.png"
                        className="shape__box"
                        alt=""
                      />
                      <div className="row">
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">{t('h1')}</h4>

                          <h3>
                            0.60{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse1"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.85{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse1"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
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

            <div
              className="row no-gutters single__pricing"
              data-toggle="collapse"
              data-target=".collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>3,500</h3>
                  <span>
                    {t('span1')} 2 {t('year')}
                  </span>
                </div>
              </div>
              <div className="col-md-8 box">
                <div className="row">
                  <div className="col-12">
                    <div className="pricing__content">
                      <img
                        src="/img/shape_triangle.png"
                        className="shape__box"
                        alt=""
                      />
                      <div className="row">
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.45{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse2"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.60{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse2"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
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

            <div
              className="row no-gutters single__pricing"
              data-toggle="collapse"
              data-target=".collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>10,000</h3>
                  <span>
                    {t('span1')} 2 {t('year')}
                  </span>
                </div>
              </div>
              <div className="col-md-8 box">
                <div className="row">
                  <div className="col-12">
                    <div className="pricing__content">
                      <img
                        src="/img/shape_triangle.png"
                        className="shape__box"
                        alt=""
                      />
                      <div className="row">
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.40{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse3"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.55{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse3"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
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

            <div
              className="row no-gutters single__pricing active"
              data-toggle="collapse"
              data-target=".collapse4"
              aria-expanded="true"
              aria-controls="collapse4"
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>30,000</h3>
                  <span>
                    {t('span1')} 2 {t('year')}
                  </span>
                </div>
              </div>
              <div className="col-md-8 box">
                <div className="row">
                  <div className="col-12">
                    <div className="pricing__content">
                      <img
                        src="/img/shape_triangle.png"
                        className="shape__box"
                        alt=""
                      />
                      <div className="row">
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.40{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse4 show"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.55{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse4 show"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
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

            <div
              className="row no-gutters single__pricing"
              data-toggle="collapse"
              data-target=".collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>120,000</h3>
                  <span>
                    {t('span1')} 2 {t('year')}
                  </span>
                </div>
              </div>
              <div className="col-md-8 box">
                <div className="row">
                  <div className="col-12">
                    <div className="pricing__content">
                      <img
                        src="/img/shape_triangle.png"
                        className="shape__box"
                        alt=""
                      />
                      <div className="row">
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.40{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse5"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.55{' '}
                            <span>
                              {t('bath')}/{t('message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse5"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('span2')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <a href="#" className="btn v8">
                                {t('a1')}
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

          <div className="col-12 text-center pricing__bottom__content">
            <p>{t('p4')}</p>

            <div className="pricing__bottom d-flex align-items-center justify-content-center">
              <h5 className="mr-5">{t('h2')}</h5>
              <a href="#" className="btn v3">
                {t('a2')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AllPricing.getInitialProps = async () => ({
  namespacesRequired: ['PricingAllPricing'],
});

AllPricing.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PricingAllPricing')(AllPricing);
