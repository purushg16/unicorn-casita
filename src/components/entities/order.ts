interface OrderProduct {
  productId: string;
  quantity: number;
}

export interface VerifyOrder {
  orderId: string;
  paymentId: string;
  "X-razorpay-signature": string;
}

export interface AdminOrder {
  _id?: string;
  createdAt?: string;
  orderId: string;
  customerId: {
    email: string;
    name: string;
    _id: string;
  };
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
