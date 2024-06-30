import { Box, Divider, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import img from "../../../assets/empty_orders.svg";
import NoDataDisplay from "../../Utilities/NoDataDisplay";
import { RHeading } from "../../Utilities/Typography";
import { useAdminGetAllOrders } from "../../hooks/admin/useOrder";
import OrdersTable from "../../library/admin/order/OrdersTable";
import AdminOrdersPageSkeleton from "../../Utilities/Skeletons/AdminOrdersPageSkeleton";
import OrderTabStack from "../../library/admin/order/OrderTabStack";

const AdminOrdersPage = () => {
  const { data, fetchNextPage, status, hasNextPage, fetchStatus } =
    useAdminGetAllOrders();

  const fetchedOrdersLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  const nonEmptyData =
    status === "success" &&
    fetchStatus === "idle" &&
    data.pages[0].data.docs.length > 0;

  return (
    <VStack align="start" w="100%" h="100%">
      <VStack align="start" w="100%" justify="space-between" gap={8}>
        <RHeading text="Your Orders" color="primary.700" small />
        <OrderTabStack />
      </VStack>
      <Divider my={4} />

      {(status === "pending" || fetchStatus === "fetching") && (
        <AdminOrdersPageSkeleton />
      )}

      {status === "success" &&
        fetchStatus === "idle" &&
        data.pages[0].data.docs.length === 0 && (
          <NoDataDisplay img={img} title="Orders" />
        )}

      {nonEmptyData && (
        <Box w="100%">
          <InfiniteScroll
            style={{ width: "100%" }}
            dataLength={fetchedOrdersLength}
            hasMore={hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
          >
            {data.pages.map((page) => (
              <React.Fragment>
                <OrdersTable orders={page.data.docs} />
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </Box>
      )}
    </VStack>
  );
};

export default AdminOrdersPage;
