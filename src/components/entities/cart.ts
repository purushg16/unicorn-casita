export interface CartProduct {
  productId: string;
  quantity: number;
  attrValueId: string;
}

export interface CartCheckout {
  products: CartProduct[];
  customerName: string;
  address: string;
  district: string;
  state: string;
  pincode: number;
  contact: number;
  email: string;
}
