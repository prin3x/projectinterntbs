import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { withTranslation } from '../../i18n';
import { sendContact } from '../../services/contact/contact.service';
const menuClick = () => {
  var elDivnice = document.getElementsByClassName('devnice-select')[0];
  if (elDivnice.classList.contains('open')) elDivnice.classList.remove('open');
  else elDivnice.classList.add('open');
};
type Inputs = {
  contactType: string;
  firstname: string;
  lastname: string;
  companyName: string;
  email: string;
  phone: string;
  desc: string;
  recaptcha: string;
  confirm: boolean;
};
const HeroSection = ({ t }: any) => {
  const [wordhead, setWordhead] = useState('contacthero.form.problem.1');
  const [successbtn, setSuccessbtn] = useState(false);
  let captcha: any;
  const setCaptchaRef = (ref: any) => {
    if (ref) {
      return (captcha = ref);
    }
  };
  let { register, handleSubmit, setValue, clearErrors, errors, reset } = useForm<Inputs>({
    defaultValues: {
      confirm: true,
      contactType: '1',
    },
  });
  const onSubmit = async (data: any) => {
    captcha.reset();

    const result = await sendContact(data);
    if (result.code !== '') {
      Swal.fire({
        icon: 'warning',
        html: t('contacthero.' + result.code),
      });
      return;
    }

    reset({
      contactType: '1',
      firstname: '',
      lastname: '',
      companyName: '',
      email: '',
      phone: '',
      desc: '',
      confirm: true,
    });
    setWordhead('contacthero.form.problem.1');

    setSuccessbtn(false);
    Swal.fire({
      icon: 'success',
      text: t('contacthero.Swal.titlesuccess'),
    });
  };
  const handleErorr = (error: any) => {
    if (error.firstname) {
      return 'contacthero.validate.firstname.' + error.firstname.type;
    }
    if (error.lastname) {
      return 'contacthero.validate.lastname.' + error.lastname.type;
    }
    if (error.phone) {
      return 'contacthero.validate.phone.' + error.phone.type;
    }
    if (error.email) {
      return 'contacthero.validate.email.' + error.email.type;
    }
    if (error.recaptcha) {
      return 'contacthero.validate.recaptcha.' + error.recaptcha.type;
    }
    if (error.confirm) {
      return 'contacthero.validate.confirm.' + error.confirm.type;
    }
    if (error.desc) {
      return 'contacthero.validate.desc.' + error.desc.type;
    }
    if (error.res) {
      if (error.res.type !== '400') return 'contacthero.' + error.res.type;
      return 'ErrorMessage:' + error.res.type;
    }

    if (error.auth) {
      return 'ErrorMessage:' + error.auth.type;
    }
  };
  const setreCaptcha = (value: any) => {
    setValue('recaptcha', value, { shouldValidate: true });
    clearErrors('recaptcha');
  };
  React.useEffect(() => {}, []);
  return (
    <div className="container">
      <style jsx>{`
        .nice-select.open .list {
          width: 100%;
          opacity: 1;
          pointer-events: auto;
          -webkit-transform: scale(1) translateY(0);
          -ms-transform: scale(1) translateY(0);
          transform: scale(1) translateY(0);
        }
        .nice-select .option:hover,
        .nice-select .option.focus,
        .nice-select .option.selected.focus {
          background-color: #10b7e4;
          color: #000;
        }
      `}</style>
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('contacthero.header')}</h3>
        </div>

        <div className="col-12">
          <div className="contact__box">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="contact__left">
                  <a href="https://goo.gl/maps/LrntacVbBFvyB5Uv6" target="_blank">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/contact.png`}
                      className="img-fluid left__img"
                      alt=""
                    />
                  </a>

                  <h3>{t('contacthero.contact.header')}</h3>
                  <ul>
                    <li style={{ marginTop: '10px' }}>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/location.png`}
                        alt=""
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t('contacthero.contact.address'),
                        }}
                      ></p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/call.png`}
                        alt=""
                      />
                      <p><a href="tel:027986000">{t('contacthero.contact.phone')}</a></p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/calendar.png`}
                        alt=""
                      />
                      <p>{t('contacthero.contact.fax')}</p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail_2.png`}
                        alt=""
                      />
                      <p><a href="mailto:contact@thaibulksms.com">contact@thaibulksms.com</a></p>
                    </li>
                    <li>
                      <img
                        className="lazyload"
                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/clock.png`}
                        alt=""
                      />
                      <p>{t('contacthero.contact.time')}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form_part">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <select name="se1" id="" className="input__box v2">
                      <option value="">ติดต่อฝ่ายขาย</option>
                      <option value="">พบปัญหาการใช้งาน</option>
                      <option value="">สอบถามข้อมูลบริการ</option>
                      <option value="">แนะนำติชม</option>
                    </select> */}
                    <div
                      className="nice-select input__box v2 devnice-select"
                      onClick={menuClick}
                    >
                      <span className="">{t(wordhead)}</span>
                      <ul className="list">
                        <li
                          // className="option selected"
                          className="option"
                          data-value=""
                          onClick={() => {
                            setValue('contactType', '1', {
                              shouldValidate: true,
                            });
                            setWordhead('contacthero.form.problem.1');
                          }}
                        >
                          {t('contacthero.form.problem.1')}
                        </li>
                        <li
                          className="option "
                          data-value=""
                          onClick={() => {
                            setValue('contactType', '2', {
                              shouldValidate: true,
                            });
                            setWordhead('contacthero.form.problem.2');
                          }}
                        >
                          {t('contacthero.form.problem.2')}
                        </li>
                      </ul>
                    </div>
                    <input
                      ref={register({
                        required: true,
                      })}
                      id="contactType"
                      name="contactType"
                      type="hidden"
                    />
                    <input
                      ref={register({ required: true })}
                      id="firstname"
                      name="firstname"
                      type="text"
                      className="input__box v2"
                      placeholder={t('contacthero.form.firstname')}
                    />

                    <input
                      ref={register({ required: true })}
                      id="lastname"
                      name="lastname"
                      type="text"
                      className="input__box v2"
                      placeholder={t('contacthero.form.lastname')}
                    />
                    <input
                      ref={register()}
                      id="companyName"
                      name="companyName"
                      type="text"
                      className="input__box v2"
                      placeholder={t('contacthero.form.companyName')}
                    />
                    <input
                      ref={register({
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      id="email"
                      name="email"
                      type="text"
                      className="input__box v2"
                      placeholder={t('contacthero.form.email')}
                    />
                    <input
                      ref={register({
                        required: true,
                        validate: {
                          pattern: (value) =>
                            /^[0][6||8-9][0-9]{8}$/i.test(value) ||
                            /^[0][2][0-9]{7}$/i.test(value),
                        },
                      })}
                      id="phone"
                      name="phone"
                      type="text"
                      className="input__box v2"
                      placeholder={t('contacthero.form.phone')}
                    />

                    <textarea
                      ref={register({ required: true })}
                      id="desc"
                      name="desc"
                      className="input__box v2"
                      placeholder={t('contacthero.form.detail')}
                    ></textarea>
                    <input
                      ref={register({
                        required: true,
                      })}
                      id="recaptcha"
                      name="recaptcha"
                      type="hidden"
                    />
                    <ReCAPTCHA
                      ref={(r) => setCaptchaRef(r)}
                      sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                      onChange={setreCaptcha}
                    />
                    <label className="checkbox-wrapper">
                      {t('contacthero.form.checkbox')}
                      <input
                        type="checkbox"
                        id="confirm"
                        name="confirm"
                        ref={register({ required: true })}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <div
                      style={{
                        color: '#e20000',
                        textAlign: 'center',
                        margin: '15px',
                      }}
                    >
                      {t(handleErorr(errors))}
                    </div>
                    <div
                      className="button__wrapper text-center"
                      style={{ marginTop: '50px' }}
                    >
                      <button type="submit" className="btn v8" disabled={successbtn}>
                        {t('contacthero.form.submitBtn')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['ContactHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('ContactHeroSection')(HeroSection);
