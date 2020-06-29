// import axios from 'axios';
import { AuthLogin } from './user.model';
import Cookie from 'js-cookie';

export async function login(
  username: string,
  password: string
): Promise<AuthLogin> {
  console.log('user.serviec : authLogin');
  try {
    // let resultAPI = await axios.post(process.env.API_URL + '/auth', {
    //   username,
    //   password,
    // });
    // console.log(resultAPI);
    console.log(username);
    console.log(password);
    let loginResponse: AuthLogin = {
      passcode: 'test passcode',
      error: {
        code: '',
        erromessagerText: '',
      },
    };
    Cookie.set('PASSCODE', loginResponse.passcode, { expires: 0.15 });
    return loginResponse;
  } catch (error) {
    console.log(error);
    let loginResponse: AuthLogin = {
      passcode: '',
      error: {
        code: 'login.invalid.userpass',
        erromessagerText: 'Invalid username/password',
      },
    };
    return loginResponse;
  }
}

export default login;

export const logout = () => {
  // token.deleteToken();
};
