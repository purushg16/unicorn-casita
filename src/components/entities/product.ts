import Category from "./category";
import Specification from "./specification";

export default interface Product {
  _id?: string;
  name: string;
  categoryId: string;
  description: string;
  isAttribute: boolean;
  attributeName: string;
  attributes: ProductAttribute[];
  specifications: Specification[];
  imageLink: string[];
  mrp: number;
  salesPrice: number;
  wholesale: boolean;
  bestSeller: boolean;
  stock: "in-stock" | "sold-out";
}

export interface ProductResponse extends Product {
  category: Category;
}

export interface ProductAttribute {
  _id?: string;
  value: string;
  salesPrice: number;
}
