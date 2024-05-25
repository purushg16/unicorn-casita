import { ButtonGroup, Icon, IconButton, Input, VStack } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import { Label } from "../../../Utilities/Typography";
import useUserCartStore from "../../../store/user/useCartStore";
import { ProductAttribute } from "../../../entities/product";

const NumofProductSelector = ({
  productId,
  attribute,
  count,
  setCount,
  isAttribute,
}: {
  productId: string;
  attribute: ProductAttribute | undefined;
  count: number;
  setCount: (count: number) => void;
  isAttribute: boolean;
}) => {
  const product = useUserCartStore((s) => s.products).find((p) =>
    isAttribute
      ? p.productId === productId && p.attrValueId === attribute?._id
      : p.productId === productId
  );

  return (
    <VStack align="start" gap={4}>
      <Label text="Quanity" color="primary.700" />
      <ButtonGroup
        variant="outline"
        borderRadius={10}
        isDisabled={
          isAttribute
            ? product?.attrValueId === attribute?._id
            : product?.productId === productId
        }
      >
        <IconButton
          aria-label="minus"
          icon={<Icon as={Minus} />}
          onClick={() => setCount(count !== 1 ? count - 1 : 1)}
        />
        <Input
          isDisabled={
            isAttribute
              ? product?.attrValueId === attribute?._id
              : product?.productId === productId
          }
          value={count}
          min={1}
          type="number"
          w={70}
          onChange={(e) =>
            setCount(
              parseInt(e.target.value) > 0 ||
                Number.isNaN(parseInt(e.target.value))
                ? parseInt(e.target.value || "")
                : 1
            )
          }
        />
        <IconButton
          aria-label="minus"
          icon={<Icon as={Plus} />}
          onClick={() => setCount(count + 1)}
        />
      </ButtonGroup>
    </VStack>
  );
};

export default NumofProductSelector;
