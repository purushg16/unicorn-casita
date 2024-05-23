import { create } from "zustand";

interface PaymentStateStore {
  isVerified: boolean;
  setIsVerified: (status: boolean) => void;
  isVerifying: boolean;
  setIsVerifying: (status: boolean) => void;
}

const usePaymentStore = create<PaymentStateStore>((set) => ({
  isVerifying: false,
  setIsVerifying: (status) => set({ isVerifying: status }),
  isVerified: false,
  setIsVerified: (status) => set({ isVerified: status }),
}));

export default usePaymentStore;
