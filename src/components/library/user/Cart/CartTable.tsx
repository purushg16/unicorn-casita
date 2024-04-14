import {
  Checkbox,
  Show,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartTable = () => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <TableCaption>
          Missed something?
          <Link to="/collections" style={{ color: "purple", margin: "4px" }}>
            Continue Shopping!
          </Link>
        </TableCaption>
        <Thead>
          <Tr>
            <Show above="lg">
              <Th>
                <Checkbox colorScheme="primary" />
              </Th>
            </Show>
            <Th> PRODUCT </Th>
            <Show above="lg">
              <Th textAlign="center"> quantity</Th>
            </Show>
            <Th isNumeric> price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <CartItem />
          <CartItem />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
