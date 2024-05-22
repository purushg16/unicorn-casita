import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { BadgePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/empty_notes.svg";
import NoDataDisplay from "../../Utilities/NoDataDisplay";
import ProductsSkeleton from "../../Utilities/Skeletons/ProductsSkeleton";
import { RHeading } from "../../Utilities/Typography";
import { useGetAllProducts } from "../../hooks/admin/useProduct";
import ProductsGrid from "../../library/admin/product/ProductsGrid";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const AdminProductsPage = () => {
  const navigate = useNavigate();
  const { data, fetchNextPage, status, hasNextPage } = useGetAllProducts();

  const fetchedOrdersLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Products" color="primary.700" small />
        <Button
          zIndex={999}
          id="new-product-btn"
          onClick={() => navigate("new")}
          size="sm"
          variant="primary"
          leftIcon={<Icon as={BadgePlus} />}
        >
          New Product
        </Button>
      </HStack>
      <Divider my={4} />
      {status === "pending" && <ProductsSkeleton />}
      {status === "success" && data.pages[0].data.docs.length === 0 && (
        <NoDataDisplay img={img} />
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
                <ProductsGrid products={page.data.docs} />
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </Box>
      )}
    </VStack>
  );
};

export default AdminProductsPage;
