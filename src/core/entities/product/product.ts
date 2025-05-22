import { ProductCategory } from "./product-category";
import { ProductMedia } from "./product-media";
import { ProductSupply } from "./product-supply";

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  mediaList?: ProductMedia[];
  createdAt?: Date;
  updatedAt?: Date;
  supplies?: ProductSupply[];
}
