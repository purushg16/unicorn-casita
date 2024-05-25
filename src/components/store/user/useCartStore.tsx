import { create } from "zustand";
import { CartCheckout, CartProduct } from "../../entities/cart";
import { ProductAttribute } from "../../entities/product";

export interface StoreCartProduct extends CartProduct {
  price: number;
  productName: string;
  imageLink: string;
  attribute: ProductAttribute;
}

interface UserCartStore extends CartCheckout {
  products: StoreCartProduct[];
  customerName: string;
  address: string;
  district: string;
  state: string;
  pincode: number;
  contact: number;
  email: string;
  setCustomerName: (name: string) => void;
  setAddress: (address: string) => void;
  setDistrict: (district: string) => void;
  setState: (state: string) => void;
  setPincode: (pincode: number) => void;
  setContact: (contact: number) => void;
  setEmail: (email: string) => void;
}

interface UserCartActions {
  addProduct: (
    productId: string,
    attribute: ProductAttribute,
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
        store.products.find((p) => p.productId === productId)?.attrValueId !== // if there is a product with diff attribute
          attrValue._id!
          ? [
              ...store.products,
              {
                productId,
                attrValueId: attrValue ? attrValue._id! : "",
                quantity,
                price,
                productName,
                imageLink,
                attribute: attrValue,
              },
            ]
          : store.products.map((product) =>
              product.productId === productId &&
              product.attrValueId === attrValue._id!
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
    })),

  removeProduct: (productId, attribute) =>
    set((store) => ({
      products: store.products.filter(
        (p) => !(p.productId === productId && p.attrValueId === attribute)
      ),
    })),

  updateQuanitity: (productId, quantity, attrvalue) =>
    set((store) => ({
      products: store.products.map((product) =>
        product.productId === productId && product.attrValueId === attrvalue
          ? { ...product, quantity: quantity }
          : product
      ),
    })),

  setAttributeValue: (productId, attribute) =>
    set((store) => ({
      products: store.products.map((product) =>
        product.productId === productId
          ? { ...product, attrValueId: attribute }
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
  setCustomerName: (customerName) => set({ customerName }),
  setAddress: (address) => set({ address }),
  setDistrict: (district) => set({ district }),
  setState: (state) => set({ state }),
  setPincode: (pincode) => set({ pincode }),
  setContact: (contact) => set({ contact }),
  setEmail: (email) => set({ email }),
}));

export default useUserCartStore;
