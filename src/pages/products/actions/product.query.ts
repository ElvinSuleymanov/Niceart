import { useQuery } from 'react-query';
import { getProductCardService  } from './product.service';
import ProductModel from '../models/products.model';

export const useProduct = () => {
  return useQuery<ProductModel[], Error>('Product', () => {
    return getProductCardService();
  });
};

