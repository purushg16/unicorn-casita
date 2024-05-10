import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

const AdminGridCover = ({ children }: { children: ReactNode }) => {
  return (
    <SimpleGrid w="100%" my={4} columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
      {children}
    </SimpleGrid>
  );
};

export default AdminGridCover;
