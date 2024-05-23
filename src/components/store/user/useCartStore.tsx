import { create } from "zustand";
import { CartCheckout, CartProduct } from "../../entities/cart";

export interface StoreCartProduct extends CartProduct {
  price: number;
  productName: string;
  imageLink: string;
}

interface UserCartStore extends CartCheckout {
  products: StoreCartProduct[];
}

interface UserCartActions {
  addProduct: (
    productId: string,
    attribute: string,
    quantity: number,
    price: number,
    productName: string,
    imageLink: string
  ) => void;
  removeProduct: (productId: string, attribute: string) => void;
  updateQuanitity: (
    productId: string,
    quantity: number,
    attrvalue: string
  ) => void;
  setAttributeValue: (productId: string, attribute: string) => void;
  clearCart: () => void;
}

const useUserCartStore = create<UserCartStore & UserCartActions>((set) => ({
  products: [],

  addProduct: (productId, attrValue, quantity, price, productName, imageLink) =>
    set((store) => ({
      products:
        store.products.findIndex((p) => p.productId === productId) === -1 || // if there is no product
        store.products.find((p) => p.productId === productId)?.attrValue !== // if there is a product with diff attribute
          attrValue
          ? [
              ...store.products,
              { productId, attrValue, quantity, price, productName, imageLink },
            ]
          : store.products.map((product) =>
              product.productId === productId && product.attrValue === attrValue
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
    })),

  removeProduct: (productId, attribute) =>
    set((store) => ({
      products: store.products.filter(
        (p) => !(p.productId === productId && p.attrValue === attribute)
      ),
    })),

  updateQuanitity: (productId, quantity, attrvalue) =>
    set((store) => ({
      products: store.products.map((product) =>
        product.productId === productId && product.attrValue === attrvalue
          ? { ...product, quantity: quantity }
          : product
      ),
    })),

  setAttributeValue: (productId, attribute) =>
    set((store) => ({
      products: store.products.map((product) =>
        product.productId === productId
          ? { ...product, attrValue: attribute }
          : product
      ),
    })),

  clearCart: () => set({ products: [] }),

  customerName: "",
  address: "",
  district: "",
  state: "",
  pincode: parseInt(""),
  contact: parseInt(""),
  email: "",
}));

export default useUserCartStore;
