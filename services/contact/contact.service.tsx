import axios from 'axios';
import { sendContact } from './contact.model';

export async function sendContact(param: any) {
  try {
    let resultAPI = await axios.post(
      process.env.NEXT_PUBLIC_API_URL_ACCOUNT + '/user',
      param
    );

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        accID: '',
        data: {},
        error: { code: 'registerdto.fail', erromessagerText: '' },
      };
    }
    const data = resultAPI.data;
    let dataRegister = {
      accID: data.accID,
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    localStorage.setItem(
      'TBS_resendRegisterSMSToken',
      JSON.stringify({ token: data.resendRegisterSMSToken })
    );
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { accID: '', data: {}, error: errorData };
  }
}

export default sendContact;
