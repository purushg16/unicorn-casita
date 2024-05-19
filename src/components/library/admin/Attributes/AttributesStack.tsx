import { HStack } from "@chakra-ui/react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import AddAttributeModal from "./AddAttributeModal";
import AttributePill from "./AttributePill";

const AttributesStack = () => {
  const attributes = useProductEntryStore((s) => s.product)?.attributes;

  return (
    <HStack
      flexWrap="wrap"
      gap={4}
      p={2}
      border="1px dashed"
      borderColor="purple.600"
      borderRadius={10}
      minW="100%"
    >
      {attributes?.map((attribute, i) => (
        <AttributePill key={i} attribute={attribute} />
      ))}

      <AddAttributeModal />
    </HStack>
  );
};

export default AttributesStack;
