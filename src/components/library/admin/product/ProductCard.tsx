import { VStack, HStack, Icon, Box } from "@chakra-ui/react";
import { BadgeIndianRupee } from "lucide-react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => {
  return (
    <VStack
      minH={280}
      bg="primary.50"
      borderRadius={20}
      overflow="clip"
      align="start"
      border="1px solid"
      borderColor="primary.100"
      w="100%"
      boxShadow="sm"
      gap={0}
      cursor="pointer"
      onClick={onClick}
    >
      <Box flex={1} w="100%" p={4}>
        <Box
          borderRadius={10}
          w="100%"
          h="100%"
          bgImg={`${product.imageLink[0]}/500/500`}
          bgPos="center"
          bgSize="cover"
          boxShadow="lg"
        />
      </Box>

      <VStack align="start" gap={0} p={4} pt={0}>
        <RText text={product.name} weight="semibold" color="primary.700" />
        <HStack>
          <Icon as={BadgeIndianRupee} color="primary.500" boxSize={5} />
          <RText text={` ${product.price}`} color="primary.600" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
