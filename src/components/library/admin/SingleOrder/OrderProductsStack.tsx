import { VStack, HStack, Image } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";

const OrderProductsStack = ({ order }: { order: Order }) => {
  return (
    <VStack align="start" w="100%" gap={4}>
      <Label weight="semibold" text="Purchased Item(s)" color="primary.500" />
      {order.product.map((prod, i) => {
        const isAttribute = prod.productId.isAttribute;
        const attributeValue = isAttribute
          ? prod.productId.attributes.find(
              (attr) => attr._id === prod.attrValueId
            )?.value || ""
          : "";
        return (
          <HStack key={i} w="100%" justify="space-between">
            <HStack>
              <Image
                src={prod.productId.imageLink[0]}
                w={10}
                aspectRatio="1/1"
                borderRadius="xl"
              />
              <VStack gap={0} align="start">
                <Label
                  textTransform="capitalize"
                  text={prod.productId.name + " (x" + prod.quantity + ")"}
                  weight="bold"
                />
                <HStack gap={1}>
                  {isAttribute && (
                    <>
                      <Label text={attributeValue} textTransform="capitalize" />
                      <Label text="-" />
                    </>
                  )}
                  <Label
                    text={
                      isAttribute
                        ? prod.productId.attributes
                            .find((attr) => attr._id === prod.attrValueId)
                            ?.salesPrice.toFixed(2) || ""
                        : prod.productId.salesPrice.toFixed(2)
                    }
                  />
                </HStack>
              </VStack>
            </HStack>
            {isAttribute && (
              <Label
                weight="bolder"
                text={
                  (
                    (prod.productId.attributes.find(
                      (attr) => attr._id === prod.attrValueId
                    )?.salesPrice || 0) * prod.quantity
                  ).toFixed(2) || ""
                }
              />
            )}
            {!isAttribute && (
              <Label
                weight="bolder"
                text={(prod.productId.salesPrice * prod.quantity).toFixed(2)}
              />
            )}
          </HStack>
        );
      })}
    </VStack>
  );
};

export default OrderProductsStack;
