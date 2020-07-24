import axios from 'axios';
import { PackageAll } from './pricing.model';
import AppConfig from '../../appConfig';

const packageFilter = `${AppConfig.API_URL_SHOPPING}/product/package`;
const packageAll = `${AppConfig.API_URL_SHOPPING}/product/package-all`;
export async function GetPackageFilter(params: PackageAll): Promise<any> {
  const res = await axios.get(packageFilter, {
    params: {
      ...params,
    },
  });
  return res.data;
}


export async function GetPackageAll(): Promise<any> {
  const res = await axios.get(packageAll);
  return res.data;
}