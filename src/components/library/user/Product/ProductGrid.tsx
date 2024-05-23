import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Product from "../../../entities/product";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
