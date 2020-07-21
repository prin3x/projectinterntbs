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
export interface QuickRegisterStep1 {
  data: QuickRegisterStep1Data;
  error: ErrorMessage;
}
export interface QuickRegisterStep1Data {
  msisdn: string;
}
export interface QuickRegisterStep2 {
  welcome_token: string;
  data: QuickRegisterStep2Data | {};
  error: ErrorMessage;
}
export interface QuickRegisterStep2Data {
  msisdn: string;
  pin: number;
}
export interface QuickRegisterStep3 {
  data: QuickRegisterStep3Data | {};
  error: ErrorMessage;
}
export interface QuickRegisterStep3Data {
  welcomeToken: string;
}
export interface ErrorMessage {
  code: string;
  erromessagerText: string | '';
}
