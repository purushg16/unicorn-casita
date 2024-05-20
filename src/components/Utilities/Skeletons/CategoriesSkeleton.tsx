import { SimpleGrid } from "@chakra-ui/react";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const CategoriesSkeleton = () => {
  return (
    <SimpleGrid w="100%" my={4} columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {Array.from({ length: 6 }).map((_a, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </SimpleGrid>
  );
};

export default CategoriesSkeleton;
