import React, { useEffect, useState } from 'react';
import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import { resendRegister } from '../../services/user/user.service';

const RegisterfinishComponents = ({ t }: any) => {
  const [errors, setErrors] = useState('');
  const [sentAPI, setSentAPI] = useState(true);

  const handleErorr = (error: any) => {
    if (error.code === undefined || error.code === '') {
      return '';
    }
    return 'registerfinish.' + error.code;
  };
  useEffect(() => {}, []);
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
              if (sentAPI) {
                let result = await resendRegister();
                console.log('return api : ', result);
                if (result.error) {
                  setErrors(result.error);
                }
                if (result.error.code === 'resendRegisterSMS.exceeded') {
                  setSentAPI(false);
                }
              }
            }}
          >
            {t('registerfinish.linkresendsms')}
          </a>
        </p>
        <p
          style={{
            color: '#e20000',
          }}
        >
          {t(handleErorr(errors))}
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
