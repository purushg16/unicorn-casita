import { Box, Button, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductsSkeleton from "../../../../Utilities/Skeletons/ProductsSkeleton";
import { RHeading, RText } from "../../../../Utilities/Typography";
import Category from "../../../../entities/category";
import { useGetAllProducts } from "../../../../hooks/user/useProduct";
import ProductCard from "../../Product/ProductCard";
import useProductQueryStore from "../../../../store/user/productQueryStore";

const ProductsGrid = ({ category }: { category: Category }) => {
  const navigate = useNavigate();
  const setCategory = useProductQueryStore((s) => s.setCategory);

  const { data: products, status } = useGetAllProducts(
    category._id,
    undefined,
    false
  );

  if (!category || products?.pages[0].data.docs.length === 0) return null;
  return (
    <VStack gap={8} px={{ base: 2, md: 4, lg: 8 }} w="100%">
      <VStack>
        {category.pickup && (
          <RText text={category.pickup} textTransform="uppercase" />
        )}
        <RHeading text={category.name} small textTransform="uppercase" />
      </VStack>
      {status === "pending" && (
        <Box w={{ base: "90%", md: "80%" }}>
          <ProductsSkeleton />
        </Box>
      )}

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacingX={1}
        spacingY={4}
        w="100%"
      >
        {status === "success" &&
          products.pages[0].data.docs
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </SimpleGrid>

      <Button
        bg="#FCECEF"
        size="sm"
        rightIcon={<Icon as={ArrowUpRight} />}
        lineHeight={0}
        onClick={() => {
          navigate("collections");
          setCategory(category);
        }}
        _hover={{ opacity: 0.7 }}
      >
        View All
      </Button>
    </VStack>
  );
};

export default ProductsGrid;
