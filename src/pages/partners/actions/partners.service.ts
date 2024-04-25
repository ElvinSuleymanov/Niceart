import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { Company } from '../partners';
export const getCompanyCardService = (): Promise<Company[]> => {
  return axiosInstance.get(API.partners).then((res: { data: { record: Company[] } }) => {
    return res.data.record;
  });
};
export const getAboutPartnersService = (): Promise<Company[]> => {
  return axiosInstance.get(API.partners).then((res:{ data: { record: Company[] }}) => {
    return res.data.record;
  });
};
