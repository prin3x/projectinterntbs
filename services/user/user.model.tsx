export interface AuthLogin {
  token: string;
  passcode: string;
  error: ErrorMessage;
}

export interface Register {
  accID: string;
  data: RegisterUser | {};
  error: ErrorMessage;
}
export interface RegisterUser {
  firstname: string;
  lastname: string;
  msisdn: string;
  email: string;
  isReceiveNews: string;
}
export interface ErrorMessage {
  code: string;
  erromessagerText: string | '';
}
