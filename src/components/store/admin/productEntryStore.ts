import { create } from "zustand";
import Product, { ProductAttribute } from "../../entities/product";
import { v4 } from "uuid";

interface ProductEntry {
  product: Product | undefined;
  referenceProduct: Product | undefined;
}

export type stock = "in-stock" | "sold-out";

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

  setSpecifications: (id: string, key: string, value: string) => void;
  addSpecifications: () => void;
  removeSpecifications: (id: string) => void;
  clearSpecs: () => void;

  setWholesale: (wholesale: boolean) => void;
  setBestSeller: (bestSeller: boolean) => void;
  setMrp: (mrp: number) => void;
  toggleStockAvaiability: (stock: stock) => void;
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
      specifications: [],
      attributeName: "",
      attributes: [],
      description: "",
      isAttribute: false,
      mrp: 0,
      stock: "in-stock",
      wholesale: false,
      bestSeller: false,
    },
    referenceProduct: {
      name: "",
      categoryId: "",
      imageLink: [],
      salesPrice: 0,
      specifications: [],
      attributeName: "",
      attributes: [],
      description: "",
      isAttribute: false,
      mrp: 0,
      stock: "in-stock",
      wholesale: false,
      bestSeller: false,
    },

    setBestSeller: (bestSeller) =>
      set((store) => ({
        product: { ...store.product!, bestSeller: bestSeller },
      })),
    setWholesale: (wholesale) =>
      set((store) => ({
        product: { ...store.product!, wholesale: wholesale },
      })),

    setSpecifications: (id, key, value) =>
      set((store) => ({
        product: {
          ...store.product!,
          specifications:
            store.product?.specifications.map((specification) => {
              return specification.id === id
                ? { ...specification, key: key, value: value }
                : specification;
            }) || [],
        },
      })),

    addSpecifications: () =>
      set((store) => ({
        product:
          {
            ...store.product!,
            specifications: [
              ...(store.product?.specifications || []),
              { id: v4(), key: "", value: "" },
            ],
          } || [],
      })),

    removeSpecifications: (id) =>
      set((store) => ({
        product: {
          ...store.product!,
          specifications:
            store.product?.specifications.filter((s) => s.id !== id) || [],
        },
      })),

    clearSpecs: () =>
      set((store) => ({ product: { ...store.product!, specifications: [] } })),

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
          salesPrice: !store.product?.isAttribute
            ? 0
            : store.product?.salesPrice,
          attributeName: store.product?.isAttribute
            ? ""
            : store.product?.attributeName || "",
          attributes: store.product?.isAttribute
            ? []
            : store.product?.attributes || [],
          isAttribute: !store.product?.isAttribute,
        },
      })),

    setMrp: (mrp) =>
      set((store) => ({ product: { ...store.product!, mrp: mrp } })),

    toggleStockAvaiability: (stock) =>
      set((store) => ({
        product: {
          ...store.product!,
          stock: stock,
        },
      })),

    setSalesPrice: (price) =>
      set((store) => ({
        product: { ...store.product!, salesPrice: price, isAttribute: false },
      })),

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
