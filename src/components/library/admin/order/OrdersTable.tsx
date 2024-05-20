import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Tag,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorSchemeDetector from "../../../functions/colorSchemeDetector";
import currencyFormatter from "../../../functions/currencyFormatter";
import { AdminOrder } from "../../../entities/order";

const tableHeadings = [
  "order id",
  "customer",
  "order status",
  "payment status",
  "dispatch status",
  "amount",
];

const OrdersTable = ({ orders }: { orders: AdminOrder[] }) => {
  return (
    <TableContainer>
      <Table>
        <Thead bg="gray.50">
          <Tr>
            {tableHeadings.map((th) => (
              <Th key={th} isNumeric={th === "amount"}>
                {th}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr
              key={order.orderId}
              _hover={{ bg: "yellow.50" }}
              transition="all 0.7s"
            >
              <Td color="blue.400">
                <Link to={order._id!}>{order.orderId}</Link>
              </Td>
              <Td textTransform="capitalize"> {order.customerId.name} </Td>
              <Td>
                <Tag
                  colorScheme={ColorSchemeDetector(order.orderStatus)}
                  textTransform="capitalize"
                >
                  {order.orderStatus}
                </Tag>
              </Td>
              <Td>
                <Tag
                  colorScheme={ColorSchemeDetector(order.paymentStatus)}
                  textTransform="capitalize"
                >
                  {order.paymentStatus}
                </Tag>
              </Td>
              <Td>
                <Tag
                  colorScheme={
                    order.shippingStatus === "shipped" ? "green" : "yellow"
                  }
                  textTransform="capitalize"
                >
                  {order.shippingStatus}
                </Tag>
              </Td>
              <Td isNumeric>
                {currencyFormatter(parseFloat(order.totalBill.toFixed(2)))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
