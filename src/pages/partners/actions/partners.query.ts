import { useQuery } from 'react-query';
import {  getAboutPartnersService, getCompanyCardService } from './partners.service';
import { Company } from '../partners';

export const useGetPartnersCompamy = () => {
  return useQuery<Company[], Error>('Partner Company Card', () => {
    return getCompanyCardService();
  });
};

export const useAboutPartners = () => {
  return useQuery<Company[], Error>('About Partners', () => {
    return getAboutPartnersService();
  });
};
