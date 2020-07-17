import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import { login } from '../../services/user/user.service';
import React, { useEffect } from 'react';
// import React, { useState, useRef, useEffect } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
type Inputs = {
  example: string;
  exampleRequired: string;
  username: string;
  password: string;
  auth: string;
};
const LoginComponents = ({ t }: any) => {
  let { register, handleSubmit, setError, clearErrors, errors } = useForm<
    Inputs
  >();
  const onSubmit = async (data: any) => {
    const user = await login(data);
    if (user.error.code !== '') {
      setError('auth', {
        type: user.error.code,
        message: '',
      });
      // clearErrors('auth');
    } else {
      Router.push('/');
    }
  };
  const handleErorr = (error: any) => {
    if (error.username) {
      return 'login.validate.username.' + error.username.type;
    }
    if (error.password) {
      return 'login.validate.password.' + error.password.type;
    }
    if (error.auth) {
      return 'ErrorMessage:' + error.auth.type;
    }
  };
  useEffect(() => {}, []);
  // const LoginClick = async () => {
  // const user = await login(
  //   inputUsername.current.value,
  //   inputPassword.current.value
  // );
  // if (user.error.code !== '') {
  //   setIsError(t(`ErrorMessage:error.login.${user.error.code}`));
  // } else {
  //   Router.push('/');
  // }
  // };
  return (
    <div className="login_section">
      <h2>{t('login.header')}</h2>
      <div className="form-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            // ref={inputUsername}
            ref={register({ required: true, pattern: /^[a-zA-Z0-9-_@.]+$/i })}
            onChange={() => clearErrors('auth')}
            type="text"
            id="username"
            name="username"
            className="input-txt01"
            maxLength={50}
            placeholder={t('login.username')}
          />
          <input
            // ref={inputPassword}
            ref={register({ required: true })}
            onChange={() => clearErrors('auth')}
            type="password"
            id="password"
            name="password"
            className="input-txt01"
            maxLength={50}
            placeholder={t('login.password')}
          />
          <div className="link-forgot">
            {Object.keys(errors).length !== 0 && (
              <div
                style={{
                  color: '#e20000',
                  textAlign: 'center',
                  margin: '15px',
                }}
              >
                {t(handleErorr(errors))}
              </div>
            )}
            {/* {isError && (
              <div
                style={{
                  color: '#e20000',
                  textAlign: 'center',
                  margin: '15px',
                }}
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
            {/* <a className="btn v2" href="#" onClick={LoginClick}>
              {t('login.loginBtn')}
            </a> */}
            <input
              className="btn v2"
              style={{ minWidth: '180px' }}
              type="submit"
              value={t('login.loginBtn')}
            />
          </div>
        </form>
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
