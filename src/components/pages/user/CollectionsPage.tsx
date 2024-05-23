import { Box, Flex, Spacer, Spinner } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import CategoryFilter from "../../library/user/CategoryFilter";
import { useGetAllProducts } from "../../hooks/user/useProduct";
import ProductGrid from "../../library/user/Product/ProductGrid";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useProductQueryStore from "../../store/user/productQueryStore";
import CategoryFilterRemover from "../../library/user/Product/CategoryFilterRemover";
import UserProductsSkeleton from "../../Utilities/Skeletons/UserProductsSkeleton";

const CollectionsPage = () => {
  const { data, status, hasNextPage, fetchNextPage } = useGetAllProducts();
  const category = useProductQueryStore((s) => s.category);

  const fetchedOrdersLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  return (
    <Flex gap={12} flexDir="column">
      <BreadCrumbsTile
        crumbs={["home", "collections", category?.name || "All Collections"]}
      />
      <Flex gap={8} flexDir="column">
        <Flex align="center" gap={4}>
          <RHeading small text={category?.name || "All Collections"} />
          <CategoryFilterRemover />
          <Spacer />
          <CategoryFilter isDisabled={status !== "success"} />
        </Flex>
        {status === "pending" && <UserProductsSkeleton />}
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
      </Flex>
    </Flex>
  );
};

export default CollectionsPage;
