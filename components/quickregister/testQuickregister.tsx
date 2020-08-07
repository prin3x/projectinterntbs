import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import React, { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import { StoreContext } from '../context/store';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import Modal from 'react-modal';
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
  const dataStore: any = useContext(StoreContext);
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
    openModal();
    setTempDatastep1(data);
    setShowModalcaptcha(true);
  };
  const handleErorrStep1 = (error: any) => {
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
    setWelcomeToken(resultStep2.welcome_token);
    setShowModalpass(false);
    setShowInputstep1(false);
    setShowInputstep3(true);
    closeModal();
  };
  const handleErorrStep2 = (error: any) => {
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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '543px',
      height: '300px',
    },
  };
  return (
    <>
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
                        onChange={() => clearErrors1('resultStep1')}
                      />
                      <button
                        className="btn v2"
                        type="submit"
                        onClick={() => clearErrors1()}
                      >
                        {t('homesms.test.confirmBtn')}
                      </button>
                    </form>
                    <div style={{ color: 'red' }}>
                      {t(handleErorrStep1(errrorsStep1))}
                    </div>
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
                      <button
                        className="btn v2"
                        type="submit"
                        onClick={() => clearErrors3()}
                      >
                        {t('homesms.test.testBtn')}
                      </button>
                    </form>
                    <div style={{ color: 'red' }}>
                      {t(handleErorrStep3(errrorsStep3))}
                    </div>
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
          style={customStyles}
          contentLabel=""
        >
          <div className="" style={{ textAlign: 'right' }}>
            <div style={{ width: '505px', height: '49px' }}>
              <button style={{ float: 'right' }} onClick={closeModal}>
                close
              </button>
            </div>
            {showModalcaptcha && (
              <div>
                <ReCAPTCHA
                  sitekey="6LegfrMZAAAAAIgOUDbhgm0GDPrazMrke41ZDD-e"
                  onChange={setreCaptcha}
                />
              </div>
            )}
            {showModalpass && (
              <div
                className=""
                style={{
                  textAlign: 'center',
                }}
              >
                <h5 style={{ fontSize: '24px' }}>
                  {t('homesms.modal.showModalpass.header')}
                </h5>
                <form
                  onSubmit={handleSubmitStep2(onSubmitStep2)}
                  style={{ marginLeft: '55px' }}
                >
                  <div className="form__wrapper">
                    <input
                      ref={registerStep2({
                        required: true,
                        pattern: /^\d+$/,
                      })}
                      onChange={() => clearErrors2('resultStep2')}
                      id="pin"
                      name="pin"
                      style={{ height: '48px', width: '236px' }}
                      type="password"
                      placeholder={t('homesms.modal.showModalpass.placeholder')}
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
                      onClick={() => clearErrors2()}
                    >
                      {t('homesms.modal.showModalpass.submitBtn')}
                    </button>
                  </div>
                </form>
                <div style={{ color: 'red' }}>
                  {t(handleErorrStep2(errrorsStep2))}
                </div>
              </div>
            )}
            {showLogin && (
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                <h5 style={{ fontSize: '24px' }}>
                  {t('homesms.modal.showLogin.header')}
                </h5>
                <p>{t('homesms.modal.showLogin.decs1')}</p>
                <p>{t('homesms.modal.showLogin.decs2')}</p>
                <button
                  className="btn v2"
                  onClick={() => {
                    gotoLogin();
                  }}
                >
                  {t('homesms.modal.showLogin.submitBtn')}
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
  namespacesRequired: ['HomeHeroSection'],
});

TestQuickregister.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('HomeSmsSection')(TestQuickregister);
