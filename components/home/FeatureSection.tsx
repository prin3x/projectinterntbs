import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const FeatureSection = ({ t }: any) => (
  <div className="feature_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3
            className="section_title"
            dangerouslySetInnerHTML={{ __html: t('homefeature.header') }}
          ></h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_1.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>{t('homefeature.feature.1.title')}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('homefeature.feature.1.desc'),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_2.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>{t('homefeature.feature.2.title')}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('homefeature.feature.2.desc'),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_3.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>{t('homefeature.feature.3.title')}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('homefeature.feature.3.desc'),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 whyTBS">
          <div className="single_feature_item">
            <img
              className="lazyload size-img"
              data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_4.png`}
              alt="Image"
            />
            <div className="single_feature_text">
              <h4>{t('homefeature.feature.4.title')}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('homefeature.feature.4.desc'),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
FeatureSection.getInitialProps = async () => ({
  namespacesRequired: ['HomeFeatureSection'],
});

FeatureSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeFeatureSection')(FeatureSection);
