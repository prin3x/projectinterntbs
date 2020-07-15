import axios from 'axios';
import { AuthLogin, Register } from './user.model';
import Cookie from 'js-cookie';
// ------------------  login --------------------------------------------
export async function login(
  username: string,
  password: string
): Promise<AuthLogin> {
  try {
    let resultAPI = await axios.post(process.env.API_URL + '/api/auth', {
      username,
      password,
    });
    // let resultAPI = await axios.get(
    //   'https://api.github.com/repos/vercel/next.js'
    // );
    console.log(resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return loginFail();
    }
    const data = resultAPI.data;
    let loginResponse: AuthLogin = {
      token: data.token,
      passcode: data.passcode,
      error: {
        code: '',
        erromessagerText: '',
      },
    };
    localStorage.setItem(
      'TBS_token',
      JSON.stringify({ token: loginResponse.token })
    );
    Cookie.set('PASSCODE', loginResponse.passcode, { expires: 0.15 });
    return loginResponse;
  } catch (error) {
    localStorage.setItem('TBS_token', JSON.stringify({}));
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return loginFail(errorData.code, errorData.errorMessageText);
  }
}
export async function checktoken(): Promise<boolean> {
  try {
    const strlocalStorage = localStorage.getItem('TBS_token');
    const cookiePasscode = Cookie.get('PASSCODE');
    if (strlocalStorage === null || cookiePasscode === undefined) {
      logout();
      return false;
    }
    const objlocalStorage = JSON.parse(strlocalStorage);
    if (
      objlocalStorage.token === '' ||
      Object.keys(objlocalStorage).length === 0
    ) {
      logout();
      return false;
    }
    // let resultChecktoken = await axios.post(process.env.API_URL + '/auth', {});
    const resultChecktoken = true;
    if (resultChecktoken) {
      return resultChecktoken;
    }
    logout();
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export const logout = () => {
  localStorage.setItem('TBS_token', JSON.stringify({}));
  Cookie.remove('PASSCODE');
};
export const loginFail = (code = '400', errorMessageText = '') => {
  let loginResponse: AuthLogin = {
    token: '',
    passcode: '',
    error: {
      code: code ? code : 'auth.user.fail',
      erromessagerText: errorMessageText,
    },
  };
  return loginResponse;
};
// ------------------ end login --------------------------------------------
// ------------------ register --------------------------------------------

export async function registerUser(param: any): Promise<Register> {
  try {
    localStorage.setItem(
      'TBS_resendregister',
      JSON.stringify({
        accID: '200605',
        msisdn: '0847827374',
        email: 'pachara.tho@1moby.com',
      })
    );
    return {
      accID: '200605',
      data: {
        firstname: 'a',
        lastname: 'b',
        msisdn: '0847827374',
        email: 'pachara.tho@1moby.com',
        isReceiveNews: 'false',
      },
      error: { code: '', erromessagerText: '' },
    };

    let { firstname, lastname, tel, email, news } = param;
    const is_receive_news = String(news);
    const msisdn = tel;
    let resultAPI = await axios.post(process.env.API_URL + '/api/user', {
      firstname,
      lastname,
      msisdn,
      email,
      is_receive_news,
    });

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        accID: '',
        data: {},
        error: { code: 'registerdto.fail', erromessagerText: '' },
      };
    }
    const data = resultAPI.data;
    let dataRegister: Register = {
      accID: data.accID,
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { accID: '', data: {}, error: errorData };
  }
}
export async function resendRegister(): Promise<boolean> {
  const strlocalStorage = localStorage.getItem('TBS_resendregister');
  if (strlocalStorage === null) {
    return false;
  }
  const objlocalStorage = JSON.parse(strlocalStorage);
  console.log('objlocalStorage : ', objlocalStorage);
  return true;
}
// ------------------ end register --------------------------------------------

export default login;
