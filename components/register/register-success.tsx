import React, { useEffect } from 'react';
import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import { resendRegister } from '../../services/user/user.service';
import TagManager from 'react-gtm-module';
import AppConfig from '../../appConfig';
const tagManagerArgs = {
  gtmId: AppConfig.GTM_CODE || '',
  dataLayer: {
    event: 'register',
    register_method: 'normal',
    action: 'complete',
  },
};
const RegisterfinishComponents = ({ t }: any) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    // localStorage.setItem(
    //   'TBS_resendRegisterSMSToken',
    //   JSON.stringify({ token: 'WTFSMSToken' })
    // );
  }, []);
  return (
    <div className="register_section">
      <div className="finish-regis">
        <div className="img-finish-regis">
          <img
            className="lazyload"
            data-src="/img/img-finish-regis.png"
            alt="Image"
          />
        </div>
        <h2>{t('registerfinish.title')}</h2>
        <p
          className="sub-text"
          dangerouslySetInnerHTML={{ __html: t('registerfinish.desc') }}
        ></p>
        <div className="btn-login">
          <Link href="/log-in">
            <a className="btn v2">{t('registerfinish.loginBtn')}</a>
          </Link>
        </div>
        <p>
          {t('registerfinish.resendsms')}
          <a
            href="javascript:;"
            onClick={async () => {
              let aa = await resendRegister();
              console.log('return api : ', aa);
            }}
          >
            {t('registerfinish.linkresendsms')}
          </a>
        </p>
      </div>
    </div>
  );
};
RegisterfinishComponents.getInitialProps = async () => ({
  namespacesRequired: ['Registerfinish'],
});

RegisterfinishComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Registerfinish')(RegisterfinishComponents);
