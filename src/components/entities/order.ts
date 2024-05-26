import { ProductAttribute } from "./product";

interface OrderProduct {
  name: string;
  productId: string;
  attributes: ProductAttribute[];
  isAttribute: boolean;
  salesPrice: number;
  imageLink: string[];
}

export interface VerifyOrder {
  orderId: string;
  paymentId: string;
  xRazorpaySignature: string;
}

export interface Order {
  _id?: string;
  createdAt?: string;
  orderId: string;
  razorpayOrderId: string;
  customerName: string;
  product: {
    productId: OrderProduct;
    quantity: number;
  }[];
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
