import Product from "../entities/product";

export default [
  {
    name: "Product 1",
    category: "Category A",
    specifications: "Specs for Product 1",
    imageLink: [
      "https://picsum.photos",
      "https://picsum.photos",
      "https://picsum.photos",
    ],
    price: 99.99,
    productType: "buyable",
  },
  {
    name: "Product 2",
    category: "Category B",
    specifications: "Specs for Product 2",
    imageLink: [
      "https://picsum.photos",
      "https://picsum.photos",
      "https://picsum.photos",
    ],
    price: 49.99,
    productType: "viewable",
  },
  {
    name: "Product 3",
    category: "Category A",
    specifications: "Specs for Product 3",
    imageLink: ["https://picsum.photos"],
    price: 149.99,
    productType: "buyable",
  },
  {
    name: "Product 4",
    category: "Category X",
    specifications: "Specs for Product 3",
    imageLink: ["https://picsum.photos"],
    price: 149.99,
    productType: "buyable",
  },
  {
    name: "Product 5",
    category: "Category YY",
    specifications: "Specs for Product 3",
    imageLink: ["https://picsum.photos"],
    price: 149.99,
    productType: "buyable",
  },
  {
    name: "Product 6",
    category: "Category P",
    specifications: "Specs for Product 3",
    imageLink: ["https://picsum.photos"],
    price: 149.99,
    productType: "buyable",
  },
] as Product[];
