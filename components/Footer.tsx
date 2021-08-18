import React from 'react';
import { withTranslation } from "../i18n.js";
import FooterSubmodule from '../tbs_submodule/FooterSubmodule.js';
import appConfig from '../appConfig';

const Footer = ({ t }: any) => {
    return <FooterSubmodule appConfig={appConfig} t={t} hello={'hello'} />;
};

Footer.getInitialProps = async () => ({
    namespacesRequired: ['Footer'],
});

export default withTranslation('Footer')(Footer);
