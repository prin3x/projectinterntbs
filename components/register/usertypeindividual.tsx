import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
type Inputs = {
  example: string;
  exampleRequired: string;
  username: string;
  password: string;
  auth: string;
};
const UsertypeIndividual = ({ t }: any) => {
  let { register, handleSubmit, setError, errors } = useForm<Inputs>();
  const onSubmit = async (data: any) => {
    console.log('run : onSubmit');
    // const user = await login(data.username, data.password);
    // if (user.error.code !== '') {
    //   setError('auth', {
    //     type: user.error.code,
    //     message: '',
    //   });
    // } else {
    //   Router.push('/');
    // }
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
  return (
    <div className="userType_section">
      <h2>{t('usertypeindividual.header')}</h2>
      <p
        className="sub_userType"
        dangerouslySetInnerHTML={{ __html: t('usertypeindividual.title') }}
      >
        {/* {t('usertypeindividual.p1')} <span>{t('usertypeindividual.span1')}</span> */}
      </p>
      <div className="form-indiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>{t('usertypeindividual.form.title')}</h3>
          <input
            type="text"
            className="input-txt01"
            placeholder={t('usertypeindividual.form.taxnumber')}
            id="cardid"
            name="cardid"
            ref={register({ required: true })}
          />
          <input
            type="text"
            className="input-txt01"
            placeholder={t('usertypeindividual.form.address')}
            ref={register({ required: true })}
          />
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.street')}
              ref={register({ required: true })}
            />
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.district')}
              ref={register({ required: true })}
            />
          </div>
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.county')}
              ref={register({ required: true })}
            />
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.province')}
              ref={register({ required: true })}
            />
          </div>
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.postcode')}
              ref={register({ required: true })}
            />
          </div>
          <hr className="form-user"></hr>
          <h3>{t('usertypeindividual.taxinvoiceaddress.title')}</h3>
          <div className="select-address">
            <label>
              <input type="radio" name="light" />
              <span className="design"></span>
              <span className="text">
                {t('usertypeindividual.taxinvoiceaddress.radio1')}
              </span>
            </label>

            <label>
              <input type="radio" name="light" />
              <span className="design"></span>
              <span className="text">
                {t('usertypeindividual.taxinvoiceaddress.radio2')}
              </span>
            </label>
          </div>
          <input
            type="text"
            className="input-txt01"
            placeholder={t('usertypeindividual.form.address')}
          />
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.street')}
            />
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.district')}
            />
          </div>
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.county')}
            />
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.province')}
            />
          </div>
          <div className="input-twocolumn">
            <input
              type="text"
              className="input-txt02"
              placeholder={t('usertypeindividual.form.postcode')}
            />
          </div>
          <div className="btn-regis">
            {/* <a className="btn v2" href="#">
              {t('usertypeindividual.taxinvoiceaddress.saveBtn')}
            </a> */}
            <input
              className="btn v2"
              style={{ minWidth: '180px' }}
              type="submit"
              value={t('usertypeindividual.taxinvoiceaddress.saveBtn')}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
UsertypeIndividual.getInitialProps = async () => ({
  namespacesRequired: ['UsertypeIndividual', 'ErrorMessage'],
});

UsertypeIndividual.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(
  'UsertypeIndividual',
  'ErrorMessage'
)(UsertypeIndividual);
