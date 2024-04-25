import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import { Product } from 'pages/products/products';

export const getProductDetailService = (productId: string): Promise<Product> => {
  return axiosInstance.get(`${API.products}/${productId}`).then((res: { data: Product }) => {
    return res.data;
  });
};
