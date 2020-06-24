import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import login from '../../services/user/user.service';
import React, { useState, useRef } from 'react';

const LoginComponents = ({ t }: any) => {
  const inputUsername: any = useRef(null);
  const inputPassword: any = useRef(null);
  const [isError, setIsError] = useState('');

  const LoginClick = async () => {
    const user = await login(
      inputUsername.current.value,
      inputPassword.current.value
    );
    if (user.error) {
      setIsError(user.errorText);
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="login_section">
      <h2>{t('h1')}</h2>
      <div className="form-login">
        <input
          ref={inputUsername}
          type="text"
          id="username"
          name="username"
          className="input-txt01"
          maxLength={50}
          placeholder={t('input1')}
        />
        <input
          ref={inputPassword}
          type="password"
          id="password"
          name="password"
          className="input-txt01"
          maxLength={50}
          placeholder={t('input2')}
        />
        <div className="link-forgot">
          {isError && (
            <div
              style={{ color: '#e20000', textAlign: 'center', margin: '15px' }}
            >
              {isError}
            </div>
          )}
          <Link href="/register">
            <a href="">{t('a1')}</a>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link href="/forgot-password">
            <a href="">{t('a2')}</a>
          </Link>
        </div>
        <div className="btn-login">
          <a className="btn v2" href="#" onClick={LoginClick}>
            {t('a3')}
          </a>
        </div>
      </div>
    </div>
  );
};
LoginComponents.getInitialProps = async () => {
  return {
    namespacesRequired: ['Login'],
  };
};

LoginComponents.propTypes = {
  t: PropTypes.func.isRequired,
  wtf: PropTypes.string,
};
export default withTranslation('Login')(LoginComponents);
