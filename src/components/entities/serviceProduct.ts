import Specification from "./specification";

export interface AddProduct {
  name: string;
  categoryId: string;
  Specifications: Specification[];
  imageLink: string;
  price: number;
  productType: string;
}

export interface DeleteProduct {
  productId: string;
}
