import Product from "../entities/product";

export default [
  {
    name: "Product 1",
    category: "Category A",
    specifications: "Specs for Product 1",
    imageLink: [
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543295204-2ae345412549?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579838333277-8b1b1f9d7856?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
