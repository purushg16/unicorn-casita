import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import Category from "../../../entities/category";
import { RText } from "../../../Utilities/Typography";
import useCategorySelectorStore from "../../../store/admin/categorySelectorStore";

const MinimalCategoriesGrid = ({ categories }: { categories: Category[] }) => {
  const selectedCategory = useCategorySelectorStore((s) => s.category);
  const selectCategory = useCategorySelectorStore((s) => s.selectCategory);
  const removeCategory = useCategorySelectorStore((s) => s.removeCategory);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="100%">
      {categories.map((category) => (
        <VStack
          key={category._id}
          gap={0}
          borderRadius={15}
          overflow="clip"
          onClick={() =>
            category === selectedCategory
              ? removeCategory()
              : selectCategory(category)
          }
          border={
            selectedCategory && category === selectedCategory
              ? "4px solid"
              : "none"
          }
          borderColor="primary.600"
        >
          <Box
            w="100%"
            h="100%"
            minH={150}
            bgImg={category.imageLink}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box bg="primary.100" w="100%" textAlign="center" py={2}>
            <RText
              small
              text={category.name}
              color="primary.800"
              textTransform="capitalize"
            />
          </Box>
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default MinimalCategoriesGrid;
