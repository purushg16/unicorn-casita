export interface CartProduct {
  productId: string;
  quantity: number;
  attrValue: string;
}

export interface CartCheckout {
  products: CartProduct[];
  address: string;
  district: string;
  state: string;
  pincode: number;
  contact: number;
}
