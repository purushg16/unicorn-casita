export default interface Product {
  _id?: string;
  name: string;
  categoryId: string;
  description: string;
  isAttribute: boolean;
  attributeName: string;
  attributes: ProductAttribute[];
  specifications: string;
  imageLink: string[];
  mrp: number;
  salesPrice: number;
  stock: "in-stock" | "sold-out";
}

export interface ProductAttribute {
  value: string;
  salesPrice: number;
}
