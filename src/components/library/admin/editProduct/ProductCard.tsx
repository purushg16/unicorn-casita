import { VStack, HStack, Icon, Box, IconButton } from "@chakra-ui/react";
import { BadgeIndianRupee, Settings2 } from "lucide-react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
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
    >
      <Box flex={1} w="100%" p={2}>
        <Box
          w="100%"
          minH={{ base: 0, md: 200 }}
          borderRadius={15}
          aspectRatio={{ base: "1/1", md: "auto" }}
          bgImg={`${product.imageLink[0]}/500/500`}
          bgPos="center"
          bgSize="cover"
          boxShadow="lg"
        />
      </Box>

      <VStack align="start" gap={0} p={{ base: 3, md: 4 }} pt={0} w="100%">
        <RText text={product.name} weight="semibold" color="primary.700" />
        <HStack w="100%" justify="space-between">
          <HStack gap={{ base: 1, md: 2 }}>
            <Icon
              as={BadgeIndianRupee}
              color="primary.500"
              boxSize={{ base: 3, md: 5 }}
            />
            <RText text={` ${product.mrp}`} color="primary.600" />
          </HStack>
          <Link to={`${product._id}`}>
            <IconButton
              aria-label="edit-category"
              icon={<Icon as={Settings2} />}
              size={{ base: "xs", md: "sm" }}
              variant="primary"
            />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
