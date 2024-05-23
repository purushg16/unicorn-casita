import { SimpleGrid } from "@chakra-ui/react";
import UserProductSkeleton from "./UserProductSkeleton";

const UserProductsSkeleton = () => {
  return (
    <SimpleGrid w="100%" my={4} columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {Array.from({ length: 4 }).map((_a, i) => (
        <UserProductSkeleton key={i} />
      ))}
    </SimpleGrid>
  );
};

export default UserProductsSkeleton;
