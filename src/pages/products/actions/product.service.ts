import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import ProductModel from '../models/products.model';

export const getProductCardService = () => {
  return axiosInstance.get(API.products).then((res) => {
    return res.data.record as ProductModel[];
  });
};
