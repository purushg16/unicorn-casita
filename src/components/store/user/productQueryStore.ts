import { create } from "zustand";
import Category from "../../entities/category";

interface ProductQueryStore {
  category: Category | undefined;
  setCategory: (category: Category) => void;
  removeCategory: () => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  category: undefined,
  setCategory: (category) => set({ category }),
  removeCategory: () => set({ category: undefined }),
}));

export default useProductQueryStore;
