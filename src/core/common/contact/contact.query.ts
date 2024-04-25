import { useQuery } from 'react-query';
import { getContactFilesService, getContactService } from './contact.service';

export const useContact = () => (
    useQuery<IContactResponse, Error>('contact', async () => {
       return (await getContactService()).data;
    })
);

export const useContactFiles = () => (
    useQuery<IContactFileResponse, Error>('contactFiles', async () => {
        return (await getContactFilesService()).data;
    })
);
