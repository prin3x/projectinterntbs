import axios from 'axios';
import AppConfig from '../../appConfig';

import { UserAddress, UpdateUserAddress } from '../user/user.model';
import { FormBodyPayment } from './pricing.model';
const ApiUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/address`;
const ApiUpdateUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/ship-to-address`;
const ApiBankTransferSubmit = `${AppConfig.API_URL_SHOPPING}/payment/banktransfer`
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