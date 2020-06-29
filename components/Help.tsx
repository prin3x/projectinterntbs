import { withTranslation } from '../i18n';
import PropTypes from 'prop-types';
const Help = ({ t }: any) => (
  <div className="info__box__wrapper d-none d-xl-block">
    <button type="button" className="btn v8">
      <span>
        <img className="lazyload" data-src="/img/icon_14.png" alt="" />
      </span>
      <p dangerouslySetInnerHTML={{ __html: t('hepl.lable') }}></p>
    </button>
  </div>
);
Help.getInitialProps = async () => ({
  namespacesRequired: ['Help'],
});

Help.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Help')(Help);
