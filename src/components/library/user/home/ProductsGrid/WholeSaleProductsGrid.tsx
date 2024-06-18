import { VStack, SimpleGrid, Button, Icon, Box } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductsSkeleton from "../../../../Utilities/Skeletons/ProductsSkeleton";
import { RHeading } from "../../../../Utilities/Typography";
import ProductCard from "../../Product/ProductCard";
import { useGetAllProducts } from "../../../../hooks/user/useProduct";

const WholeSaleProductsGrid = () => {
  const { data: products, status } = useGetAllProducts(undefined, false, true);
  if (products?.pages[0].data.docs.length === 0) return null;
  return (
    <VStack gap={8} px={{ base: 4, md: 8, lg: 16 }} py={0} w="100%">
      <RHeading
        text="WholeSale Products"
        color="primary.700"
        small
        textTransform="uppercase"
      />
      {status === "pending" && (
        <Box w={{ base: "90%", md: "80%" }}>
          <ProductsSkeleton />
        </Box>
      )}

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacing={{ base: 4, md: 8 }}
        w="90%"
      >
        {status === "success" &&
          products.pages[0].data.docs.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </SimpleGrid>

      <Link to="collections">
        <Button
          variant="primary"
          size="sm"
          rightIcon={<Icon as={ArrowUpRight} />}
          lineHeight={0}
        >
          View All
        </Button>
      </Link>
    </VStack>
  );
};

export default WholeSaleProductsGrid;
