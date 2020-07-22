import axios from 'axios';

export async function GessstPackageAll(): Promise<any> {
  const res = await axios.get('/',{});
  return res.data;
}
