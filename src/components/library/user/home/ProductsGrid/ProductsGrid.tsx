import { Box, Button, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductsSkeleton from "../../../../Utilities/Skeletons/ProductsSkeleton";
import { RHeading } from "../../../../Utilities/Typography";
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
    <VStack gap={8} py={0} w="100%">
      <RHeading
        text={category.name}
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
        spacingX={{ base: 4, md: 8 }}
        spacingY={12}
        w="90%"
      >
        {status === "success" &&
          products.pages[0].data.docs
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </SimpleGrid>

      <Button
        variant="primary"
        size="sm"
        rightIcon={<Icon as={ArrowUpRight} />}
        lineHeight={0}
        onClick={() => {
          navigate("collections");
          setCategory(category);
        }}
      >
        View All
      </Button>
    </VStack>
  );
};

export default ProductsGrid;
