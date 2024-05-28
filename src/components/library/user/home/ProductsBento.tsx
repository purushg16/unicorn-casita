import {
  Grid,
  GridItem,
  Tag,
  Icon,
  TagLabel,
  TagLeftIcon,
  HStack,
  Button,
  FormLabel,
  VStack,
  Box,
} from "@chakra-ui/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { RHeading } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductsBento = ({ product }: { product: Product }) => {
  return (
    <Grid
      mx={{ base: 4, md: 8, lg: 16 }}
      templateAreas={`"header header"
                    "main main"`}
      gridTemplateRows={"max-content max-content"}
      gridTemplateColumns={{
        base: "150px 1fr",
        md: "150px 1fr",
      }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem p={2} px={3} bg="primary.100" area={"header"} borderRadius="lg">
        <Tag bg="none" colorScheme="primary">
          <TagLeftIcon>
            <Icon as={Sparkles} />
          </TagLeftIcon>
          <TagLabel fontWeight="bold">Top pick today</TagLabel>
        </Tag>
      </GridItem>

      <GridItem p={3} bg="primary.100" area={"main"} borderRadius="lg">
        <VStack h="100%">
          <HStack maxW="100%" overflowX="scroll" py={4}>
            {product.imageLink.map((img, i) => (
              <Box
                key={i}
                minW={{ base: 150, md: 180, lg: 220 }}
                minH={{ base: 150, md: 180, lg: 220 }}
                bg="purple"
                bgImg={img}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                borderRadius="xl"
                boxShadow="base"
              />
            ))}
          </HStack>
          <HStack w="100%" justify="space-between" px={4}>
            <VStack gap={0} align="start">
              <RHeading
                small
                text={product.name}
                weight="bold"
                color="primary.800"
              />
              <FormLabel fontSize="xs" m={0} color="primary.700">
                Make it yours now!
              </FormLabel>
            </VStack>
            <Link to={`collections/${product._id}`}>
              <Button
                size={{ base: "xs", md: "sm" }}
                variant="primary"
                rightIcon={<Icon as={ArrowUpRight} />}
              >
                View Collection
              </Button>
            </Link>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default ProductsBento;
