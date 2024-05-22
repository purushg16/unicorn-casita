import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { BadgeIndianRupee } from "lucide-react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import DeleteProductButton from "../ActionButtons/DeleteProductButton";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <VStack
      minH={{ base: 200, md: 280 }}
      bg="primary.50"
      borderRadius={20}
      overflow="clip"
      align="start"
      border="1px solid"
      borderColor="primary.100"
      w="100%"
      boxShadow="sm"
      gap={{ base: 2, md: 0 }}
      onClick={() => navigate(product._id!)}
    >
      <Box flex={1} w="100%" p={2}>
        <Box
          w="100%"
          minH={{ base: 0, md: 200 }}
          borderRadius={15}
          aspectRatio={{ base: "1/1", md: "auto" }}
          bgImg={`${product.imageLink[0]}`}
          bgPos="center"
          bgSize="cover"
          boxShadow="lg"
        />
      </Box>

      <VStack align="start" gap={0} p={{ base: 3, md: 4 }} pt={0} w="100%">
        <RText
          text={product.name}
          weight="semibold"
          color="primary.700"
          textTransform="capitalize"
        />
        <HStack w="100%" justify="space-between">
          <HStack gap={{ base: 1, md: 2 }}>
            <Icon
              as={BadgeIndianRupee}
              color="primary.500"
              boxSize={{ base: 3, md: 5 }}
            />
            <RText text={` ${product.mrp}`} color="primary.600" />
          </HStack>
          <DeleteProductButton productId={product._id!} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
