import { VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { MinusCircle } from "lucide-react";
import useProductEntryStore from "../../../store/admin/productEntryStore";
import LabelledInput from "../../../Utilities/LabelledInput";

const SpecificationsField = () => {
  const specifications = useProductEntryStore((s) => s.product)?.specifications;
  const setSpecifications = useProductEntryStore((s) => s.setSpecifications);
  const removeSpecifications = useProductEntryStore(
    (s) => s.removeSpecifications
  );

  return (
    <VStack w="100%" gap={4}>
      {specifications?.map((specification, i) => (
        <HStack key={i} gap={4} w="100%" align="end">
          <LabelledInput
            value={specification.key}
            onTextChange={(value) =>
              setSpecifications(specification.id, value, specification.value)
            }
            label="Key"
          />
          <LabelledInput
            value={specification.value}
            onTextChange={(value) =>
              setSpecifications(specification.id, specification.key, value)
            }
            label="Value"
          />
          <IconButton
            mb={1}
            bg="red.100"
            _hover={{ bg: "red.200" }}
            _active={{ bg: "red.200" }}
            _focus={{ bg: "red.200" }}
            aria-label="remove-spec"
            icon={<Icon as={MinusCircle} />}
            size="sm"
            onClick={() => removeSpecifications(specification.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default SpecificationsField;
