interface OrderProduct {
  productId: string;
  quantity: number;
  attrValue: string;
}

export interface VerifyOrder {
  orderId: string;
  paymentId: string;
  "X-razorpay-signature": string;
}

export interface Order {
  _id?: string;
  createdAt?: string;
  orderId: string;
  razorpayOrderId: string;
  customerName: string;
  product: OrderProduct[];
  totalBill: number;
  paymentStatus:
    | "created"
    | "success"
    | "failed"
    | "refunded"
    | "partial-refund";
  orderStatus: "pending" | "confirmed" | "completed" | "cancelled";
  shippingStatus: "unshipped" | "shipped";
  paymentId: string;
  address: string;
  district: string;
  state: string;
  pincode: string;
  contact: number;
  shippingProvider: string;
  trackingNumber: string;
  email: string;
}

export interface UserOrder {
  _id: string;
  createdAt: string;
  orderId: string;
  totalBill: number;
  paymentStatus:
    | "created"
    | "success"
    | "failed"
    | "refunded"
    | "partial-refund";
  orderStatus: "pending" | "confirmed" | "completed" | "cancelled";
  shippingStatus: "unshipped" | "shipped";
}
