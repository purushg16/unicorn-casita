import {
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartQuantityController = ({ md = false }: { md?: boolean }) => {
  return (
    <VStack my={md ? 4 : 0}>
      <ButtonGroup variant="outline" isAttached>
        <IconButton
          icon={<Icon as={Minus} />}
          aria-label="minus"
          size={{ base: "sm", md: "md" }}
        />
        <Input
          size={{ base: "sm", md: "md" }}
          min={0}
          maxH="100%"
          w={50}
          type="number"
          borderRadius={0}
          borderRight="none"
          _hover={{
            outline: "none",
            borderColor: "primary.300",
            boxShadow: "none",
          }}
          _active={{
            outline: "none",
            borderColor: "primary.300",

            boxShadow: "none",
          }}
          _focus={{
            outline: "none",
            borderColor: "primary.300",
            boxShadow: "none",
          }}
        />
        <IconButton
          icon={<Icon as={Plus} />}
          aria-label="minus"
          size={{ base: "sm", md: "md" }}
        />
      </ButtonGroup>
      <Button
        variant="text"
        colorScheme="red"
        size="xs"
        fontWeight="normal"
        leftIcon={<Icon as={Trash2} />}
      >
        Remove
      </Button>
    </VStack>
  );
};

export default CartQuantityController;
