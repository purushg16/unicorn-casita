import { create } from "zustand";

export type PaymentStatus =
  | "pending"
  | "success"
  | "failed"
  | "refunded"
  | "partially-refunded";

export type OrderStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface OrderQueryStore {
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;

  setPaymentStatus: (status: PaymentStatus) => void;
  setOrderStatus: (status: OrderStatus) => void;
}

const useOrderQueryStore = create<OrderQueryStore>((set) => ({
  paymentStatus: "success",
  orderStatus: "pending",

  setPaymentStatus: (paymentStatus) => set({ paymentStatus }),
  setOrderStatus: (orderStatus) => set({ orderStatus }),
}));

export default useOrderQueryStore;
