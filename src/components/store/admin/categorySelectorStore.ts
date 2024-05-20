import { create } from "zustand";
import Category from "../../entities/category";

interface CategorySelectorStore {
  category: Category | undefined;
  selectCategory: (category: Category) => void;
  removeCategory: () => void;
}

const useCategorySelectorStore = create<CategorySelectorStore>((set) => ({
  category: undefined,
  selectCategory: (category) => set({ category }),
  removeCategory: () => set({ category: undefined }),
}));

export default useCategorySelectorStore;
