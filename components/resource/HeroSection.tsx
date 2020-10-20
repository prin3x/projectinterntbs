import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';


const ContentSection = ({  }: any) => (
    <div 
    className="hero_section v3 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-resource.jpg`}
    >
      <div className="container">
        <div className="row justify-content-center hero_top_one">
          <div className="col-12 text-center">
            <h3 className="section__title">คลังข้อมูล</h3>
          </div>
        </div>
      </div>
    </div>
)

ContentSection.getInitialProps = async () => ({
    namespacesRequired: ['ContentSection'],
  });
  
  ContentSection.propTypes = {
    t: PropTypes.func.isRequired,
  };
  export default withTranslation('ContentSection')(ContentSection);