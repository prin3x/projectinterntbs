import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
// import login from '../../services/user/user.service';
import React, { useRef } from 'react';
// import React, { useState, useRef } from 'react';

const LoginComponents = ({ t }: any) => {
  const inputUsername: any = useRef(null);
  const inputPassword: any = useRef(null);
  // const [isError, setIsError] = useState('');

  // const LoginClick = async () => {
  //   const user = await login(
  //     inputUsername.current.value,
  //     inputPassword.current.value
  //   );
  //   if (user.error.code !== '') {
  //     // setIsError(t('ErrorMessage:error.login.invalid.userpass'));
  //     setIsError(t(`ErrorMessage:error.${user.error.code}`));
  //   } else {
  //     window.location.reload();
  //   }
  // };
  return (
    <div className="login_section">
      <h2>{t('login.header')}</h2>
      <div className="form-login">
        <input
          ref={inputUsername}
          type="text"
          id="username"
          name="username"
          className="input-txt01"
          maxLength={50}
          placeholder={t('login.username')}
        />
        <input
          ref={inputPassword}
          type="password"
          id="password"
          name="password"
          className="input-txt01"
          maxLength={50}
          placeholder={t('login.password')}
        />
        <div className="link-forgot">
          {/* {isError && (
            <div
              onClick={LoginClick}
              style={{ color: '#e20000', textAlign: 'center', margin: '15px' }}
            >
              {isError}
            </div>
          )} */}
          <Link href="/register">
            <a href="">{t('login.register')}</a>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link href="/forgot-password">
            <a href="">{t('login.forgotpassword')}</a>
          </Link>
        </div>
        <div className="btn-login">
          <Link href="/purchase/user-type">
            {/* <a className="btn v2" href="#" onClick={LoginClick}> */}
            <a className="btn v2" href="#">
              {t('login.loginBtn')}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
LoginComponents.getInitialProps = async () => {
  return {
    namespacesRequired: ['Login', 'ErrorMessage'],
  };
};

LoginComponents.propTypes = {
  t: PropTypes.func.isRequired,
  wtf: PropTypes.string,
};
export default withTranslation(['Login', 'ErrorMessage'])(LoginComponents);
