import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { StoreContext } from '../context/store';
import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/user/user.service';
import Router from 'next/router';

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  agree: boolean;
  news: boolean;
  registerdto: string;
  auth: string;
};
const QuickRegisterComponents = ({ t }: any) => {
  const dataStore: any = useContext(StoreContext);
  let { register, handleSubmit, setError, clearErrors, errors } = useForm<
    Inputs
  >();
  const onSubmit = async (data: any) => {
    // if (dataStore.msisdnStore[0] === undefined) {
    //   console.log('errror msisdnStore');
    //   return;
    // }
    const user = await login({ ...data, username: dataStore.msisdnStore[0] });
    console.log('user : ', user);
    if (user.error.code !== '') {
      setError('auth', {
        type: user.error.code,
        message: '',
      });
    } else {
      Router.push('/');
    }
  };
  const handleErorr = (error: any) => {
    console.log(error);
    if (error.firstname) {
      return 'quickregister.validate.firstname.' + error.firstname.type;
    }
    if (error.lastname) {
      return 'quickregister.validate.lastname.' + error.lastname.type;
    }
    if (error.password) {
      return 'quickregister.validate.password.' + error.password.type;
    }
    if (error.email) {
      return 'quickregister.validate.email.' + error.email.type;
    }
    if (error.agree) {
      return 'quickregister.validate.agree.' + error.agree.type;
    }
    if (error.registerdto) {
      return 'quickregister.' + error.registerdto.type;
    }

    if (error.auth) {
      return 'ErrorMessage:' + error.auth.type;
    }
  };
  useEffect(() => {
    console.log('msisdnStore :::::::::::: ', dataStore.msisdnStore);
    // if (dataStore.msisdnStore[0] === undefined) {
    // Router.push('/log-in');
    // }
  }, []);
  return (
    <div className="register_section">
      <h2>{t('quickregister.header')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-indiv">
          <div className="input-twocolumn">
            <input
              ref={register({ required: true })}
              id="firstname"
              name="firstname"
              type="text"
              className="input-txt02"
              placeholder={t('quickregister.firstname')}
            />
            <input
              ref={register({ required: true })}
              id="lastname"
              name="lastname"
              type="text"
              className="input-txt02"
              placeholder={t('quickregister.lastname')}
            />
          </div>
          <div className="input-twocolumn">
            <input
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              id="email"
              name="email"
              type="text"
              className="input-txt02"
              placeholder={t('quickregister.email')}
            />
            <input
              ref={register({ required: true })}
              onChange={() => clearErrors('auth')}
              id="password"
              name="password"
              type="password"
              className="input-txt02"
              placeholder={t('quickregister.password')}
            />
          </div>
          <div
            style={{
              color: '#e20000',
              textAlign: 'center',
              margin: '15px',
            }}
          >
            {t(handleErorr(errors))}
          </div>

          <div className="sec-checkbox">
            <div>
              <label className="container">
                {t('quickregister.rule')}
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  ref={register({ required: true })}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <label className="container">
                {t('quickregister.news')}
                <input
                  type="checkbox"
                  id="news"
                  name="news"
                  ref={register({})}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="btn-regis">
            {/* <Link href="/register-success">
              <a className="btn v2" href="#">
                {t('quickregister.createBtn')}
                
              </a>
            </Link> */}
            <input
              className="btn v2"
              style={{ minWidth: '180px' }}
              type="submit"
              value={t('quickregister.createBtn')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
QuickRegisterComponents.getInitialProps = async () => ({
  namespacesRequired: ['QuickRegister', 'ErrorMessage'],
});

QuickRegisterComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(['QuickRegister', 'ErrorMessage'])(
  QuickRegisterComponents
);
