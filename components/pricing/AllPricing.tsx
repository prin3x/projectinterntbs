import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';

const AllPricing = ({ t }: any) => {
  const [dataToggle, setIsLogin] = useState([] as any);
  React.useEffect(() => {
    if (screen.width > 767) {
      setIsLogin([
        {
          'data-toggle': 'collapse',
          'data-target': '.collapse1',
          'aria-expanded': 'false',
          'aria-controls': 'collapse1',
        },
        {
          'data-toggle': 'collapse',
          'data-target': '.collapse2',
          'aria-expanded': 'false',
          'aria-controls': 'collapse2',
        },
        {
          'data-toggle': 'collapse',
          'data-target': '.collapse3',
          'aria-expanded': 'false',
          'aria-controls': 'collapse3',
        },
        {
          'data-toggle': 'collapse',
          'data-target': '.collapse4',
          'aria-expanded': 'false',
          'aria-controls': 'collapse4',
        },
        {
          'data-toggle': 'collapse',
          'data-target': '.collapse5',
          'aria-expanded': 'false',
          'aria-controls': 'collapse5',
        },
      ]);
    }
  }, [dataToggle]);
  return (
    <div
      className="all__pricing accordion lazyload"
      id="accordion"
      // style={{ backgroundImage: 'url(/img/pricing_bg.png)' }}
      data-bgset="/img/pricing_bg.png"
    >
      <div className="container priceTable">
        <div className="row">
          <div className="col-12">
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="left__box left__box__top">
                  <p>{t('pricingallpricing.column1')}</p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <div className="top__bar">
                      <div className="row">
                        <div className="col-6 text-center">
                          <p>{t('pricingallpricing.column2')}</p>
                        </div>
                        <div className="col-6 text-center">
                          <p>{t('pricingallpricing.column3')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row no-gutters single__pricing m-0"
              // data-toggle="collapse"
              // data-target=".collapse1"
              // aria-expanded="false"
              // aria-controls="collapse1"
              {...dataToggle[0]}
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>1,000</h3>
                  <span>
                    {t('pricingallpricing.life')} 6{' '}
                    {t('pricingallpricing.month')}
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
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.60{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse1"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">2,500</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">-</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.85{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse1"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">1,765</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">-</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
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
              // data-toggle="collapse"
              // data-target=".collapse2"
              // aria-expanded="false"
              // aria-controls="collapse2"
              {...dataToggle[1]}
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>3,500</h3>
                  <span>
                    {t('pricingallpricing.life')} 12{' '}
                    {t('pricingallpricing.month')}
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
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.45{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse2"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">7,778</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">1</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.60{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse2"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">5,833</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">1</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
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
              // data-toggle="collapse"
              // data-target=".collapse3"
              // aria-expanded="false"
              // aria-controls="collapse3"
              {...dataToggle[2]}
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>10,000</h3>
                  <span>
                    {t('pricingallpricing.life')} 12{' '}
                    {t('pricingallpricing.month')}
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
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.40{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse3"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">25,000</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">2</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.52{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse3"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">19,231</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">2</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
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
              // data-toggle="collapse"
              // data-target=".collapse4"
              // aria-expanded="true"
              // aria-controls="collapse4"
              {...dataToggle[3]}
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>30,000</h3>
                  <span>
                    {t('pricingallpricing.life')} 18{' '}
                    {t('pricingallpricing.month')}
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
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.35{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse4 show"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">85,714</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.42{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse4 show"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">71,429</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">5</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
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
              // data-toggle="collapse"
              // data-target=".collapse5"
              // aria-expanded="false"
              // aria-controls="collapse5"
              {...dataToggle[4]}
            >
              <div className="col-md-4 box">
                <div className="left__box">
                  <h3>120,000</h3>
                  <span>
                    {t('pricingallpricing.life')} 18{' '}
                    {t('pricingallpricing.month')}
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
                          <h4 className="d-md-none">Standard</h4>

                          <h3>
                            0.28{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse5"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">428,571</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">10</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 text-center">
                          <h4 className="d-md-none">Corporate</h4>

                          <h3>
                            0.34{' '}
                            <span>
                              {t('pricingallpricing.bath')}/
                              {t('pricingallpricing.message')}
                            </span>
                          </h3>

                          <div
                            className="expand collapse collapse5"
                            data-parent="#accordion"
                          >
                            <div className="sender__box1">
                              <span>{t('pricingallpricing.quantity')}</span>
                              <span className="theme__text">352,941</span>
                            </div>
                            <div className="sender__box1">
                              <span>Sender Name</span>
                              <span className="theme__text">10</span>
                            </div>

                            <div className="text-center">
                              <Link href="/log-in">
                                <a href="#" className="btn v8">
                                  {t('pricingallpricing.buyBtn')}
                                </a>
                              </Link>
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
            <p
              dangerouslySetInnerHTML={{
                __html: t('pricingallpricing.footertitle'),
              }}
            />

            <div className="pricing__bottom d-flex align-items-center justify-content-center">
              <h5 className="mr-5">{t('pricingallpricing.footheader')}</h5>
              <a href="#" className="btn v3">
                {t('pricingallpricing.sellBtn')}
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
export default withTranslation('PricingAllPricing')(React.memo(AllPricing));
