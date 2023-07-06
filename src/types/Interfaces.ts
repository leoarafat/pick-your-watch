import { IProduct } from './globalTypes';

export interface iCart {
  products: IProduct[];
  total: number;
}
export interface IProductFilter {
  status: boolean;
  priceRange: number;
}
