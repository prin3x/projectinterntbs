import axios from 'axios';
import AppConfig from '../../appConfig';

import { UserAddress, UpdateUserAddress } from '../user/user.model';
import { FormBodyPayment } from './pricing.model';
const ApiUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/address`;
const ApiUpdateUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/ship-to-address`;
const ApiBankTransferSubmit = `${AppConfig.API_URL_SHOPPING}/payment/banktransfer`
const ApiCredit2C2PPaymentSubmit = `${AppConfig.API_URL_SHOPPING}/payment/credit-card`
export async function GetAddress ():Promise<UserAddress>{
  const res = await axios.get(ApiUserAddress);
  const data:UserAddress = res.data
  return data;

}

export async function UpdateAddress (data:UpdateUserAddress){
  const res = await axios.put(ApiUpdateUserAddress,data)
  return res
}


export async function BankTransferSubmit(data: FormBodyPayment){
  const res = await axios.post(ApiBankTransferSubmit,data)
  return res.data
}

export async function Credit2C2PPaymentSubmit(data: FormBodyPayment){
  const res = await axios.post(ApiCredit2C2PPaymentSubmit,data)
  return res.data
}