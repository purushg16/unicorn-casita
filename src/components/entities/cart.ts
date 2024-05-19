import Product from "./product";

export interface CartCheckout {
  products: Product[];
  address: string;
  district: string;
  state: string;
  pincode: number;
  contact: number;
}
