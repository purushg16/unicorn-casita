import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Product from "../../../entities/product";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacingX={4} spacingY={8}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
