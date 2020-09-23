import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
const EduSection = ({ t }: any) => (
  <div className="edu_section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 col-md-push-6">
          <div className="edu_text">
            <h3>{t('homeedu.header')}</h3>
            <a href="http://www.thaibulksms.com/blog/">{t('homeedu.link')}</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-md-pull-6">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
              <div className="edu_box">
                <a href="https://bit.ly/3hEL9ac" target="_blank">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_7.png`}
                    alt="Image"
                  />
                  <div className="edu_box_text">
                    <p>{t('homeedu.content1')}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                  <div className="edu_box">
                    <a href="https://bit.ly/2RDqTuQ" target="_blank">
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_8.png`}
                        alt="Image"
                      />
                      <div className="edu_box_text">
                        <p>{t('homeedu.content2')}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                  <div className="edu_box">
                    <a href="https://bit.ly/32L9VRT" target="_blank">
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_9.png`}
                        alt="Image"
                      />
                      <div className="edu_box_text">
                        <p>{t('homeedu.content3')}</p>
                      </div>
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
);
EduSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeEduSection'],
});

EduSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeEduSection')(EduSection);
