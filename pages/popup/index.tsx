import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { withTranslation } from '../../i18n';
import ReCAPTCHA from 'react-google-recaptcha';
// import { event } from 'jquery';
// import { tr } from 'date-fns/locale';

const TestQuickregister = ({ t }: any) => {
    useEffect(() => {
        Modal.setAppElement('#ElementModal');
    }, []);

    // // const setreCaptcha = async (value: any) => {
    // //     setShowModalcaptcha(false);
    // //     const resultStep1 = await quickRegisterStep1({
    // //         msisdn: tempDatastep1.msisdn,
    // //         recaptcha: value,
    // //     });
    // //     if (resultStep1.error.code !== '') {
    // //         setErrorStep1('resultStep1', {
    // //             type: resultStep1.error.code,
    // //             message: '',
    // //         });
    // //         closeModal();
    // //         return;
    // //     }
    // //     TagManager.dataLayer({
    // //         dataLayer: {
    // //             event: 'register',
    // //             register_method: 'quick',
    // //             action: 'confirm_number',
    // //         },
    // //     });
    // //     (function fbqReady() {
    // //         if ((window as any).fbq !== undefined) {
    // //             if (
    // //                 !fbq.trackCustom(
    // //                     appConfig.facebookConversionTracking.quickRegister
    // //                         .confirmNumber
    // //                 )
    // //             )
    // //                 console.warn(
    // //                     `fbq track ${appConfig.facebookConversionTracking.quickRegister.confirmNumber} failed.`
    // //                 );
    // //         } else setTimeout(fbqReady, 3000);
    // //     })();

    // //     setMsisdn(resultStep1.data.msisdn);
    // //     setShowModalpass(true);
    // // };
    // //================  step 1
    // const {
    //     register: registerStep1,
    //     handleSubmit: handleSubmitStep1,
    //     setError: setErrorStep1,
    //     errors: errrorsStep1,
    //     clearErrors: clearErrors1,
    // } = useForm<Inputs>({
    //     mode: 'onBlur',
    // });
    // const onSubmitStep1 = async (data: any) => {
    //     if (data.msisdn === '') {
    //         setErrorStep1('msisdn', {
    //             type: 'pattern',
    //             message: '',
    //         });
    //         return;
    //     }
    //     setShowModalpass(false);
    //     openModal();
    //     setTempDatastep1(data);
    //     setShowModalcaptcha(true);
    // };
    // const handleErorrStep1 = (error: any) => {
    //     if (error.msisdn) {
    //         return (
    //             'SmsSection::TestQuickregister::validate::msisdn::' +
    //             error.msisdn.type
    //         );
    //     }
    //     if (error.resultStep1) {
    //         return (
    //             'SmsSection::TestQuickregister::resultStep1::' +
    //             error.resultStep1.type
    //         );
    //     }
    // };
    // //================ end step 1
    // //================  step 2
    // const {
    //     register: registerStep2,
    //     handleSubmit: handleSubmitStep2,
    //     setError: setErrorStep2,
    //     clearErrors: clearErrors2,
    //     errors: errrorsStep2,
    // } = useForm<Inputs>({
    //     mode: 'onBlur',
    // });
    // const onSubmitStep2 = async (data: any) => {
    //     if (data.pin === '') {
    //         setErrorStep2('pin', {
    //             type: 'required',
    //             message: '',
    //         });
    //         return;
    //     }
    //     data.msisdn = msisdn;
    //     const resultStep2 = await quickRegisterStep2(data);
    //     if (resultStep2.error.code !== '') {
    //         setErrorStep2('resultStep2', {
    //             type: resultStep2.error.code,
    //             message: '',
    //         });
    //         return;
    //     }
    //     TagManager.dataLayer({
    //         dataLayer: {
    //             event: 'register',
    //             register_method: 'quick',
    //             action: 'confirm_password',
    //         },
    //     });
    //     (function fbqReady() {
    //         if ((window as any).fbq !== undefined) {
    //             if (
    //                 !fbq.trackCustom(
    //                     appConfig.facebookConversionTracking.quickRegister
    //                         .confirmPassword
    //                 )
    //             )
    //                 console.warn(
    //                     `fbq track ${appConfig.facebookConversionTracking.quickRegister.confirmPassword} failed.`
    //                 );
    //         } else setTimeout(fbqReady, 3000);
    //     })();

    //     setTestDesc('desc-2');
    //     setWelcomeToken(resultStep2.welcome_token);
    //     setShowModalpass(false);
    //     setShowInputstep1(false);
    //     setShowInputstep3(true);
    //     closeModal();
    // };
    // const handleErorrStep2 = (error: any) => {
    //     if (error.pin) {
    //         return (
    //             'SmsSection::TestQuickregister::validate::pin::' +
    //             error.pin.type
    //         );
    //     }
    //     if (error.resultStep2) {
    //         return (
    //             'SmsSection::TestQuickregister::resultStep2::' +
    //             error.resultStep2.type
    //         );
    //     }
    // };
    // //================ end step 2
    // //================  step 3
    // const {
    //     register: registerStep3,
    //     handleSubmit: handleSubmitStep3,
    //     setError: setErrorStep3,
    //     clearErrors: clearErrors3,
    //     errors: errrorsStep3,
    // } = useForm<Inputs>({
    //     mode: 'onBlur',
    // });
    // const onSubmitStep3 = async () => {
    //     if (welcome_token === '') {
    //         setErrorStep3('welcomeToken', {
    //             type: 'required',
    //             message: '',
    //         });
    //         return;
    //     }
    //     const resultStep3 = await quickRegisterStep3({ welcome_token });
    //     if (resultStep3.error.code !== '') {
    //         setErrorStep3('resultStep3', {
    //             type: resultStep3.error.code,
    //             message: '',
    //         });
    //         return;
    //     }
    //     openModal();
    //     setShowLogin(true);
    // };
    // const handleErorrStep3 = (error: any) => {
    //     if (error.welcomeToken) {
    //         return (
    //             'SmsSection::TestQuickregister::validate::welcomeToken.' +
    //             error.welcomeToken.type
    //         );
    //     }
    //     if (error.resultStep3) {
    //         return (
    //             'SmsSection::TestQuickregister::resultStep3.' +
    //             error.resultStep3.type
    //         );
    //     }
    // };
    // //================ end step 3
    // const gotoLogin = () => {
    //     let domain = 'localhost';
    //     if (appConfig.APP_ENV === appConfig.production)
    //         domain = '.thaibulksms.com';
    //     else if (appConfig.APP_ENV === appConfig.internalTest)
    //         domain = '.1mobyline.com';

    //     Cookie.set('TBS_username', msisdn || '', { expires: 0.15, domain });
    //     window.location.replace(
    //         `${appConfig.WEB_URL_ACCOUNT}/register/quickregister`
    //     );
    // };

    const [modalIsOpen, setIsOpen] = useState(false);
    const [phoneNum, setPhone] = useState('');
    const [phoneOk, setphoneOk] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpOk, setOtpOk] = useState(false);
    const [reCaptcha, setreCaptcha] = useState('');
    const [reCaptchaOK, setreCaptchaOK] = useState(false);
    const [button, setbutton] = useState(0);
    const [fase1, setfase1] = useState(true);
    const [fase2, setfase2] = useState(false);
    const [fase3, setfase3] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function changeFase(num: number) {
        if (num === 1) {
            setfase2(false);
            setfase3(false);
            setfase1(true);
            setbutton(0);
            closeModal();
        } else if (num === 2) {
            setfase1(false);
            setfase2(true);
            setfase3(false);
            setbutton(0);
        } else if (num === 3) {
            setfase1(false);
            setfase2(false);
            setfase3(true);
            setbutton(0);
        }
    }
    function setreCap(value: any) {
        setreCaptchaOK(true);
        setreCaptcha(value);
        console.log(value);
    }
    return (
        <div>
            <button
                className="btn v2 sms-btn-text"
                // type="submit"
                onClick={() => openModal()}
            >
                {t('SmsSection::TestQuickregister::Confirm number')}
            </button>

            <div id="ElementModal">
                <Modal
                    isOpen={modalIsOpen}
                    // onRequestClose={closeModal}
                    onRequestClose={() => {}}
                    className="pass-style"
                    contentLabel=""
                >
                    {/* <a onClick={() => changeFase(1)}>
                        {' '}
                        <h2>close</h2>
                    </a> */}
                    <div
                        className="cross"
                        onClick={() => {
                            changeFase(1);
                        }}
                    ></div>
                    <div className="register-box">
                        {fase1 ? (
                            <div className="fase 1">
                                <div className="title">
                                    ทดลองส่ง SMS ฟรีเข้าเบอร์คุณ
                                </div>
                                <form>
                                    <label>เบอร์มือถือ</label>
                                    <input
                                        maxLength={10}
                                        type="text"
                                        placeholder="เบอร์มือถือของคุณ"
                                        className="phone"
                                        onChange={(event) => {
                                            setPhone(event.target.value);
                                            console.log(event.target.value);
                                            if (
                                                event.target.value.length === 10
                                            ) {
                                                setphoneOk(true);
                                            } else {
                                                setphoneOk(false);
                                            }
                                        }}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    {!phoneOk ? (
                                        <label className="red">
                                            กรอกเบอรมือถือให้ถูกต้อง
                                        </label>
                                    ) : (
                                        ''
                                    )}

                                    <div className="msg">
                                        <label>ข้อความ</label>
                                        <label className="blue">0/70</label>
                                    </div>

                                    <textarea
                                        className="msg"
                                        placeholder="ข้อความที่ต้องการส่ง"
                                    />
                                </form>
                                <div className="desc">
                                    ในระบบส่งเต็มรูปแบบ
                                    คุณจะสามารถพิมพ์ได้สูงสุด 670 ตัวอักษร
                                    (ข้อความไทย) หรือ 1,530 (ข้อความอังกฤษ)
                                    สำหรับการส่ง 1 ครั้ง
                                </div>
                                <div className="captcha-content active">
                                    <ReCAPTCHA
                                        sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                                        onChange={setreCap}
                                    />
                                </div>
                                <button
                                    disabled={!(phoneOk && reCaptchaOK)}
                                    className={
                                        phoneOk && reCaptchaOK
                                            ? 'active'
                                            : 'disable'
                                    }
                                    onClick={() => changeFase(2)}
                                >
                                    ส่ง SMS
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                        {fase2 ? (
                            <div className="fase 2">
                                <div className="title">ยืนยันการส่งข้อความ</div>
                                <div className="pr">
                                    กรอกรหัสผ่านที่ได้รับทาง SMS
                                    เพื่อยืนยันการส่ง ข้อความเข้าเบอร์คุณ
                                </div>
                                <form>
                                    <label>รหัสผ่าน</label>
                                    <input
                                        maxLength={6}
                                        type="text"
                                        className="phone"
                                        placeholder="รหัสผ่าน6หลัก"
                                        onChange={(event) => {
                                            setOtp(event.target.value);
                                            if (
                                                event.target.value.length === 6
                                            ) {
                                                setbutton(2);
                                                setOtpOk(true);
                                            } else {
                                                setbutton(0);
                                                setOtpOk(false);
                                            }
                                        }}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                </form>
                                <button
                                    disabled={button !== 2}
                                    className={button === 2 ? 'active' : ''}
                                    onClick={() => changeFase(3)}
                                >
                                    ยืนยันเบอร์
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                        {fase3 ? (
                            <div className="fase 3">
                                <div className="title">ส่งข้อความสำเร็จ</div>
                                <div className="pr">
                                    คุณสามารถทดลองใช้งานระบบส่ง SMS
                                    ออนไลน์แบบเต็มรูปแบบได้ทันที
                                    โดยใช้รหัสผ่านเดียวกับที่ใช้ยืนยันการส่งข้อความในการเข้าสู่ระบบ
                                </div>
                                <button
                                    className="active"
                                    onClick={() => changeFase(1)}
                                >
                                    button
                                </button>
                                <button
                                    className="white"
                                    onClick={() => changeFase(1)}
                                >
                                    button
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

TestQuickregister.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

TestQuickregister.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('Home')(TestQuickregister);
