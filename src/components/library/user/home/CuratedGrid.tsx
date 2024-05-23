import { SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import CategoryCard from "./CategoryCard";
import useGetAllCategories from "../../../hooks/user/useCategories";

const CuratedGrid = () => {
  const { data: categories, status } = useGetAllCategories();

  return (
    <VStack
      align="start"
      gap={8}
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 12, md: 12, lg: 20 }}
    >
      <RHeading small text="Curated Picks" />
      <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={8} w="100%">
        {status === "success" &&
          categories.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))}
      </SimpleGrid>
    </VStack>
  );
};

export default CuratedGrid;
