import {
  Button,
  ButtonGroup,
  HStack,
  Icon,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import { Label } from "../../../Utilities/Typography";
import { useState } from "react";

const NumofProductSelector = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <VStack align="start" gap={4}>
      <Label text="Make it yours, now!" color="primary.700" />
      <HStack gap={4} w="100%">
        <ButtonGroup variant="outline" borderRadius={10}>
          <IconButton
            aria-label="minus"
            icon={<Icon as={Minus} />}
            onClick={() => setCount(count !== 1 ? count - 1 : 1)}
          />
          <Input
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
        <Button variant="primary" size={{ base: "sm", md: "md" }}>
          Add to Cart
        </Button>
      </HStack>
    </VStack>
  );
};

export default NumofProductSelector;
