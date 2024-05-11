export default interface Product {
  name: string;
  category: string;
  specifications: string;
  imageLink: string[];
  price: number;
  productType?: "viewable" | "buyable";
  tags: string[];
}
