import axios from 'axios';
import AppConfig from '../../appConfig';

import { UserAddress, UpdateUserAddress } from '../user/user.model';
const ApiUserAddress = `${AppConfig.API_URL_ACCOUNT}/api/user/address`;
const ApiUpdateUserAddress = `${AppConfig.API_URL_ACCOUNT}/api/user/ship-to-address`;
export async function GetAddress ():Promise<UserAddress>{
  const res = await axios.get(ApiUserAddress);
  const data:UserAddress = res.data
  return data;

}

export async function UpdateAddress (data:UpdateUserAddress){
  const res = await axios.put(ApiUpdateUserAddress,data)
  console.log(res)
}