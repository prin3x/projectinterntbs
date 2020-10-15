import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';


const ContentSection = ({ t }: any) => (
    <div 
    className="hero_section v3 lazyload"
    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-resource.jpg`}
    >
      <h2 className="condition-header">aaaaa</h2>
      <div className="col-lg-12">
        <div className="condition-text">
          <h4>aaaaaa</h4>
          aaaa
          
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