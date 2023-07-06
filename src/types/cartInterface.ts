import { IProduct } from './globalTypes';

export interface iCart {
  products: IProduct[];
  total: number;
}
