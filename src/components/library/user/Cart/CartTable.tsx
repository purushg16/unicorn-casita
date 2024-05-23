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
import useUserCartStore from "../../../store/user/useCartStore";

const CartTable = () => {
  const products = useUserCartStore((s) => s.products);

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
          {products.map((product) => (
            <CartItem key={product.productId} product={product} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
