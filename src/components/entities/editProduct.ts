import Specification from "./specification";

export interface EditProduct {
  productId: string;
  name?: string;
  categoryId?: string;
  Specifications?: Specification[];
  imageLink?: string;
  price?: number;
  productType?: string;
}
