import Product from "./product";

export interface EditProduct extends Partial<Product> {
  productId: string;
}
