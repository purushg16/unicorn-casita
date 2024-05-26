import { Box, HStack, Show, Td, Tr, VStack } from "@chakra-ui/react";
import { Label, RText } from "../../../Utilities/Typography";
import CartQuantityController from "./CartQuantityController";
import { StoreCartProduct } from "../../../store/user/useCartStore";

const CartItem = ({ product }: { product: StoreCartProduct }) => {
  return (
    <Tr>
      <Td>
        <HStack
          gap={4}
          justify="start"
          align="start"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            w={50}
            aspectRatio="1/1"
            bgColor="primary.200"
            borderRadius={10}
            overflow="hidden"
            bgImg={product.imageLink}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          />
          <VStack align="start" gap={1}>
            <RText
              weight="bolder"
              text={product.productName}
              color="primary.800"
            />
            <HStack align="center">
              <Label
                textTransform="capitalize"
                text={
                  product.price.toFixed(2) +
                  (product.attribute ? ` - ${product.attribute.value}` : "")
                }
                color="primary.700"
              />
            </HStack>
            <Show below="lg">
              <CartQuantityController
                md
                productId={product.productId}
                attribute={product.attrValueId}
              />
            </Show>
          </VStack>
        </HStack>
      </Td>
      <Show above="lg">
        <Td>
          <CartQuantityController
            productId={product.productId}
            attribute={product.attrValueId}
          />
        </Td>
      </Show>
      <Td isNumeric alignItems="start" fontWeight="bolder" color="primary.800">
        Rs. {(product.quantity * product.price).toFixed(2)}
      </Td>
    </Tr>
  );
};

export default CartItem;
