import { useQuery } from 'react-query';
import { getLeadsService, getVideoSercice } from './home.service';

export const useVideo = () => (
useQuery<IVideo, Error>('video', () => (
     getVideoSercice()
))
);

export const useLeads = () => (
     useQuery<any, Error>('leads', () => (
          getLeadsService()
     ))
);