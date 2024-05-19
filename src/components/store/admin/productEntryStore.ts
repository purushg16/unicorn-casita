import { create } from "zustand";
import Product, { ProductAttribute } from "../../entities/product";

interface ProductEntry {
  product: Product | undefined;
  referenceProduct: Product | undefined;
}

interface ProductEntryAction {
  resetEntry: () => void;
  appendNewEntry: (product: Product) => void;
  setName: (name: string) => void;
  setSalesPrice: (price: number) => void;
  setDescription: (desc: string) => void;
  toggleAttribute: () => void;
  setAttributeName: (attributeName: string) => void;
  addAttributes: (attribute: ProductAttribute) => void;
  removeAttribute: (attribute: ProductAttribute) => void;

  setMrp: (mrp: number) => void;
  toggleStockAvaiability: () => void;
  setCategory: (category: string) => void;
  removeImage: (img: string) => void;
  resetImage: () => void;
  clearEntry: () => void;
}

const useProductEntryStore = create<ProductEntry & ProductEntryAction>(
  (set) => ({
    product: {
      name: "",
      categoryId: "",
      imageLink: [],
      salesPrice: 0,
      specifications: "",
      attributeName: "",
      attributes: [],
      description: "",
      isAttribute: false,
      mrp: 0,
      stock: "in-stock",
    },
    referenceProduct: {
      name: "",
      categoryId: "",
      imageLink: [],
      salesPrice: 0,
      specifications: "",
      attributeName: "",
      attributes: [],
      description: "",
      isAttribute: false,
      mrp: 0,
      stock: "in-stock",
    },

    setName: (name) =>
      set((store) => ({ product: { ...store.product!, name: name } })),

    setDescription: (desc) =>
      set((store) => ({ product: { ...store.product!, description: desc } })),

    setAttributeName: (attributeName) =>
      set((store) => ({
        product: { ...store.product!, attributeName: attributeName },
      })),

    addAttributes: (attribute) =>
      set((store) => ({
        product: {
          ...store.product!,
          attributes: store.product?.attributes
            .map((att) => att.value) // checking if the key value already exists
            .includes(attribute.value)
            ? store.product?.attributes || []
            : [...(store.product?.attributes || []), attribute],
        },
      })),

    removeAttribute: (attribute) =>
      set((store) => ({
        product: {
          ...store.product!,
          attributes:
            store.product?.attributes.filter((att) => att !== attribute) || [],
        },
      })),

    toggleAttribute: () =>
      set((store) => ({
        product: {
          ...store.product!,
          isAttribute: !store.product?.isAttribute,
        },
      })),

    setMrp: (mrp) =>
      set((store) => ({ product: { ...store.product!, mrp: mrp } })),

    toggleStockAvaiability: () =>
      set((store) => ({
        product: {
          ...store.product!,
          stock: store.product?.stock === "sold-out" ? "in-stock" : "sold-out",
        },
      })),

    setSalesPrice: (price) =>
      set((store) => ({ product: { ...store.product!, salesPrice: price } })),

    setCategory: (category) =>
      set((store) => ({
        product: { ...store.product!, categoryId: category },
      })),

    resetEntry: () => set((store) => ({ product: store.referenceProduct })),
    clearEntry: () => set({ product: undefined, referenceProduct: undefined }),
    appendNewEntry: (product) =>
      set({ product: product, referenceProduct: product }),
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
  })
);

export default useProductEntryStore;
