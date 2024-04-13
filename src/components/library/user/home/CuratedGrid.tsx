import { SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    label: "Best Sellers",
    img: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "For Woman",
    img: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "For Kids",
    img: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "For Grandies",
    img: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CuratedGrid = () => {
  return (
    <VStack align="start" gap={4}>
      <RHeading small text="Curated Picks" />
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 4 }}
        spacing={8}
        w="100%"
        px={4}
      >
        {categories.map((cat) => (
          <CategoryCard label={cat.label} img={cat.img} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default CuratedGrid;
