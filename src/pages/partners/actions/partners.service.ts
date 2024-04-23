import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import PartnersModel from '../models/partners.model';
export const getPartnersService = (): Promise<PartnersModel[]> => {
  return axiosInstance.get(API.partners).then((res: { data: { record: PartnersModel[] } }) => {
    return res.data.record;
  });
};