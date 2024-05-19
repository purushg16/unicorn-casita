import { HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { ProductAttribute } from "../../../entities/product";
import { X } from "lucide-react";
import useProductEntryStore from "../../../store/admin/productEntryStore";

const AttributePill = ({ attribute }: { attribute: ProductAttribute }) => {
  const removeAttribute = useProductEntryStore((s) => s.removeAttribute);

  return (
    <HStack borderRadius={10} gap={0} overflow="clip" bg="white" pr={2}>
      <Text color="white" p={2} px={4} bg="purple.400">
        {attribute.value}
      </Text>
      <Text color="purple.500" p={2} px={4}>
        {attribute.salesPrice}
      </Text>
      <IconButton
        _hover={{ bg: "red.300" }}
        _focus={{ bg: "red.300" }}
        _active={{ bg: "red.300" }}
        bg="red.400"
        borderRadius="100%"
        size="xs"
        icon={<Icon as={X} color="wheat" />}
        aria-label="remove-attr"
        onClick={() => removeAttribute(attribute)}
      />
    </HStack>
  );
};

export default AttributePill;
