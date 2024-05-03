import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const getContactService = async () => (
   await axiosInstance.get(API.contact)
);

export const getContactFilesService = async () => (
   await axiosInstance.get(API.contactFiles)
);