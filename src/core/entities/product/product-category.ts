import { Product } from "./product";

export interface ProductCategory {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  product?: Product[]; 
}
