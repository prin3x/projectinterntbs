import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('h1')}</h3>
          </div>
        </div>
      </div>
      <div className="row feature_checklist_wrap">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img src="/img/check_icon.png" alt="Image" />
            </div>
            <div className="check_text">
              <p>{t('p1')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img src="/img/check_icon.png" alt="Image" />
            </div>
            <div className="check_text">
              <p>{t('p1')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img src="/img/check_icon.png" alt="Image" />
            </div>
            <div className="check_text">
              <p>{t('p1')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img src="/img/check_icon.png" alt="Image" />
            </div>
            <div className="check_text">
              <p>{t('p1')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('h1')}</h3>
          </div>
        </div>
      </div>
      <div className="row single_lang_wrap">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_5.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_6.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_7.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_8.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_9.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_10.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_11.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="single_lang">
                <img src="/img/icon_12.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a href="#" className="lang_link">
            {t('a1')}
            <img src="/img/arrow_5.png" alt="Image" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpSimpleIconSection'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSimpleIconSection')(SimpleIconSection);
