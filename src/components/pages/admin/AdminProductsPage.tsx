import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { RHeading, RText } from "../../Utilities/Typography";
import { BadgeIndianRupee, BadgePlus } from "lucide-react";
import ScrollableGrid from "../../Utilities/ScrollableGrid";
import mockProducts from "../../mocks/mockProducts";

const AdminProductsPage = () => {
  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Products" color="primary.700" small />
        <Button
          size="sm"
          colorScheme="primary"
          leftIcon={<Icon as={BadgePlus} />}
        >
          New Product
        </Button>
      </HStack>
      <Divider my={4} />
      <ScrollableGrid>
        {mockProducts.map((product, i) => (
          <VStack
            key={i}
            minH={300}
            bg="primary.50"
            borderRadius={10}
            overflow="clip"
            align="start"
            border="1px solid"
            borderColor="primary.100"
            w="100%"
            boxShadow="md"
          >
            <Flex
              w="100%"
              maxW="100%"
              overflowX="scroll"
              flex={1}
              borderBottom="1px solid"
              borderColor="primary.300"
              gap={1}
            >
              {/* {product.imageLink.map((img, i) => ( */}
              <Box
                w="100%"
                bgImg={`${product.imageLink[0]}/id/${i + 1}/500/500`}
                key={i}
                bgPos="center"
                bgSize="cover"
              />
              {/* ))} */}
            </Flex>
            <VStack align="start" gap={0} p={4}>
              <RText
                text={product.name}
                weight="semibold"
                color="primary.700"
              />
              <HStack>
                <Icon as={BadgeIndianRupee} color="primary.600" />
                <RText text={` ${product.price}`} color="primary.600" />
              </HStack>
            </VStack>
          </VStack>
        ))}
      </ScrollableGrid>
    </VStack>
  );
};

export default AdminProductsPage;
