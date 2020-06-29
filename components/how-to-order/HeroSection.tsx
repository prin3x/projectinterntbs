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
            <h3 className="section__title">{t('howtoorderhero.header')}</h3>

            <ul
              className="nav nav-pills tab__toggle"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <img className="lazyload" data-src="/img/main_3.png" alt="" />
                  <span>{t('howtoorderhero.howtoorderBtn')}</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <img className="lazyload" data-src="/img/dollar.png" alt="" />
                  <span>{t('howtoorderhero.paymentBtn')}</span>
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
  namespacesRequired: ['How-to-orderHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('How-to-orderHeroSection')(HeroSection);
