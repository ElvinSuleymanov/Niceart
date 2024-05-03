import { useQuery } from 'react-query';
import { getLeadsService } from './about.service';

export const useLeads = () => {
  return useQuery<Abouts[], Error>('Abouts', () => {
    return getLeadsService();
  });
};
