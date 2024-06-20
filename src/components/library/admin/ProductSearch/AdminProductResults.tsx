import { Box, HStack, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { useNavigate } from "react-router-dom";

const AdminProductResults = ({ products }: { products: Product[] }) => {
  const navigate = useNavigate();

  return (
    <VStack
      w="100%"
      align="start"
      pos="absolute"
      bg="primary.50"
      left={0}
      gap={4}
      top="100%"
      zIndex={999}
      p={4}
      maxH="70svh"
      overflowY="scroll"
      boxShadow="2xl"
    >
      {products.map((product) => (
        <HStack
          key={product._id}
          align="start"
          onClick={(e) => {
            e.stopPropagation();
            navigate(product._id!);
          }}
          _hover={{ cursor: "pointer" }}
        >
          <Box
            w={12}
            h={12}
            bgImg={product.imageLink[0]}
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
          />
          <VStack>
            <RText weight="bold" text={product.name} />
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default AdminProductResults;
