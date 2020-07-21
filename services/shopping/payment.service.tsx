import axios from 'axios';
import { PackageAll } from './pricing.model';
import AppConfig from '../../appConfig';

const packageAll = `${AppConfig.API_URL_SHOPPING}/product/package`;
export async function getPackageAll(params: PackageAll): Promise<any> {
  const res = await axios.get(packageAll, {
    params: {
      ...params,
    },
  });
  return res.data;
}
