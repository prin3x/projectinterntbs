import axios from 'axios';
import { AuthLogin } from './user.model';
import Cookie from 'js-cookie';

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
export default login;
