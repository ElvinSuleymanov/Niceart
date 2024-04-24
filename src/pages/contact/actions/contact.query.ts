import { useQuery } from 'react-query';
import { getContactService } from './contact.service';

export const useContact = () => (
    useQuery<IResponse, Error>('contact', async () => {
       return (await getContactService()).data;
    })
);