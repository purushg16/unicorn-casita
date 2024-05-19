export default interface Product {
  _id?: string;
  name: string;
  category: string;
  specifications: string;
  imageLink: string[];
  price: number;
  productType?: "viewable" | "buyable";
  tags: string[];
}
