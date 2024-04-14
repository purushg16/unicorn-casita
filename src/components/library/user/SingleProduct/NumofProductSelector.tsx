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

const NumofProductSelector = () => {
  return (
    <VStack align="start" gap={4}>
      <Label text="Make it yours, now!" />
      <HStack gap={4} w="100%">
        <ButtonGroup variant="outline" borderRadius={10}>
          <IconButton aria-label="minus" icon={<Icon as={Minus} />} />
          <Input value="1" type="number" w={70} />
          <IconButton aria-label="minus" icon={<Icon as={Plus} />} />
        </ButtonGroup>
        <Button variant="primary" size={{ base: "sm", md: "md" }}>
          Add to Cart
        </Button>
      </HStack>
    </VStack>
  );
};

export default NumofProductSelector;
