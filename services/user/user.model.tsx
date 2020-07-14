export interface AuthLogin {
  token: string;
  passcode: string;
  error: ErrorMessage;
}
export interface ErrorMessage {
  code: string;
  erromessagerText: string;
}
