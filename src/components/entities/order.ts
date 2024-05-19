interface OrderProduct {
  productId: string;
  quantity: number;
}

export interface VerifyOrder {
  orderId: string;
  paymentId: string;
  "X-razorpay-signature": string;
}

export default interface Order {
  orderId: string;
  customerId: string;
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
