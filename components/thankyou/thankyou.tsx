import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const ThankyouComponents = ({ t }: any) => (
  <div className="register_section">
    <div className="finish-regis">
      <div className="img-finish-regis">
        <object type="image/svg+xml" data="/img/img-thankyou.svg"></object>
      </div>
      <h2>{t('thankyou.title')}</h2>
      <p
        className="sub-text"
        dangerouslySetInnerHTML={{ __html: t('thankyou.desc') }}
      ></p>
    </div>
  </div>
);
ThankyouComponents.getInitialProps = async () => ({
  namespacesRequired: ['Thankyou'],
});

ThankyouComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Thankyou')(ThankyouComponents);
