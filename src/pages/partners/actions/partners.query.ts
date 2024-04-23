import { useQuery } from 'react-query';
import { getPartnersService } from './partners.service';
import PartnersModel from '../models/partners.model';

export const useGetPartners = () => {
  return useQuery<PartnersModel[], Error>('Partner Company Card', () => {
    return getPartnersService();
  });
};
