import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Order } from "../../../entities/order";
import currencyFormatter from "../../../functions/currencyFormatter";
import OrderPaymentStatusTag from "./OrderPaymentStatusTag";
import OrderShippingStatusTag from "./OrderShippingStatusTag";
import OrderStatusTag from "./OrderStatusTag";

const tableHeadings = [
  "order id",
  "customer",
  "order status",
  "payment status",
  "dispatch status",
  "amount",
];

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  return (
    <TableContainer
      w="100%"
      border="1px solid"
      borderRadius="xl"
      borderColor="primary.200"
    >
      <Table w="100%">
        <Thead bg="primary.200">
          <Tr>
            {tableHeadings.map((th) => (
              <Th key={th} isNumeric={th === "amount"} color="primary.800">
                {th}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody maxH={500} overflowY="scroll">
          {orders.map((order) => (
            <Tr
              key={order.orderId}
              _hover={{ bg: "primary.100" }}
              transition="all 0.7s"
            >
              <Td
                color="primary.800"
                textDecor="underline"
                py={{ base: 4, md: 8 }}
              >
                <Link to={order._id!}>{order.orderId}</Link>
              </Td>
              <Td textTransform="capitalize"> {order.customerName} </Td>
              <Td>
                <OrderStatusTag order={order} />
              </Td>
              <Td>
                <OrderPaymentStatusTag order={order} />
              </Td>
              <Td>
                <OrderShippingStatusTag order={order} />
              </Td>
              <Td isNumeric>
                {`Rs.` +
                  currencyFormatter(parseFloat(order.totalBill.toFixed(2)))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
