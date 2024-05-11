import { create } from "zustand";
import Product from "../../entities/product";

interface ProductEntry {
  product: Product | undefined;
  referenceProduct: Product | undefined;
}

interface ProductEntryAction {
  resetEntry: () => void;
  appendNewEntry: (product: Product) => void;
  setName: (name: string) => void;
  setPrice: (price: number) => void;
  setCategory: (category: string) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  removeImage: (img: string) => void;
  resetImage: () => void;
  clearEntry: () => void;
}

const useProductEntryStore = create<ProductEntry & ProductEntryAction>(
  (set) => ({
    product: undefined,
    referenceProduct: undefined,

    resetEntry: () => set((store) => ({ product: store.referenceProduct })),
    clearEntry: () => set({ product: undefined, referenceProduct: undefined }),
    appendNewEntry: (product) =>
      set({ product: product, referenceProduct: product }),

    setName: (name) =>
      set((store) => ({ product: { ...store.product!, name: name } })),

    setPrice: (price) =>
      set((store) => ({ product: { ...store.product!, price: price } })),

    setCategory: (category) =>
      set((store) => ({ product: { ...store.product!, category: category } })),

    resetImage: () =>
      set((store) => ({
        product: {
          ...store.product!,
          imageLink: store.referenceProduct?.imageLink || [],
        },
      })),
    removeImage: (img) =>
      set((store) => ({
        product: {
          ...store.product!,
          imageLink: store.product?.imageLink.filter((i) => i !== img) || [],
        },
      })),
    addTag: (tag) =>
      set((store) => ({
        product: {
          ...store.product!,
          tags: [...(store.product?.tags || []), tag],
        },
      })),
    removeTag: (tag) =>
      set((store) => ({
        product: {
          ...store.product!,
          tags: store.product?.tags.filter((t) => t !== tag) || [],
        },
      })),
  })
);

export default useProductEntryStore;
