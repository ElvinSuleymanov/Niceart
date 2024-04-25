import { useQuery } from 'react-query';
import { getProductDetailService } from './product-query.service';

export const useProductDetail = (productId: string) => {
  return useQuery(['product', productId], () => getProductDetailService(productId));
};
