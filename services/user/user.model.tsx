export interface AuthLogin {
  passcode: string;
  error: ErrorMessage;
}
export interface ErrorMessage {
  code: string;
  erromessagerText: string;
}
