import { useQuery } from 'react-query';
import { getLeadsService } from './leads.service';

export const useLeads = () => {
  return useQuery<Leads[], Error>('Leads', () => {
    return getLeadsService();
  });
};

