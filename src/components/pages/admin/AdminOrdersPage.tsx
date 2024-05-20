import { Divider, HStack, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import img from "../../../assets/empty_orders.svg";
import NoDataDisplay from "../../Utilities/NoDataDisplay";
import { RHeading } from "../../Utilities/Typography";
import { useAdminGetAllOrders } from "../../hooks/admin/useAdminOrder";
import OrdersTable from "../../library/admin/order/OrdersTable";
import OrdersSkeleton from "../../Utilities/Skeletons/OrdersSkeleton";

const AdminOrdersPage = () => {
  const { data, fetchNextPage, status, hasNextPage } = useAdminGetAllOrders();

  const fetchedOrdersLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Orders" color="primary.700" small />
      </HStack>
      <Divider my={4} />

      {status === "pending" && <OrdersSkeleton />}

      {status === "success" && data.pages[0].data.docs.length === 0 && (
        <NoDataDisplay img={img} />
      )}

      {status === "success" && data.pages[0].data.docs.length > 0 && (
        <InfiniteScroll
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
      )}
    </VStack>
  );
};

export default AdminOrdersPage;
