import { create } from "zustand";
import Category from "../../entities/category";

interface CategoryEntry {
  category: Category | undefined;
  referenceCategory: Category | undefined;
}

interface CategoryEntryAction {
  setCategory: (category: Category | undefined) => void;
  setName: (name: string) => void;
  setImageLink: (img: string) => void;
  resetCategory: () => void;
  clearEntry: () => void;
}

const useCategoryEntryStore = create<CategoryEntry & CategoryEntryAction>(
  (set) => ({
    category: undefined,
    referenceCategory: undefined,
    setCategory: (category) =>
      set({ category: category, referenceCategory: category }),
    setName: (name) =>
      set((store) => ({ category: { ...store.category!, name: name } })),
    setImageLink: (link: string) =>
      set((store) => ({ category: { ...store.category!, imageLink: link } })),
    resetCategory: () =>
      set((store) => ({ category: store.referenceCategory })),
    clearEntry: () =>
      set({ category: undefined, referenceCategory: undefined }),
  })
);

export default useCategoryEntryStore;
