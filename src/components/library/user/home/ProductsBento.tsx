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
  Show,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Label, RHeading, RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductsBento = ({ product }: { product: Product }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={4}
      w="100%"
      px={{ base: 4, md: 8, lg: 16 }}
    >
      <VStack align="start" display={{ base: "none", md: "flex" }}>
        <Label
          text={`On Today's "Hall of fame" we bring you,`}
          color="primary.700"
        />
        <RHeading
          text={product.name}
          textTransform="capitalize"
          color="primary.800"
        />
        <RText
          small
          color="primary.800"
          text={`Starts from ${
            product.isAttribute
              ? product.attributes
                  .map((attr) => attr.salesPrice)
                  .sort()[0]
                  .toFixed(2)
              : product.salesPrice.toFixed(2)
          }`}
        />
        <RText text={product.description} color="primary.700" />
      </VStack>

      <Grid
        w="100%"
        mx="auto"
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
        <GridItem
          p={2}
          px={3}
          bg="primary.100"
          area={"header"}
          borderRadius="lg"
        >
          <Tag bg="none" colorScheme="primary">
            <TagLeftIcon>
              <Icon as={Sparkles} />
            </TagLeftIcon>
            <TagLabel fontWeight="bold">Today's top pick</TagLabel>
          </Tag>
        </GridItem>

        <GridItem p={3} bg="primary.100" area={"main"} borderRadius="lg">
          <VStack h="100%">
            <HStack maxW="100%" overflowX="scroll" py={4}>
              {product.imageLink.map((img, i) => (
                <Box
                  key={i}
                  minW={220}
                  minH={220}
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
            <HStack
              w="100%"
              justify={{ base: "center", md: "space-between" }}
              p={4}
            >
              <VStack gap={0} align={{ base: "center", md: "start" }}>
                <RHeading
                  small
                  textTransform="capitalize"
                  text={product.name}
                  weight="bold"
                  color="primary.800"
                />
                <FormLabel fontSize="xs" m={0} color="primary.700">
                  Make it yours now!
                </FormLabel>
                <Show below="md">
                  <Link
                    to={`collections/${product._id}`}
                    style={{ marginTop: 8 }}
                  >
                    <Button
                      size="sm"
                      variant="primary"
                      rightIcon={<Icon as={ArrowUpRight} />}
                    >
                      View Collection
                    </Button>
                  </Link>
                </Show>
              </VStack>
              <Show above="md">
                <Link to={`collections/${product._id}`}>
                  <Button
                    size="sm"
                    variant="primary"
                    rightIcon={<Icon as={ArrowUpRight} />}
                  >
                    View Collection
                  </Button>
                </Link>
              </Show>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </SimpleGrid>
  );
};

export default ProductsBento;
