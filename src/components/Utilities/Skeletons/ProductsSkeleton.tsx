import { SimpleGrid } from "@chakra-ui/react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsSkeleton = () => {
  return (
    <SimpleGrid w="100%" my={4} columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {Array.from({ length: 6 }).map((_a, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsSkeleton;
