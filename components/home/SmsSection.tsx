import { withTranslation, Link } from '../../i18n';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect, useRef, useContext } from 'react';
import Router from 'next/router';
import { StoreContext } from '../context/store';
import {
  quickRegisterStep1,
  quickRegisterStep2,
  quickRegisterStep3,
} from '../../services/user/user.service';
type Inputs = {
  msisdn: string;
  pin: string;
  resultStep1: string;
  resultStep2: string;
  resultStep3: string;
  welcomeToken: string;
};
const SmsSectionV2 = ({ t }: any) => {
  const [showModalpass, setShowModalpass] = useState(false);
  const [showInputstep1, setShowInputstep1] = useState(true);
  const [showInputstep3, setShowInputstep3] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [msisdn, setMsisdn] = useState('');
  const [pin, setPin] = useState('');
  const [welcome_token, setWelcomeToken] = useState('');
  const dataStore = useContext(StoreContext);
  //================  step 1
  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    setError: setErrorStep1,
    errors: errrorsStep1,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmitStep1 = async (data: any) => {
    console.log('onSubmit : ', data);
    if (data.msisdn === '') {
      setErrorStep1('msisdn', {
        type: 'pattern',
        message: '',
      });
      return;
    }
    const resultStep1 = await quickRegisterStep1(data);
    console.log('resultStep1 : ', resultStep1);
    if (resultStep1.error.code !== '') {
      setErrorStep1('resultStep1', {
        type: resultStep1.error.code,
        message: '',
      });
      return;
    }
    setMsisdn(resultStep1.data.msisdn);
    setShowModalpass(true);
  };
  const handleErorrStep1 = (error: any) => {
    console.log('handleErorrStep1 : ', error);
    if (error.msisdn) {
      return 'homesms.validate.msisdn.' + error.msisdn.type;
    }
    if (error.resultStep1) {
      return 'homesms.resultStep1.' + error.resultStep1.type;
    }
  };
  //================ end step 1
  //================  step 2
  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    setError: setErrorStep2,
    clearErrors: clearErrors2,
    errors: errrorsStep2,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmitStep2 = async (data: any) => {
    console.log('onSubmit : ', data);
    if (data.pin === '') {
      setErrorStep2('pin', {
        type: 'required',
        message: '',
      });
      return;
    }
    data.msisdn = msisdn;
    const resultStep2 = await quickRegisterStep2(data);
    console.log('resultStep2 : ', resultStep2);
    if (resultStep2.error.code !== '') {
      setErrorStep2('resultStep2', {
        type: resultStep2.error.code,
        message: '',
      });
      return;
    }
    setPin(data.pin);
    setWelcomeToken(resultStep2.welcome_token);
    setShowModalpass(false);
    setShowInputstep1(false);
    setShowInputstep3(true);
  };
  const handleErorrStep2 = (error: any) => {
    console.log('handleErorrStep2 : ', error);
    if (error.pin) {
      return 'homesms.validate.pin.' + error.pin.type;
    }
    if (error.resultStep2) {
      return 'homesms.resultStep2.' + error.resultStep2.type;
    }
  };
  //================ end step 2
  //================  step 3
  const {
    register: registerStep3,
    handleSubmit: handleSubmitStep3,
    setError: setErrorStep3,
    errors: errrorsStep3,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmitStep3 = async (data: any) => {
    console.log('onSubmitStep3 : ', data);
    console.log('welcomeToken : ', welcome_token);
    if (welcome_token === '') {
      setErrorStep3('welcomeToken', {
        type: 'required',
        message: '',
      });
      return;
    }
    const resultStep3 = await quickRegisterStep3({ welcome_token });
    console.log('resultStep3 : ', resultStep3);
    if (resultStep3.error.code !== '') {
      setErrorStep3('resultStep3', {
        type: resultStep3.error.code,
        message: '',
      });
      return;
    }
    setShowLogin(true);
  };
  const handleErorrStep3 = (error: any) => {
    console.log('handleErorrStep3 : ', error);
    if (error.welcomeToken) {
      return 'homesms.validate.welcomeToken.' + error.welcomeToken.type;
    }
    if (error.resultStep3) {
      return 'homesms.resultStep3.' + error.resultStep3.type;
    }
  };
  //================ end step 3
  const gotoLogin = () => {
    dataStore.msisdnStore[1](msisdn);
    Router.push('/register/quickregister');
  };
  return (
    <div
      className="sms_section lazyload"
      // style={{ backgroundImage: 'url(/img/promo_bg.png)' }}
      data-bgset="/img/promo_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-12 ">
            <div className="sms_text">
              <h3>{t('homesms.header')}</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sms_feature">
              <div className="row">
                <div className="col-md-12">
                  <div className="sms_feature_item">
                    <p>{t('homesms.title')}</p>
                    <h2>4,662,190,879</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sms_feature_item">
                    <p>{t('homesms.quantity')}</p>
                    <h3>300,000+</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sms_feature_item">
                    <p>{t('homesms.duration')}</p>
                    <h3>
                      1.9 <span>{t('homesms.second')}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="sms_form">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="sms_form_text">
                    <h4>{t('homesms.test.header')}</h4>
                    <p>{t('homesms.test.desc')}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  {showInputstep1 && (
                    <div className="sms_form_field">
                      <form onSubmit={handleSubmitStep1(onSubmitStep1)}>
                        <input
                          ref={registerStep1({
                            pattern: /^[0][6||8-9][0-9]{8}$/i,
                          })}
                          id="msisdn"
                          name="msisdn"
                          type="text"
                          placeholder={t('homesms.test.telNumber')}
                        />
                        <button className="btn v2" type="submit">
                          {t('homesms.test.confirmBtn')}
                        </button>
                      </form>
                      {t(handleErorrStep1(errrorsStep1))}
                    </div>
                  )}
                  {showInputstep3 && (
                    <div className="sms_form_field">
                      <form onSubmit={handleSubmitStep3(onSubmitStep3)}>
                        <input
                          ref={registerStep3({
                            required: true,
                          })}
                          id="tel"
                          name="tel"
                          type="text"
                          disabled={true}
                          value={msisdn}
                        />
                        <button className="btn v2" type="submit">
                          ทดลองส่ง
                        </button>
                      </form>
                      {t(handleErorrStep3(errrorsStep3))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalpass && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            zIndex: 99999999,
            background: 'rgba(0, 0, 0, 0.5)',
            display: '',
          }}
        >
          <div className="">
            <div className="" style={{ padding: '200px 0 60px' }}>
              <div
                className=""
                style={{
                  maxWidth: '600px',
                  borderRadius: '15px',
                  backgroundColor: '#F4F4F4',
                  padding: '30px 50px',
                  margin: '40px auto 100px',
                  textAlign: 'center',
                }}
              >
                <button
                  onClick={() => {
                    setShowModalpass(false);
                  }}
                >
                  <i className="far fa-check-circle"></i>
                </button>
                <h5 style={{ fontSize: '24px' }}>
                  กรอกรหัสผ่านที่ได้รับทาง SMS
                </h5>
                <form onSubmit={handleSubmitStep2(onSubmitStep2)}>
                  <div className="form__wrapper">
                    <input
                      ref={registerStep2({
                        required: true,
                        pattern: /^\d+$/,
                      })}
                      onChange={() => clearErrors2('resultStep2')}
                      id="pin"
                      name="pin"
                      style={{ height: '48px' }}
                      type="text"
                      placeholder="รหัสผ่านที่ได้รับ"
                      className="input__box"
                    />
                    <button
                      type="submit"
                      className="btn v8"
                      style={{
                        width: '158px',
                        height: '48px',
                        borderRadius: '0 15px 15px 0',
                        padding: '15px 34px',
                      }}
                    >
                      ยืนยัน
                    </button>
                  </div>
                </form>
                {t(handleErorrStep2(errrorsStep2))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showLogin && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            zIndex: 99999999,
            background: 'rgba(0, 0, 0, 0.5)',
            display: '',
          }}
        >
          <div className="">
            <div className="" style={{ padding: '200px 0 60px' }}>
              <div
                className=""
                style={{
                  maxWidth: '600px',
                  borderRadius: '15px',
                  backgroundColor: '#F4F4F4',
                  padding: '30px 50px',
                  margin: '40px auto 100px',
                  textAlign: 'center',
                }}
              >
                <button
                  onClick={() => {
                    setShowLogin(false);
                  }}
                >
                  <i className="far fa-check-circle"></i>
                </button>
                <h5 style={{ fontSize: '24px' }}>
                  คุณสามารถทดลองส่งให้คนอื่นได้เช่นกัน
                </h5>
                <p>คุณสามารถเข้าใช้งานระบบเพื่อทดลองส่งได้ทันที</p>
                <p>ด้วยรหัสผ่านที่ได้รับทาง SMS</p>
                <button
                  className="btn v2"
                  onClick={() => {
                    gotoLogin();
                  }}
                >
                  เข้าใช้งานระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SmsSectionV2.getInitialProps = async () => ({
  namespacesRequired: ['HomeHeroSection'],
});

SmsSectionV2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeSmsSection')(SmsSectionV2);
