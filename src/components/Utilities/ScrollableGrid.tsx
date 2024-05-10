import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

const ScrollableGrid = ({ children }: { children: ReactNode }) => {
  return (
    <SimpleGrid
      my={4}
      columns={{ base: 2, md: 3, lg: 4 }}
      spacing={4}
      w="100%"
      maxH="100%"
      overflowY="scroll"
    >
      {children}
    </SimpleGrid>
  );
};

export default ScrollableGrid;
