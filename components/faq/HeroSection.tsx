import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const HeroSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div className="hero_section hero_section_2">
      <div className="container">
        <div className="row justify-content-center hero_top_one">
          <div className="col-12 text-center">
            <h3 className="section__title">
              {t('HeroSection::Hello, would you like some help?')}
            </h3>

            <ul
              className="nav nav-pills tab__toggle"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-sms-tab"
                  data-toggle="pill"
                  href="#pills-sms"
                  role="tab"
                  aria-controls="pills-sms"
                  aria-selected="true"
                >
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-question.png`}
                    alt=""
                  />
                  <span>{t('HeroSection::General questions')}</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-shopping-tab"
                  data-toggle="pill"
                  href="#pills-shopping"
                  role="tab"
                  aria-controls="pills-shopping"
                  aria-selected="false"
                >
                  <img className="lazyload" data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-shopping.png`} alt="" />
                  <span>{t('HeroSection::Purchasing and payment')}</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-api-tab"
                  data-toggle="pill"
                  href="#pills-api"
                  role="tab"
                  aria-controls="pills-api"
                  aria-selected="false"
                >
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-dev.png`}
                    alt=""
                  />
                  <span>{t('HeroSection::Technical problems')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['FAQ'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('FAQ')(HeroSection);
