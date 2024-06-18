import { Box, Button, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductsSkeleton from "../../../../Utilities/Skeletons/ProductsSkeleton";
import { RHeading, RText } from "../../../../Utilities/Typography";
import ProductCard from "../../Product/ProductCard";
import { useGetAllProducts } from "../../../../hooks/user/useProduct";

const BestSellings = ({ inPage = false }: { inPage?: boolean }) => {
  const { data: products, status } = useGetAllProducts(undefined, true);

  const navigate = useNavigate();
  return (
    <VStack
      gap={8}
      px={{ base: 4, md: 8, lg: 16 }}
      py={0}
      w="100%"
      mb={inPage ? 28 : 0}
    >
      <VStack>
        <RText
          text="Top selling accessories in the market"
          color="primary.700"
        />
        <RHeading
          text="✨ Best Selling ✨"
          color="primary.700"
          small
          textTransform="uppercase"
        />
      </VStack>
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
            <ProductCard key={product._id} product={product} big />
          ))}
      </SimpleGrid>

      {!inPage && (
        <Button
          variant="primary"
          size="sm"
          rightIcon={<Icon as={ArrowUpRight} />}
          lineHeight={0}
          onClick={() => {
            navigate("bestsellings");
          }}
        >
          View All
        </Button>
      )}
    </VStack>
  );
};

export default BestSellings;
