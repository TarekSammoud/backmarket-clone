import { Product } from './product';
import { ProductConditionRating } from './product-condition-rating';
import { User } from '../user/user';

export interface ProductSupply {
  id?: number;
  product: Product;
  supplier: User;
  batteryPercentage: number;
  conditionRating: ProductConditionRating;
  price: number;
  color: string;
  storageCapacity: number;
  isAvailable?: boolean;
  addedAt?: Date;
}
