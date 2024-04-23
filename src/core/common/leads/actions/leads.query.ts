import { useQuery } from 'react-query';
import { getLeadsService } from './leads.service';

export const useGetLeads = (leadsId?:string) => {
  return useQuery<any[], Error>('Leads', () => {
    return getLeadsService();
  });
};

