import { create } from "zustand";

interface DeliveryModalStore {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const useDeliveryModalStore = create<DeliveryModalStore>((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
}));

export default useDeliveryModalStore;
