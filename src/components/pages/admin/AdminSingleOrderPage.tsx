import { Divider, HStack, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAdminGetSingleOrder } from "../../hooks/admin/useOrder";
import SingleOrderStatusStack from "../../library/admin/SingleOrder/SingleOrderStatusStack";
import SingleOrderHeading from "../../library/admin/SingleOrder/SingleOrderHeading";
import OrderSummary from "../../library/admin/SingleOrder/OrderSummary";
import CustomerDetailsHug from "../../library/admin/SingleOrder/CustomerDetailsHug";
import AdminSingleOrderSkeletonPage from "../../Utilities/Skeletons/AdminSingleOrderSkeletonPage";
const AdminSingleOrderPage = () => {
  const orderId = useParams().orderId;
  const {
    data: order,
    status,
    isFetching,
  } = useAdminGetSingleOrder(orderId!, !!orderId);

  if (status === "pending" || isFetching)
    return <AdminSingleOrderSkeletonPage />;
  if (status === "success" && !isFetching)
    return (
      <VStack gap={4} align="start">
        <VStack w="100%" align="start" gap={8}>
          <SingleOrderHeading order={order} />
          <SingleOrderStatusStack order={order} />
          <Divider borderColor="primary.200" />
          <HStack
            flexDir={{ base: "column", md: "row" }}
            w="100%"
            align="start"
            flexWrap="wrap"
            gap={{ base: 8, md: 4 }}
          >
            <OrderSummary order={order} />
            <CustomerDetailsHug order={order} />
          </HStack>
        </VStack>
      </VStack>
    );
};

export default AdminSingleOrderPage;
