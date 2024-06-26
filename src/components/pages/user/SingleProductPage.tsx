import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../../hooks/user/useProduct";
import SingleProductGridDetails from "../../library/user/SingleProduct/SingleProductGridDetails";
import SingleProductPageSkeleton from "../../Utilities/Skeletons/SingleProductPageSkeleton";

const SingleProductPage = () => {
  const productId = useParams().id;
  const {
    data: product,
    status,
    fetchStatus,
  } = useGetSingleProduct(productId!, !!productId);

  return (
    <Flex gap={8} flexDir="column">
      {(status === "pending" || fetchStatus === "fetching") && (
        <SingleProductPageSkeleton />
      )}
      {status === "success" && fetchStatus === "idle" && (
        <SingleProductGridDetails product={product} />
      )}

      {/* <VStack gap={8} align="start" my={16}>
        <RHeading small text="Related Products" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} w="100%" spacing={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </VStack> */}
    </Flex>
  );
};

export default SingleProductPage;
