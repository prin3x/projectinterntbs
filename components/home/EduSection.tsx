import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
const EduSection = ({ t }: any) => (
  <div className="edu_section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-4">
              <div className="edu_box">
                <img
                  className="lazyload"
                  data-src="/img/img_7.png"
                  alt="Image"
                />
                <div className="edu_box_text">
                  <p>{t('p1')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="edu_box">
                    <img
                      className="lazyload"
                      data-src="/img/img_8.png"
                      alt="Image"
                    />
                    <div className="edu_box_text">
                      <p>{t('p2')}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="edu_box">
                    <img
                      className="lazyload"
                      data-src="/img/img_9.png"
                      alt="Image"
                    />
                    <div className="edu_box_text">
                      <p>{t('p3')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="edu_text">
            <h3>{t('h1')}</h3>
            <Link href="/SuccessStoriesListing">
              <a href="#">{t('a1')}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
EduSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeEduSection'],
});

EduSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeEduSection')(EduSection);
