import { ButtonGroup, Icon, IconButton, Input, VStack } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import { Label } from "../../../Utilities/Typography";
import useUserCartStore from "../../../store/user/useCartStore";

const NumofProductSelector = ({
  productId,
  attribute,
  count,
  setCount,
}: {
  productId: string;
  attribute: string;
  count: number;
  setCount: (count: number) => void;
}) => {
  const product = useUserCartStore((s) => s.products).find(
    (p) => p.productId === productId && p.attrValue === attribute
  );

  return (
    <VStack align="start" gap={4}>
      <Label text="Make it yours, now!" color="primary.700" />
      <ButtonGroup
        variant="outline"
        borderRadius={10}
        isDisabled={product?.attrValue === attribute}
      >
        <IconButton
          aria-label="minus"
          icon={<Icon as={Minus} />}
          onClick={() => setCount(count !== 1 ? count - 1 : 1)}
        />
        <Input
          isDisabled={product?.attrValue === attribute}
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
