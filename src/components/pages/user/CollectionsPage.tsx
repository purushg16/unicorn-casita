import { Box, Spinner, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import { useGetAllProducts } from "../../hooks/user/useProduct";
import ProductGrid from "../../library/user/Product/ProductGrid";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useProductQueryStore from "../../store/user/productQueryStore";
import UserProductsSkeleton from "../../Utilities/Skeletons/UserProductsSkeleton";
import CategoriesStack from "../../library/user/collections/CategoriesStack";
import EmptyCollectionsDisplay from "../../library/user/collections/EmptyCollectionsDisplay";

const CollectionsPage = () => {
  const { data, status, hasNextPage, fetchNextPage } = useGetAllProducts();
  const category = useProductQueryStore((s) => s.category);

  const fetchedOrdersLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  return (
    <VStack gap={12} px={{ base: 4, md: 8, lg: 16 }} w="100%" align="start">
      <BreadCrumbsTile
        crumbs={["home", "collections", category?.name || "All Collections"]}
      />
      <VStack align="start" gap={8} w="100%">
        <VStack align="start" gap={4} w="100%">
          <RHeading small text={category?.name || "All Collections"} />
          <CategoriesStack />
        </VStack>
        {status === "pending" && <UserProductsSkeleton />}
        {status === "success" && data.pages[0].data.docs.length === 0 && (
          <EmptyCollectionsDisplay />
        )}
        {status === "success" && data.pages[0].data.docs.length > 0 && (
          <Box w="100%">
            <InfiniteScroll
              dataLength={fetchedOrdersLength}
              hasMore={hasNextPage}
              next={() => fetchNextPage()}
              loader={<Spinner />}
            >
              {data.pages.map((page) => (
                <React.Fragment>
                  <ProductGrid products={page.data.docs} />
                </React.Fragment>
              ))}
            </InfiniteScroll>
          </Box>
        )}
      </VStack>
    </VStack>
  );
};

export default CollectionsPage;
