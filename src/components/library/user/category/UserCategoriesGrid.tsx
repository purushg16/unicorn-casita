import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "../home/CategoryCard";
import Category from "../../../entities/category";

const UserCategoriesGrid = ({ categories }: { categories: Category[] }) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </SimpleGrid>
  );
};

export default UserCategoriesGrid;
