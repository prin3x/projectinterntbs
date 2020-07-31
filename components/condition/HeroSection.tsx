import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';

const HeroSection = ({ t }: any) => {
  React.useEffect(() => {}, []);
  return (
    <div className="container">
     sdfsdf
    </div>
  );
};

HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['ContactHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ContactHeroSection')(HeroSection);
