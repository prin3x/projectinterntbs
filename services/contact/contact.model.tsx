export interface sendContact {
  token: string;
  isCompletedProfile: string;
  passcode: string;
  error: ErrorMessage;
}

export interface ErrorMessage {
  code: string;
  erromessagerText: string | '';
}
