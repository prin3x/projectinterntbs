import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';

const SmartSmsConsoleContentSection = ({ t }: any) => (
    <div className="hero_section hero_section_2">
        <div className="container">
            <div className="row justify-content-center hero_top_one">
                <div className="col-12 text-center">
                    sdfsd
            </div>
            </div>
        </div>
    </div>
)
SmartSmsConsoleContentSection.getInitialProps = async () => ({
    namespacesRequired: ['SmartSmsConsoleContentSection'],
});

SmartSmsConsoleContentSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('SmartSmsConsoleContentSection')(SmartSmsConsoleContentSection);
