import { useQuery } from "react-query";
import { getLeadsService } from "./leads.service";

export const useLeads = () => {
  return useQuery<any[], Error>('Leads', () => {
    return getLeadsService();
  });
};
