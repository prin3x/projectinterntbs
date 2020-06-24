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
      error: false,
      errorText: '',
    };
    Cookie.set('PASSCODE', loginResponse.passcode, { expires: 0.15 });
    return loginResponse;
  } catch (error) {
    console.log(error);
    let loginResponse: AuthLogin = {
      passcode: '',
      error: true,
      errorText: 'ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง #1',
    };
    return loginResponse;
  }
}

export default login;

export const logout = () => {
  // token.deleteToken();
};
