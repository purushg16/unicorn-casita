import { VStack, HStack, Icon, Box, IconButton } from "@chakra-ui/react";
import { BadgeIndianRupee, Settings2 } from "lucide-react";
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
    >
      <Box flex={1} w="100%" p={4}>
        <Box
          borderRadius={10}
          w="100%"
          minH={200}
          bgImg={`${product.imageLink[0]}/500/500`}
          bgPos="center"
          bgSize="cover"
          boxShadow="lg"
        />
      </Box>

      <VStack align="start" gap={0} p={4} pt={0} w="100%">
        <RText text={product.name} weight="semibold" color="primary.700" />
        <HStack w="100%" justify="space-between">
          <HStack>
            <Icon as={BadgeIndianRupee} color="primary.500" boxSize={5} />
            <RText text={` ${product.price}`} color="primary.600" />
          </HStack>
          <IconButton
            onClick={onClick}
            aria-label="edit-category"
            icon={<Icon as={Settings2} />}
            size="sm"
            colorScheme="primary"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
