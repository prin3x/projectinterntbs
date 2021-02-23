import * as fbq from 'fbq';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import appConfig from '../../appConfig';
import { withTranslation } from '../../i18n';
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

const TestQuickregister = ({ t }: any) => {
  const [showModalpass, setShowModalpass] = useState(false);
  const [showInputstep1, setShowInputstep1] = useState(true);
  const [showInputstep3, setShowInputstep3] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showModalcaptcha, setShowModalcaptcha] = useState(false);
  const [msisdn, setMsisdn] = useState('');
  const [tempDatastep1, setTempDatastep1] = useState({ msisdn: '' });
  const [welcome_token, setWelcomeToken] = useState('');
  const [testDesc, setTestDesc] = useState('Just type in your mobile number and verify your identity with the password you receive.');
  useEffect(() => {
    Modal.setAppElement('#ElementModal');
  }, []);
  const setreCaptcha = async (value: any) => {
    setShowModalcaptcha(false);
    const resultStep1 = await quickRegisterStep1({
      msisdn: tempDatastep1.msisdn,
      recaptcha: value,
    });
    if (resultStep1.error.code !== '') {
      setErrorStep1('resultStep1', {
        type: resultStep1.error.code,
        message: '',
      });
      closeModal();
      return;
    }
    TagManager.dataLayer({
      dataLayer: {
        event: 'register',
        register_method: 'quick',
        action: 'confirm_number',
      },
    });

    (function fbqReady() {
      if ((window as any).fbq !== undefined) {
        if (
          !fbq.trackCustom(
            appConfig.facebookConversionTracking.quickRegister.confirmNumber,
          )
        )
          console.warn(
            `fbq track ${appConfig.facebookConversionTracking.quickRegister.confirmNumber} failed.`,
          );
      } else setTimeout(fbqReady, 3000);
    })();

    setMsisdn(resultStep1.data.msisdn);
    setShowModalpass(true);
  };
  //================  step 1
  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    setError: setErrorStep1,
    errors: errrorsStep1,
    clearErrors: clearErrors1,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmitStep1 = async (data: any) => {
    if (data.msisdn === '') {
      setErrorStep1('msisdn', {
        type: 'pattern',
        message: '',
      });
      return;
    }
    setShowModalpass(false);
    openModal();
    setTempDatastep1(data);
    setShowModalcaptcha(true);
  };
  const handleErorrStep1 = (error: any) => {
    if (error.msisdn) {
      return 'SmsSection::TestQuickregister::validate::msisdn::' + error.msisdn.type;
    }
    if (error.resultStep1) {
      return 'SmsSection::TestQuickregister::resultStep1::' + error.resultStep1.type;
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
    if (data.pin === '') {
      setErrorStep2('pin', {
        type: 'required',
        message: '',
      });
      return;
    }
    data.msisdn = msisdn;
    const resultStep2 = await quickRegisterStep2(data);
    if (resultStep2.error.code !== '') {
      setErrorStep2('resultStep2', {
        type: resultStep2.error.code,
        message: '',
      });
      return;
    }
    TagManager.dataLayer({
      dataLayer: {
        event: 'register',
        register_method: 'quick',
        action: 'confirm_password',
      },
    });

    (function fbqReady() {
      if ((window as any).fbq !== undefined) {
        if (
          !fbq.trackCustom(
            appConfig.facebookConversionTracking.quickRegister.confirmPassword,
          )
        )
          console.warn(
            `fbq track ${appConfig.facebookConversionTracking.quickRegister.confirmPassword} failed.`,
          );
      } else setTimeout(fbqReady, 3000);
    })();

    setTestDesc('desc-2');
    setWelcomeToken(resultStep2.welcome_token);
    setShowModalpass(false);
    setShowInputstep1(false);
    setShowInputstep3(true);
    closeModal();
  };
  const handleErorrStep2 = (error: any) => {
    if (error.pin) {
      return 'SmsSection::TestQuickregister::validate::pin::' + error.pin.type;
    }
    if (error.resultStep2) {
      return 'SmsSection::TestQuickregister::resultStep2::' + error.resultStep2.type;
    }
  };
  //================ end step 2
  //================  step 3
  const {
    register: registerStep3,
    handleSubmit: handleSubmitStep3,
    setError: setErrorStep3,
    clearErrors: clearErrors3,
    errors: errrorsStep3,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmitStep3 = async () => {
    if (welcome_token === '') {
      setErrorStep3('welcomeToken', {
        type: 'required',
        message: '',
      });
      return;
    }
    const resultStep3 = await quickRegisterStep3({ welcome_token });
    if (resultStep3.error.code !== '') {
      setErrorStep3('resultStep3', {
        type: resultStep3.error.code,
        message: '',
      });
      return;
    }
    openModal();
    setShowLogin(true);
  };
  const handleErorrStep3 = (error: any) => {
    if (error.welcomeToken) {
      return 'SmsSection::TestQuickregister::validate::welcomeToken.' + error.welcomeToken.type;
    }
    if (error.resultStep3) {
      return 'SmsSection::TestQuickregister::resultStep3.' + error.resultStep3.type;
    }
  };
  //================ end step 3
  const gotoLogin = () => {
    let domain = 'localhost';
    if (appConfig.APP_ENV === appConfig.production) domain = '.thaibulksms.com';
    else if (appConfig.APP_ENV === appConfig.internalTest) domain = '.1mobyline.com';

    Cookie.set('TBS_username', msisdn || '', { expires: 0.15, domain });
    window.location.replace(`${appConfig.WEB_URL_ACCOUNT}/register/quickregister`);
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="sms_form">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="sms_form_text">
                  <h4>{t('SmsSection::TestQuickregister::Try sending an SMS to your mobile phone now.')}</h4>
                  <p>{t('SmsSection::TestQuickregister::' + testDesc)}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                {showInputstep1 && (
                  <div className="sms_form_field">
                    <form
                      onSubmit={handleSubmitStep1(onSubmitStep1)}
                      className="error-text-box"
                    >
                      <input
                        ref={registerStep1({
                          pattern: /^[0][6||8-9][0-9]{8}$/i,
                          maxLength: 10,
                        })}
                        id="msisdn"
                        name="msisdn"
                        type="text"
                        placeholder={t('SmsSection::TestQuickregister::Your mobile number')}
                        onChange={() => clearErrors1('resultStep1')}
                        maxLength={10}
                      />
                      <div
                        style={{
                          color: 'red',
                        }}
                        className="sms-error-text"
                      >
                        {t(handleErorrStep1(errrorsStep1))}
                      </div>
                      <button
                        className="btn v2 sms-btn-text"
                        type="submit"
                        onClick={() => clearErrors1()}
                      >
                        {t('SmsSection::TestQuickregister::Confirm number')}
                      </button>
                    </form>
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
                      <div style={{ color: 'red' }} className="sms-error-text">
                        {errrorsStep3 &&
                        errrorsStep3.resultStep3?.type ===
                          'quickregisterthirdstepdto.key.expire' ? (
                          <>
                            {t(
                              'SmsSection::TestQuickregister::resultStep3::quickregisterthirdstepdto::key::expireLine1',
                            )}
                            <br />
                            {t(
                              'SmsSection::TestQuickregister::resultStep3::quickregisterthirdstepdto::key::expireLine2_1',
                            )}{' '}
                            <a href={`${appConfig.WEB_URL_ACCOUNT}/log-in`}>
                              {t(
                                'SmsSection::TestQuickregister::resultStep3::quickregisterthirdstepdto::key::expireLine2_2',
                              )}
                            </a>{' '}
                            {t(
                              'SmsSection::TestQuickregister::resultStep3::quickregisterthirdstepdto::key::expireLine2_3',
                            )}
                          </>
                        ) : (
                          t(handleErorrStep3(errrorsStep3))
                        )}
                      </div>
                      <button
                        className="btn v2"
                        type="submit"
                        onClick={() => clearErrors3()}
                      >
                        {t('SmsSection::TestQuickregister::Try SMS sending')}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ElementModal">
        <Modal
          isOpen={modalIsOpen}
          // onRequestClose={closeModal}
          onRequestClose={() => {}}
          className="pass-style"
          contentLabel=""
        >
          <div className="" style={{ textAlign: 'right' }}>
            <div>
              <button
                style={{ float: 'right' }}
                onClick={closeModal}
                className="btn-close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            {showModalcaptcha && (
              <div className="captcha-content">
                <ReCAPTCHA
                  sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                  onChange={setreCaptcha}
                />
              </div>
            )}
            {showModalpass && (
              <div
                className="modal-pass"
                style={{
                  textAlign: 'center',
                }}
              >
                <h5 className="pass-modal-text">
                  {t('SmsSection::TestQuickregister::modal::showModalpass::header')}
                </h5>
                <form className="form-wrap" onSubmit={handleSubmitStep2(onSubmitStep2)}>
                  <div className="form__wrapper form-password-wrap">
                    <input
                      ref={registerStep2({
                        required: true,
                        pattern: /^\d+$/,
                      })}
                      onChange={() => clearErrors2('resultStep2')}
                      id="pin"
                      name="pin"
                      type="password"
                      placeholder={t('SmsSection::TestQuickregister::modal::showModalpass::placeholder')}
                      className="input__box"
                    />
                    <button
                      type="submit"
                      className="btn v8 confirm-btn"
                      onClick={() => clearErrors2()}
                    >
                      {t('SmsSection::TestQuickregister::modal::showModalpass::submitBtn')}
                    </button>
                  </div>
                </form>
                <div style={{ color: 'red' }}>{t(handleErorrStep2(errrorsStep2))}</div>
              </div>
            )}
            {showLogin && (
              <div
                className="login-text"
                style={{
                  textAlign: 'center',
                }}
              >
                <h5 className="login-topic">{t('SmsSection::TestQuickregister::modal::showLogin::header')}</h5>
                <p className="login-content">{t('SmsSection::TestQuickregister::modal::showLogin::decs1')}</p>
                <p className="login-content">{t('SmsSection::TestQuickregister::modal::showLogin::decs2')}</p>
                <button
                  className="btn v2 btn-show-login"
                  onClick={() => {
                    gotoLogin();
                  }}
                >
                  {t('SmsSection::TestQuickregister::modal::showLogin::submitBtn')}
                </button>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

TestQuickregister.getInitialProps = async () => ({
  namespacesRequired: ['Home'],
});

TestQuickregister.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(TestQuickregister);
